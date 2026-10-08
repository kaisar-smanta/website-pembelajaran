/**
 * Logika pencarian murni (tanpa DOM) yang dipakai halaman `/cari`.
 *
 * Fungsi di sini hanya mengolah string sehingga dapat diuji lewat
 * `tests/search.mjs`. Perekat ke DOM (mengambil `/search.json`, merender
 * hasil, dan saringan) tetap berada di `src/pages/cari.astro`.
 */

/** Satu entri pada indeks `search.json`. */
export interface SearchItem {
  title: string;
  summary: string;
  url: string;
  type: string;
  grade?: string;
  element?: string;
  keywords: string;
  text: string;
}

/** Gaya inline untuk `<mark>` agar tidak bergantung pada gaya ber-scope Astro. */
export const HIGHLIGHT_STYLE =
  'background:var(--highlight);color:inherit;padding:0 0.1em;border-radius:3px';

/** Menormalkan teks untuk pencarian: huruf kecil dan tanpa diakritik. */
export function normalizeSearch(value: string): string {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function escapeHtml(text: string): string {
  return text.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c] as string));
}

/**
 * Memecah kueri menjadi istilah ternormalisasi. Kueri multi-kata dianggap
 * gabungan AND: setiap istilah harus cocok di suatu tempat agar entri masuk.
 */
function queryTerms(query: string): string[] {
  return normalizeSearch(query).split(/\s+/).filter(Boolean);
}

/** Teks ternormalisasi beserta peta indeks balik ke teks asal (per code unit). */
interface IndexedText {
  norm: string;
  map: number[];
}

/**
 * Menormalkan `text` sambil merekam peta indeks dari bentuk ternormalisasi ke
 * teks asal. Peta ini menjaga kecocokan tanpa diakritik tetap dapat dipotong
 * pada posisi aslinya.
 */
function indexNormalized(text: string): IndexedText {
  let norm = '';
  const map: number[] = [];
  for (let i = 0; i < text.length; ) {
    const code = text.codePointAt(i) as number;
    const char = String.fromCodePoint(code);
    const unit = char.length;
    const piece = normalizeSearch(char);
    for (let k = 0; k < piece.length; k++) {
      norm += piece[k];
      map.push(i);
    }
    i += unit;
  }
  return { norm, map };
}

/** Semua rentang [awal, akhir) kecocokan `term` di dalam teks asal. */
function findRanges(indexed: IndexedText, text: string, term: string): [number, number][] {
  const ranges: [number, number][] = [];
  if (!term) return ranges;
  let from = 0;
  let at = indexed.norm.indexOf(term, from);
  while (at >= 0) {
    const after = at + term.length;
    const start = indexed.map[at];
    const end = after < indexed.map.length ? indexed.map[after] : text.length;
    ranges.push([start, end]);
    from = after;
    at = indexed.norm.indexOf(term, from);
  }
  return ranges;
}

/**
 * Skor kecocokan sebuah entri terhadap kata kunci. Kueri dipecah menjadi
 * istilah-istilah; setiap istilah harus cocok (sifat AND) dan bobotnya
 * menurun dari judul persis, judul, kata kunci, ringkasan, hingga isi.
 * Kata kunci kosong dianggap tidak relevan (skor 0).
 */
export function scoreItem(item: SearchItem, query: string): number {
  const terms = queryTerms(query);
  if (terms.length === 0) return 0;
  const title = normalizeSearch(item.title);
  const keywords = normalizeSearch(item.keywords);
  const summary = normalizeSearch(item.summary);
  const text = normalizeSearch(item.text);
  let total = 0;
  for (const term of terms) {
    let s = 0;
    if (title === term) s += 100;
    if (title.includes(term)) s += 50;
    if (keywords.includes(term)) s += 25;
    if (summary.includes(term)) s += 12;
    if (text.includes(term)) s += 6;
    if (s === 0) return 0;
    total += s;
  }
  return total;
}

/**
 * Menyorot setiap istilah kueri di dalam teks sebagai HTML yang aman. Teks
 * di-escape lebih dulu, lalu seluruh istilah (baik literal maupun lewat bentuk
 * ternormalisasi agar diakritik tetap ditemukan) dibungkus `<mark>`.
 */
export function highlight(text: string, query: string): string {
  const safe = escapeHtml(text);
  const terms = queryTerms(query);
  if (terms.length === 0) return safe;
  const indexed = indexNormalized(safe);
  const ranges: [number, number][] = [];
  for (const term of terms) ranges.push(...findRanges(indexed, safe, term));
  if (ranges.length === 0) return safe;
  ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged: [number, number][] = [];
  for (const range of ranges) {
    const last = merged[merged.length - 1];
    if (last && range[0] <= last[1]) {
      if (range[1] > last[1]) last[1] = range[1];
    } else {
      merged.push([range[0], range[1]]);
    }
  }
  let html = '';
  let cursor = 0;
  for (const [start, end] of merged) {
    html += safe.slice(cursor, start);
    html += `<mark style="${HIGHLIGHT_STYLE}">${safe.slice(start, end)}</mark>`;
    cursor = end;
  }
  html += safe.slice(cursor);
  return html;
}

/**
 * Membangun cuplikan: ringkasan bila sudah memuat seluruh kata kunci, atau
 * potongan isi di sekitar istilah pertama yang cocok (bukan hanya frasa
 * lengkapnya). Selalu mengembalikan HTML yang sudah disorot dan aman.
 */
export function buildSnippet(item: SearchItem, query: string): string {
  const terms = queryTerms(query);
  if (terms.length === 0) return highlight(item.summary, query);
  const summary = normalizeSearch(item.summary);
  if (terms.every((term) => summary.includes(term))) return highlight(item.summary, query);

  const haystack = item.text || '';
  const indexed = indexNormalized(haystack);
  let anchor = terms.find((term) => !summary.includes(term) && indexed.norm.includes(term));
  if (!anchor) anchor = terms.find((term) => indexed.norm.includes(term));
  if (!anchor) return highlight(item.summary, query);
  const idx = indexed.map[indexed.norm.indexOf(anchor)];
  const start = Math.max(0, idx - 50);
  const chunk = haystack.slice(start, start + 150).trim();
  return (start > 0 ? '… ' : '') + highlight(chunk, query) + ' …';
}

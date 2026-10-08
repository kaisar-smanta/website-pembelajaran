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

/** Panjang istilah minimum yang boleh ditoleransi salah ketik. */
const MIN_FUZZY = 4;

/** Batas jumlah kata kosakata yang dipakai untuk saran koreksi. */
const MAX_VOCAB = 6000;

/** Batas jarak edit berdasarkan panjang istilah (dibuat tetap agar murah). */
function fuzzyLimit(length: number): number {
  return length <= 4 ? 1 : 2;
}

/** Memecah teks ternormalisasi menjadi token alfanumerik. */
function tokenize(text: string): string[] {
  return text.split(/[^a-z0-9]+/).filter(Boolean);
}

/**
 * Menghitung jarak edit (Levenshtein) dengan pemangkasan: berhenti lebih awal
 * bila seluruh baris sudah melampaui `limit` sehingga biayanya tetap murah.
 */
function editDistance(a: string, b: string, limit: number): number {
  if (Math.abs(a.length - b.length) > limit) return limit + 1;
  let prev: number[] = [];
  for (let j = 0; j <= b.length; j++) prev.push(j);
  for (let i = 1; i <= a.length; i++) {
    const curr: number[] = [i];
    let rowMin = i;
    const ai = a.charCodeAt(i - 1);
    for (let j = 1; j <= b.length; j++) {
      const cost = ai === b.charCodeAt(j - 1) ? 0 : 1;
      const value = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      curr.push(value);
      if (value < rowMin) rowMin = value;
    }
    if (rowMin > limit) return limit + 1;
    prev = curr;
  }
  return prev[b.length];
}

/**
 * Mencocokkan satu istilah terhadap token sebuah teks dengan toleransi awalan
 * (prefix) atau jarak edit terbatas. Dipakai hanya pada lintasan fuzzy.
 */
function fuzzyTokenMatch(term: string, haystack: string): boolean {
  if (term.length < MIN_FUZZY) return false;
  const limit = fuzzyLimit(term.length);
  for (const token of tokenize(haystack)) {
    if (token === term) return true;
    if (Math.abs(token.length - term.length) > limit) continue;
    const shorter = Math.min(token.length, term.length);
    if (shorter >= MIN_FUZZY && (token.startsWith(term) || term.startsWith(token))) return true;
    if (editDistance(term, token, limit) <= limit) return true;
  }
  return false;
}

/**
 * Skor toleran salah ketik: istilah yang tidak cocok ketat dinilai lewat
 * kecocokan token berjarak edit kecil dengan bobot lebih rendah, sehingga
 * peringkat judul tetap di atas kata kunci, ringkasan, dan isi.
 */
export function scoreItemFuzzy(item: SearchItem, query: string): number {
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
    if (s === 0) {
      if (fuzzyTokenMatch(term, title)) s += 30;
      if (fuzzyTokenMatch(term, keywords)) s += 15;
      if (fuzzyTokenMatch(term, summary)) s += 8;
      if (fuzzyTokenMatch(term, text)) s += 4;
    }
    if (s === 0) return 0;
    total += s;
  }
  return total;
}

/** Mengumpulkan kosakata (judul, kata kunci, ringkasan) untuk saran koreksi. */
export function buildVocabulary(items: SearchItem[]): string[] {
  const seen = new Set<string>();
  const words: string[] = [];
  const add = (value: string): void => {
    if (words.length >= MAX_VOCAB) return;
    for (const token of tokenize(normalizeSearch(value))) {
      if (token.length < MIN_FUZZY || seen.has(token)) continue;
      seen.add(token);
      words.push(token);
      if (words.length >= MAX_VOCAB) return;
    }
  };
  for (const item of items) {
    add(item.title);
    add(item.keywords);
    add(item.summary);
  }
  return words;
}

/** Mencari koreksi terdekat sebuah istilah, atau `null` bila sudah cocok. */
function correctTerm(term: string, vocabulary: string[]): string | null {
  if (term.length < MIN_FUZZY) return null;
  const limit = fuzzyLimit(term.length);
  let best: string | null = null;
  let bestDistance = Infinity;
  for (const word of vocabulary) {
    if (word.includes(term)) return null;
    if (Math.abs(word.length - term.length) > limit) continue;
    const distance = editDistance(term, word, limit);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = word;
      if (distance <= 1) break;
    }
  }
  return bestDistance <= limit ? best : null;
}

/**
 * Menyusun kueri koreksi dari kosakata indeks, mis. "eksopnen" → "eksponen".
 * Mengembalikan `null` bila tidak ada istilah yang perlu dikoreksi.
 */
export function suggestQuery(items: SearchItem[], query: string): string | null {
  const terms = queryTerms(query);
  if (terms.length === 0) return null;
  const vocabulary = buildVocabulary(items);
  let changed = false;
  const corrected = terms.map((term) => {
    const fix = correctTerm(term, vocabulary);
    if (fix && fix !== term) {
      changed = true;
      return fix;
    }
    return term;
  });
  return changed ? corrected.join(' ') : null;
}

/** Entri hasil pencarian beserta skornya. */
export interface SearchResult extends SearchItem {
  score: number;
}

/** Hasil pencarian: daftar terurut, saran koreksi, dan penanda lintasan fuzzy. */
export interface SearchOutcome {
  results: SearchResult[];
  suggestion: string | null;
  fuzzy: boolean;
}

/**
 * Menjalankan pencarian dua lintasan: ketat lebih dulu, lalu toleran salah
 * ketik bila lintasan ketat kosong. Saran "mungkin maksud" hanya dibangun dari
 * kosakata indeks pada lintasan fuzzy.
 */
export function searchItems(items: SearchItem[], query: string, limit = 40): SearchOutcome {
  const strict: SearchResult[] = [];
  for (const item of items) {
    const score = scoreItem(item, query);
    if (score > 0) strict.push({ ...item, score });
  }
  const rank = (a: SearchResult, b: SearchResult): number => b.score - a.score;
  if (strict.length > 0) {
    strict.sort(rank);
    return { results: strict.slice(0, limit), suggestion: null, fuzzy: false };
  }

  const fuzzy: SearchResult[] = [];
  for (const item of items) {
    const score = scoreItemFuzzy(item, query);
    if (score > 0) fuzzy.push({ ...item, score });
  }
  if (fuzzy.length === 0) return { results: [], suggestion: null, fuzzy: true };
  fuzzy.sort(rank);
  return {
    results: fuzzy.slice(0, limit),
    suggestion: suggestQuery(items, query),
    fuzzy: true,
  };
}

/** Saringan indeks: kelas, elemen, dan jenis hasil. */
export interface SearchFilters {
  grade?: string;
  element?: string;
  type?: string;
}

/**
 * Menyaring entri menurut kelas, elemen, dan jenis. Halaman statis tanpa kelas
 * atau elemen tetap lolos saringan kelas/elemen agar tetap dapat ditemukan.
 */
export function filterItems(items: SearchItem[], filters: SearchFilters): SearchItem[] {
  const grade = filters.grade ?? '';
  const element = filters.element ?? '';
  const type = filters.type ?? '';
  return items.filter((item) => {
    if (type && item.type !== type) return false;
    if (grade && item.grade !== grade && item.type !== 'halaman') return false;
    if (element && item.element !== element && item.type !== 'halaman') return false;
    return true;
  });
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

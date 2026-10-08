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
 * Skor kecocokan sebuah entri terhadap kata kunci. Bobot menurun dari judul
 * persis, judul, kata kunci, ringkasan, hingga isi. Kata kunci kosong dianggap
 * tidak relevan (skor 0).
 */
export function scoreItem(item: SearchItem, query: string): number {
  const q = normalizeSearch(query);
  if (!q) return 0;
  const title = normalizeSearch(item.title);
  const keywords = normalizeSearch(item.keywords);
  const summary = normalizeSearch(item.summary);
  const text = normalizeSearch(item.text);
  let s = 0;
  if (title === q) s += 100;
  if (title.includes(q)) s += 50;
  if (keywords.includes(q)) s += 25;
  if (summary.includes(q)) s += 12;
  if (text.includes(q)) s += 6;
  return s;
}

/**
 * Menyorot kecocokan di dalam teks sebagai HTML yang aman. Teks di-escape lebih
 * dulu, lalu kecocokan literal (case-insensitive) dibungkus `<mark>`; bila tidak
 * ada kecocokan literal, pencarian diulang pada bentuk yang sudah dinormalkan
 * agar diakritik tetap ditemukan.
 */
export function highlight(text: string, query: string): string {
  const safe = escapeHtml(text);
  const raw = query;
  if (!raw) return safe;
  const q = normalizeSearch(raw);
  const pattern = raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(pattern, 'gi');
  if (re.test(safe)) return safe.replace(re, (m) => `<mark style="${HIGHLIGHT_STYLE}">${m}</mark>`);
  const idx = normalizeSearch(safe).indexOf(q);
  if (idx < 0) return safe;
  return (
    safe.slice(0, idx) +
    `<mark style="${HIGHLIGHT_STYLE}">` +
    safe.slice(idx, idx + q.length) +
    '</mark>' +
    safe.slice(idx + q.length)
  );
}

/**
 * Membangun cuplikan: ringkasan bila sudah memuat kata kunci, atau potongan
 * isi di sekitar kecocokan pertama. Selalu mengembalikan HTML yang sudah
 * disorot dan aman.
 */
export function buildSnippet(item: SearchItem, query: string): string {
  const raw = query;
  const q = normalizeSearch(raw);
  if (!raw || normalizeSearch(item.summary).includes(q)) return highlight(item.summary, raw);
  const haystack = item.text || '';
  const idx = normalizeSearch(haystack).indexOf(q);
  if (idx < 0) return highlight(item.summary, raw);
  const start = Math.max(0, idx - 50);
  const chunk = haystack.slice(start, start + 150).trim();
  return (start > 0 ? '… ' : '') + highlight(chunk, raw) + ' …';
}

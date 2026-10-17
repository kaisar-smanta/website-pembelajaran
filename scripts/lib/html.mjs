// Utilitas HTML bersama untuk skrip pemeriksaan: dekode entitas, buang blok
// non-teks, dan lepas tag. Sebelumnya disalin di check-latex.mjs dan
// check-links.mjs.

/** Dekode entitas HTML yang umum (termasuk `&#36;`/`&#92;` untuk $ dan \\). */
export function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#36;/g, '$')
    .replace(/&#92;/g, '\\');
}

// Elemen yang isinya bukan teks terlihat, plus komentar. `<annotation>` dan
// `<math>` MathML KaTeX menyimpan TeX asli yang tidak tampil.
const EXCLUDE_BLOCKS = [
  /<script\b[^>]*>[\s\S]*?<\/script>/gi,
  /<style\b[^>]*>[\s\S]*?<\/style>/gi,
  /<pre\b[^>]*>[\s\S]*?<\/pre>/gi,
  /<code\b[^>]*>[\s\S]*?<\/code>/gi,
  /<annotation\b[^>]*>[\s\S]*?<\/annotation>/gi,
  /<math\b[^>]*>[\s\S]*?<\/math>/gi,
  /<!--[\s\S]*?-->/g,
];

// Tag HTML, menghormati tanda kutip sehingga `>` di dalam nilai atribut tidak
// memotong tag lebih awal.
const TAG = /<\/?[a-zA-Z](?:"[^"]*"|'[^']*'|[^>])*>/g;

/** Lepas seluruh tag HTML (tanpa dekode entitas). */
export function stripTags(html) {
  return html.replace(TAG, ' ');
}

/** Hasil teks terlihat: buang blok non-teks, lepas tag, lalu dekode entitas. */
export function stripNonVisible(html) {
  let text = html;
  for (const re of EXCLUDE_BLOCKS) text = text.replace(re, ' ');
  return decodeEntities(text.replace(TAG, ' '));
}

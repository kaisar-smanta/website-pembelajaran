// Pasca-build: hapus berkas font KaTeX berformat lama (ttf/woff) selama ada
// padanan woff2 untuk basename yang sama. Peramban modern hanya mengunduh
// woff2, sehingga ttf/woff hanya membebani artefak yang diterbitkan.
//
// Pemakaian: node scripts/prune-fonts.mjs  (dipanggil setelah `astro build`).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'dist', '_astro');

if (!fs.existsSync(dir)) {
  console.error('dist/_astro belum ada. Jalankan: npm run build');
  process.exit(1);
}

// Vite menyisipkan hash konten sebelum ekstensi (mis.
// `KaTeX_Main-Regular.<hash>.woff2`), dan hash berbeda antar format, sehingga
// pencocokan memakai nama keluarga font: bagian sebelum titik pertama.
const family = (name) => name.slice(0, name.indexOf('.'));

const files = fs.readdirSync(dir);
const woff2 = new Set(files.filter((name) => name.endsWith('.woff2')).map(family));

let removed = 0;
let bytes = 0;
for (const name of files) {
  if (!name.endsWith('.woff') && !name.endsWith('.ttf')) continue;
  if (!woff2.has(family(name))) continue;
  const full = path.join(dir, name);
  bytes += fs.statSync(full).size;
  fs.unlinkSync(full);
  removed += 1;
}

console.log(
  `Font lama dihapus: ${removed} berkas (${(bytes / 1024).toFixed(0)} KB) karena tersedia .woff2.`,
);

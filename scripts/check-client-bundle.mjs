// Penjaga bundel klien: memastikan `marked`/`katex` (yang hanya boleh dipakai
// saat build) tidak bocor ke JavaScript yang dikirim ke peramban. KaTeX/marked
// berukuran ratusan KB; sekali sebuah modul `src/lib` yang dipakai skrip klien
// mengimpornya, keduanya ikut terunduh.
//
// Pemakaian:
//   npm run build
//   npm run check:bundle
//
// Bila dist/ belum ada, cetak petunjuk lalu keluar 0.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { byExtension, collectFiles } from './lib/files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv[2] ? path.resolve(process.argv[2]) : path.join(root, 'dist', '_astro');

if (!fs.existsSync(target)) {
  console.log('dist/_astro belum ada. Jalankan: npm run build');
  process.exit(0);
}

// Tanda khas pustaka yang seharusnya hanya ada di sisi server.
const SIGNATURES = [
  { name: 'katex', re: /renderToString|katex/i },
  { name: 'marked', re: /\bmarked\b|markedOptions/ },
];

const files = collectFiles(target, byExtension('.js'));
const leaks = [];

for (const file of files) {
  const code = fs.readFileSync(file, 'utf8');
  const hits = SIGNATURES.filter((sig) => sig.re.test(code)).map((sig) => sig.name);
  if (hits.length) {
    leaks.push({ file: path.relative(root, file).split(path.sep).join('/'), hits });
  }
}

console.log(`Berkas JS klien diperiksa: ${files.length}`);
if (leaks.length) {
  console.log(`Kebocoran pustaka server ke bundel klien: ${leaks.length}`);
  for (const leak of leaks) console.log(`  ${leak.file} -> ${leak.hits.join(', ')}`);
  console.log(
    '\nPindahkan impor marked/katex keluar dari modul `src/lib` yang dipakai skrip klien ' +
      '(mis. taruh pembantu server di modul terpisah seperti `src/lib/review-entries.ts`).',
  );
  process.exitCode = 1;
} else {
  console.log('Kebocoran pustaka server ke bundel klien: 0');
}

// Pemeriksa sisa LaTeX mentah yang bocor ke teks terlihat pada hasil build
// statis (dist/). Menemukan literal $...$, \(...\), atau perintah seperti
// \frac/\sqrt/\begin{ di luar <code>/<pre>/<script>/<style>.
//
// Pemakaian:
//   npm run build
//   npm run check:latex
//
// Bila dist/ belum ada, cetak petunjuk build lalu keluar 0 (tidak menggagalkan
// agar dapat dijalankan lebih dulu tanpa build).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { byExtension, collectFiles } from './lib/files.mjs';
import { stripNonVisible } from './lib/html.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv[2] ? path.resolve(process.argv[2]) : path.join(root, 'dist');

if (!fs.existsSync(target)) {
  console.error('dist/ belum ada. Jalankan: npm run build');
  process.exit(1);
}

const CHECKS = [
  { name: 'display $$...$$', re: /\$\$[\s\S]{1,600}?\$\$/g },
  { name: 'inline $...$', re: /(?<!\\)\$[^$\n]{1,200}?\$/g },
  { name: 'kurung \\(...\\)', re: /\\\([\s\S]{1,300}?\\\)/g },
  { name: 'perintah LaTeX', re: /\\[a-zA-Z]*(?:frac|sqrt|begin)\b/g },
];

const files = collectFiles(target, byExtension('.html'));
if (files.length === 0) {
  console.error(`Tidak ada berkas HTML yang diperiksa di ${target}. Pastikan dist/ dibangun.`);
  process.exit(1);
}
let leaks = 0;

for (const full of files) {
  const text = stripNonVisible(fs.readFileSync(full, 'utf8'));

  const found = [];
  for (const check of CHECKS) {
    const re = new RegExp(check.re.source, check.re.flags);
    let m;
    while ((m = re.exec(text))) {
      found.push({ check: check.name, match: m[0].replace(/\s+/g, ' ').trim().slice(0, 80) });
      if (found.length >= 8) break;
    }
    if (found.length >= 8) break;
  }

  if (found.length) {
    leaks += found.length;
    const rel = path.relative(root, full).split(path.sep).join('/');
    console.log(`\n${rel}: ${found.length} kebocoran`);
    for (const it of found) console.log(`  [${it.check}] ${it.match}`);
  }
}

console.log(`\nBerkas HTML diperiksa: ${files.length}`);
console.log(`Kebocoran LaTeX mentah: ${leaks}`);
process.exitCode = leaks ? 1 : 0;

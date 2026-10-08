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

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv[2] ? path.resolve(process.argv[2]) : path.join(root, 'dist');

if (!fs.existsSync(target)) {
  console.log('dist/ belum ada. Jalankan: npm run build');
  process.exit(0);
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

// Elemen yang isinya bukan teks terlihat (kode, skrip, gaya) atau bukan LaTeX
// terlihat: <annotation> MathML menyimpan TeX asli KaTeX dan tidak tampil.
const EXCLUDE_BLOCKS = [
  /<script\b[^>]*>[\s\S]*?<\/script>/gi,
  /<style\b[^>]*>[\s\S]*?<\/style>/gi,
  /<pre\b[^>]*>[\s\S]*?<\/pre>/gi,
  /<code\b[^>]*>[\s\S]*?<\/code>/gi,
  /<annotation\b[^>]*>[\s\S]*?<\/annotation>/gi,
  /<math\b[^>]*>[\s\S]*?<\/math>/gi,
  /<!--[\s\S]*?-->/g,
];

// Tag HTML, menghormati tanda kutip sehingga '>' di dalam nilai atribut
// (mis. data-ex-search="... $b>1$ ...") tidak memotong tag lebih awal.
const TAG = /<\/?[a-zA-Z](?:"[^"]*"|'[^']*'|[^>])*>/g;

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#36;/g, '$')
    .replace(/&#92;/g, '\\');
}

const CHECKS = [
  { name: 'display $$...$$', re: /\$\$[\s\S]{1,600}?\$\$/g },
  { name: 'inline $...$', re: /(?<!\\)\$[^$\n]{1,200}?\$/g },
  { name: 'kurung \\(...\\)', re: /\\\([\s\S]{1,300}?\\\)/g },
  { name: 'perintah LaTeX', re: /\\[a-zA-Z]*(?:frac|sqrt|begin)\b/g },
];

const files = walk(target);
let leaks = 0;

for (const full of files) {
  let text = fs.readFileSync(full, 'utf8');
  for (const re of EXCLUDE_BLOCKS) text = text.replace(re, ' ');
  text = decodeEntities(text.replace(TAG, ' '));

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
    console.log(`\n${rel} — ${found.length} kebocoran`);
    for (const it of found) console.log(`  [${it.check}] ${it.match}`);
  }
}

console.log(`\nBerkas HTML diperiksa: ${files.length}`);
console.log(`Kebocoran LaTeX mentah: ${leaks}`);
process.exitCode = leaks ? 1 : 0;

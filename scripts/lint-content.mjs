// Memindai berkas materi untuk pola LaTeX yang berisiko merusak tabel markdown
// atau tidak dapat dirender. Pemakaian: node scripts/lint-content.mjs
import fs from 'node:fs';
import path from 'node:path';

const dirs = ['src/data/topics', 'src/data/applications'];
const files = dirs.flatMap((dir) =>
  fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'planned.ts')
    .map((f) => path.join(dir, f)),
);
const problems = [];

for (const full of files) {
  const f = path.basename(full);
  const lines = fs.readFileSync(full, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    if (line.trim().startsWith('//')) return;
    // cari segmen math pada baris ini
    const segments = [
      ...[...line.matchAll(/\$\$([\s\S]+?)\$\$/g)].map((m) => m[1]),
      ...[...line.matchAll(/(?<!\\)\$(?!\{)([^\n$]+?)\$/g)].map((m) => m[1]),
    ];
    for (const seg of segments) {
      if (seg.includes('|')) {
        problems.push(`${f}:${i + 1} pipe di dalam math -> ${seg.slice(0, 60)}`);
      }
      if (/\\begin\{array\}/.test(seg) && !/\\begin\{array\}\{[lcr]/.test(seg)) {
        problems.push(`${f}:${i + 1} array tanpa spesifikasi kolom`);
      }
    }
    // deteksi $ ganjil pada baris yang mengandung math (abaikan ${ interpolasi)
    const dollars = (line.match(/(?<!\\)\$(?!\{)/g) || []).length;
    if (dollars % 2 === 1 && /\$/.test(line) && !line.includes('\\$')) {
      problems.push(`${f}:${i + 1} jumlah $ ganjil: ${line.trim().slice(0, 70)}`);
    }
  });
}

console.log(`Berkas materi diperiksa: ${files.length}`);
console.log(`Potensi masalah: ${problems.length}`);
if (problems.length) console.log(problems.join('\n'));
process.exitCode = problems.length ? 1 : 0;

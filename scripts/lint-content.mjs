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

// Pemindaian kedua: template .astro untuk pola "spasi hilang sebelum tag inline".
// Bila sebuah baris berakhir pada kata/tanda baca tanpa spasi lalu baris berikutnya
// dimulai tag inline (<strong>, <em>, ...), teks dapat menyatu saat dirender.
function astroFilesUnder(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...astroFilesUnder(full));
    else if (entry.name.endsWith('.astro')) out.push(full);
  }
  return out;
}

const astroFiles = [...astroFilesUnder('src/pages'), ...astroFilesUnder('src/components')];
// Tag inline yang relevan. <span> ditangani terpisah agar label berjarak CSS
// (mis. pasangan quick-text/quick-count) tidak dianggap masalah.
const inlineTag = /^<(strong|em|a|code|b|i)\b/;
const spanTag = /^<span\b/;
// <span> hitungan/ikon berdampingan dengan label berjarak CSS (mis. "Semua"
// lalu <span class="...-count">), sehingga spasi tidak diperlukan.
const spanNonText = /class="[^"]*(?:count|badge|icon|dot)|aria-hidden="true"/;

for (const full of astroFiles) {
  const rel = path.relative(process.cwd(), full).split(path.sep).join('/');
  const lines = fs.readFileSync(full, 'utf8').split(/\r?\n/);
  let fenceSeen = 0;
  let inFrontmatter = false;
  lines.forEach((line, i) => {
    if (line.trim() === '---' && fenceSeen < 2) {
      fenceSeen += 1;
      inFrontmatter = fenceSeen === 1;
      return;
    }
    if (inFrontmatter) return;
    // hanya baris yang berakhir pada kata/tanda baca, tanpa spasi di ujung
    if (!/[A-Za-z0-9.,;:!?)]$/.test(line)) return;
    let j = i + 1;
    while (j < lines.length && lines[j].trim() === '') j += 1;
    if (j >= lines.length) return;
    const next = lines[j].trimStart();
    const m = next.match(inlineTag);
    if (!m) {
      if (spanTag.test(next) && !spanNonText.test(next)) {
        problems.push(`${rel}:${i + 1} spasi hilang sebelum <span>: ${line.trim().slice(0, 60)}`);
      }
      return;
    }
    problems.push(`${rel}:${i + 1} spasi hilang sebelum <${m[1]}>: ${line.trim().slice(0, 60)}`);
  });
}

console.log(`Berkas materi diperiksa: ${files.length}`);
console.log(`Berkas .astro diperiksa: ${astroFiles.length}`);
console.log(`Potensi masalah: ${problems.length}`);
if (problems.length) console.log(problems.join('\n'));
process.exitCode = problems.length ? 1 : 0;

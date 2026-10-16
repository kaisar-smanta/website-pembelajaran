// Memindai berkas materi untuk pola LaTeX yang berisiko merusak tabel markdown
// atau tidak dapat dirender. Pemakaian: node scripts/lint-content.mjs
import fs from 'node:fs';
import path from 'node:path';
import { byExtension, collectFiles } from './lib/files.mjs';
import { scanEmDashes, scanEnDashMisuse } from './lib/emdash.mjs';
import { scanMath } from '../src/lib/math-scan.ts';

// Daftar berkas materi yang dipindai: topik, aplikasi, bank soal, eksplorasi,
// dan capaian pembelajaran. index.ts/planned.ts adalah agregator sehingga
// dilewati (isinya menunjuk ke berkas lain yang tetap dipindai).
// Daftar berkas materi yang dipindai: topik, aplikasi, bank soal, eksplorasi,
// dan capaian pembelajaran. index.ts/planned.ts adalah agregator sehingga
// dilewati (isinya menunjuk ke berkas lain yang tetap dipindai). Penelusuran
// rekursif `collectFiles` superset dari versi non-rekursif lama, sehingga
// cakupan berkas tidak berkurang.
const SKIP_MATERI = new Set(['index.ts', 'planned.ts']);
const isMateriTs = (name) => name.endsWith('.ts') && !SKIP_MATERI.has(name);

function existingFiles(...paths) {
  return paths.filter((p) => fs.existsSync(p));
}

const files = [
  ...collectFiles('src/data/topics', isMateriTs),
  ...collectFiles('src/data/applications', isMateriTs),
  ...collectFiles('src/data/questions', isMateriTs),
  ...existingFiles('src/data/explorations.ts', 'src/data/curriculum/cp.ts'),
];

const problems = [];
const warnings = [];

// Hitung nomor baris (1-based) dari indeks karakter pada teks penuh.
function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i += 1) {
    if (text.charCodeAt(i) === 10) line += 1;
  }
  return line;
}

// Pemindai dolar tunggal dibagi bersama di `src/lib/math-scan.ts` (dipakai juga
// renderer markdown), sehingga segmen math, jumlah dolar tak tertutup, dan teks
// ber-math-dikosongkan selalu konsisten antar perkakas.

// Ambil baris sumber yang memuat indeks karakter tertentu.
function lineAt(text, index) {
  const start = text.lastIndexOf('\n', index) + 1;
  const end = text.indexOf('\n', index);
  return text.slice(start, end === -1 ? text.length : end);
}

// Istilah baku dan sapaan seragam. Setiap pelanggaran dilaporkan sebagai galat
// dengan pesan yang menyebutkan bentuk penggantinya.
const FORBIDDEN_TERMS = [
  { pattern: /cosinus/gi, hint: 'gunakan "kosinus" (bukan "cosinus")' },
  { pattern: /tidak berhingga/gi, hint: 'gunakan "tak berhingga" (bukan "tidak berhingga")' },
  { pattern: /\bAnda\b/gi, hint: 'gunakan sapaan "kamu" atau "kita" (bukan "Anda")' },
];

// Lingkungan KaTeX yang memerlukan spesifikasi kolom/alignment wajib setelah
// \begin{...}: array butuh {kolom} dan alignedat butuh {jumlah kolom}.
// matrix/pmatrix/bmatrix/cases/aligned/align TIDAK memerlukan argumen kolom,
// jadi sengaja tidak diwajibkan (menghindari positif palsu).
const REQUIRES_COLSPEC = new Set(['array', 'alignedat']);
// Lingkungan yang menyediakan konteks kolom, tempat '&' sah digunakan.
const TABLE_ENVS = new Set([
  'array',
  'matrix',
  'pmatrix',
  'bmatrix',
  'Bmatrix',
  'vmatrix',
  'Vmatrix',
  'cases',
  'dcases',
  'aligned',
  'align',
  'align*',
  'alignedat',
  'gathered',
  'split',
]);

for (const full of files) {
  const f = path.relative(process.cwd(), full).split(path.sep).join('/');
  const text = fs.readFileSync(full, 'utf8');

  for (const { pattern, hint } of FORBIDDEN_TERMS) {
    pattern.lastIndex = 0;
    let term;
    while ((term = pattern.exec(text))) {
      problems.push(`${f}:${lineOf(text, term.index)} istilah tidak baku "${term[0]}" -> ${hint}`);
    }
  }

  // Satu pemindaian dolar: segmen math, jumlah dolar (deteksi math tak
  // tertutup), dan teks ber-math-dikosongkan untuk pemeriksaan baris tabel.
  const scan = scanMath(text);

  // Jumlah dolar tak ter-escape yang ganjil menandakan math tidak tertutup.
  if (scan.dollars % 2 === 1) {
    problems.push(`${f}: jumlah $ tak berpasangan (ganjil): ${scan.dollars}`);
  }

  for (const seg of scan.segments) {
    const line = lineOf(text, seg.index);
    const body = seg.body;
    const snippet = body.replace(/\s+/g, ' ').trim().slice(0, 60);

    if (body.includes('|') && lineAt(scan.cleaned, seg.index).includes('|')) {
      problems.push(`${f}:${line} pipe di dalam math pada baris tabel -> ${snippet}`);
    }

    // Balance kurung kurawal (abaikan \{ dan \}).
    const unescaped = body.replace(/\\[\s\S]/g, '');
    const open = (unescaped.match(/\{/g) || []).length;
    const close = (unescaped.match(/\}/g) || []).length;
    if (open !== close) {
      problems.push(`${f}:${line} kurung kurawal tidak seimbang {${open} vs }${close} -> ${snippet}`);
    }

    // '<' / '>' mentah di dalam math: operator pembanding biasa (mis. $a<b$)
    // sah di KaTeX, tetapi pola mirip tag HTML (mis. $<div>$) berisiko diurai
    // sebagai elemen saat HTML dihasilkan. Hanya pola tag yang dilaporkan.
    const rawTag = body.match(/<[A-Za-z/!][^<>]*>/);
    if (rawTag) {
      problems.push(`${f}:${line} tag HTML mentah di dalam math -> ${rawTag[0].slice(0, 40)}`);
    }

    // \left harus berpasangan dengan \right (kecualikan \leftarrow, \rightarrow).
    const left = (body.match(/\\left(?![a-zA-Z])/g) || []).length;
    const right = (body.match(/\\right(?![a-zA-Z])/g) || []).length;
    if (left !== right) {
      problems.push(`${f}:${line} \\left (${left}) tidak cocok dengan \\right (${right}) -> ${snippet}`);
    }

    // Pasangan \begin{...}/\end{...} (termasuk kesalahan bersarang).
    const envRe = /\\(begin|end)\{([^{}]+)\}/g;
    const stack = [];
    let m;
    let seenTable = false;
    while ((m = envRe.exec(body))) {
      const kind = m[1];
      const name = m[2];
      if (TABLE_ENVS.has(name)) seenTable = true;
      if (kind === 'begin') {
        stack.push(name);
        if (REQUIRES_COLSPEC.has(name) && !/^\s*\{/.test(body.slice(envRe.lastIndex))) {
          problems.push(`${f}:${line} \\begin{${name}} tanpa spesifikasi kolom -> ${snippet}`);
        }
      } else {
        const top = stack.pop();
        if (top !== name) {
          problems.push(
            `${f}:${line} \\end{${name}} tidak cocok dengan \\begin{${top ?? '?'}} -> ${snippet}`,
          );
        }
      }
    }
    if (stack.length) {
      problems.push(`${f}:${line} \\begin{${stack.join(', ')}} tanpa \\end -> ${snippet}`);
    }

    // '&' di luar lingkungan tabel/matriks hanya diperingatkan (bukan galat).
    if (body.includes('&') && !seenTable) {
      warnings.push(`${f}:${line} tanda & di luar konteks tabel/matriks -> ${snippet}`);
    }
  }
}

// Pemindaian em-dash. Em-dash (U+2014) adalah sidik jari prosa mesin dan
// dilarang di seluruh sumber (lihat scripts/lib/emdash.mjs). Tanda lain tetap
// boleh: en-dash (U+2013) untuk rentang angka dan hyphen-minus ASCII untuk
// tanda minus atau placeholder kode.
const emdashFindings = scanEmDashes(process.cwd());
for (const { file, line } of emdashFindings) {
  problems.push(
    `${file}:${line} memakai em-dash (U+2014) -> ganti dengan koma, titik dua, kurung, atau pisahkan kalimat`,
  );
}

// Pemindaian en-dash di luar rentang. En-dash hanya untuk rentang dan penanda
// nilai kosong; yang bersebelahan dengan huruf kecil
// adalah kekeliruan dan wajib memakai hyphen-minus.
const endashFindings = scanEnDashMisuse(process.cwd());
for (const { file, line, context } of endashFindings) {
  problems.push(`${file}:${line} memakai en-dash di luar rentang -> ${context}`);
}

// Pemindaian kedua: template .astro untuk pola "spasi hilang sebelum tag inline".
// Bila sebuah baris berakhir pada kata/tanda baca tanpa spasi lalu baris berikutnya
// dimulai tag inline (<strong>, <em>, ...), teks dapat menyatu saat dirender.
const astroFiles = [
  ...collectFiles('src/pages', byExtension('.astro')),
  ...collectFiles('src/components', byExtension('.astro')),
];
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
console.log(`Temuan em-dash: ${emdashFindings.length}`);
console.log(`Temuan en-dash di luar rentang: ${endashFindings.length}`);
console.log(`Berkas .astro diperiksa: ${astroFiles.length}`);
console.log(`Potensi masalah: ${problems.length}`);
if (problems.length) console.log(problems.join('\n'));
console.log(`Peringatan (tidak menggagalkan): ${warnings.length}`);
if (warnings.length) console.log(warnings.join('\n'));
process.exitCode = problems.length ? 1 : 0;

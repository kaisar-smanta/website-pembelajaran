// Memindai berkas materi untuk pola LaTeX yang berisiko merusak tabel markdown
// atau tidak dapat dirender. Pemakaian: node scripts/lint-content.mjs
import fs from 'node:fs';
import path from 'node:path';

// Daftar berkas materi yang dipindai: topik, aplikasi, bank soal, eksplorasi,
// dan capaian pembelajaran. index.ts/planned.ts adalah agregator sehingga
// dilewati (isinya menunjuk ke berkas lain yang tetap dipindai).
function tsFilesIn(dir, skip = ['index.ts', 'planned.ts']) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.ts') && !skip.includes(f))
    .map((f) => path.join(dir, f));
}

function existingFiles(...paths) {
  return paths.filter((p) => fs.existsSync(p));
}

const files = [
  ...tsFilesIn('src/data/topics'),
  ...tsFilesIn('src/data/applications'),
  ...tsFilesIn('src/data/questions'),
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

// Ekstrak seluruh segmen math ($...$ dan $$...$$) dari teks penuh, bukan per
// baris, agar display math multi-baris ikut terbaca. Dolar yang di-escape (\$)
// dan interpolasi template (`${...}`) diabaikan.
function extractMathSegments(text) {
  const segs = [];
  const len = text.length;
  let i = 0;
  while (i < len) {
    const c = text[i];
    if (c === '\\') {
      i += 2;
      continue;
    }
    if (c === '$' && text[i + 1] !== '{') {
      if (text[i + 1] === '$') {
        const start = i + 2;
        let j = start;
        let end = -1;
        while (j < len) {
          if (text[j] === '\\') {
            j += 2;
            continue;
          }
          if (text[j] === '$' && text[j + 1] === '$') {
            end = j;
            break;
          }
          j += 1;
        }
        if (end === -1) break;
        segs.push({ body: text.slice(start, end), display: true, index: i });
        i = end + 2;
      } else {
        const start = i + 1;
        let j = start;
        let end = -1;
        while (j < len && text[j] !== '\n') {
          if (text[j] === '\\') {
            j += 2;
            continue;
          }
          if (text[j] === '$') {
            end = j;
            break;
          }
          j += 1;
        }
        if (end === -1) {
          i += 1;
          continue;
        }
        segs.push({ body: text.slice(start, end), display: false, index: i });
        i = end + 1;
      }
      continue;
    }
    i += 1;
  }
  return segs;
}

// Ambil baris sumber yang memuat indeks karakter tertentu.
function lineAt(text, index) {
  const start = text.lastIndexOf('\n', index) + 1;
  const end = text.indexOf('\n', index);
  return text.slice(start, end === -1 ? text.length : end);
}

// Buang seluruh segmen math dari sebuah baris, sehingga sisa '|' yang tertinggal
// benar-benar milik sintaks tabel markdown (bukan tanda nilai mutlak di dalam math).
function stripMathFromLine(line) {
  let out = '';
  let i = 0;
  while (i < line.length) {
    if (line[i] === '\\') {
      out += line.slice(i, i + 2);
      i += 2;
      continue;
    }
    if (line[i] === '$' && line[i + 1] !== '{') {
      if (line[i + 1] === '$') {
        const end = line.indexOf('$$', i + 2);
        i = end === -1 ? line.length : end + 2;
        continue;
      }
      let j = i + 1;
      let end = -1;
      while (j < line.length) {
        if (line[j] === '\\') {
          j += 2;
          continue;
        }
        if (line[j] === '$') {
          end = j;
          break;
        }
        j += 1;
      }
      i = end === -1 ? line.length : end + 1;
      continue;
    }
    out += line[i];
    i += 1;
  }
  return out;
}

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

  // Jumlah dolar tak ter-escape yang ganjil menandakan math tidak tertutup.
  const dollars = (text.match(/(?<!\\)\$(?!\{)/g) || []).length;
  if (dollars % 2 === 1) {
    problems.push(`${f}: jumlah $ tak berpasangan (ganjil): ${dollars}`);
  }

  for (const seg of extractMathSegments(text)) {
    const line = lineOf(text, seg.index);
    const body = seg.body;
    const snippet = body.replace(/\s+/g, ' ').trim().slice(0, 60);

    if (body.includes('|') && stripMathFromLine(lineAt(text, seg.index)).includes('|')) {
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
console.log(`Peringatan (tidak menggagalkan): ${warnings.length}`);
if (warnings.length) console.log(warnings.join('\n'));
process.exitCode = problems.length ? 1 : 0;

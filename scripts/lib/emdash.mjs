// Pemindai tipografi bersama untuk penjaga konten (`lint:content`) dan uji
// (`tests/no-emdash.mjs`). Menegakkan dua aturan:
// - em-dash (U+2014) dilarang di seluruh berkas sumber. Ini sidik jari prosa
//   mesin; ganti dengan koma, titik dua, kurung, atau pisahkan kalimat. Bila
//   kode perlu menyebut karakternya, tulis escape `\u2014`, bukan literal.
// - en-dash (U+2013) hanya untuk rentang (angka atau kode fase/kelas seperti
//   `X–XII`/`E–F`) dan penanda nilai kosong. En-dash yang bersebelahan dengan
//   huruf kecil menandakan kekeliruan, sehingga
//   dilaporkan sebagai temuan.
//
// Pemindaian mencakup seluruh repositori kecuali direktori keluaran/artefak
// (node_modules, .git, dist, .astro, artifacts, dst.) dan lockfile.

import fs from 'node:fs';
import path from 'node:path';

export const EMDASH = '\u2014';
export const ENDASH = '\u2013';

const TEXT_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.mjs',
  '.cjs',
  '.astro',
  '.css',
  '.html',
  '.htm',
  '.svg',
  '.json',
  '.webmanifest',
  '.md',
  '.mdx',
  '.txt',
  '.yml',
  '.yaml',
  '.xml',
]);

const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  '.astro',
  'artifacts',
  'coverage',
  '.output',
  '.cache',
  '.tmp',
  'tmp',
]);

const IGNORED_FILES = new Set(['package-lock.json']);

/** Menelusuri berkas teks di `root` dan memanggil `onFile(full, rel)` tiap berkas. */
function walkTextFiles(root, onFile) {
  const walk = (dir) => {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (IGNORED_DIRS.has(entry.name)) continue;
        walk(path.join(dir, entry.name));
        continue;
      }
      if (!entry.isFile()) continue;
      if (IGNORED_FILES.has(entry.name)) continue;
      if (!TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) continue;
      const full = path.join(dir, entry.name);
      onFile(full, path.relative(root, full).split(path.sep).join('/'));
    }
  };
  walk(root);
}

/**
 * Menelusuri `root` dan mengembalikan temuan em-dash sebagai daftar
 * `{ file, line }` (file relatif terhadap `root`, dipisah `/`).
 */
export function scanEmDashes(root = process.cwd()) {
  const findings = [];
  walkTextFiles(root, (full, rel) => {
    let text;
    try {
      text = fs.readFileSync(full, 'utf8');
    } catch {
      return;
    }
    if (!text.includes(EMDASH)) return;
    text.split(/\r?\n/).forEach((line, i) => {
      if (line.includes(EMDASH)) findings.push({ file: rel, line: i + 1 });
    });
  });
  return findings;
}

/**
 * Mengembalikan temuan en-dash di luar rentang sebagai daftar
 * `{ file, line, context }`. En-dash yang bersebelahan dengan huruf kecil
 * dianggap keliru (rentang selalu bersebelahan angka, `$`, atau huruf besar).
 */
export function scanEnDashMisuse(root = process.cwd()) {
  const findings = [];
  const lower = /\p{Ll}/u;
  walkTextFiles(root, (full, rel) => {
    let text;
    try {
      text = fs.readFileSync(full, 'utf8');
    } catch {
      return;
    }
    if (!text.includes(ENDASH)) return;
    text.split(/\r?\n/).forEach((line, i) => {
      let index = line.indexOf(ENDASH);
      while (index !== -1) {
        const before = index > 0 ? line[index - 1] : ' ';
        const after = index + 1 < line.length ? line[index + 1] : ' ';
        if (lower.test(before) || lower.test(after)) {
          findings.push({ file: rel, line: i + 1, context: line.trim().slice(0, 100) });
          break;
        }
        index = line.indexOf(ENDASH, index + 1);
      }
    });
  });
  return findings;
}

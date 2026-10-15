// Pemindai em-dash bersama untuk penjaga konten (`lint:content`) dan uji
// (`tests/no-emdash.mjs`). Em-dash (U+2014) adalah sidik jari prosa mesin,
// jadi dilarang di seluruh berkas sumber. Tanda lain tetap boleh: en-dash
// (U+2013) untuk rentang angka dan hyphen-minus ASCII untuk tanda minus atau
// placeholder kode.
//
// Pemindaian mencakup seluruh repositori kecuali direktori keluaran/artefak
// (node_modules, .git, dist, .astro, artifacts, dst.) dan lockfile. Berkas yang
// perlu benar-benar memuat karakter ini di kode harus menulis escape `\u2014`
// (bukan literal), sehingga tetap aman dari pemindai.

import fs from 'node:fs';
import path from 'node:path';

export const EMDASH = '\u2014';

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

/**
 * Menelusuri `root` dan mengembalikan temuan em-dash sebagai daftar
 * `{ file, line }` (file relatif terhadap `root`, dipisah `/`).
 */
export function scanEmDashes(root = process.cwd()) {
  const findings = [];

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
      let text;
      try {
        text = fs.readFileSync(full, 'utf8');
      } catch {
        continue;
      }
      if (!text.includes(EMDASH)) continue;
      text.split(/\r?\n/).forEach((line, i) => {
        if (line.includes(EMDASH)) {
          findings.push({ file: path.relative(root, full).split(path.sep).join('/'), line: i + 1 });
        }
      });
    }
  };

  walk(root);
  return findings;
}

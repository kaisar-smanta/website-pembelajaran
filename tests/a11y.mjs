// Uji aksesibilitas statis pada hasil build: gambar beralt, satu landmark
// <main> per halaman, serta tautan/tombol tanpa nama aksesibel. Memindai
// `dist/**/*.html` tanpa peramban sehingga dapat berjalan di `npm test`.
// Bila `dist/` belum ada, uji dilewati.
// node tests/a11y.mjs
import fs from 'node:fs';
import path from 'node:path';
import { root, ok, check, checks } from './_util.mjs';
import { byExtension, collectFiles } from '../scripts/lib/files.mjs';

const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) {
  console.log('  lewati - dist/ belum ada, uji aksesibilitas dilewati');
  console.log('PASS a11y (dilewati)');
} else {
  const files = collectFiles(dist, byExtension('.html'));

  const missingAlt = [];
  const missingMain = [];
  const emptyInteractive = [];
  let scanned = 0;

  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    if (/http-equiv=["']refresh["']/i.test(html)) continue;
    scanned++;
    const rel = path.relative(dist, file).split(path.sep).join('/');

    for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
      if (!/(?<![\w-])alt\s*=\s*["']/i.test(m[0])) missingAlt.push(`${rel}: ${m[0].slice(0, 80)}`);
    }

    const mainCount = (html.match(/<main\b/gi) ?? []).length;
    if (mainCount !== 1) missingMain.push(`${rel} (main: ${mainCount})`);

    // Kontrol tanpa teks/isian yang tetap punya nama aksesibel (aria-label,
    // aria-labelledby, atau title) tidak dihitung kosong.
    const hasName = (attrs) =>
      /(?<![\w-])aria-label\s*=/i.test(attrs) ||
      /(?<![\w-])aria-labelledby\s*=/i.test(attrs) ||
      /(?<![\w-])title\s*=/i.test(attrs);
    const isEmptyText = (inner) => inner.replace(/&nbsp;/gi, '').trim() === '';

    for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
      const [, attrs, inner] = m;
      if (isEmptyText(inner) && !hasName(attrs)) {
        emptyInteractive.push(`${rel}: <a${attrs.slice(0, 60)}>`);
      }
    }
    for (const m of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
      const [, attrs, inner] = m;
      if (isEmptyText(inner) && !hasName(attrs)) {
        emptyInteractive.push(`${rel}: <button${attrs.slice(0, 60)}>`);
      }
    }
  }

  check(`setiap <img> punya atribut alt (${scanned} halaman)`, () => {
    ok(missingAlt.length === 0, `gambar tanpa alt:\n    ${missingAlt.slice(0, 20).join('\n    ')}`);
  });

  check('setiap halaman punya tepat satu landmark <main>', () => {
    ok(missingMain.length === 0, `jumlah <main> salah:\n    ${missingMain.slice(0, 20).join('\n    ')}`);
  });

  check('tidak ada tautan/tombol kosong tanpa nama aksesibel', () => {
    ok(
      emptyInteractive.length === 0,
      `interaktif tanpa nama:\n    ${emptyInteractive.slice(0, 20).join('\n    ')}`,
    );
  });

  console.log(`PASS a11y (${checks.count} pemeriksaan)`);
}

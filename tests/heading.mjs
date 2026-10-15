// Uji struktur judul pada seluruh halaman hasil build: tepat satu <h1> per
// halaman dan tanpa lompatan tingkat (mis. h2 langsung ke h4). Memindai semua
// `dist/**/index.html` sehingga mencakup halaman yang tidak dikunjungi audit
// berbasis peramban. Bila `dist/` belum ada, uji dilewati.
// node tests/heading.mjs
import fs from 'node:fs';
import path from 'node:path';
import { root, check, checks } from './_util.mjs';

const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) {
  console.log('  lewati - dist/ belum ada, uji struktur judul dilewati');
  console.log('PASS heading (dilewati)');
} else {
  const pages = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === 'index.html') pages.push(full);
    }
  };
  walk(dist);

  const h1Failures = [];
  const skipFailures = [];
  let scanned = 0;

  for (const page of pages) {
    const html = fs.readFileSync(page, 'utf8');
    // Lewati stub pengalihan (meta refresh) yang memang tanpa struktur konten.
    if (/http-equiv=["']refresh["']/i.test(html)) continue;

    const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
    if (levels.length === 0) continue;
    scanned++;

    const rel = path.relative(dist, page).split(path.sep).join('/');
    const h1Count = levels.filter((n) => n === 1).length;
    if (h1Count !== 1) h1Failures.push(`${rel} (h1: ${h1Count})`);

    for (let i = 1; i < levels.length; i++) {
      if (levels[i] - levels[i - 1] > 1) {
        skipFailures.push(`${rel} (h${levels[i - 1]} -> h${levels[i]})`);
        break;
      }
    }
  }

  check(`tepat satu <h1> per halaman (${scanned} halaman)`, () => {
    if (h1Failures.length) {
      throw new Error(`halaman tanpa tepat satu h1:\n    ${h1Failures.join('\n    ')}`);
    }
  });

  check('tidak ada lompatan tingkat judul', () => {
    if (skipFailures.length) {
      throw new Error(`lompatan tingkat judul:\n    ${skipFailures.join('\n    ')}`);
    }
  });

  console.log(`PASS heading (${checks.count} pemeriksaan)`);
}

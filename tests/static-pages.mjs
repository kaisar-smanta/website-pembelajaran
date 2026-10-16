// Penjaga registri halaman statis.
//
// `STATIC_PAGES` (`src/data/display.ts`) adalah satu-satunya daftar kanonik yang
// dipakai sitemap, pencarian, peta situs, dan footer. Uji ini memastikan setiap
// entri masih punya berkas rute, sehingga halaman yang dihapus tanpa memperbarui
// registri akan ketahuan.

import fs from 'node:fs';
import path from 'node:path';
import { check, load, root } from './_util.mjs';

const { STATIC_PAGES } = await load('src/data/display.ts');

// Halaman mata pelajaran memakai rute dinamis `[subject]/index.astro`.
const DYNAMIC = new Set(['matematika', 'matematika-lanjut']);

function hasPageFile(pagePath) {
  if (pagePath === '') return fs.existsSync(path.join(root, 'src/pages/index.astro'));
  const candidates = [
    path.join(root, 'src/pages', `${pagePath}.astro`),
    path.join(root, 'src/pages', pagePath, 'index.astro'),
  ];
  return candidates.some((candidate) => fs.existsSync(candidate));
}

check('setiap halaman statis punya berkas rute', () => {
  for (const page of STATIC_PAGES) {
    if (DYNAMIC.has(page.path)) continue;
    if (!hasPageFile(page.path)) throw new Error(`tidak ada berkas rute untuk /${page.path}`);
  }
});

check('path halaman statis unik', () => {
  const seen = new Set();
  for (const page of STATIC_PAGES) {
    if (seen.has(page.path)) throw new Error(`path ganda: /${page.path}`);
    seen.add(page.path);
  }
});

console.log(`Halaman statis diperiksa: ${STATIC_PAGES.length}`);

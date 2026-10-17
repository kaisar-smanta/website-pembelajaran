// Anggaran ukuran keluaran build: mencegah penggelembungan diam-diam pada
// bundel klien, CSS, dan halaman terberat, serta memastikan font berformat
// lama (ttf/woff) tidak ikut diterbitkan saat padanan woff2 tersedia.
// Bila `dist/` belum ada, uji dilewati.
// node tests/budget.mjs
import fs from 'node:fs';
import path from 'node:path';
import { root, ok, check, checks } from './_util.mjs';
import { byExtension, collectFiles } from '../scripts/lib/files.mjs';

const dist = path.join(root, 'dist');
const astroDir = path.join(dist, '_astro');

if (!fs.existsSync(dist)) {
  console.log('  lewati - dist/ belum ada, uji anggaran dilewati');
  console.log('PASS budget (dilewati)');
} else {
  const KB = 1024;
  const sum = (files) => files.reduce((total, file) => total + fs.statSync(file).size, 0);

  const jsFiles = collectFiles(astroDir, byExtension('.js'));
  const cssFiles = collectFiles(astroDir, byExtension('.css'));
  const htmlFiles = collectFiles(dist, byExtension('.html'));

  // Jangan lolos hanya karena tidak ada berkas yang dipindai.
  ok(jsFiles.length > 0, 'tidak ada berkas JS di dist/_astro');
  ok(cssFiles.length > 0, 'tidak ada berkas CSS di dist/_astro');

  const jsBytes = sum(jsFiles);
  const cssBytes = sum(cssFiles);
  const maxJs = Math.max(0, ...jsFiles.map((file) => fs.statSync(file).size));
  const largestHtml = htmlFiles
    .map((file) => ({ file, size: fs.statSync(file).size }))
    .sort((a, b) => b.size - a.size)[0];

  // Batas diberi kelonggaran di atas ukuran sekarang agar hanya menangkap
  // lonjakan besar, bukan pertumbuhan wajar.
  const JS_TOTAL = 320 * KB;
  const CSS_TOTAL = 400 * KB;
  const JS_CHUNK = 40 * KB;
  const HTML_PAGE = 2600 * KB;

  check(`total JS klien <= ${JS_TOTAL / KB} KB`, () => {
    ok(jsBytes <= JS_TOTAL, `total JS ${(jsBytes / KB).toFixed(0)} KB melebihi anggaran`);
  });
  check(`total CSS <= ${CSS_TOTAL / KB} KB`, () => {
    ok(cssBytes <= CSS_TOTAL, `total CSS ${(cssBytes / KB).toFixed(0)} KB melebihi anggaran`);
  });
  check(`potongan JS terbesar <= ${JS_CHUNK / KB} KB`, () => {
    ok(maxJs <= JS_CHUNK, `potongan JS ${(maxJs / KB).toFixed(0)} KB melebihi anggaran`);
  });
  check(`halaman HTML terberat <= ${HTML_PAGE / KB} KB`, () => {
    ok(Boolean(largestHtml), 'tidak ada berkas HTML di dist/');
    ok(
      largestHtml && largestHtml.size <= HTML_PAGE,
      `halaman ${largestHtml?.file ?? ''} ${((largestHtml?.size ?? 0) / KB).toFixed(0)} KB melebihi anggaran`,
    );
  });
  check('font ttf/woff tidak diterbitkan bila ada woff2', () => {
    const files = fs.readdirSync(astroDir);
    // Vite menyisipkan hash konten per format, jadi cocokkan nama keluarga
    // font (bagian sebelum titik pertama), bukan nama berkas penuh.
    const family = (name) => name.slice(0, name.indexOf('.'));
    const woff2 = new Set(files.filter((name) => name.endsWith('.woff2')).map(family));
    const legacy = files.filter(
      (name) => (name.endsWith('.woff') || name.endsWith('.ttf')) && woff2.has(family(name)),
    );
    ok(legacy.length === 0, `font lama tersisa: ${legacy.slice(0, 5).join(', ')}`);
  });

  console.log(`PASS budget (${checks.count} pemeriksaan)`);
}

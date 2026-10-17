// Uji kelengkapan sitemap dua arah: setiap URL di `dist/sitemap.xml` harus
// menunjuk berkas nyata, dan setiap halaman konten (bukan pengalihan, bukan
// `noindex`) harus tercantum. Mencegah halaman kosong terdaftar maupun rute
// baru yang lupa didaftarkan. Bila `dist/` belum ada, uji dilewati.
// node tests/sitemap.mjs
import fs from 'node:fs';
import path from 'node:path';
import { root, ok, check, checks } from './_util.mjs';
import { byExtension, collectFiles, resolveDistFile } from '../scripts/lib/files.mjs';

const dist = path.join(root, 'dist');
const sitemapPath = path.join(dist, 'sitemap.xml');
const robotsPath = path.join(dist, 'robots.txt');

// Deteksi `noindex` yang tidak bergantung urutan atribut dan menghormati tanda
// kutip (agar `>` di dalam nilai atribut tidak memotong tag).
const TAGS = /<\/?[a-zA-Z](?:"[^"]*"|'[^']*'|[^>])*>/g;
function hasNoindex(html) {
  for (const tag of html.matchAll(TAGS)) {
    if (
      /^<meta\b/i.test(tag[0]) &&
      /(?<![\w-])name\s*=\s*["']robots["']/i.test(tag[0]) &&
      /(?<![\w-])content\s*=\s*["'][^"']*noindex/i.test(tag[0])
    ) {
      return true;
    }
  }
  return false;
}

if (!fs.existsSync(sitemapPath)) {
  console.log('  lewati - dist/sitemap.xml belum ada, uji sitemap dilewati');
  console.log('PASS sitemap (dilewati)');
} else {
  // Turunkan base path dari baris Sitemap di robots.txt agar uji mengikuti
  // build apa pun tanpa menyalin konfigurasi.
  const robots = fs.readFileSync(robotsPath, 'utf8');
  const sitemapLine = robots
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => /^sitemap:/i.test(line));
  const sitemapUrl = sitemapLine ? sitemapLine.slice(sitemapLine.indexOf(':') + 1).trim() : '';
  const sitemapPathname = sitemapUrl ? new URL(sitemapUrl).pathname : '/sitemap.xml';
  const base = sitemapPathname.replace(/sitemap\.xml$/, '') || '/';
  const origin = sitemapUrl ? new URL(sitemapUrl).origin : '';

  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const locations = [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
  const locPaths = new Set(locations.map((loc) => new URL(loc).pathname));

  const missing = [];
  const noindexed = [];
  const wrongOrigin = [];
  for (const loc of locations) {
    const url = new URL(loc);
    if (origin && url.origin !== origin) wrongOrigin.push(loc);
    const file = resolveDistFile(dist, base, url.pathname);
    if (!fs.existsSync(file)) {
      missing.push(`${url.pathname} -> ${path.relative(dist, file)}`);
      continue;
    }
    const html = fs.readFileSync(file, 'utf8');
    if (hasNoindex(html)) noindexed.push(url.pathname);
  }

  // Arah sebaliknya: halaman konten yang seharusnya terindeks tetapi absen.
  const absent = [];
  for (const file of collectFiles(dist, byExtension('.html'))) {
    const html = fs.readFileSync(file, 'utf8');
    if (/http-equiv=["']refresh["']/i.test(html)) continue;
    if (hasNoindex(html)) continue;
    const relPath = path.relative(dist, file).split(path.sep).join('/');
    // Halaman luring disajikan service worker, bukan halaman untuk diindeks.
    if (relPath === 'offline.html') continue;
    // index.html mewakili direktori; berkas lain (mis. 404.html) tetap dicoba.
    const pathname = relPath.endsWith('index.html')
      ? `${base}${relPath.slice(0, -'index.html'.length)}`
      : `${base}${relPath}`;
    if (!locPaths.has(pathname)) absent.push(pathname);
  }

  check(`semua ${locations.length} URL sitemap menunjuk berkas di dist`, () => {
    ok(locations.length > 0, 'sitemap.xml kosong');
    ok(missing.length === 0, `URL tanpa berkas:\n    ${missing.slice(0, 20).join('\n    ')}`);
  });

  check('sitemap memakai origin tunggal dan tanpa duplikat', () => {
    ok(wrongOrigin.length === 0, `origin lain:\n    ${wrongOrigin.slice(0, 10).join('\n    ')}`);
    ok(
      locPaths.size === locations.length,
      `URL sitemap duplikat (${locations.length} <loc>, ${locPaths.size} unik)`,
    );
  });

  check('halaman noindex tidak tercantum di sitemap', () => {
    ok(
      noindexed.length === 0,
      `halaman noindex di sitemap:\n    ${noindexed.slice(0, 20).join('\n    ')}`,
    );
  });

  check('setiap halaman konten terindeks ada di sitemap', () => {
    ok(
      absent.length === 0,
      `halaman absen dari sitemap:\n    ${absent.slice(0, 20).join('\n    ')}`,
    );
  });

  console.log(`PASS sitemap (${checks.count} pemeriksaan)`);
}

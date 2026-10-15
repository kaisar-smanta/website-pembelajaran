// Uji keluaran build yang berkaitan dengan SEO: node tests/seo.mjs
//
// Pemeriksaan ini membaca hasil build di `dist/` sehingga bergantung pada build
// yang sudah dijalankan (dalam `npm run verify`, build mendahului uji). Bila
// `dist/` belum ada, mis. karena `npm test` dipanggil tanpa build lebih dahulu,
// berkas ini melewati pemeriksaan agar tidak menggagalkan uji unit.
import fs from 'node:fs';
import path from 'node:path';
import { root, ok, check, checks } from './_util.mjs';

const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) {
  console.log('  lewati - dist/ belum ada, uji keluaran build dilewati');
  console.log('PASS seo (dilewati)');
} else {
  const robotsPath = path.join(dist, 'robots.txt');
  const sitemapPath = path.join(dist, 'sitemap.xml');
  const manifestPath = path.join(dist, 'manifest.webmanifest');
  const homePath = path.join(dist, 'index.html');

  check('robots.txt ada dan memuat baris Sitemap', () => {
    ok(fs.existsSync(robotsPath), 'dist/robots.txt tidak ditemukan');
    const robots = fs.readFileSync(robotsPath, 'utf8');
    ok(/^sitemap:/im.test(robots), 'robots.txt tidak memuat baris "Sitemap:"');
  });

  check('sitemap.xml valid dan seluruh <loc> absolut', () => {
    ok(fs.existsSync(sitemapPath), 'dist/sitemap.xml tidak ditemukan');
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    ok(xml.startsWith('<?xml'), 'sitemap.xml tidak diawali deklarasi XML');
    ok(xml.includes('<urlset'), 'sitemap.xml tidak memuat elemen <urlset>');

    const locations = [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
    ok(locations.length > 0, 'sitemap.xml tidak memuat entri <loc>');
    for (const loc of locations) {
      ok(loc.startsWith('http'), `<loc> bukan URL absolut: ${loc}`);
    }

    const robots = fs.readFileSync(robotsPath, 'utf8');
    const sitemapLine = robots
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => /^sitemap:/i.test(line));
    const sitemapUrl = sitemapLine ? sitemapLine.slice(sitemapLine.indexOf(':') + 1).trim() : '';
    const home = sitemapUrl.replace(/sitemap\.xml$/, '');
    ok(home.length > 0, 'tidak dapat menurunkan URL beranda dari baris Sitemap');
    ok(locations.includes(home), `sitemap.xml tidak memuat URL beranda (${home})`);
  });

  check('manifest.webmanifest lengkap dan ikon 192/512 tersedia', () => {
    ok(fs.existsSync(manifestPath), 'dist/manifest.webmanifest tidak ditemukan');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

    for (const field of ['name', 'short_name', 'start_url', 'display']) {
      ok(typeof manifest[field] === 'string' && manifest[field].length > 0, `manifest tanpa ${field}`);
    }
    ok(Array.isArray(manifest.icons) && manifest.icons.length > 0, 'manifest tanpa icons');
    for (const icon of manifest.icons) {
      ok(typeof icon.src === 'string' && icon.src.length > 0, 'ikon tanpa src');
      ok(typeof icon.sizes === 'string' && icon.sizes.length > 0, 'ikon tanpa sizes');
      ok(typeof icon.type === 'string' && icon.type.length > 0, 'ikon tanpa type');
    }

    const hasSize = (size) =>
      manifest.icons.some((icon) => icon.sizes.split(/\s+/).includes(size));
    ok(hasSize('192x192'), 'manifest tanpa ikon 192x192');
    ok(hasSize('512x512'), 'manifest tanpa ikon 512x512');
  });

  check('berkas ikon manifest tersedia di dist', () => {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    for (const icon of manifest.icons) {
      const iconPath = path.join(dist, icon.src);
      ok(fs.existsSync(iconPath), `ikon ${icon.src} tidak ditemukan di dist/`);
    }
  });

  check('halaman beranda memuat metadata kanonik dan Open Graph', () => {
    ok(fs.existsSync(homePath), 'dist/index.html tidak ditemukan');
    const html = fs.readFileSync(homePath, 'utf8');
    ok(html.includes('<link rel="canonical"'), 'index.html tanpa tautan kanonik');
    ok(html.includes('og:title'), 'index.html tanpa meta og:title');
    ok(html.includes('<html lang="id"'), 'index.html tanpa <html lang="id"');
  });

  console.log(`PASS seo (${checks.count} pemeriksaan)`);
}

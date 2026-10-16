// Penjaga berkas PWA offline: manifest, service worker, dan halaman offline.
//
// Sebelumnya tidak ada uji sama sekali untuk manifest (selain sebagian di
// `seo.mjs`) maupun `sw.js`, sehingga perubahan yang mematahkan mode offline
// tidak terdeteksi.

import fs from 'node:fs';
import path from 'node:path';
import { check, ok, root } from './_util.mjs';

const publicDir = path.join(root, 'public');
const manifest = JSON.parse(fs.readFileSync(path.join(publicDir, 'manifest.webmanifest'), 'utf8'));
const sw = fs.readFileSync(path.join(publicDir, 'sw.js'), 'utf8');

check('manifest memuat metadata dasar', () => {
  for (const field of ['name', 'short_name', 'start_url', 'scope', 'id', 'theme_color', 'background_color', 'display']) {
    ok(typeof manifest[field] === 'string' && manifest[field].length > 0, `manifest.${field} kosong`);
  }
});

check('manifest memuat ikon 192 dan 512 maskable', () => {
  const has192 = manifest.icons.some((icon) => icon.sizes === '192x192');
  const has512 = manifest.icons.some((icon) => icon.sizes === '512x512');
  const maskable = manifest.icons.some((icon) => icon.purpose === 'maskable');
  ok(has192, 'ikon 192x192 tidak ada');
  ok(has512, 'ikon 512x512 tidak ada');
  ok(maskable, 'tidak ada ikon maskable');
});

check('berkas ikon manifest tersedia', () => {
  for (const icon of manifest.icons) {
    ok(fs.existsSync(path.join(publicDir, icon.src)), `ikon hilang: ${icon.src}`);
  }
});

check('halaman offline tersedia', () => {
  ok(fs.existsSync(path.join(publicDir, 'offline.html')), 'public/offline.html tidak ada');
});

check('service worker menyebut berkas inti', () => {
  for (const target of ['offline.html', 'manifest.webmanifest']) {
    ok(sw.includes(target), `sw.js tidak menyebut ${target}`);
  }
});

console.log('Berkas PWA diperiksa.');

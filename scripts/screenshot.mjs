// Mengambil tangkapan layar hasil build statis (dist/) memakai browser yang
// sudah terpasang (Chrome/Edge) lewat DevTools Protocol. Tanpa dependensi npm.
//
// Pemakaian:
//   npm run build
//   npm run screenshot
//
// Hasil disimpan di artifacts/screenshots/ (diabaikan git).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  findBrowser,
  killBrowser,
  launchBrowser,
  preparePage,
  startServer,
} from './lib/browser.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(root, 'dist');
const OUT = path.join(root, 'artifacts', 'screenshots');
const BASE = process.env.BASE_PATH || '/website-pembelajaran';

const JOBS = [
  { name: 'beranda-desktop-terang', pathname: '/', width: 1440, height: 900 },
  { name: 'beranda-desktop-gelap', pathname: '/', width: 1440, height: 900, dark: true },
  { name: 'beranda-mobile-terang', pathname: '/', width: 390, height: 844, dsf: 2, mobile: true },
  { name: 'tentang-desktop-terang', pathname: '/tentang', width: 1440, height: 900 },
  { name: 'peta-pembelajaran-desktop', pathname: '/peta-pembelajaran', width: 1440, height: 900 },
  { name: 'topik-trigonometri-desktop', pathname: '/kelas/X/geometri/trigonometri', width: 1440, height: 900 },
  { name: 'topik-trigonometri-gelap', pathname: '/kelas/X/geometri/trigonometri', width: 1440, height: 900, dark: true },
  { name: 'topik-trigonometri-mobile', pathname: '/kelas/X/geometri/trigonometri', width: 390, height: 844, dsf: 2, mobile: true },
  { name: 'kelas-x-desktop', pathname: '/kelas/X', width: 1440, height: 900 },
  { name: 'kelas-x-geometri-desktop', pathname: '/kelas/X/geometri', width: 1440, height: 900 },
  { name: 'latihan-desktop', pathname: '/latihan', width: 1440, height: 900 },
  { name: 'latihan-trigonometri-desktop', pathname: '/latihan/trigonometri', width: 1440, height: 900 },
  { name: 'latihan-trigonometri-mobile', pathname: '/latihan/trigonometri', width: 390, height: 844, dsf: 2, mobile: true },
  { name: 'eksplorasi-desktop', pathname: '/eksplorasi', width: 1440, height: 900 },
  { name: 'eksplorasi-mobile', pathname: '/eksplorasi', width: 390, height: 844, dsf: 2, mobile: true },
  { name: 'aplikasi-desktop', pathname: '/aplikasi', width: 1440, height: 900 },
  { name: 'alat-desktop', pathname: '/alat', width: 1440, height: 900 },
  { name: 'referensi-desktop', pathname: '/referensi', width: 1440, height: 900 },
  { name: 'cari-desktop', pathname: '/cari', width: 1440, height: 900 },
  { name: 'peta-pembelajaran-mobile', pathname: '/peta-pembelajaran', width: 390, height: 844, dsf: 2, mobile: true },
];

async function capture(cdp, port, job) {
  const page = await preparePage(cdp, {
    url: `http://127.0.0.1:${port}${BASE}${job.pathname}`,
    width: job.width,
    height: job.height,
    dsf: job.dsf ?? 1,
    mobile: job.mobile ?? false,
    dark: job.dark ?? false,
    // Nonaktifkan animasi reveal agar seluruh konten tampil pada cuplikan
    // seluruh halaman (tanpa ini, konten di bawah lipatan tetap transparan).
    reduceMotion: true,
  });

  const metrics = await page.s('Page.getLayoutMetrics');
  const size = metrics.cssContentSize || metrics.contentSize;
  const clip = {
    x: 0,
    y: 0,
    width: Math.ceil(size.width),
    height: Math.min(Math.ceil(size.height), 16000),
    scale: 1,
  };
  const shot = await page.s('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true,
    clip,
  });

  const file = path.join(OUT, `${job.name}.png`);
  fs.writeFileSync(file, Buffer.from(shot.data, 'base64'));
  await page.close();
  const kb = Math.round(fs.statSync(file).size / 1024);
  console.log(
    `  ${job.name}.png  (${job.width}x${clip.height} @${job.dsf ?? 1}x, ${job.dark ? 'gelap' : 'terang'})  ${kb} KB`,
  );
}

let handle;
async function main() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('dist/ belum ada. Jalankan: npm run build');
    process.exit(1);
  }
  fs.mkdirSync(OUT, { recursive: true });

  const browser = findBrowser();
  if (!browser) {
    console.error('Chrome/Edge tidak ditemukan. Setel CHROME_PATH.');
    process.exit(1);
  }
  console.log(`Browser: ${browser}`);

  const { server, port } = await startServer(DIST, BASE);
  handle = await launchBrowser(browser);
  try {
    console.log('Menulis tangkapan layar ke artifacts/screenshots/\n');
    for (const job of JOBS) await capture(handle.cdp, port, job);
    console.log('\nSelesai.');
  } finally {
    handle.cdp.close();
    killBrowser(handle.proc, handle.userDataDir);
    server.closeAllConnections?.();
    server.close();
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    if (handle) killBrowser(handle.proc, handle.userDataDir);
    process.exit(1);
  });

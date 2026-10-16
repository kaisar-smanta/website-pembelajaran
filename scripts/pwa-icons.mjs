// Membuat ikon PWA (192, 512, maskable 512, dan apple-touch 180) dari
// lambang situs memakai browser headless yang sama dengan og-image.mjs.
// Pemakaian: node scripts/pwa-icons.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findBrowser, killBrowser, launchBrowser, preparePage } from './lib/browser.mjs';
import { replaceFile, writeTempFile } from './lib/files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(root, 'public');

const BRAND = '#2f4fd8';

// Latar penuh (maskable) butuh bidang warna tanpa sudut membulat agar aman
// ketika sistem memotongnya menjadi bentuk bulat. Glyph dijaga di zona aman.
function iconHtml(size, { maskable = false } = {}) {
  const radius = maskable ? 0 : Math.round(size * 0.22);
  const glyph = Math.round(size * (maskable ? 0.42 : 0.58));
  return `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${size}px; height: ${size}px; background: ${BRAND}; }
  .icon {
    width: ${size}px; height: ${size}px;
    background: ${BRAND};
    border-radius: ${radius}px;
    display: flex; align-items: center; justify-content: center;
  }
  .glyph {
    font-family: Georgia, 'Times New Roman', serif;
    font-weight: 700; color: #ffffff; font-size: ${glyph}px; line-height: 1;
  }
</style>
</head>
<body><div class="icon"><span class="glyph">&#8721;</span></div></body>
</html>`;
}

const JOBS = [
  { file: 'icon-192.png', size: 192, maskable: false },
  { file: 'icon-512.png', size: 512, maskable: false },
  { file: 'icon-maskable-512.png', size: 512, maskable: true },
  { file: 'apple-touch-icon.png', size: 180, maskable: false },
];

let handle;

async function capture(cdp, job) {
  const out = path.join(OUT_DIR, job.file);
  const url = `data:text/html;charset=utf-8,${encodeURIComponent(
    iconHtml(job.size, { maskable: job.maskable }),
  )}`;

  // preparePage menyeragamkan penyiapan target/viewport/navigasi dengan skrip
  // peramban lain; ikon berukuran pas viewport sehingga tidak perlu digulir.
  const page = await preparePage(cdp, {
    url,
    width: job.size,
    height: job.size,
    dsf: 1,
    scroll: false,
  });
  let tmp;
  try {
    const shot = await page.s('Page.captureScreenshot', { format: 'png' });
    tmp = writeTempFile(out, Buffer.from(shot.data, 'base64'));
    await page.close();
    replaceFile(tmp, out);
    tmp = undefined;
  } finally {
    try {
      if (tmp && fs.existsSync(tmp)) fs.rmSync(tmp, { force: true });
    } catch {}
  }

  const stat = fs.statSync(out);
  console.log(`public/${job.file}  (${job.size}x${job.size}, ${Math.round(stat.size / 1024)} KB)`);
}

async function main() {
  const browser = findBrowser();
  if (!browser) {
    console.error('Chrome/Edge tidak ditemukan. Setel CHROME_PATH untuk membuat ikon PWA.');
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`Browser: ${browser}`);

  handle = await launchBrowser(browser);
  try {
    for (const job of JOBS) await capture(handle.cdp, job);
  } finally {
    handle.cdp.close();
    killBrowser(handle.proc, handle.userDataDir);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    if (handle) killBrowser(handle.proc, handle.userDataDir);
    process.exit(1);
  });

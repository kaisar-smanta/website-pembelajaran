import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findBrowser, killBrowser, launchBrowser, sleep } from './lib/browser.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'public', 'og-default.png');
const TMP = `${OUT}.tmp`;
const WIDTH = 1200;
const HEIGHT = 630;

const html = `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${WIDTH}px; height: ${HEIGHT}px; }
  body {
    background: #f6f7fb;
    color: #131a2b;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 64px 80px 56px;
    position: relative;
    overflow: hidden;
  }
  .accent { position: absolute; top: 0; left: 0; width: 100%; height: 14px; background: #2f4fd8; }
  .glow {
    position: absolute; right: -160px; bottom: -200px; width: 560px; height: 560px;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(47,79,216,0.16), rgba(47,79,216,0) 70%);
  }
  .brand { font-size: 34px; font-weight: 700; letter-spacing: 0.2px; color: #2f4fd8; }
  .rule { width: 96px; height: 6px; border-radius: 3px; background: #2f4fd8; margin-bottom: 32px; }
  .headline {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 78px; line-height: 1.06; font-weight: 700; max-width: 1000px;
  }
  .subtitle { font-size: 30px; color: #4a5468; margin-top: 28px; }
  .footer { font-size: 24px; color: #6b7488; position: relative; z-index: 1; }
</style>
</head>
<body>
  <div class="accent"></div>
  <div class="glow"></div>
  <header>
    <div class="brand">Matematika SMA</div>
  </header>
  <main>
    <div class="rule"></div>
    <h1 class="headline">Paham konsep, bukan sekadar hafal rumus</h1>
    <p class="subtitle">Kurikulum Merdeka &middot; Kelas X&ndash;XII &middot; Gratis, tanpa akun</p>
  </main>
  <footer class="footer">Disusun oleh Kaisar Titoniran Akbar, S.Pd &mdash; SMAN 1 Tanjung</footer>
</body>
</html>`;

const url = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;

let handle;

async function main() {
  const browser = findBrowser();
  if (!browser) {
    console.error('Chrome/Edge tidak ditemukan. Setel CHROME_PATH untuk membuat og-default.png.');
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  console.log(`Browser: ${browser}`);

  handle = await launchBrowser(browser);
  try {
    const target = await handle.cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await handle.cdp.send('Target.attachToTarget', {
      targetId: target.targetId,
      flatten: true,
    });
    const s = (m, p) => handle.cdp.send(m, p, sessionId);
    await s('Page.enable');
    await s('Emulation.setDeviceMetricsOverride', {
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: 1,
      mobile: false,
      screenWidth: WIDTH,
      screenHeight: HEIGHT,
    });

    const loaded = handle.cdp.once('Page.loadEventFired');
    await s('Page.navigate', { url });
    await Promise.race([loaded, sleep(8000)]);
    await sleep(500);

    const shot = await s('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(TMP, Buffer.from(shot.data, 'base64'));
    fs.renameSync(TMP, OUT);

    await handle.cdp.send('Target.closeTarget', { targetId: target.targetId });
    const stat = fs.statSync(OUT);
    console.log(`public/og-default.png  (${WIDTH}x${HEIGHT}, ${Math.round(stat.size / 1024)} KB)`);
  } finally {
    try {
      if (fs.existsSync(TMP)) fs.rmSync(TMP, { force: true });
    } catch {}
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

// Perkakas bersama untuk mengendalikan browser headless lewat DevTools Protocol.
// Tanpa dependensi npm; memakai Chrome/Edge yang terpasang di sistem.

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn } from 'node:child_process';

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

export function resolveDistFile(distDir, base, urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0]);
  if (base !== '/' && p.startsWith(base)) p = p.slice(base.length);
  if (!p.startsWith('/')) p = `/${p}`;
  let file = path.join(distDir, p);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, 'index.html');
  } else if (!path.extname(file)) {
    file = path.join(distDir, p, 'index.html');
  }
  return file;
}

export function startServer(distDir, base) {
  const server = http.createServer((req, res) => {
    const file = resolveDistFile(distDir, base, req.url || '/');
    if (!file.startsWith(distDir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

export function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p));
}

export function connectCdp(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const persistent = new Map();
  const onceMap = new Map();

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(`${msg.error.message} (${msg.error.code})`));
      else resolve(msg.result);
      return;
    }
    if (msg.method) {
      for (const cb of persistent.get(msg.method) ?? []) cb(msg.params, msg.sessionId);
      const arr = onceMap.get(msg.method);
      if (arr) {
        onceMap.delete(msg.method);
        for (const cb of arr) cb(msg.params, msg.sessionId);
      }
    }
  });

  const ready = new Promise((resolve, reject) => {
    ws.addEventListener('open', () => resolve());
    ws.addEventListener('error', () => reject(new Error('Gagal membuka koneksi DevTools')));
  });

  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const mid = ++id;
      pending.set(mid, { resolve, reject });
      ws.send(JSON.stringify({ id: mid, method, params, ...(sessionId ? { sessionId } : {}) }));
    });

  const once = (method) =>
    new Promise((resolve) => {
      if (!onceMap.has(method)) onceMap.set(method, []);
      onceMap.get(method).push(resolve);
    });

  const on = (method, cb) => {
    if (!persistent.has(method)) persistent.set(method, new Set());
    persistent.get(method).add(cb);
    return () => persistent.get(method)?.delete(cb);
  };

  return { ws, ready, send, once, on, close: () => ws.close() };
}

export async function waitForEndpoint(port, timeoutMs = 15000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return await res.json();
    } catch {
      /* belum siap */
    }
    await sleep(150);
  }
  throw new Error(`Browser tidak merespons di port ${port}`);
}

export async function launchBrowser(browserPath) {
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cdp-profile-'));
  const proc = spawn(
    browserPath,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-extensions',
      '--force-color-profile=srgb',
      '--remote-debugging-port=0',
      `--user-data-dir=${userDataDir}`,
      'about:blank',
    ],
    { stdio: 'ignore' },
  );

  const portFile = path.join(userDataDir, 'DevToolsActivePort');
  const started = Date.now();
  while (!fs.existsSync(portFile) && Date.now() - started < 15000) await sleep(120);
  if (!fs.existsSync(portFile)) {
    killBrowser(proc, userDataDir);
    throw new Error('DevToolsActivePort tidak muncul');
  }
  const debugPort = Number(fs.readFileSync(portFile, 'utf8').split('\n')[0]);
  const info = await waitForEndpoint(debugPort);
  const cdp = connectCdp(info.webSocketDebuggerUrl);
  await cdp.ready;
  return { proc, userDataDir, cdp };
}

export function killBrowser(proc, userDataDir) {
  try {
    if (process.platform === 'win32') {
      spawn('taskkill', ['/pid', String(proc.pid), '/t', '/f'], { stdio: 'ignore' });
    } else {
      proc.kill('SIGKILL');
    }
  } catch {
    try {
      proc.kill();
    } catch {
      /* abaikan */
    }
  }
  try {
    fs.rmSync(userDataDir, { recursive: true, force: true });
  } catch {
    /* abaikan */
  }
}

const SCROLL_EXPR = `(async () => {
  const step = Math.max(200, window.innerHeight * 0.8);
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 70));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 300));
  return true;
})()`;

/**
 * Membuka tab baru, menyiapkan viewport/tema, menavigasi, dan (opsional)
 * menggulir untuk memicu animasi reveal. Mengembalikan handle sesi.
 */
export async function preparePage(cdp, opts) {
  const { url, width, height, dsf = 1, mobile = false, dark = false, scroll = true, reduceMotion = false } = opts;
  const target = await cdp.send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await cdp.send('Target.attachToTarget', {
    targetId: target.targetId,
    flatten: true,
  });
  const s = (m, p) => cdp.send(m, p, sessionId);

  const messages = [];
  const offException = cdp.on('Runtime.exceptionThrown', (p, sid) => {
    if (sid !== sessionId) return;
    messages.push({
      level: 'error',
      kind: 'exception',
      text:
        p.exceptionDetails?.exception?.description ??
        p.exceptionDetails?.text ??
        'Uncaught exception',
    });
  });
  const offConsole = cdp.on('Runtime.consoleAPICalled', (p, sid) => {
    if (sid !== sessionId || (p.type !== 'error' && p.type !== 'warning')) return;
    messages.push({
      level: p.type,
      kind: 'console',
      text: (p.args ?? [])
        .map((a) => a.value ?? a.description ?? a.type)
        .join(' ')
        .slice(0, 240),
    });
  });
  const offLog = cdp.on('Log.entryAdded', (p, sid) => {
    if (sid !== sessionId || (p.entry.level !== 'error' && p.entry.level !== 'warning')) return;
    messages.push({ level: p.entry.level, kind: 'log', text: p.entry.text.slice(0, 240) });
  });

  await s('Page.enable');
  await s('Runtime.enable');
  await s('Log.enable');
  await s('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: dsf,
    mobile,
    screenWidth: width,
    screenHeight: height,
  });
  if (mobile) await s('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  // Emulasi media: tema gelap dan/atau gerak minimal. Dengan
  // prefers-reduced-motion: reduce, animasi reveal tidak diaktifkan sehingga
  // seluruh konten pasti terlihat pada tangkapan layar dan audit.
  const mediaFeatures = [];
  if (dark) mediaFeatures.push({ name: 'prefers-color-scheme', value: 'dark' });
  if (reduceMotion) mediaFeatures.push({ name: 'prefers-reduced-motion', value: 'reduce' });
  if (mediaFeatures.length) {
    await s('Emulation.setEmulatedMedia', { features: mediaFeatures });
  }

  const loaded = cdp.once('Page.loadEventFired');
  await s('Page.navigate', { url });
  await Promise.race([loaded, sleep(8000)]);
  await sleep(600);
  if (scroll) {
    await s('Runtime.evaluate', { awaitPromise: true, returnByValue: true, expression: SCROLL_EXPR });
  }

  const close = async () => {
    offException();
    offConsole();
    offLog();
    try {
      await cdp.send('Target.closeTarget', { targetId: target.targetId });
    } catch {
      /* abaikan */
    }
  };

  return { targetId: target.targetId, sessionId, s, messages, close };
}

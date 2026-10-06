// Audit tata letak & aksesibilitas hasil build statis (dist/) memakai browser
// terpasang. Menjalankan pemeriksaan di dalam halaman lalu melaporkan temuan.
//
// Pemakaian:
//   npm run build
//   npm run audit
//
// Laporan: artifacts/audit/report.json (diabaikan git).

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
const OUT = path.join(root, 'artifacts', 'audit');
const BASE = process.env.BASE_PATH || '/website-pembelajaran';

const AUDIT_EXPR = `(() => {
  var issues = [];
  var de = document.documentElement;
  var vw = de.clientWidth;
  var vh = window.innerHeight;
  var add = function (o) { issues.push(o); };
  function desc(el) {
    if (!el || !el.tagName) return '?';
    var tag = el.tagName.toLowerCase();
    var id = el.id ? '#' + el.id : '';
    var cls = '';
    if (el.className && typeof el.className === 'string') {
      cls = '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.');
    }
    return tag + id + cls;
  }
  function inScroller(el) { return el.closest('.katex-display, .table-scroll, [data-scrollable]'); }
  function clipsX(el) {
    var n = el.parentElement;
    while (n && n !== document.body) {
      var ox = getComputedStyle(n).overflowX;
      if (ox === 'hidden' || ox === 'clip' || ox === 'auto' || ox === 'scroll') return true;
      n = n.parentElement;
    }
    return false;
  }

  if (de.scrollWidth > vw + 1) {
    add({ type: 'document-h-overflow', severity: 'high', detail: 'scrollWidth ' + de.scrollWidth + ' > viewport ' + vw });
  }

  var offenders = [];
  var nodes = document.querySelectorAll('body *');
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    if (el.closest('.skip-link, .visually-hidden')) continue;
    var st = getComputedStyle(el);
    if (st.display === 'none' || st.visibility === 'hidden' || st.position === 'fixed') continue;
    var r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    if (inScroller(el) || clipsX(el)) continue;
    if (r.right > vw + 1 || r.left < -1) {
      offenders.push({ el: desc(el), left: Math.round(r.left), right: Math.round(r.right) });
    }
  }
  if (offenders.length) add({ type: 'element-h-overflow', severity: 'high', items: offenders.slice(0, 12) });

  var brokenImgs = [];
  for (var j = 0; j < document.images.length; j++) {
    var img = document.images[j];
    if (img.complete && img.naturalWidth === 0) {
      brokenImgs.push({ el: desc(img), src: img.currentSrc || img.src });
    }
  }
  if (brokenImgs.length) add({ type: 'broken-image', severity: 'high', items: brokenImgs });

  var hidden = [];
  var reveals = document.querySelectorAll('.reveal');
  for (var k = 0; k < reveals.length; k++) {
    if (parseFloat(getComputedStyle(reveals[k]).opacity) < 0.5) hidden.push(desc(reveals[k]));
  }
  if (hidden.length) add({ type: 'reveal-hidden', severity: 'high', count: hidden.length, total: reveals.length, items: hidden.slice(0, 12) });

  // Tumpang tindih elemen dekoratif (maskot vs chip vs teks hero).
  function area(a, b) {
    var w = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    var h = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return w > 0 && h > 0 ? w * h : 0;
  }
  var overlaps = [];
  var chips = document.querySelectorAll('.hero-chip');
  var mascot = document.querySelector('.mascot');
  var copy = document.querySelector('.hero-copy');
  for (var ci = 0; ci < chips.length; ci++) {
    var cr = chips[ci].getBoundingClientRect();
    var chipArea = Math.max(1, cr.width * cr.height);
    if (mascot) {
      var ma = area(cr, mascot.getBoundingClientRect());
      if (ma > chipArea * 0.35) overlaps.push({ pair: 'chip/maskot', chip: desc(chips[ci]), pct: Math.round((ma / chipArea) * 100) });
    }
    if (copy) {
      var ca = area(cr, copy.getBoundingClientRect());
      if (ca > chipArea * 0.2) overlaps.push({ pair: 'chip/teks', chip: desc(chips[ci]), pct: Math.round((ca / chipArea) * 100) });
    }
  }
  if (overlaps.length) add({ type: 'decor-overlap', severity: 'medium', items: overlaps });

  function parseColor(c) {
    var m = c && c.match(/rgba?\\(([^)]+)\\)/);
    if (!m) return null;
    var p = m[1].split(',').map(function (x) { return parseFloat(x); });
    return { r: p[0], g: p[1], b: p[2], a: p[3] === undefined ? 1 : p[3] };
  }
  function luminance(c) {
    function f(v) { v = v / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  }
  function bgOf(el) {
    var n = el;
    while (n && n !== document.documentElement) {
      var c = parseColor(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0.5) return c;
      n = n.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  var samples = ['.hero-lead', '.hero-desc', '.hero-note', '.text-muted', '.text-soft', '.eyebrow',
    '.badge', '.credit-body p', '.philosophy-step p', 'footer a', '.primary-nav a', '.topic-summary',
    '.card p', '.btn-primary', '.btn-secondary', '.id-body p', '.link-list a'];
  var contrast = [];
  for (var si = 0; si < samples.length; si++) {
    var list = document.querySelectorAll(samples[si]);
    for (var li = 0; li < list.length; li++) {
      var e = list[li];
      var es = getComputedStyle(e);
      var er = e.getBoundingClientRect();
      if (er.width < 2 || es.visibility === 'hidden') continue;
      var fg = parseColor(es.color);
      if (!fg) continue;
      var bgc = bgOf(e);
      var l1 = luminance(fg), l2 = luminance(bgc);
      var ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
      var size = parseFloat(es.fontSize);
      var bold = parseInt(es.fontWeight, 10) >= 700;
      var large = size >= 24 || (size >= 18.66 && bold);
      var min = large ? 3 : 4.5;
      if (ratio < min) {
        contrast.push({ sel: samples[si], el: desc(e), ratio: Math.round(ratio * 100) / 100, min: min, fg: es.color, bg: 'rgb(' + Math.round(bgc.r) + ',' + Math.round(bgc.g) + ',' + Math.round(bgc.b) + ')' });
      }
    }
  }
  if (contrast.length) add({ type: 'low-contrast', severity: 'high', items: contrast.slice(0, 15) });

  // Ambang WCAG 2.5.8 (AA) = 24x24 px. Tautan inline di dalam paragraf
  // dikecualikan sesuai catatan standar.
  var taps = [];
  var interactive = document.querySelectorAll('a,button,input,select,summary');
  for (var ti = 0; ti < interactive.length; ti++) {
    var t = interactive[ti];
    var ts = getComputedStyle(t);
    var tr = t.getBoundingClientRect();
    if (tr.width < 2 || tr.height < 2 || ts.visibility === 'hidden' || ts.display === 'none') continue;
    if (t.tagName === 'A' && ts.display === 'inline' && t.closest('.prose')) continue;
    if (tr.height < 24 || tr.width < 24) {
      taps.push({ el: desc(t), w: Math.round(tr.width), h: Math.round(tr.height), text: (t.textContent || '').trim().slice(0, 30) });
    }
  }
  if (taps.length) add({ type: 'small-tap-target', severity: 'low', items: taps.slice(0, 20) });

  return { viewport: { w: vw, h: vh }, doc: { scrollW: de.scrollWidth, scrollH: de.scrollHeight }, issues: issues };
})()`;

const JOBS = [
  { name: 'beranda', path: '/', width: 1440, height: 900 },
  { name: 'beranda-gelap', path: '/', width: 1440, height: 900, dark: true },
  { name: 'beranda-mobile', path: '/', width: 390, height: 844, dsf: 2, mobile: true },
  { name: 'kelas-x', path: '/kelas/X', width: 1440, height: 900 },
  { name: 'kelas-x-geometri', path: '/kelas/X/geometri', width: 1440, height: 900 },
  { name: 'tentang', path: '/tentang', width: 1440, height: 900 },
  { name: 'tentang-mobile', path: '/tentang', width: 390, height: 844, dsf: 2, mobile: true },
  { name: 'peta', path: '/peta-pembelajaran', width: 1440, height: 900 },
  { name: 'peta-mobile', path: '/peta-pembelajaran', width: 390, height: 844, dsf: 2, mobile: true },
  { name: 'topik', path: '/kelas/X/geometri/trigonometri', width: 1440, height: 900 },
  { name: 'topik-gelap', path: '/kelas/X/geometri/trigonometri', width: 1440, height: 900, dark: true },
  { name: 'topik-mobile', path: '/kelas/X/geometri/trigonometri', width: 390, height: 844, dsf: 2, mobile: true },
  { name: 'latihan', path: '/latihan', width: 1440, height: 900 },
  { name: 'aplikasi', path: '/aplikasi', width: 1440, height: 900 },
  { name: 'alat', path: '/alat', width: 1440, height: 900 },
  { name: 'referensi', path: '/referensi', width: 1440, height: 900 },
  { name: 'cari', path: '/cari', width: 1440, height: 900 },
  { name: 'eksplorasi', path: '/eksplorasi', width: 1440, height: 900 },
  { name: 'eksplorasi-mobile', path: '/eksplorasi', width: 390, height: 844, dsf: 2, mobile: true },
];

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
  const { server, port } = await startServer(DIST, BASE);
  handle = await launchBrowser(browser);
  const report = { generatedAt: new Date().toISOString(), base: BASE, pages: [] };

  try {
    for (const job of JOBS) {
      const page = await preparePage(handle.cdp, {
        url: `http://127.0.0.1:${port}${BASE}${job.path}`,
        width: job.width,
        height: job.height,
        dsf: job.dsf ?? 1,
        mobile: job.mobile ?? false,
        dark: job.dark ?? false,
        // Audit dijalankan tanpa animasi reveal agar pemeriksaan tata letak
        // melihat seluruh konten, bukan elemen transparan di bawah lipatan.
        reduceMotion: true,
      });
      const res = await page.s('Runtime.evaluate', {
        expression: AUDIT_EXPR,
        returnByValue: true,
      });
      const value = res.result?.value ?? {};
      const entry = {
        name: job.name,
        path: job.path,
        viewport: { width: job.width, dark: !!job.dark, mobile: !!job.mobile },
        doc: value.doc,
        console: page.messages,
        issues: value.issues ?? [],
      };
      report.pages.push(entry);
      printEntry(entry);
      await page.close();
    }
  } finally {
    handle.cdp.close();
    killBrowser(handle.proc, handle.userDataDir);
    server.closeAllConnections?.();
    server.close();
  }

  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`\nLaporan lengkap: artifacts/audit/report.json`);
}

function printEntry(entry) {
  const vp = entry.viewport;
  const tag = `${vp.width}px${vp.mobile ? ' mobile' : ''}${vp.dark ? ' gelap' : ''}`;
  const consoleIssues = entry.console.filter((m) => m.level === 'error');
  const total = entry.issues.length + consoleIssues.length;
  console.log(`\n=== ${entry.name} (${tag}) — ${total} temuan ===`);
  for (const issue of entry.issues) {
    if (issue.detail) console.log(`  [${issue.severity}] ${issue.type}: ${issue.detail}`);
    else if (issue.count !== undefined) console.log(`  [${issue.severity}] ${issue.type} x${issue.count}: ${(issue.items || []).join(', ')}`);
    else if (issue.items) {
      console.log(`  [${issue.severity}] ${issue.type} x${issue.items.length}:`);
      for (const it of issue.items) console.log(`      ${JSON.stringify(it)}`);
    } else console.log(`  [${issue.severity}] ${issue.type}`);
  }
  for (const m of consoleIssues) console.log(`  [error] console: ${m.text}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    if (handle) killBrowser(handle.proc, handle.userDataDir);
    process.exit(1);
  });

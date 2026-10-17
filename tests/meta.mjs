// Uji metadata halaman hasil build: setiap halaman konten punya <title> dan
// meta description, judul unik antar halaman, dan kanonik unik. Mencegah
// duplikasi judul (mis. halaman Matematika vs Matematika Lanjut) dan kanonik
// yang menunjuk halaman lain. Bila `dist/` belum ada, uji dilewati.
// node tests/meta.mjs
import fs from 'node:fs';
import path from 'node:path';
import { root, ok, check, checks } from './_util.mjs';
import { byExtension, collectFiles } from '../scripts/lib/files.mjs';

const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) {
  console.log('  lewati - dist/ belum ada, uji meta dilewati');
  console.log('PASS meta (dilewati)');
} else {
  const files = collectFiles(dist, byExtension('.html'));
  const decode = (text) =>
    text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

  const missingTitle = [];
  const missingDescription = [];
  const missingCanonical = [];
  const canonicals = new Map();
  const titles = new Map();
  let scanned = 0;

  // Ekstraksi tidak bergantung urutan atribut dan menghormati tanda kutip,
  // sehingga `>` di dalam nilai atribut (mis. deskripsi memuat `b>1`) tidak
  // memotong tag. Halaman luring (offline.html) berdiri sendiri dan memang
  // tanpa deskripsi/kanonik SEO.
  const TAGS = /<\/?[a-zA-Z](?:"[^"]*"|'[^']*'|[^>])*>/g;
  const metaContent = (html, name) => {
    for (const tag of html.matchAll(TAGS)) {
      if (!/^<meta\b/i.test(tag[0])) continue;
      if (new RegExp(`(?<![\\w-])name\\s*=\\s*["']${name}["']`, 'i').test(tag[0])) {
        const content = tag[0].match(/(?<![\w-])content\s*=\s*["']([^"']*)["']/i);
        if (content) return content[1];
      }
    }
    return undefined;
  };
  const linkHref = (html, rel) => {
    for (const tag of html.matchAll(TAGS)) {
      if (!/^<link\b/i.test(tag[0])) continue;
      if (new RegExp(`(?<![\\w-])rel\\s*=\\s*["']${rel}["']`, 'i').test(tag[0])) {
        const href = tag[0].match(/(?<![\w-])href\s*=\s*["']([^"']+)["']/i);
        if (href) return href[1];
      }
    }
    return undefined;
  };

  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    if (/http-equiv=["']refresh["']/i.test(html)) continue;
    scanned++;
    const rel = path.relative(dist, file).split(path.sep).join('/');
    const isStandalone = rel === 'offline.html';

    const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '');
    if (!title) missingTitle.push(rel);
    else {
      const key = title.replace(/\s+/g, ' ').trim().toLowerCase();
      titles.set(key, [...(titles.get(key) ?? []), rel]);
    }

    const description = metaContent(html, 'description');
    if ((!description || !description.trim()) && !isStandalone) {
      missingDescription.push(rel);
    }

    const canonical = linkHref(html, 'canonical');
    if (!canonical) {
      if (!isStandalone) missingCanonical.push(rel);
    } else {
      canonicals.set(canonical, [...(canonicals.get(canonical) ?? []), rel]);
    }
  }

  check(`setiap halaman punya <title> (${scanned} halaman)`, () => {
    ok(missingTitle.length === 0, `tanpa judul:\n    ${missingTitle.slice(0, 20).join('\n    ')}`);
  });

  check('setiap halaman konten punya meta description', () => {
    ok(
      missingDescription.length === 0,
      `tanpa deskripsi:\n    ${missingDescription.slice(0, 20).join('\n    ')}`,
    );
  });

  check('setiap halaman konten punya kanonik', () => {
    ok(
      missingCanonical.length === 0,
      `tanpa kanonik:\n    ${missingCanonical.slice(0, 20).join('\n    ')}`,
    );
  });

  check('judul halaman unik antar halaman', () => {
    const dups = [...titles.entries()].filter(([, pages]) => pages.length > 1);
    ok(
      dups.length === 0,
      `judul ganda:\n    ${dups
        .slice(0, 20)
        .map(([title, pages]) => `"${title}" pada ${pages.join(', ')}`)
        .join('\n    ')}`,
    );
  });

  check('kanonik unik per halaman', () => {
    const dups = [...canonicals.entries()].filter(([, pages]) => pages.length > 1);
    ok(
      dups.length === 0,
      `kanonik ganda:\n    ${dups
        .slice(0, 20)
        .map(([url, pages]) => `${url} pada ${pages.join(', ')}`)
        .join('\n    ')}`,
    );
  });

  console.log(`PASS meta (${checks.count} pemeriksaan)`);
}

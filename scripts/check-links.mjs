// Pemeriksa tautan internal pada hasil build statis (dist).
// Pemakaian: node scripts/check-links.mjs
import fs from 'node:fs';
import { byExtension, collectFiles, resolveDistFile } from './lib/files.mjs';
import { decodeEntities } from './lib/html.mjs';

const dist = 'dist';
const base = process.env.BASE_PATH || '/website-pembelajaran';

if (!fs.existsSync(dist)) {
  console.error('dist/ belum ada. Jalankan: npm run build');
  process.exit(1);
}

// Pencocokan id memakai `includes` literal, bukan RegExp dari hash, sehingga
// karakter meta regex (mis. `$`, `(`, `.`) tidak perlu di-escape dan tidak
// dapat memicu pola yang tak diinginkan. Versi HTML dengan entitas didekode
// ikut dicoba agar `&amp;` pada atribut id tetap dikenali.
function hasId(html, id) {
  if (html.includes(`id="${id}"`)) return true;
  const decoded = html.replace(/id="([^"]*)"/g, (_, value) => `id="${decodeEntities(value)}"`);
  return decoded.includes(`id="${id}"`);
}

const files = collectFiles(dist, byExtension('.html'));
const broken = [];
let checked = 0;

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((x) => decodeEntities(x[1])));
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const href = decodeEntities(m[1]);
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (id && !ids.has(id)) broken.push(`${file.replace(dist, '')} -> anchor ${href}`);
      continue;
    }
    if (!href.startsWith(base)) continue;
    // Query string dan hash tidak mengubah berkas tujuan; `resolveDistFile`
    // (dipakai bersama server pratinjau) menanganinya secara seragam.
    const hash = href.split('#')[1] ?? '';
    const target = resolveDistFile(dist, base, href);
    checked++;
    if (!fs.existsSync(target)) broken.push(`${file.replace(dist, '')} -> ${href}`);
    else if (hash) {
      const targetHtml = fs.readFileSync(target, 'utf8');
      if (!hasId(targetHtml, hash)) {
        broken.push(`${file.replace(dist, '')} -> ${href} (anchor tidak ditemukan)`);
      }
    }
  }

  // Aset yang dirujuk lewat src/poster/srcset juga ikut diperiksa agar gambar,
  // skrip, dan berkas gaya yang hilang tidak lolos tanpa terdeteksi.
  const srcRe = /\b(?:src|poster)="([^"]+)"/g;
  while ((m = srcRe.exec(html))) {
    const src = decodeEntities(m[1]);
    if (!src.startsWith(base)) continue;
    checked++;
    if (!fs.existsSync(resolveDistFile(dist, base, src))) {
      broken.push(`${file.replace(dist, '')} -> ${src}`);
    }
  }
  const srcsetRe = /\bsrcset="([^"]+)"/g;
  while ((m = srcsetRe.exec(html))) {
    for (const candidate of decodeEntities(m[1]).split(',')) {
      const src = candidate.trim().split(/\s+/)[0];
      if (!src || !src.startsWith(base)) continue;
      checked++;
      if (!fs.existsSync(resolveDistFile(dist, base, src))) {
        broken.push(`${file.replace(dist, '')} -> ${src}`);
      }
    }
  }
}

if (checked === 0) {
  console.error(
    `Tidak ada tautan internal yang diperiksa (base: ${base}). ` +
      'Pastikan dist/ dibangun dengan BASE_PATH yang sama.',
  );
  process.exit(1);
}

console.log(`Berkas HTML: ${files.length} | tautan internal diperiksa: ${checked}`);
console.log(`Tautan rusak: ${broken.length}`);
if (broken.length) console.log(broken.join('\n'));
process.exitCode = broken.length ? 1 : 0;

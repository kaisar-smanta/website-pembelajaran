// Pemeriksa tautan internal pada hasil build statis (dist).
// Pemakaian: node scripts/check-links.mjs
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const base = process.env.BASE_PATH || '/website-pembelajaran';

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = walk(dist);
const broken = [];
let checked = 0;

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((x) => x[1]));
  const re = /href="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const href = m[1];
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (id && !ids.has(id)) broken.push(`${file.replace(dist, '')} -> anchor ${href}`);
      continue;
    }
    if (!href.startsWith(base)) continue;
    const [withoutHash, hash] = href.split('#');
    let rel = withoutHash.slice(base.length);
    if (rel === '' || rel === '/') rel = '/index.html';
    else if (rel.endsWith('/')) rel += 'index.html';
    else if (!rel.endsWith('.html') && !path.extname(rel)) rel += '/index.html';
    const target = path.join(dist, rel.replace(/^\//, ''));
    checked++;
    if (!fs.existsSync(target)) broken.push(`${file.replace(dist, '')} -> ${href}`);
    else if (hash) {
      const targetHtml = fs.readFileSync(target, 'utf8');
      if (!new RegExp(`id="${hash}"`).test(targetHtml)) {
        broken.push(`${file.replace(dist, '')} -> ${href} (anchor tidak ditemukan)`);
      }
    }
  }
}

console.log(`Berkas HTML: ${files.length} | tautan internal diperiksa: ${checked}`);
console.log(`Tautan rusak: ${broken.length}`);
if (broken.length) console.log(broken.join('\n'));
process.exitCode = broken.length ? 1 : 0;

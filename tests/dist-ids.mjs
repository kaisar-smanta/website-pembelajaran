// Uji integritas id pada hasil build: tidak ada id ganda dalam satu dokumen dan
// setiap rujukan `for`/`aria-*` menunjuk id yang ada. Id ganda memutus `label
// for`, `aria-labelledby`, dan `getElementById`; tanpa uji ini cacat semacam itu
// hanya terlihat lewat peramban. Bila `dist/` belum ada, uji dilewati.
// node tests/dist-ids.mjs
import fs from 'node:fs';
import path from 'node:path';
import { root, ok, check, checks } from './_util.mjs';
import { byExtension, collectFiles } from '../scripts/lib/files.mjs';

const dist = path.join(root, 'dist');

if (!fs.existsSync(dist)) {
  console.log('  lewati - dist/ belum ada, uji id dist dilewati');
  console.log('PASS dist-ids (dilewati)');
} else {
  const files = collectFiles(dist, byExtension('.html'));

  // Atribut yang nilainya adalah daftar id terpisah spasi.
  const REF_ATTRS = ['aria-labelledby', 'aria-describedby', 'aria-controls', 'aria-owns', 'aria-activedescendant'];

  const duplicateGroups = [];
  const dangling = [];
  let scanned = 0;

  for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    if (/http-equiv=["']refresh["']/i.test(html)) continue;
    scanned++;
    const rel = path.relative(dist, file).split(path.sep).join('/');

    const ids = [...html.matchAll(/(?<![\w-])id="([^"]*)"/g)].map((m) => m[1]);
    const counts = new Map();
    for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1);
    const idSet = new Set(ids);

    for (const [id, count] of counts) {
      if (id && count > 1) duplicateGroups.push(`${rel} (id="${id}" x${count})`);
    }

    for (const m of html.matchAll(/(?<![\w-])for="([^"]+)"/g)) {
      const target = m[1].trim();
      if (target && !idSet.has(target)) dangling.push(`${rel} -> for="${target}"`);
    }
    for (const attr of REF_ATTRS) {
      const re = new RegExp(`\\b${attr}="([^"]+)"`, 'g');
      for (const m of html.matchAll(re)) {
        for (const target of m[1].trim().split(/\s+/)) {
          if (target && !idSet.has(target)) dangling.push(`${rel} -> ${attr}="${target}"`);
        }
      }
    }
  }

  check(`tidak ada id ganda dalam satu dokumen (${scanned} halaman)`, () => {
    ok(
      duplicateGroups.length === 0,
      `id ganda ditemukan:\n    ${duplicateGroups.slice(0, 30).join('\n    ')}${
        duplicateGroups.length > 30 ? `\n    ... dan ${duplicateGroups.length - 30} lainnya` : ''
      }`,
    );
  });

  check('setiap for/aria-* menunjuk id yang ada', () => {
    ok(
      dangling.length === 0,
      `rujukan menggantung:\n    ${dangling.slice(0, 30).join('\n    ')}${
        dangling.length > 30 ? `\n    ... dan ${dangling.length - 30} lainnya` : ''
      }`,
    );
  });

  console.log(`PASS dist-ids (${checks.count} pemeriksaan)`);
}

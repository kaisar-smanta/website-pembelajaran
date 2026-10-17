// Uji kontrak maskot Numi: node tests/mascot.mjs
//
// Berkas .astro tidak dapat dimuat Node, jadi uji ini memindai sumber:
// memastikan tipe `MascotState` diekspor, setiap state yang dideklarasikan
// benar-benar dipakai di `src/`, akar SVG memancarkan `data-state`, serta
// semantik aksesibilitas label (role="img") dan dekoratif (aria-hidden).
import fs from 'node:fs';
import path from 'node:path';
import { root, check, ok, checks } from './_util.mjs';

const mascotPath = path.join(root, 'src/components/content/MathMascot.astro');
const source = fs.readFileSync(mascotPath, 'utf8');

/** Mengumpulkan seluruh berkas sumber `.astro`/`.ts` di bawah `src/`. */
function collectSources(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectSources(full));
    else if (/\.(astro|ts)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const sources = collectSources(path.join(root, 'src'));

const unionMatch = source.match(/export type MascotState\s*=\s*([^;]+);/);
const states = unionMatch ? [...unionMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]) : [];

check('MascotState diekspor dengan daftar state yang tidak kosong', () => {
  ok(unionMatch, 'deklarasi `export type MascotState = …` tidak ditemukan di MathMascot.astro');
  ok(states.length > 0, 'MascotState tidak mendeklarasikan state apa pun');
});

check('setiap state yang dideklarasikan benar-benar dipakai di src/', () => {
  const used = new Set(['default']);
  for (const file of sources) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(/\bstate="([^"]+)"/g)) used.add(match[1]);
    for (const match of text.matchAll(/\bdata-state="([^"]+)"/g)) used.add(match[1]);
  }
  for (const state of states) {
    ok(used.has(state), `state "${state}" dideklarasikan tetapi tidak dipakai di src/`);
  }
});

check('akar SVG memancarkan data-state', () => {
  ok(/data-state=\{state\}/.test(source), 'MathMascot tidak memancarkan `data-state={state}`');
});

check('label memakai role="img", dekoratif memakai aria-hidden', () => {
  ok(
    /role=\{decorative \? 'presentation' : 'img'\}/.test(source),
    'semantik role (presentation/img) tidak lengkap',
  );
  ok(
    /aria-hidden=\{decorative \? 'true' : undefined\}/.test(source),
    'semantik aria-hidden untuk maskot dekoratif tidak lengkap',
  );
  ok(/aria-label=\{label\}/.test(source), 'maskot berlabel tidak memancarkan aria-label');
});

check('kelas passthrough dijahit ke elemen akar', () => {
  ok(/class\?:\s*string/.test(source), 'props `class` tidak menerima kelas tambahan');
  ok(/class: className/.test(source), 'kelas passthrough tidak diambil dari props');
});

console.log(`PASS mascot (${checks.count} pemeriksaan)`);

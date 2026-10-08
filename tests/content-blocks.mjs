// Kontrak penulisan blok interaktif pada data topik.
//
// Setelah lapisan peningkatan otomatis (`enhance.ts`) dihapus, setiap bagian
// yang menuntut interaktivitas harus benar-benar memuat bloknya di sumber.
// Uji ini menggantikan pendekatan "regex sebagai skema" dengan pemeriksaan
// eksplisit, sehingga lupa menambahkan blok menjadi galat saat `npm test`.
//
// Pemakaian: node tests/content-blocks.mjs (dipanggil oleh `npm test`).

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

async function load(file) {
  return import(pathToFileURL(path.join(root, file)).href);
}

const topics = [];
for (const file of fs.readdirSync(path.join(root, 'src/data/topics'))) {
  if (
    !file.endsWith('.ts') ||
    file.startsWith('.migrate-') ||
    ['index.ts', 'enhance.ts', 'planned.ts'].includes(file)
  ) {
    continue;
  }
  const mod = await load(path.join('src/data/topics', file));
  for (const value of Object.values(mod)) {
    if (
      value &&
      typeof value === 'object' &&
      typeof value.id === 'string' &&
      Array.isArray(value.sections)
    ) {
      topics.push(value);
    }
  }
}

let checks = 0;
function ok(condition, message) {
  assert.ok(condition, message);
  checks++;
}

const blockKinds = new Set([
  'callout',
  'table',
  'exploration',
  'geogebra',
  'details',
  'prediction',
  'reflection',
  'step-reveal',
  'spot-mistake',
  'match',
  'flip-cards',
  'tabs',
]);

for (const topic of topics) {
  const label = `topik ${topic.id}`;
  const has = (section, kind) => (section.blocks ?? []).some((b) => b.kind === kind);

  for (const section of topic.sections) {
    for (const block of section.blocks ?? []) {
      ok(blockKinds.has(block.kind), `${label}, bagian ${section.id}: jenis blok tak dikenal (${block.kind})`);
    }

    if (section.kind === 'pemantik') {
      ok(has(section, 'prediction'), `${label}, bagian ${section.id}: pemantik tanpa blok prediction`);
    }
    if (section.kind === 'refleksi') {
      const reflection = (section.blocks ?? []).find((b) => b.kind === 'reflection');
      ok(reflection, `${label}, bagian ${section.id}: refleksi tanpa blok reflection`);
      if (reflection) {
        ok(reflection.prompts.length >= 1, `${label}, bagian ${section.id}: blok refleksi tanpa pertanyaan`);
      }
    }
    if (section.kind === 'eksplorasi') {
      ok(has(section, 'exploration'), `${label}, bagian ${section.id}: eksplorasi tanpa blok exploration`);
    }
  }
}

console.log(`Kontrak blok interaktif diperiksa: ${checks} asersi pada ${topics.length} topik`);

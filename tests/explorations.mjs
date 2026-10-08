// Integritas registri eksplorasi interaktif (src/data/explorations.ts).
//
// explorations.ts hanya memakai impor tipe sehingga dapat dimuat langsung.
// Metadata topik dibaca dari berkasnya satu per satu (index.ts memakai impor
// tanpa ekstensi) untuk memeriksa rujukan topik dan blok eksplorasi.
//
// Pemakaian: node tests/explorations.mjs (dipanggil oleh `npm test`).

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

async function load(file) {
  return import(pathToFileURL(path.join(root, file)).href);
}

// Union tipe dari src/types/content.ts (ExplorationType).
const EXPLORATION_TYPES = new Set([
  'function-slider',
  'compound-interest',
  'probability',
  'linear-regression',
  'sequence',
  'distribution',
  'conditional-probability',
  'circle',
  'matrix',
  'linear-system',
  'function-composition',
  'function-inverse',
  'polynomial',
  'vector',
  'conic',
  'derivative',
  'integral',
  'random-variable',
  'geogebra',
]);

const { explorations } = await load('src/data/explorations.ts');

let checks = 0;
function ok(condition, message) {
  assert.ok(condition, message);
  checks++;
}

// ---- Metadata topik dari berkas data topik ----
const topics = [];
for (const file of fs.readdirSync(path.join(root, 'src/data/topics'))) {
  if (!file.endsWith('.ts') || file === 'index.ts' || file === 'planned.ts') continue;
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
const topicIds = new Set(topics.map((t) => t.id));

// ---- Validasi eksplorasi ----
const seen = new Set();
const orderKeys = new Map();
for (const item of explorations) {
  const label = `eksplorasi ${item.id}`;
  ok(typeof item.id === 'string' && item.id.length > 0, `eksplorasi tanpa id`);
  ok(!seen.has(item.id), `id eksplorasi duplikat: ${item.id}`);
  seen.add(item.id);

  ok(EXPLORATION_TYPES.has(item.type), `${label}: tipe tidak dikenal (${item.type})`);
  ok(typeof item.title === 'string' && item.title.length > 0, `${label}: judul kosong`);
  ok(
    typeof item.description === 'string' && item.description.length > 0,
    `${label}: deskripsi kosong`,
  );

  if (item.topicId) {
    ok(topicIds.has(item.topicId), `${label}: topik tidak ditemukan -> ${item.topicId}`);
  }

  if (item.type === 'function-slider') {
    if (item.params === undefined) {
      console.warn(`Peringatan: ${label}: function-slider tanpa params`);
    } else {
      ok(Array.isArray(item.params), `${label}: params bukan larik`);
      for (const p of item.params) {
        ok(typeof p.name === 'string' && p.name.length > 0, `${label}: param tanpa name`);
        ok(typeof p.label === 'string' && p.label.length > 0, `${label}: param ${p.name} tanpa label`);
        for (const field of ['min', 'max', 'step', 'value']) {
          ok(
            typeof p[field] === 'number' && Number.isFinite(p[field]),
            `${label}: param ${p.name} ${field} bukan angka`,
          );
        }
        ok(p.min <= p.value, `${label}: param ${p.name}: min (${p.min}) > value (${p.value})`);
        ok(p.value <= p.max, `${label}: param ${p.name}: value (${p.value}) > max (${p.max})`);
      }
    }
  }

  if (item.type === 'geogebra') {
    ok(typeof item.url === 'string' && item.url.length > 0, `${label}: url kosong`);
    if (item.url === 'https://www.geogebra.org/classic') {
      console.warn(`Peringatan: ${label}: url hanya beranda GeoGebra generik`);
    }
  }

  if (item.order !== undefined && item.grade && item.element) {
    // Urutan harus unik di dalam pasangan (kelas, elemen) yang sama.
    const key = `${item.grade}|${item.element}|${item.order}`;
    const prev = orderKeys.get(key);
    ok(
      prev === undefined,
      `${label}: order ${item.order} duplikat pada ${item.grade}|${item.element} dengan ${prev ?? ''}`,
    );
    orderKeys.set(key, item.id);
  }
}

// ---- Rujukan blok eksplorasi pada topik ----
const explorationIds = new Set(explorations.map((e) => e.id));
for (const topic of topics) {
  for (const section of topic.sections) {
    for (const block of section.blocks ?? []) {
      if (block && block.kind === 'exploration') {
        ok(
          explorationIds.has(block.explorationId),
          `topik ${topic.id}#${section.id}: eksplorasi tidak ditemukan -> ${block.explorationId}`,
        );
      }
    }
  }
}

console.log(`Eksplorasi diperiksa: ${explorations.length} (${checks} asersi)`);
console.log(`Topik: ${topics.length}, rujukan eksplorasi diperiksa`);

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

  // Setiap eksplorasi wajib punya tujuan, skema prediksi-observasi-penjelasan,
  // dan minimal satu peringatan agar sisi panduan tidak kosong.
  ok(typeof item.goal === 'string' && item.goal.trim().length > 0, `${label}: goal kosong`);
  ok(
    item.prompts !== null && typeof item.prompts === 'object',
    `${label}: prompts hilang`,
  );
  if (item.prompts) {
    for (const field of ['predict', 'observe', 'explain']) {
      const value = item.prompts[field];
      ok(
        typeof value === 'string' && value.trim().length > 0,
        `${label}: prompt ${field} kosong`,
      );
    }
  }
  ok(
    Array.isArray(item.cautions) && item.cautions.length > 0,
    `${label}: cautions kosong`,
  );
  if (Array.isArray(item.cautions)) {
    item.cautions.forEach((caution, i) => {
      ok(
        typeof caution === 'string' && caution.trim().length > 0,
        `${label}: caution #${i + 1} kosong`,
      );
    });
  }

  if (item.topicId) {
    ok(topicIds.has(item.topicId), `${label}: topik tidak ditemukan -> ${item.topicId}`);
  }

  if (item.type === 'function-slider') {
    ok(
      Array.isArray(item.params) && item.params.length > 0,
      `${label}: function-slider tanpa params`,
    );
    for (const p of item.params ?? []) {
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

  if (item.type === 'geogebra') {
    ok(typeof item.url === 'string' && item.url.length > 0, `${label}: url kosong`);
    // Tautan beranda generik tidak dapat dipakai siswa; geogebra wajib menunjuk
    // applet spesifik, atau diganti simulasi native. Dipertahankan sebagai
    // kegagalan berlabel (bukan peringatan senyap) sampai perbaikan tuntas.
    ok(
      item.url !== 'https://www.geogebra.org/classic',
      `${label}: url hanya beranda GeoGebra generik (menunggu applet spesifik/simulasi native)`,
    );
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

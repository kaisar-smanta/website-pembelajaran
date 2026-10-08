// Integritas lapisan pengayaan & tantangan: memastikan setiap topik punya soal
// mahir yang cukup, topik pengayaan (supplementary) menjelaskan kaitannya dengan
// CP, serta bagian pengayaan (sejarah/tantangan) benar-benar ada pada materi.
//
// Pemakaian: node tests/pengayaan.mjs (dipanggil oleh `npm test`).

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

async function load(file) {
  return import(pathToFileURL(path.join(root, file)).href);
}

let checks = 0;
function ok(condition, message) {
  assert.ok(condition, message);
  checks++;
}

// ---- Topik ----
const topics = [];
for (const file of fs.readdirSync(path.join(root, 'src/data/topics'))) {
  if (!file.endsWith('.ts') || ['index.ts', 'planned.ts'].includes(file)) continue;
  const mod = await load(path.join('src/data/topics', file));
  for (const value of Object.values(mod)) {
    if (value && typeof value === 'object' && typeof value.id === 'string' && Array.isArray(value.sections)) {
      topics.push(value);
    }
  }
}

// ---- Soal ----
const questions = [];
for (const file of fs.readdirSync(path.join(root, 'src/data/questions'))) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const mod = await load(path.join('src/data/questions', file));
  for (const value of Object.values(mod)) {
    if (Array.isArray(value)) {
      for (const q of value) {
        if (q && typeof q === 'object' && typeof q.id === 'string') questions.push(q);
      }
    }
  }
}

const mahirByTopic = new Map();
for (const q of questions) {
  if (q.difficulty !== 'mahir') continue;
  mahirByTopic.set(q.topicId, (mahirByTopic.get(q.topicId) ?? 0) + 1);
}

let supplementaryCount = 0;
let sejarahCount = 0;
let tantanganCount = 0;
for (const topic of topics) {
  if (topic.status === 'rencana') continue;
  const mahir = mahirByTopic.get(topic.id) ?? 0;
  ok(mahir >= 3, `topik ${topic.id} hanya punya ${mahir} soal mahir (minimal 3)`);

  if (topic.supplementary) {
    supplementaryCount += 1;
    ok(
      typeof topic.cpNote === 'string' && topic.cpNote.trim().length > 0,
      `topik pengayaan ${topic.id} wajib punya cpNote penjelas`,
    );
  }

  for (const section of topic.sections) {
    if (section.kind === 'sejarah') sejarahCount += 1;
    if (section.kind === 'tantangan') tantanganCount += 1;
  }
}

ok(supplementaryCount >= 5, `minimal 5 topik pengayaan, ditemukan ${supplementaryCount}`);
ok(sejarahCount >= 4, `minimal 4 bagian sejarah, ditemukan ${sejarahCount}`);
ok(tantanganCount >= 8, `minimal 8 bagian tantangan, ditemukan ${tantanganCount}`);

console.log(
  `Pengayaan diperiksa: ${checks} asersi pada ${topics.length} topik ` +
    `(${supplementaryCount} pengayaan, ${sejarahCount} sejarah, ${tantanganCount} tantangan, ${questions.length} soal)`,
);

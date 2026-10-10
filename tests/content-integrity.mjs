// Integritas silang konten: memastikan rujukan topik <-> studi kasus konsisten,
// id/slug topik unik, soal pilihan ganda sehat, serta setiap bagian punya isi.
//
// Pemakaian: node tests/content-integrity.mjs (dipanggil oleh `npm test`).

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

const PRACTICE_KINDS = new Set(['latihan-dasar', 'latihan-cakap', 'latihan-mahir']);

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

// ---- Studi kasus ----
const { applications } = await load('src/data/applications/index.ts');
const applicationsById = new Map(applications.map((a) => [a.id, a]));

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

// ---- 1 & 2. Rujukan topik -> aplikasi/relatedTopics ----
const topicIds = new Set(topics.map((t) => t.id));
for (const topic of topics) {
  for (const appId of topic.applications ?? []) {
    const app = applicationsById.get(appId);
    ok(app, `topik ${topic.id}: studi kasus tidak ditemukan -> ${appId}`);
    if (app) {
      ok(
        app.topicIds.includes(topic.id),
        `topik ${topic.id}: studi kasus ${appId} tidak merujuk balik topik ini`,
      );
    }
  }
  for (const relId of topic.relatedTopics ?? []) {
    ok(topicIds.has(relId), `topik ${topic.id}: relatedTopics tidak ditemukan -> ${relId}`);
  }
}

// ---- 3. Id & slug topik unik ----
const seenIds = new Set();
const seenSlugs = new Set();
for (const topic of topics) {
  ok(!seenIds.has(topic.id), `id topik duplikat: ${topic.id}`);
  seenIds.add(topic.id);
  ok(!seenSlugs.has(topic.slug), `slug topik duplikat: ${topic.slug}`);
  seenSlugs.add(topic.slug);
}

// ---- 4. Integritas soal pilihan ganda ----
for (const q of questions) {
  if (q.type !== 'multiple-choice') continue;
  const options = Array.isArray(q.options) ? q.options : [];
  ok(options.length >= 2, `soal ${q.id}: pilihan ganda butuh minimal 2 opsi`);
  const keys = options.map((o) => o.key);
  ok(new Set(keys).size === keys.length, `soal ${q.id}: kunci opsi duplikat`);
  ok(keys.includes(q.answer), `soal ${q.id}: jawaban "${q.answer}" tidak ada di kunci opsi`);
}

// ---- 5 & 6. Bagian topik ----
for (const topic of topics) {
  const seenSections = new Set();
  for (const section of topic.sections) {
    ok(!seenSections.has(section.id), `topik ${topic.id}: id bagian duplikat -> ${section.id}`);
    seenSections.add(section.id);

    if (PRACTICE_KINDS.has(section.kind)) continue;
    const hasBody = typeof section.body === 'string' && section.body.trim().length > 0;
    const hasBlocks = Array.isArray(section.blocks) && section.blocks.length > 0;
    ok(hasBody || hasBlocks, `topik ${topic.id}: bagian ${section.id} kosong`);
  }
}

console.log(
  `Integritas konten diperiksa: ${checks} asersi pada ${topics.length} topik, ` +
    `${applications.length} studi kasus, ${questions.length} soal`,
);

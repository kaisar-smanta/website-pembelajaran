// Integritas dimensi "mata pelajaran" (Matematika vs Matematika Tingkat Lanjut).
//
// Memeriksa bahwa setiap topik, eksplorasi, studi kasus, dan jalur konsep
// memiliki mata pelajaran yang sah, serta elemen/kelas/fasenya konsisten dengan
// metadata mata pelajaran (mis. Matematika Lanjut hanya Fase F, tanpa Kelas X
// dan tanpa elemen Bilangan).
//
// Pemakaian: node tests/subjects.mjs (dipanggil oleh `npm test`).

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

async function load(file) {
  return import(pathToFileURL(path.join(root, file)).href);
}

const { SUBJECTS } = await load('src/data/curriculum.ts');

// Node ESM tidak menyelesaikan impor tanpa ekstensi di `topics/index.ts`,
// jadi baca metadata topik langsung dari berkasnya (seperti cp-coverage.mjs).
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
const topicSubject = (topic) => topic.subject ?? 'matematika';

const { explorations } = await load('src/data/explorations.ts');
const { applications } = await load('src/data/applications/index.ts');
const { learningPaths } = await load('src/data/learning-paths.ts');

let checks = 0;
function ok(condition, message) {
  assert.ok(condition, message);
  checks++;
}

const subjectIds = new Set(Object.keys(SUBJECTS));
const byId = new Map(topics.map((t) => [t.id, t]));

function knownSubject(entry, label) {
  const subject = entry.subject ?? 'matematika';
  ok(subjectIds.has(subject), `${label}: mata pelajaran tidak dikenal (${subject})`);
  return subject;
}

// ---- Topik ----
const topicIds = new Set();
// Rute `/latihan/[topic]` memakai slug tanpa segmen mata pelajaran, jadi slug
// topik wajib unik lintas mata pelajaran.
const slugSeen = new Map();
for (const topic of topics) {
  const label = `topik ${topic.id}`;
  ok(typeof topic.id === 'string' && topic.id.length > 0, `${label}: id kosong`);
  ok(!topicIds.has(topic.id), `id topik duplikat: ${topic.id}`);
  topicIds.add(topic.id);

  const subject = knownSubject(topic, label);
  const meta = SUBJECTS[subject];
  ok(meta.elements.includes(topic.element), `${label}: elemen ${topic.element} bukan milik ${subject}`);
  ok(meta.grades.includes(topic.grade), `${label}: kelas ${topic.grade} bukan milik ${subject}`);
  ok(meta.phases.includes(topic.phase), `${label}: fase ${topic.phase} bukan milik ${subject}`);
  ok(topicSubject(topic) === subject, `${label}: subjectOf tidak konsisten`);

  // Kelas/fase harus sepadan dengan fase kurikulum.
  const expectedPhase = topic.grade === 'X' ? 'E' : 'F';
  ok(topic.phase === expectedPhase, `${label}: fase ${topic.phase} tidak sepadan dengan kelas ${topic.grade}`);

  if (subject === 'matematika-lanjut') {
    ok(topic.element !== 'bilangan', `${label}: Matematika Lanjut tidak memuat elemen Bilangan`);
    ok(topic.grade !== 'X', `${label}: Matematika Lanjut tidak ada di Kelas X`);
    ok(topic.phase === 'F', `${label}: Matematika Lanjut hanya Fase F`);
  }

  const slugOwner = slugSeen.get(topic.slug);
  ok(
    slugOwner === undefined,
    `slug topik ganda (${topic.slug}): ${slugOwner ?? ''} dan ${topic.id}`,
  );
  slugSeen.set(topic.slug, topic.id);

  // Id bagian harus unik dalam satu topik agar anchor HTML tidak bertabrakan.
  const sectionIds = new Set();
  for (const section of topic.sections) {
    ok(
      typeof section.id === 'string' && section.id.length > 0,
      `${label}: ada bagian tanpa id`,
    );
    ok(!sectionIds.has(section.id), `${label}: id bagian ganda (${section.id})`);
    sectionIds.add(section.id);
  }
}

// ---- Eksplorasi ----
for (const item of explorations) {
  const label = `eksplorasi ${item.id}`;
  const subject = knownSubject(item, label);
  const meta = SUBJECTS[subject];
  if (item.element) {
    ok(meta.elements.includes(item.element), `${label}: elemen ${item.element} bukan milik ${subject}`);
  }
  if (item.grade) {
    ok(meta.grades.includes(item.grade), `${label}: kelas ${item.grade} bukan milik ${subject}`);
  }
  if (item.topicId) {
    const topic = byId.get(item.topicId);
    if (topic) {
      ok(
        topicSubject(topic) === subject,
        `${label}: mata pelajaran berbeda dengan topik ${item.topicId}`,
      );
    }
  }
}

// ---- Studi kasus ----
for (const app of applications) {
  const label = `studi kasus ${app.id}`;
  const subject = knownSubject(app, label);
  const meta = SUBJECTS[subject];
  ok(meta.elements.includes(app.element), `${label}: elemen ${app.element} bukan milik ${subject}`);
  ok(meta.grades.includes(app.grade), `${label}: kelas ${app.grade} bukan milik ${subject}`);
}

// ---- Jalur konsep ----
for (const pathEntry of learningPaths) {
  const label = `jalur ${pathEntry.id}`;
  const subject = knownSubject(pathEntry, label);
  const meta = SUBJECTS[subject];
  ok(meta.elements.includes(pathEntry.accent), `${label}: aksen ${pathEntry.accent} bukan milik ${subject}`);
  for (const node of pathEntry.nodes) {
    if (!node.id) continue;
    const topic = byId.get(node.id);
    ok(topic, `${label}: topik tidak ditemukan -> ${node.id}`);
    if (topic) {
      ok(
        topicSubject(topic) === subject,
        `${label}: node ${node.id} berbeda mata pelajaran`,
      );
    }
    if (node.element) {
      ok(
        meta.elements.includes(node.element),
        `${label}: elemen node ${node.element} bukan milik ${subject}`,
      );
    }
  }
}

const mtl = topics.filter((t) => topicSubject(t) === 'matematika-lanjut');
console.log(`Mata pelajaran: ${[...subjectIds].join(', ')}`);
console.log(`Topik: ${topics.length} (Matematika Lanjut: ${mtl.length})`);
console.log(`Integritas mata pelajaran diperiksa: ${checks} asersi`);

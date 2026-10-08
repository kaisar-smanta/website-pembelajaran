// Integritas data "Matematika dalam Kehidupan" (src/data/applications).
//
// Memuat berkas TypeScript secara langsung melalui type stripping Node, lalu
// memeriksa bahwa setiap studi kasus punya metadata lengkap, id unik, serta
// seluruh rujukan topik/eksplorasi benar-benar ada.
//
// Pemakaian: node tests/applications.mjs (dipanggil oleh `npm test`).

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

async function load(file) {
  return import(pathToFileURL(path.join(root, file)).href);
}

const { applications, relatedApplications } = await load(
  'src/data/applications/index.ts',
);

const CATEGORIES = new Set(['keuangan', 'data', 'pertumbuhan', 'pengukuran']);
const ELEMENTS = new Set(['bilangan', 'aljabar-fungsi', 'geometri', 'kalkulus', 'data-peluang']);
const GRADES = new Set(['X', 'XI', 'XII']);
const LEVELS = new Set(['dasar', 'cakap', 'mahir']);
const SUBJECTS = new Set(['matematika', 'matematika-lanjut']);

let checks = 0;
function ok(condition, message) {
  assert.ok(condition, message);
  checks++;
}

// ---- Kumpulkan metadata topik dari berkas data topik ----
const topicDir = path.join(root, 'src/data/topics');
const topicMeta = new Map();
for (const file of fs.readdirSync(topicDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts' || file === 'planned.ts') continue;
  const mod = await load(path.join('src/data/topics', file));
  for (const value of Object.values(mod)) {
    if (value && typeof value === 'object' && typeof value.id === 'string' && Array.isArray(value.sections)) {
      topicMeta.set(value.id, {
        grade: value.grade,
        element: value.element,
        subject: value.subject ?? 'matematika',
      });
    }
  }
}
const topicIds = new Set(topicMeta.keys());

// ---- Kumpulkan id eksplorasi ----
const { explorations } = await load('src/data/explorations.ts');
const explorationIds = new Set(explorations.map((e) => e.id));

// ---- Validasi ----
const seen = new Set();
for (const app of applications) {
  ok(typeof app.id === 'string' && app.id.length > 0, `studi kasus tanpa id`);
  ok(!seen.has(app.id), `id studi kasus duplikat: ${app.id}`);
  seen.add(app.id);

  const appSubject = app.subject ?? 'matematika';
  ok(CATEGORIES.has(app.category), `${app.id}: kategori tidak dikenal (${app.category})`);
  ok(SUBJECTS.has(appSubject), `${app.id}: mata pelajaran tidak dikenal (${appSubject})`);
  ok(ELEMENTS.has(app.element), `${app.id}: elemen tidak dikenal (${app.element})`);
  ok(GRADES.has(app.grade), `${app.id}: kelas tidak dikenal (${app.grade})`);
  ok(LEVELS.has(app.level), `${app.id}: level tidak dikenal (${app.level})`);
  ok(typeof app.title === 'string' && app.title.length > 0, `${app.id}: judul kosong`);
  ok(typeof app.summary === 'string' && app.summary.length > 0, `${app.id}: ringkasan kosong`);
  ok(Array.isArray(app.topicIds) && app.topicIds.length > 0, `${app.id}: topicIds kosong`);

  // Isi studi kasus wajib lengkap: narasi, analisis, poin kunci, refleksi, dan
  // estimasi waktu yang masuk akal.
  ok(typeof app.body === 'string' && app.body.trim().length > 0, `${app.id}: body kosong`);
  ok(
    typeof app.analysis === 'string' && app.analysis.trim().length > 0,
    `${app.id}: analysis kosong`,
  );
  ok(
    Array.isArray(app.takeaways) && app.takeaways.length >= 2,
    `${app.id}: takeaways kurang dari 2`,
  );
  ok(
    Array.isArray(app.reflection) && app.reflection.length >= 2,
    `${app.id}: reflection kurang dari 2`,
  );
  ok(
    typeof app.estimatedMinutes === 'number' && app.estimatedMinutes > 0,
    `${app.id}: estimatedMinutes tidak valid (${app.estimatedMinutes})`,
  );

  for (const tid of app.topicIds) {
    ok(topicIds.has(tid), `${app.id}: topik tidak ditemukan -> ${tid}`);
  }
  if (app.explorationId) {
    ok(explorationIds.has(app.explorationId), `${app.id}: eksplorasi tidak ditemukan -> ${app.explorationId}`);
  }

  // Elemen dan kelas harus konsisten dengan salah satu topik yang dirujuk.
  const refTopics = app.topicIds.map((tid) => topicMeta.get(tid)).filter(Boolean);
  ok(
    refTopics.some((t) => t.element === app.element),
    `${app.id}: elemen (${app.element}) tidak cocok dengan topik mana pun`,
  );
  ok(
    refTopics.some((t) => t.grade === app.grade),
    `${app.id}: kelas (${app.grade}) tidak cocok dengan topik mana pun`,
  );
  ok(
    refTopics.some((t) => t.subject === appSubject),
    `${app.id}: mata pelajaran (${appSubject}) tidak cocok dengan topik mana pun`,
  );

  // relatedApplications tidak boleh memuat dirinya sendiri.
  for (const rel of relatedApplications(app.id)) {
    ok(rel.id !== app.id, `${app.id}: related memuat dirinya sendiri`);
  }
}

// ---- Cakupan topik (peringatan, bukan kegagalan) ----
const covered = new Set(applications.flatMap((a) => a.topicIds));
const uncovered = [...topicIds].filter((id) => !covered.has(id));
if (uncovered.length) {
  console.warn(`Peringatan: ${uncovered.length} topik belum punya studi kasus: ${uncovered.join(', ')}`);
}

console.log(`Aplikasi diperiksa: ${applications.length} (${checks} asersi)`);
console.log(`Topik tercakup: ${covered.size}/${topicIds.size}`);

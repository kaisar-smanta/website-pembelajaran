// Integritas bank soal (src/data/questions).
//
// Memuat setiap berkas soal TypeScript secara langsung melalui type stripping
// Node (berkas index.ts memakai impor relatif tanpa ekstensi sehingga tidak
// dapat dimuat Node), lalu memeriksa metadata setiap soal, tipe jawaban, dan
// keunikan id secara global.
//
// Pemeriksaan keunikan id bersifat mutlak: id soal dipakai sebagai kunci
// progres belajar, sehingga id yang bertabrakan antar-topik akan merusak
// hitungan. Pemeriksaan ini pernah menangkap pl-01..pl-10 (peluang vs
// polinomial) dan tr-01..tr-10 (trigonometri vs turunan); prefiks per-topik
// kini dipakai agar tetap unik.
//
// Pemakaian: node tests/questions.mjs (dipanggil oleh `npm test`).

import { load, ok, checks, collectTopicIds, collectQuestionFiles } from './_util.mjs';

// ---- Kategori asesmen ----
// index.ts memakai impor relatif tanpa ekstensi sehingga biasanya gagal dimuat
// langsung. Coba dulu; bila gagal, pakai daftar cadangan yang sama.
const FALLBACK_CATEGORIES = [
  'cepat',
  'konsep',
  'penerapan',
  'pemodelan',
  'penalaran',
  'kontekstual',
  'evaluasi',
];
let assessmentCategoryIds = new Set(FALLBACK_CATEGORIES);
try {
  const mod = await load('src/data/questions/index.ts');
  if (Array.isArray(mod.assessmentCategories)) {
    assessmentCategoryIds = new Set(mod.assessmentCategories.map((c) => c.id));
  }
} catch {
  // Diharapkan: impor tanpa ekstensi tidak didukung Node ESM.
}

const DIFFICULTIES = new Set(['dasar', 'cakap', 'mahir']);
const TYPES = new Set(['multiple-choice', 'short-answer', 'open-response']);

// ---- Kumpulkan id topik dari berkas data topik ----
const topicIds = await collectTopicIds();

// ---- Muat setiap berkas soal dan kumpulkan objek Question ----
const questionFiles = await collectQuestionFiles();
const all = [];
for (const { file, questions } of questionFiles) {
  console.log(`${file}: ${questions.length} soal`);
  for (const q of questions) all.push({ q, file });
}

// ---- Validasi per soal ----
for (const { q, file } of all) {
  const label = `soal ${q.id} (${file})`;
  ok(typeof q.id === 'string' && q.id.length > 0, `soal tanpa id (${file})`);
  ok(typeof q.topicId === 'string' && q.topicId.length > 0, `${label}: topicId kosong`);
  ok(topicIds.has(q.topicId), `${label}: topik tidak ditemukan -> ${q.topicId}`);
  ok(DIFFICULTIES.has(q.difficulty), `${label}: difficulty tidak dikenal (${q.difficulty})`);
  ok(TYPES.has(q.type), `${label}: type tidak dikenal (${q.type})`);
  ok(typeof q.prompt === 'string' && q.prompt.length > 0, `${label}: prompt kosong`);
  ok(Array.isArray(q.hints) && q.hints.length >= 1, `${label}: tanpa petunjuk`);
  ok(
    typeof q.explanation === 'string' && q.explanation.trim().length > 0,
    `${label}: tanpa pembahasan`,
  );
  if (q.type === 'open-response') {
    ok(Array.isArray(q.rubric) && q.rubric.length >= 1, `${label}: uraian tanpa rubrik`);
  }

  if (q.figure !== undefined) {
    ok(typeof q.figure.alt === 'string' && q.figure.alt.trim().length > 0, `${label}: figure tanpa alt`);
    ok(
      typeof q.figure.svg === 'string' && q.figure.svg.includes('<svg'),
      `${label}: figure tanpa markup svg`,
    );
  }

  if (q.table !== undefined) {
    ok(
      Array.isArray(q.table.headers) && q.table.headers.length > 0,
      `${label}: tabel tanpa header`,
    );
    ok(Array.isArray(q.table.rows), `${label}: tabel tanpa baris`);
    for (const [i, row] of (q.table.rows ?? []).entries()) {
      ok(
        Array.isArray(row) && row.length === q.table.headers.length,
        `${label}: baris tabel ${i} tidak sepanjang header`,
      );
    }
  }

  if (q.category !== undefined) {
    ok(
      assessmentCategoryIds.has(q.category),
      `${label}: kategori tidak dikenal (${q.category})`,
    );
  }

  if (q.type === 'multiple-choice') {
    ok(Array.isArray(q.options) && q.options.length >= 2, `${label}: opsi kurang dari 2`);
    const keys = new Set();
    for (const opt of q.options ?? []) {
      ok(typeof opt.key === 'string' && opt.key.length > 0, `${label}: opsi tanpa kunci`);
      ok(!keys.has(opt.key), `${label}: kunci opsi duplikat (${opt.key})`);
      keys.add(opt.key);
    }
    ok(keys.has(q.answer), `${label}: jawaban (${q.answer}) bukan salah satu kunci opsi`);
  } else if (q.type === 'short-answer') {
    ok(typeof q.answer === 'string' && q.answer.length > 0, `${label}: jawaban kosong`);
    if (!Array.isArray(q.acceptedAnswers) || q.acceptedAnswers.length === 0) {
      // Bilangan bulat telanjang (mis. cacah, derajat polinomial, sisa bagi)
      // tidak punya format alternatif yang wajar, jadi dikecualikan. Jawaban
      // bertipe lain wajib punya acceptedAnswers berisi padanan formatnya.
      const bareInteger = /^[+-]?\d+$/.test(q.answer.trim());
      ok(bareInteger, `${label}: short-answer tanpa acceptedAnswers (${q.answer})`);
    }
  } else if (q.type === 'open-response') {
    ok(!q.options, `${label}: open-response tidak boleh punya options`);
    ok(typeof q.answer === 'string' && q.answer.length > 0, `${label}: jawaban model kosong`);
  }
}

// ---- Keunikan id secara global ----
const byId = new Map();
for (const { q, file } of all) {
  if (!byId.has(q.id)) byId.set(q.id, []);
  byId.get(q.id).push(file);
}
const collisions = [...byId.entries()]
  .filter(([, owners]) => owners.length > 1)
  .sort(([a], [b]) => a.localeCompare(b));

console.log(`Total soal: ${all.length} dari ${questionFiles.length} berkas (${checks.count} asersi)`);
ok(
  collisions.length === 0,
  `id soal duplikat (${collisions.length} id):\n` +
    collisions.map(([id, owners]) => `  ${id}: ${owners.join(', ')}`).join('\n'),
);

console.log(`Bank soal diperiksa: ${all.length} soal (${checks.count} asersi)`);

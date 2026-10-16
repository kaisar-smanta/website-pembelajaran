// Integritas lapisan pengayaan & tantangan: memastikan setiap topik punya soal
// mahir yang cukup, topik pengayaan (supplementary) menjelaskan kaitannya dengan
// CP, serta bagian pengayaan (sejarah/tantangan) benar-benar ada pada materi.
//
// Pemakaian: node tests/pengayaan.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectTopics, collectQuestions } from './_util.mjs';

// Frasa stok yang dilarang muncul pada `cpNote` topik pengayaan.
const STOCK_PHRASES = ['Pengayaan:', 'bekal olimpiade', 'bekal penting untuk olimpiade', 'jembatan ke olimpiade'];
const MIN_CP_NOTE_LENGTH = 200;
const MIN_SUPPLEMENTARY_MAHIR = 5;

// ---- Topik ----
const topics = await collectTopics();

// ---- Soal ----
const questions = await collectQuestions();

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

  const kinds = new Set(topic.sections.map((section) => section.kind));

  if (topic.supplementary) {
    supplementaryCount += 1;
    const note = typeof topic.cpNote === 'string' ? topic.cpNote.trim() : '';
    ok(note.length > 0, `topik pengayaan ${topic.id} wajib punya cpNote penjelas`);
    ok(
      note.length >= MIN_CP_NOTE_LENGTH,
      `cpNote topik pengayaan ${topic.id} terlalu pendek (${note.length} < ${MIN_CP_NOTE_LENGTH})`,
    );
    ok(
      /CP|[EF]-[A-Z]{3}-\d/.test(note),
      `cpNote topik pengayaan ${topic.id} harus menyebut CP atau kode butir CP`,
    );
    for (const phrase of STOCK_PHRASES) {
      ok(!note.includes(phrase), `cpNote topik pengayaan ${topic.id} memakai frasa stok "${phrase}"`);
    }
    ok(kinds.has('sejarah'), `topik pengayaan ${topic.id} wajib punya bagian sejarah`);
    ok(kinds.has('tantangan'), `topik pengayaan ${topic.id} wajib punya bagian tantangan`);
    ok(
      mahir >= MIN_SUPPLEMENTARY_MAHIR,
      `topik pengayaan ${topic.id} hanya punya ${mahir} soal mahir (minimal ${MIN_SUPPLEMENTARY_MAHIR})`,
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
  `Pengayaan diperiksa: ${checks.count} asersi pada ${topics.length} topik ` +
    `(${supplementaryCount} pengayaan, ${sejarahCount} sejarah, ${tantanganCount} tantangan, ${questions.length} soal)`,
);

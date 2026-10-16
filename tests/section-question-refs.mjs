// Kontrak rujukan soal pada bagian materi.
//
// Sejak putaran peningkatan pengalaman belajar, setiap topik wajib punya
// setidaknya satu cek cepat (bagian non-latihan dengan `questionIds`) dan
// bagian `evaluasi` yang benar-benar menilai. Seluruh id soal yang dirujuk
// harus ada di bank soal dan milik topik itu sendiri.
//
// Pemakaian: node tests/section-question-refs.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectTopics, collectQuestions } from './_util.mjs';

const topics = await collectTopics();
const questions = await collectQuestions();

const questionById = new Map(questions.map((question) => [question.id, question]));

const practiceKinds = new Set(['latihan-dasar', 'latihan-cakap', 'latihan-mahir']);

for (const topic of topics) {
  const label = `topik ${topic.id}`;

  let quickChecks = 0;
  let hasEvaluasiCheck = false;

  for (const section of topic.sections) {
    const ids = section.questionIds ?? [];
    for (const id of ids) {
      const question = questionById.get(id);
      ok(question, `${label}, bagian ${section.id}: id soal tak dikenal (${id})`);
      if (question) {
        ok(
          question.topicId === topic.id,
          `${label}, bagian ${section.id}: soal ${id} bukan milik topik ini`,
        );
      }
    }

    const isPractice = practiceKinds.has(section.kind);
    if (!isPractice && (ids.length > 0 || section.practiceLevel)) quickChecks += 1;
    if (section.kind === 'evaluasi' && (ids.length > 0 || section.practiceLevel)) {
      hasEvaluasiCheck = true;
    }
  }

  ok(quickChecks >= 1, `${label}: tidak ada cek cepat (questionIds) di luar bagian latihan`);
  ok(hasEvaluasiCheck, `${label}: bagian evaluasi belum menilai (tanpa questionIds/practiceLevel)`);
}

console.log(
  `Kontrak rujukan soal diperiksa: ${checks.count} asersi pada ${topics.length} topik`,
);

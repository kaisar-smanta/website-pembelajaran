// Kedalaman & keseimbangan bank soal.
//
// Menegakkan capaian Content Plan 4: setiap topik punya minimal satu soal
// `mahir` berpenilaian otomatis (pilihan ganda atau isian), proporsi soal
// `mahir` otomatis cukup, soal bergambar/tabel tersedia, dan setiap soal punya
// petunjuk yang memadai. Rubrik uraian juga dijaga agar tidak kosong.
//
// Pemakaian: node tests/question-depth.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectQuestions, collectTopics } from './_util.mjs';

const MIN_AUTO_MAHIR = 50;
const MIN_AUTO_RATIO = 0.2;
const MIN_VISUAL_QUESTIONS = 31;
const MIN_VISUAL_MAHIR = 2;

const topics = await collectTopics();
const questions = await collectQuestions();

const mahir = questions.filter((question) => question.difficulty === 'mahir');
const autoMahir = mahir.filter((question) => question.type !== 'open-response');
const visual = questions.filter((question) => question.figure || question.table);
const visualMahir = mahir.filter((question) => question.figure || question.table);

const autoByTopic = new Map();
for (const question of autoMahir) {
  autoByTopic.set(question.topicId, (autoByTopic.get(question.topicId) ?? 0) + 1);
}

for (const topic of topics) {
  ok(
    (autoByTopic.get(topic.id) ?? 0) >= 1,
    `topik ${topic.id}: tidak punya soal mahir berpenilaian otomatis`,
  );
}

ok(autoMahir.length >= MIN_AUTO_MAHIR, `soal mahir otomatis kurang dari ${MIN_AUTO_MAHIR}`);
ok(
  mahir.length === 0 || autoMahir.length / mahir.length >= MIN_AUTO_RATIO,
  `proporsi soal mahir otomatis di bawah ${Math.round(MIN_AUTO_RATIO * 100)} persen`,
);
ok(
  visual.length >= MIN_VISUAL_QUESTIONS,
  `soal bergambar/tabel kurang dari ${MIN_VISUAL_QUESTIONS}`,
);
ok(
  visualMahir.length >= MIN_VISUAL_MAHIR,
  `soal mahir bergambar/tabel kurang dari ${MIN_VISUAL_MAHIR}`,
);

for (const question of questions) {
  ok(
    Array.isArray(question.hints) && question.hints.length >= 1,
    `soal ${question.id}: tanpa petunjuk`,
  );
  if (question.difficulty === 'mahir') {
    ok(
      Array.isArray(question.hints) && question.hints.length >= 2,
      `soal mahir ${question.id}: petunjuk kurang dari 2`,
    );
  }
  if (question.type === 'open-response') {
    ok(
      Array.isArray(question.rubric) && question.rubric.length >= 1,
      `soal uraian ${question.id}: tanpa rubrik`,
    );
  }
}

console.log(
  `Kedalaman soal diperiksa: ${checks.count} asersi pada ${questions.length} soal ` +
    `(${autoMahir.length} mahir otomatis, ${visual.length} bergambar/tabel)`,
);

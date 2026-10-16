// Kualitas bank soal tingkat `mahir`: volume minimum per topik, kelengkapan
// rubrik/pembahasan, jawaban isian yang lengkap, dan tidak ada prompt `mahir`
// yang nyaris sama (menangkap duplikat dekat lintas berkas maupun satu berkas).
//
// Pemakaian: node tests/mahir-quality.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectQuestions, jaccard } from './_util.mjs';

const MIN_PER_TOPIC = 4;
const MAX_SIMILARITY = 0.9;
const BARE_INTEGER = /^[+-]?\d+$/;

const questions = await collectQuestions();
const mahir = questions.filter((question) => question.difficulty === 'mahir');

const countByTopic = new Map();
for (const question of mahir) {
  countByTopic.set(question.topicId, (countByTopic.get(question.topicId) ?? 0) + 1);
}

for (const [topicId, count] of countByTopic) {
  ok(count >= MIN_PER_TOPIC, `topik ${topicId} hanya punya ${count} soal mahir (minimal ${MIN_PER_TOPIC})`);
}

for (const question of mahir) {
  if (question.type === 'multiple-choice') {
    ok(
      typeof question.explanation === 'string' && question.explanation.trim().length > 0,
      `soal mahir ${question.id}: pilihan ganda tanpa explanation`,
    );
  } else if (question.type === 'open-response') {
    ok(
      Array.isArray(question.rubric) && question.rubric.length >= 3,
      `soal mahir ${question.id}: uraian tanpa rubrik (minimal 3 kriteria)`,
    );
  } else if (question.type === 'short-answer') {
    const isBareInteger = BARE_INTEGER.test(String(question.answer ?? '').trim());
    ok(
      isBareInteger || (Array.isArray(question.acceptedAnswers) && question.acceptedAnswers.length > 0),
      `soal mahir ${question.id}: isian non-bulat tanpa acceptedAnswers`,
    );
  }
}

for (let i = 0; i < mahir.length; i++) {
  for (let j = i + 1; j < mahir.length; j++) {
    const score = jaccard(mahir[i].prompt ?? '', mahir[j].prompt ?? '');
    ok(
      score < MAX_SIMILARITY,
      `soal mahir ${mahir[i].id} dan ${mahir[j].id} terlalu mirip (${score.toFixed(2)})`,
    );
  }
}

console.log(
  `Kualitas soal mahir diperiksa: ${checks.count} asersi pada ${mahir.length} soal ` +
    `di ${countByTopic.size} topik`,
);

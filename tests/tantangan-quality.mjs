// Kualitas bagian `tantangan` (soal nonrutin): kedalaman minimum, judul yang
// tidak seragam, bukan salinan soal `mahir` topik yang sama, dan tidak
// mengulang soal tantangan yang nyaris sama lintas topik.
//
// Pemakaian: node tests/tantangan-quality.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectTopics, collectQuestions, sectionText, jaccard } from './_util.mjs';

const MIN_LENGTH = 300;
const MIN_DISTINCT_TITLES = 20;
const MAX_SIMILARITY = 0.7;
const MAX_MAHIR_SIMILARITY = 0.6;

const topics = await collectTopics();
const questions = await collectQuestions();

const mahirByTopic = new Map();
for (const question of questions) {
  if (question.difficulty !== 'mahir') continue;
  const list = mahirByTopic.get(question.topicId) ?? [];
  list.push(`${question.prompt ?? ''} ${question.answer ?? ''}`);
  mahirByTopic.set(question.topicId, list);
}

const entries = [];
for (const topic of topics) {
  const section = topic.sections.find((s) => s.kind === 'tantangan');
  if (!section) continue;
  const text = sectionText(section);
  entries.push({
    topic: topic.id,
    title: section.title ?? '',
    text,
    length: text.length,
  });
}

ok(entries.length >= 44, `bagian tantangan kurang dari 44 (ditemukan ${entries.length})`);

for (const entry of entries) {
  ok(entry.length >= MIN_LENGTH, `tantangan ${entry.topic}: terlalu pendek (${entry.length} < ${MIN_LENGTH})`);

  for (const mahir of mahirByTopic.get(entry.topic) ?? []) {
    const score = jaccard(entry.text, mahir);
    ok(
      score < MAX_MAHIR_SIMILARITY,
      `tantangan ${entry.topic} terlalu mirip soal mahir topik yang sama (${score.toFixed(2)})`,
    );
  }
}

const titles = new Set(entries.map((entry) => entry.title));
ok(titles.size >= MIN_DISTINCT_TITLES, `judul tantangan terlalu seragam (${titles.size} unik dari ${entries.length})`);

for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    const score = jaccard(entries[i].text, entries[j].text);
    ok(
      score < MAX_SIMILARITY,
      `tantangan ${entries[i].topic} dan ${entries[j].topic} terlalu mirip (${score.toFixed(2)})`,
    );
  }
}

console.log(
  `Kualitas tantangan diperiksa: ${checks.count} asersi pada ${entries.length} bagian ` +
    `(${titles.size} judul unik)`,
);

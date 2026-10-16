// Kualitas bagian `sejarah` (Jejak Sejarah): kedalaman minimum, acuan waktu,
// judul yang tidak seragam, blok pendukung, dan tidak ada pengulangan plot
// tokoh yang nyaris sama lintas topik.
//
// Pemakaian: node tests/sejarah-quality.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectTopics, sectionText, jaccard } from './_util.mjs';

const MIN_LENGTH = 300;
const MIN_WITH_BLOCK = 6;
const MIN_DISTINCT_TITLES = 20;
const MAX_SIMILARITY = 0.7;
const TIME_REFERENCE = /\d{4}|abad|\bSM\b|Masehi/i;

const topics = await collectTopics();

const entries = [];
for (const topic of topics) {
  const section = topic.sections.find((s) => s.kind === 'sejarah');
  if (!section) continue;
  const text = sectionText(section);
  entries.push({
    topic: topic.id,
    title: section.title ?? '',
    text,
    length: text.length,
    blocks: (section.blocks ?? []).length,
    hasTime: TIME_REFERENCE.test(text),
  });
}

ok(entries.length >= 44, `bagian sejarah kurang dari 44 (ditemukan ${entries.length})`);

let withBlock = 0;
for (const entry of entries) {
  ok(entry.length >= MIN_LENGTH, `sejarah ${entry.topic}: terlalu pendek (${entry.length} < ${MIN_LENGTH})`);
  ok(entry.hasTime, `sejarah ${entry.topic}: tidak menyebut acuan waktu (tahun, abad, atau SM)`);
  if (entry.blocks > 0) withBlock += 1;
}
ok(withBlock >= MIN_WITH_BLOCK, `sejarah dengan blok non-prosa terlalu sedikit (${withBlock} < ${MIN_WITH_BLOCK})`);

const titles = new Set(entries.map((entry) => entry.title));
ok(titles.size >= MIN_DISTINCT_TITLES, `judul sejarah terlalu seragam (${titles.size} unik dari ${entries.length})`);

for (let i = 0; i < entries.length; i++) {
  for (let j = i + 1; j < entries.length; j++) {
    const score = jaccard(entries[i].text, entries[j].text);
    ok(
      score < MAX_SIMILARITY,
      `sejarah ${entries[i].topic} dan ${entries[j].topic} terlalu mirip (${score.toFixed(2)})`,
    );
  }
}

console.log(
  `Kualitas sejarah diperiksa: ${checks.count} asersi pada ${entries.length} bagian ` +
    `(${withBlock} berblok, ${titles.size} judul unik)`,
);

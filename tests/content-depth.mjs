// Kedalaman & variasi materi utama.
//
// Menegakkan capaian Content Plan 4 pada lapisan topik: setiap topik punya
// minimal tiga gambar, satu `tabs`, satu `spot-mistake`, satu blok pengulangan,
// dua contoh bertahap, dan `rangkuman` berisi minimal dua blok. Menjaga pula
// agar label callout stok dan frasa prosa tidak kembali membanjir, serta semua
// tabel punya caption.
//
// Pemakaian: node tests/content-depth.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectTopics, collectQuestions } from './_util.mjs';

const MIN_FIGURES = 3;
const MIN_EXAMPLES = 2;
const MAX_HATI_HATI = 5;
const MAX_PETUNJUK = 3;
const MAX_BERASAL_DARI = 20;
const MAX_LAHIR_DARI = 6;
const MAX_TUMBUH_DARI = 6;

const topics = await collectTopics();
const questions = await collectQuestions();

const idsOf = (svg) => [...String(svg).matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);

let withTabs = 0;
let withSpot = 0;
let withRecall = 0;
let withSummary = 0;
let tablesWithoutCaption = 0;
let figuresWithoutCaption = 0;
const questionMarkerOwners = new Map();

for (const topic of topics) {
  const label = `topik ${topic.id}`;
  const blocks = topic.sections.flatMap((section) => section.blocks ?? []);

  const figures = blocks.filter((block) => block.kind === 'figure');
  ok(figures.length >= MIN_FIGURES, `${label}: gambar kurang dari ${MIN_FIGURES} (${figures.length})`);

  for (const figure of figures) {
    if (!figure.caption) figuresWithoutCaption += 1;
  }

  const topicMarkerIds = new Set(figures.flatMap((figure) => idsOf(figure.svg)));
  for (const question of questions.filter((q) => q.topicId === topic.id)) {
    if (!question.figure) continue;
    for (const id of idsOf(question.figure.svg)) {
      ok(
        !topicMarkerIds.has(id),
        `${label}: id marker soal (${id}) bentrok dengan gambar materi`,
      );
      const owner = questionMarkerOwners.get(id);
      ok(
        owner === undefined,
        `${label}: id marker soal ganda (${id}) dengan ${owner ?? ''}`,
      );
      questionMarkerOwners.set(id, question.id);
    }
  }

  const hasTabs = blocks.some((block) => block.kind === 'tabs');
  ok(hasTabs, `${label}: tidak punya representasi "tabs"`);
  if (hasTabs) withTabs += 1;

  const hasSpot = blocks.some((block) => block.kind === 'spot-mistake');
  ok(hasSpot, `${label}: tidak punya analisis kesalahan "spot-mistake"`);
  if (hasSpot) withSpot += 1;

  const hasRecall = blocks.some(
    (block) => block.kind === 'match' || block.kind === 'flip-cards',
  );
  ok(hasRecall, `${label}: tidak punya blok pengulangan (match/flip-cards)`);
  if (hasRecall) withRecall += 1;

  const summary = topic.sections.find((section) => section.kind === 'rangkuman');
  const summaryBlocks = summary?.blocks ?? [];
  ok(summaryBlocks.length >= 2, `${label}: rangkuman kurang dari dua blok`);
  if (summaryBlocks.length >= 2) withSummary += 1;

  const exampleBlocks = topic.sections
    .filter((section) => section.kind === 'contoh')
    .flatMap((section) => section.blocks ?? [])
    .filter((block) => block.kind === 'step-reveal' || block.kind === 'details');
  ok(
    exampleBlocks.length >= MIN_EXAMPLES,
    `${label}: contoh bertahap atau latihan mandiri kurang dari ${MIN_EXAMPLES}`,
  );

  for (const block of blocks) {
    if (block.kind === 'table' && !block.caption) tablesWithoutCaption += 1;
  }
}

const allBlocks = topics.flatMap((topic) => topic.sections.flatMap((s) => s.blocks ?? []));
const calloutTitle = (title) =>
  allBlocks.filter((block) => block.kind === 'callout' && block.title === title).length;
const proseCount = (phrase) =>
  topics.reduce((total, topic) => {
    const text = topic.sections.map((section) => String(section.body ?? '')).join(' ');
    return total + (text.match(new RegExp(phrase, 'gi')) ?? []).length;
  }, 0);

ok(calloutTitle('Hati-hati') <= MAX_HATI_HATI, `label "Hati-hati" terlalu banyak`);
ok(calloutTitle('Petunjuk') <= MAX_PETUNJUK, `label "Petunjuk" terlalu banyak`);
ok(proseCount('berasal dari') <= MAX_BERASAL_DARI, `frasa "berasal dari" terlalu banyak`);
ok(proseCount('lahir dari') <= MAX_LAHIR_DARI, `frasa "lahir dari" terlalu banyak`);
ok(proseCount('tumbuh dari') <= MAX_TUMBUH_DARI, `frasa "tumbuh dari" terlalu banyak`);
ok(tablesWithoutCaption === 0, `tabel tanpa caption: ${tablesWithoutCaption}`);
ok(figuresWithoutCaption === 0, `gambar tanpa caption: ${figuresWithoutCaption}`);

console.log(
  `Kedalaman materi diperiksa: ${checks.count} asersi pada ${topics.length} topik ` +
    `(${withTabs} bertabs, ${withSpot} berspot-mistake, ${withRecall} berpengulangan, ` +
    `${withSummary} rangkuman berisi)`,
);

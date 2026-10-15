// Keragaman & kebersihan konten: mencegah regresi ke template seragam dan
// konten duplikat pada materi utama. Menegakkan:
// - tidak ada judul eksplorasi atau studi kasus yang sama;
// - tidak ada prompt soal duplikat lintas berkas;
// - setiap topik menyumbang setidaknya dua gambar (`figure`) dan satu contoh
//   bertahap (`step-reveal`);
// - id di dalam SVG setiap topik unik dan memakai `currentColor`;
// - setiap eksplorasi pada registri dirujuk topik atau studi kasus (tidak menganggur);
// - tidak ada pembuka `prasyarat` generik yang berulang;
// - tidak ada label keyakinan refleksi generik yang berulang.
//
// Pemakaian: node tests/content-variety.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectTopics, collectQuestionFiles, load } from './_util.mjs';

const topics = await collectTopics();
const { explorations } = await load('src/data/explorations.ts');
const { applications } = await load('src/data/applications/index.ts');

const GENERIC_PRASYARAT = 'Sebelum melanjutkan, pastikan kamu menguasai';
const GENERIC_CONFIDENCE = /jawaban refleksimu\?/;

function duplicates(items, key) {
  const counts = new Map();
  for (const item of items) {
    const value = key(item);
    if (!value) continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.entries()].filter(([, n]) => n > 1).map(([value]) => value);
}

const dupExplorations = duplicates(explorations, (e) => e.title);
ok(dupExplorations.length === 0, `judul eksplorasi ganda: ${dupExplorations.join(', ')}`);

const dupApplications = duplicates(applications, (a) => a.title);
ok(dupApplications.length === 0, `judul studi kasus ganda: ${dupApplications.join(', ')}`);

const promptFiles = new Map();
for (const { file, questions } of await collectQuestionFiles()) {
  for (const question of questions) {
    const prompt = String(question.prompt ?? '').replace(/\s+/g, ' ').trim();
    if (!prompt) continue;
    if (!promptFiles.has(prompt)) promptFiles.set(prompt, []);
    promptFiles.get(prompt).push(`${file}:${question.id}`);
  }
}
const dupPrompts = [...promptFiles.values()].filter(
  (refs) => new Set(refs.map((ref) => ref.split(':')[0])).size > 1,
);
ok(
  dupPrompts.length === 0,
  `prompt soal duplikat lintas berkas: ${dupPrompts.map((refs) => refs.join(' = ')).join('; ')}`,
);

const referencedExplorations = new Set();
for (const topic of topics) {
  const blocks = topic.sections.flatMap((section) => section.blocks ?? []);
  const figures = blocks.filter((block) => block.kind === 'figure');
  ok(figures.length >= 2, `topik ${topic.id}: gambar (figure) kurang dari 2`);
  ok(
    blocks.some((block) => block.kind === 'step-reveal'),
    `topik ${topic.id}: tidak punya contoh bertahap (step-reveal)`,
  );

  // Id SVG (mis. marker) wajib unik di dalam satu topik agar rujukan `url(#...)`
  // tidak tertukar, dan gambar wajib memakai `currentColor` agar ikut mode gelap.
  const svgIds = [];
  for (const figure of figures) {
    const svg = String(figure.svg ?? '');
    ok(svg.includes('currentColor'), `topik ${topic.id}: figure tidak memakai currentColor`);
    for (const match of svg.matchAll(/\bid="([^"]+)"/g)) svgIds.push(match[1]);
  }
  const dupIds = [...new Set(svgIds.filter((id, i) => svgIds.indexOf(id) !== i))];
  ok(dupIds.length === 0, `topik ${topic.id}: id SVG duplikat -> ${dupIds.join(', ')}`);

  for (const block of blocks) {
    if (block.kind === 'exploration') referencedExplorations.add(block.explorationId);
  }

  const prasyarat = topic.sections.find((section) => section.kind === 'prasyarat');
  ok(
    !(prasyarat?.body ?? '').includes(GENERIC_PRASYARAT),
    `topik ${topic.id}: pembuka prasyarat masih generik`,
  );

  const reflection = blocks.find((block) => block.kind === 'reflection');
  if (reflection?.confidenceLabel) {
    ok(
      !GENERIC_CONFIDENCE.test(reflection.confidenceLabel),
      `topik ${topic.id}: label keyakinan refleksi masih generik`,
    );
  }
}

for (const application of applications) {
  if (application.explorationId) referencedExplorations.add(application.explorationId);
}
const orphanExplorations = explorations
  .filter((exploration) => !referencedExplorations.has(exploration.id))
  .map((exploration) => exploration.id);
ok(
  orphanExplorations.length === 0,
  `eksplorasi tidak dirujuk topik maupun studi kasus: ${orphanExplorations.join(', ')}`,
);

console.log(
  `Keragaman konten diperiksa: ${checks.count} asersi pada ${topics.length} topik, ` +
    `${explorations.length} eksplorasi, ${applications.length} studi kasus`,
);

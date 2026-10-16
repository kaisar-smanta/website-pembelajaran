// Penjaga metadata topik yang dapat diturunkan.
//
// `slug` selalu sama dengan `id`, dan `phase` selalu mengikuti kelas lewat
// `GRADES`. Selama kedua field masih disimpan manual di tiap berkas topik, uji
// ini mencegah penyimpangan senyap tanpa perlu menyunting 44 berkas sekaligus.

import { check, collectTopics, load } from './_util.mjs';

const { GRADES } = await load('src/data/curriculum.ts');
const topics = await collectTopics();

check('slug setiap topik sama dengan id', () => {
  for (const topic of topics) {
    if (topic.slug !== topic.id) {
      throw new Error(`${topic.id}: slug "${topic.slug}" tidak sama dengan id`);
    }
  }
});

check('fase setiap topik konsisten dengan kelasnya', () => {
  for (const topic of topics) {
    const expected = GRADES[topic.grade]?.phase;
    if (topic.phase !== expected) {
      throw new Error(`${topic.id}: fase "${topic.phase}" tidak sama dengan "${expected}"`);
    }
  }
});

console.log(`Metadata topik diperiksa: ${topics.length} topik`);

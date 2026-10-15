// Integritas halaman rujukan: glosarium & kumpulan rumus lintas topik.
//
// Menjaga agar pengumpul di `src/lib/reference.ts` benar-benar mengambil istilah
// dari seluruh blok pengulangan, termasuk pasangan `match` yang sisi istilahnya
// memuat matematika (mis. "Gradien $b$") selama masih mengandung kata. Tanpa
// pemeriksaan ini, perubahan aturan penyaringan dapat mengosongkan glosarium
// untuk banyak topik tanpa terdeteksi.
//
// Pemakaian: node tests/reference.mjs (dipanggil oleh `npm test`).

import { load, ok, checks, collectTopics } from './_util.mjs';

const { collectGlossaryEntries, collectFormulaEntries } = await load('src/lib/reference.ts');

const topics = await collectTopics();
const glossary = collectGlossaryEntries(topics);
const formulas = collectFormulaEntries(topics);

// Glosarium harus cukup besar dan tidak menyusut tanpa disadari.
ok(glossary.length >= 150, `glosarium terlalu sedikit: ${glossary.length} istilah`);

// Setiap istilah harus punya makna dan setidaknya satu topik asal.
for (const entry of glossary) {
  ok(entry.termText.trim().length > 0, 'istilah glosarium tanpa teks');
  ok(entry.meaning.trim().length > 0, `istilah tanpa makna: ${entry.termText}`);
  ok(entry.topics.length >= 1, `istilah tanpa topik asal: ${entry.termText}`);
}

// Setidaknya satu istilah per topik, kecuali topik yang hanya memuat pasangan
// rumus-murni tanpa kata (sisi istilah seluruhnya matematika). Saat ini ada dua
// topik seperti itu; ambang ini akan menangkap regresi bila jumlahnya bertambah.
const glossaryTopics = new Set(glossary.flatMap((entry) => entry.topics.map((t) => t.id)));
const emptyTopics = topics.filter((t) => !glossaryTopics.has(t.id));
ok(
  emptyTopics.length <= 2,
  `terlalu banyak topik tanpa istilah glosarium (${emptyTopics.length}): ${emptyTopics
    .map((t) => t.id)
    .join(', ')}`,
);

// Topik agar tetap terpulihkan oleh aturan istilah-mengandung-matematika.
for (const id of [
  'matriks',
  'matriks-transformasi',
  'ketaksamaan',
  'komposisi-fungsi',
  'regresi',
  'transformasi-geometri',
  'integral',
  'trigonometri-lanjut',
]) {
  ok(glossaryTopics.has(id), `topik ${id} seharusnya menyumbang istilah glosarium`);
}

// Kumpulan rumus: setiap topik menyumbang minimal satu entri.
const formulaTopics = new Set(formulas.map((entry) => entry.topic.id));
for (const topic of topics) {
  ok(formulaTopics.has(topic.id), `topik ${topic.id} tidak menyumbang entri rumus`);
}

console.log(
  `Rujukan diperiksa: ${checks.count} asersi (${glossary.length} istilah, ${formulas.length} entri rumus)`,
);

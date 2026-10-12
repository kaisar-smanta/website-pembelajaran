// Kontrak alur bagian materi pada setiap topik.
//
// Seluruh topik mengikuti alur belajar yang sama: pembuka → inti → latihan →
// penutup. Urutan mikro (mis. letak `rumus` relatif `eksplorasi`) boleh
// bervariasi, tetapi bagian tidak boleh melompat mundur ke fase yang lebih awal.
// Uji ini menangkap penyisipan bagian yang salah tempat (mis. latihan muncul
// sebelum konsep) tanpa memaksakan urutan yang terlalu kaku.
//
// Pemakaian: node tests/section-order.mjs (dipanggil oleh `npm test`).

import { ok, checks, collectTopics } from './_util.mjs';

/**
 * Fase alur bagian. Setiap jenis bagian wajib terdaftar tepat sekali; urutan
 * fase harus tidak menurun sepanjang daftar bagian sebuah topik.
 */
const PHASES = [
  ['tujuan', 'pemantik', 'prasyarat', 'konteks'],
  ['konsep', 'representasi', 'eksplorasi', 'generalisasi', 'rumus', 'contoh'],
  ['latihan-dasar', 'latihan-cakap', 'latihan-mahir'],
  ['dunia-nyata', 'kesalahan-umum', 'tantangan', 'sejarah', 'refleksi', 'rangkuman', 'evaluasi'],
];

const phaseOf = new Map();
PHASES.forEach((kinds, index) => {
  for (const kind of kinds) {
    ok(!phaseOf.has(kind), `fase ganda untuk jenis bagian ${kind}`);
    phaseOf.set(kind, index);
  }
});

const topics = await collectTopics();

for (const topic of topics) {
  const label = `topik ${topic.id}`;
  let lastPhase = -1;
  let lastKind = null;
  for (const section of topic.sections) {
    ok(
      phaseOf.has(section.kind),
      `${label}: jenis bagian ${section.kind} belum dipetakan ke fase`,
    );
    const phase = phaseOf.get(section.kind);
    ok(
      phase >= lastPhase,
      `${label}: bagian ${section.kind} mundur ke fase ${phase} setelah ${lastKind} (fase ${lastPhase})`,
    );
    lastPhase = phase;
    lastKind = section.kind;
  }
}

console.log(`Alur bagian diperiksa: ${checks.count} asersi pada ${topics.length} topik`);

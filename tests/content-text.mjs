// Uji teks bagian untuk judul tampil dan indeks pencarian: node tests/content-text.mjs
//
// Fokus: memastikan `sectionSearchText` mengindeks seluruh jenis blok (termasuk
// `table` dan `exploration` yang dulu diam-diam terlewat karena `default: break`).

import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
import { sectionTitle, sectionSearchText, sectionKindTitles } from '../src/lib/content-text.ts';
import { explorations } from '../src/data/explorations.ts';

/** Pencari teks eksplorasi seperti yang disuntikkan `search.json.ts`. */
const explorationText = new Map(
  explorations.map((e) => [e.id, [e.title, e.goal ?? '', e.description].join(' ')]),
);
const lookupExploration = (id) => explorationText.get(id);

check('sectionTitle memakai judul eksplisit bila ada', () => {
  assert.equal(sectionTitle({ id: 'konsep', kind: 'konsep', title: 'Konsep Khusus' }), 'Konsep Khusus');
});

check('sectionTitle memakai judul bawaan saat kosong', () => {
  assert.equal(sectionTitle({ id: 'refleksi', kind: 'refleksi' }), sectionKindTitles.refleksi);
});

check('sectionSearchText menggabungkan judul dan badan', () => {
  const text = sectionSearchText({ id: 'x', kind: 'konsep', title: 'Judul', body: 'Isi materi' });
  assert.match(text, /Judul/);
  assert.match(text, /Isi materi/);
});

check('sectionSearchText mengindeks blok table', () => {
  const text = sectionSearchText({
    id: 'x',
    kind: 'konsep',
    blocks: [
      {
        kind: 'table',
        caption: 'Tabel nilai',
        headers: ['x', 'y'],
        rows: [
          ['1', '2'],
          ['3', '4'],
        ],
      },
    ],
  });
  assert.match(text, /Tabel nilai/);
  assert.match(text, /x/);
  assert.match(text, /y/);
  assert.match(text, /3/);
});

check('sectionSearchText mengindeks blok exploration', () => {
  const text = sectionSearchText({
    id: 'x',
    kind: 'eksplorasi',
    blocks: [{ kind: 'exploration', explorationId: 'regresi-sim' }],
  });
  assert.match(text, /regresi-sim/);
});

check('sectionSearchText mengindeks judul eksplorasi terdaftar via pencari', () => {
  const text = sectionSearchText(
    {
      id: 'x',
      kind: 'eksplorasi',
      blocks: [{ kind: 'exploration', explorationId: 'eksponen-pertumbuhan' }],
    },
    lookupExploration,
  );
  assert.match(text, /Pertumbuhan Eksponensial/);
});

check('sectionSearchText tanpa pencari hanya mengindeks id eksplorasi', () => {
  const text = sectionSearchText({
    id: 'x',
    kind: 'eksplorasi',
    blocks: [{ kind: 'exploration', explorationId: 'eksponen-pertumbuhan' }],
  });
  assert.match(text, /eksponen-pertumbuhan/);
  assert.doesNotMatch(text, /Pertumbuhan Eksponensial/);
});

check('sectionSearchText mengindeks judul callout', () => {
  const text = sectionSearchText({
    id: 'x',
    kind: 'konsep',
    blocks: [{ kind: 'callout', variant: 'tip', title: 'Jebakan umum', text: 'Isi pesan' }],
  });
  assert.match(text, /Jebakan umum/);
  assert.match(text, /Isi pesan/);
});

check('sectionSearchText mengindeks label keyakinan refleksi', () => {
  const text = sectionSearchText({
    id: 'x',
    kind: 'refleksi',
    blocks: [{ kind: 'reflection', prompts: ['Apa yang kamu pelajari?'], confidenceLabel: 'Keyakinan' }],
  });
  assert.match(text, /Apa yang kamu pelajari/);
  assert.match(text, /Keyakinan/);
});

check('setiap jenis bagian punya judul bawaan', () => {
  const section = {
    tujuan: 'Tujuan Pembelajaran',
    pemantik: 'Pertanyaan Pemantik',
    prasyarat: 'Prasyarat',
    konteks: 'Situasi dan Konteks',
    konsep: 'Konsep Inti',
    representasi: 'Representasi',
    eksplorasi: 'Eksplorasi',
    generalisasi: 'Generalisasi',
    rumus: 'Rumus dan Prosedur',
    contoh: 'Contoh Terbimbing',
    'latihan-dasar': 'Latihan Dasar',
    'latihan-cakap': 'Latihan Cakap',
    'latihan-mahir': 'Latihan Mahir',
    'dunia-nyata': 'Masalah Dunia Nyata',
    'kesalahan-umum': 'Kesalahan Umum',
    refleksi: 'Refleksi',
    rangkuman: 'Rangkuman',
    evaluasi: 'Evaluasi',
    sejarah: 'Jejak Sejarah',
    tantangan: 'Tantangan',
  };
  for (const [kind, title] of Object.entries(section)) {
    assert.equal(sectionKindTitles[kind], title, `judul bawaan ${kind} berbeda`);
  }
});

check('sectionSearchText menolak jenis blok tak dikenal', () => {
  assert.throws(() =>
    sectionSearchText({
      id: 'x',
      kind: 'konsep',
      blocks: [{ kind: 'blok-baru-yang-belum-ditangani' }],
    }),
  );
});

check('sectionSearchText mengindeks alt dan caption figure', () => {
  const text = sectionSearchText({
    id: 'x',
    kind: 'konsep',
    blocks: [{ kind: 'figure', svg: '<svg></svg>', alt: 'Grafik naik', caption: 'Kurva eksponen' }],
  });
  assert.match(text, /Grafik naik/);
  assert.match(text, /Kurva eksponen/);
});

console.log(`PASS content-text (${checks.count} pemeriksaan)`);

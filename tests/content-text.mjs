// Uji teks bagian untuk judul tampil dan indeks pencarian: node tests/content-text.mjs
//
// Fokus: memastikan `sectionSearchText` mengindeks seluruh jenis blok (termasuk
// `table` dan `exploration` yang dulu diam-diam terlewat karena `default: break`).

import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
import { sectionTitle, sectionSearchText, sectionKindTitles } from '../src/lib/content-text.ts';

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

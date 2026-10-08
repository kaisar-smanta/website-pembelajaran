// Uji utilitas URL: node tests/url.mjs
//
// Catatan: `import.meta.env` tidak ada di Node sehingga `BASE` menjadi `/`.
// Konfigurasi base produksi (mis. `/website-pembelajaran/`) diterapkan oleh
// Vite/Astro saat build; di sini kami memverifikasi normalisasi leading slash
// dan komposisi segmen relatif terhadap BASE tersebut.
import assert from 'node:assert/strict';
import {
  BASE,
  url,
  absoluteUrl,
  subjectUrl,
  gradeUrl,
  elementUrl,
  topicUrl,
  elementOverviewUrl,
} from '../src/utils/url.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

check('BASE dinormalisasi dengan trailing slash', () => {
  assert.equal(BASE, '/');
  assert.ok(BASE.endsWith('/'));
});

check('url() menormalkan leading slash', () => {
  assert.equal(url(), '/');
  assert.equal(url('foo'), '/foo');
  assert.equal(url('/foo'), '/foo');
  assert.equal(url('///foo/bar'), '/foo/bar');
});

check('subjectUrl() menyertakan segmen mata pelajaran', () => {
  assert.equal(subjectUrl('matematika'), '/matematika');
  assert.equal(subjectUrl('matematika', 'kelas/X'), '/matematika/kelas/X');
  assert.equal(subjectUrl('matematika-lanjut', '/kelas/XI'), '/matematika-lanjut/kelas/XI');
});

check('gradeUrl() membentuk URL kelas', () => {
  assert.equal(gradeUrl('X'), '/matematika/kelas/X');
  assert.equal(gradeUrl('XI', 'matematika-lanjut'), '/matematika-lanjut/kelas/XI');
});

check('elementUrl() membentuk URL elemen', () => {
  assert.equal(elementUrl('X', 'bilangan'), '/matematika/kelas/X/bilangan');
  assert.equal(
    elementUrl('XI', 'aljabar-fungsi', 'matematika-lanjut'),
    '/matematika-lanjut/kelas/XI/aljabar-fungsi',
  );
});

check('topicUrl() membentuk URL topik', () => {
  assert.equal(topicUrl('X', 'bilangan', 'eksponen'), '/matematika/kelas/X/bilangan/eksponen');
  assert.equal(
    topicUrl('XI', 'kalkulus', 'turunan', 'matematika-lanjut'),
    '/matematika-lanjut/kelas/XI/kalkulus/turunan',
  );
});

check('elementOverviewUrl() membentuk URL ikhtisar elemen', () => {
  assert.equal(elementOverviewUrl('geometri'), '/matematika/elemen/geometri');
});

check('absoluteUrl() memakai site dan base', () => {
  assert.equal(absoluteUrl('foo'), 'https://example.github.io/foo');
  assert.equal(
    absoluteUrl('/matematika/kelas/X'),
    'https://example.github.io/matematika/kelas/X',
  );
  assert.equal(absoluteUrl(), 'https://example.github.io/');
});

console.log(`PASS url (${passed} pemeriksaan)`);

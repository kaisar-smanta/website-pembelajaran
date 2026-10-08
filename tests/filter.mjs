// Uji logika penyaringan murni: node tests/filter.mjs
import assert from 'node:assert/strict';
import {
  toggleSet,
  readListParam,
  writeListParam,
  countBy,
  matchesAny,
  normalizeText,
} from '../src/lib/filter.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

check('toggleSet menambah dan menghapus tanpa memutasi set asal', () => {
  const base = new Set(['a']);
  const added = toggleSet(base, 'b');
  assert.deepEqual([...added].sort(), ['a', 'b']);
  assert.deepEqual([...base], ['a']);

  const removed = toggleSet(base, 'a');
  assert.deepEqual([...removed], []);
  assert.deepEqual([...base], ['a']);
});

check('readListParam menggabungkan kunci berulang dan nilai berkoma', () => {
  const params = new URLSearchParams('a=1&a=2,3&a=1');
  assert.deepEqual(readListParam(params, 'a'), ['1', '2', '3']);
  assert.deepEqual(readListParam(params, 'missing'), []);
});

check('readListParam membuang nilai kosong dan merapikan spasi', () => {
  const params = new URLSearchParams('a= x ,&a=');
  assert.deepEqual(readListParam(params, 'a'), ['x']);
});

check('writeListParam menulis sekali dan menghapus saat kosong', () => {
  const params = new URLSearchParams('a=1&b=2');
  writeListParam(params, 'a', ['x', 'y']);
  assert.equal(params.get('a'), 'x,y');
  assert.equal(params.get('b'), '2');

  writeListParam(params, 'a', []);
  assert.equal(params.get('a'), null);
  assert.equal(params.has('a'), false);
});

check('writeListParam lalu readListParam dapat dibaca kembali', () => {
  const params = new URLSearchParams();
  writeListParam(params, 'a', ['1', '2']);
  assert.deepEqual(readListParam(params, 'a'), ['1', '2']);
});

check('countBy menghitung kemunculan per kunci', () => {
  const counts = countBy(['a', 'b', 'a', 'c', 'a'], (value) => value);
  assert.equal(counts.get('a'), 3);
  assert.equal(counts.get('b'), 1);
  assert.equal(counts.get('c'), 1);
  assert.equal(counts.get('z'), undefined);
});

check('countBy menghormati urutan kunci pertama', () => {
  const counts = countBy(
    [{ k: 'x' }, { k: 'y' }, { k: 'x' }],
    (item) => item.k,
  );
  assert.deepEqual([...counts.keys()], ['x', 'y']);
});

check('matchesAny cocok bila pilihan kosong', () => {
  assert.equal(matchesAny(new Set(), []), true);
  assert.equal(matchesAny(new Set(), ['a']), true);
});

check('matchesAny cocok bila salah satu nilai termasuk pilihan', () => {
  assert.equal(matchesAny(new Set(['b']), ['a', 'b']), true);
  assert.equal(matchesAny(new Set(['c']), ['a', 'b']), false);
  assert.equal(matchesAny(new Set(['a', 'c']), ['b']), false);
});

check('normalizeText menurunkan huruf dan merapikan spasi', () => {
  assert.equal(normalizeText('  Bunga   Majemuk '), 'bunga majemuk');
});

check('normalizeText menghapus diakritik', () => {
  assert.equal(normalizeText('Distribusi Binomial'), 'distribusi binomial');
  assert.equal(normalizeText('fungsi kuadrat\u0301'), 'fungsi kuadrat');
  assert.equal(normalizeText('café'), 'cafe');
});

check('normalizeText membantu pemetaan kata kunci', () => {
  const haystack = normalizeText('Bunga Majemuk & Anuitas');
  assert.ok(haystack.includes(normalizeText('bunga majemuk')));
  assert.ok(haystack.includes(normalizeText('  ANUITAS ')));
  assert.ok(!haystack.includes(normalizeText('peluang')));
});

console.log(`PASS filter (${passed} pemeriksaan)`);

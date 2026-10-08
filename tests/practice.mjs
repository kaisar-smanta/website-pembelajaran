// Uji logika latihan murni: node tests/practice.mjs
import assert from 'node:assert/strict';
import { difficultyCounts, groupByDifficulty } from '../src/lib/practice.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

const items = [
  { id: 'a', difficulty: 'dasar' },
  { id: 'b', difficulty: 'mahir' },
  { id: 'c', difficulty: 'dasar' },
  { id: 'd', difficulty: 'cakap' },
];

check('difficultyCounts menghitung tiap tingkat', () => {
  assert.deepEqual(difficultyCounts(items), { dasar: 2, cakap: 1, mahir: 1 });
});

check('difficultyCounts pada daftar kosong mengembalikan nol', () => {
  assert.deepEqual(difficultyCounts([]), { dasar: 0, cakap: 0, mahir: 0 });
});

check('groupByDifficulty mengelompokkan dan mempertahankan urutan', () => {
  const groups = groupByDifficulty(items);
  assert.deepEqual(
    groups.dasar.map((q) => q.id),
    ['a', 'c'],
  );
  assert.deepEqual(
    groups.cakap.map((q) => q.id),
    ['d'],
  );
  assert.deepEqual(
    groups.mahir.map((q) => q.id),
    ['b'],
  );
});

check('groupByDifficulty selalu menyediakan ketiga tingkat', () => {
  const groups = groupByDifficulty([{ id: 'x', difficulty: 'cakap' }]);
  assert.deepEqual(Object.keys(groups), ['dasar', 'cakap', 'mahir']);
  assert.deepEqual(groups.dasar, []);
  assert.deepEqual(groups.mahir, []);
});

check('groupByDifficulty tidak memutasi daftar asal', () => {
  const copy = items.slice();
  groupByDifficulty(items);
  assert.deepEqual(items, copy);
});

console.log(`PASS practice (${passed} pemeriksaan)`);

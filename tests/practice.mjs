// Uji logika latihan murni: node tests/practice.mjs
import assert from 'node:assert/strict';
import {
  difficultyCounts,
  groupByDifficulty,
  combineSeed,
  reviewQuestionIds,
} from '../src/lib/practice.ts';

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

check('combineSeed deterministik dan bergantung pada sesi', () => {
  assert.equal(combineSeed('sesi-1', 'q-1'), combineSeed('sesi-1', 'q-1'));
  assert.notEqual(combineSeed('sesi-1', 'q-1'), combineSeed('sesi-2', 'q-1'));
  assert.notEqual(combineSeed('sesi-1', 'q-1'), combineSeed('sesi-1', 'q-2'));
});

check('reviewQuestionIds menggabungkan belum tepat dan belum dicoba', () => {
  let attempts = {};
  attempts = {
    a: { questionId: 'a', correct: false, at: 1, graded: true },
    b: { questionId: 'b', correct: true, at: 1, graded: true },
    c: { questionId: 'c', correct: false, at: 1, graded: false },
  };
  const ids = ['a', 'b', 'c', 'd'];
  assert.deepEqual(reviewQuestionIds(attempts, ids, 'both'), ['a', 'd']);
  assert.deepEqual(reviewQuestionIds(attempts, ids, 'missed'), ['a']);
  assert.deepEqual(reviewQuestionIds(attempts, ids, 'unanswered'), ['d']);
  assert.deepEqual(reviewQuestionIds({}, ids, 'both'), ['a', 'b', 'c', 'd']);
});

console.log(`PASS practice (${passed} pemeriksaan)`);

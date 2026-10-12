// Uji logika murni pencacahan (pohon keputusan): node tests/sim-counting-tree.mjs
import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
import {
  factorial,
  permutations,
  combinations,
  combinationsWithRepetition,
  countArrangements,
  branchingFactors,
  formulaLabel,
  describeCount,
  samplePaths,
} from '../src/lib/sim/counting-tree.ts';

check('faktorial dasar', () => {
  assert.equal(factorial(0), 1);
  assert.equal(factorial(1), 1);
  assert.equal(factorial(5), 120);
});

check('permutasi P(n,k)', () => {
  assert.equal(permutations(5, 2), 20);
  assert.equal(permutations(5, 3), 60);
  assert.equal(permutations(3, 0), 1);
  assert.equal(permutations(2, 5), 0);
});

check('kombinasi C(n,k)', () => {
  assert.equal(combinations(5, 2), 10);
  assert.equal(combinations(10, 3), 120);
  assert.equal(combinations(49, 6), 13_983_816);
  assert.equal(combinations(3, 0), 1);
});

check('kombinasi dengan pengulangan', () => {
  assert.equal(combinationsWithRepetition(5, 2), 15);
  assert.equal(combinationsWithRepetition(3, 3), 10);
});

check('empat mode pencacahan', () => {
  assert.equal(countArrangements({ n: 5, k: 2, order: true, repetition: false }), 20);
  assert.equal(countArrangements({ n: 5, k: 2, order: true, repetition: true }), 25);
  assert.equal(countArrangements({ n: 5, k: 2, order: false, repetition: false }), 10);
  assert.equal(countArrangements({ n: 5, k: 2, order: false, repetition: true }), 15);
});

check('memilih nol objek selalu satu cara', () => {
  for (const order of [true, false]) {
    for (const repetition of [true, false]) {
      assert.equal(countArrangements({ n: 4, k: 0, order, repetition }), 1);
    }
  }
});

check('faktor percabangan tiap tahap', () => {
  assert.deepEqual(
    branchingFactors({ n: 5, k: 3, order: true, repetition: false }),
    [5, 4, 3],
  );
  assert.deepEqual(
    branchingFactors({ n: 5, k: 3, order: true, repetition: true }),
    [5, 5, 5],
  );
  assert.deepEqual(branchingFactors({ n: 5, k: 3, order: false, repetition: false }), []);
});

check('hasil kali faktor percabangan sama dengan banyak susunan', () => {
  const choice = { n: 6, k: 4, order: true, repetition: false };
  const product = branchingFactors(choice).reduce((a, b) => a * b, 1);
  assert.equal(product, countArrangements(choice));
});

check('label rumus dan deskripsi', () => {
  assert.equal(formulaLabel({ n: 4, k: 3, order: true, repetition: false }), 'P(4, 3) = 4!/(4-3)!');
  assert.equal(formulaLabel({ n: 4, k: 3, order: true, repetition: true }), '4^3');
  assert.ok(describeCount({ n: 5, k: 2, order: false, repetition: false }).includes('kombinasi'));
});

check('contoh susunan sesuai mode', () => {
  assert.deepEqual(samplePaths({ n: 3, k: 2, order: true, repetition: false }, 10), [
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 2],
  ]);
  assert.deepEqual(samplePaths({ n: 3, k: 2, order: false, repetition: false }, 10), [
    [1, 2],
    [1, 3],
    [2, 3],
  ]);
  assert.deepEqual(samplePaths({ n: 3, k: 2, order: false, repetition: true }, 10), [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 2],
    [2, 3],
    [3, 3],
  ]);
});

check('batas contoh susunan dihormati', () => {
  assert.equal(samplePaths({ n: 10, k: 4, order: true, repetition: true }, 5).length, 5);
});

console.log(`PASS sim-counting-tree (${checks.count} pemeriksaan)`);

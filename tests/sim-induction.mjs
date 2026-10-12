// Uji logika murni eksplorasi induksi matematika: node tests/sim-induction.mjs
import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
import {
  INDUCTION_KINDS,
  term,
  partialSum,
  closedForm,
  holdsAt,
  inductionStep,
  baseCase,
  inductionChain,
  verifyInduction,
  describeKind,
} from '../src/lib/sim/induction.ts';

const KINDS = INDUCTION_KINDS.map((meta) => meta.kind);

check('suku dan jumlah parsial tiap pernyataan', () => {
  assert.equal(partialSum('sum-naturals', 10), 55);
  assert.equal(partialSum('sum-squares', 10), 385);
  assert.equal(partialSum('sum-odd', 5), 25);
  assert.equal(partialSum('power-two', 5), 31);
  assert.equal(term('sum-odd', 4), 7);
  assert.equal(term('power-two', 1), 1);
});

check('bentuk tertutup cocok dengan jumlah parsial', () => {
  for (const kind of KINDS) {
    for (let n = 1; n <= 25; n++) {
      assert.ok(holdsAt(kind, n), `${kind} gagal di n=${n}`);
      assert.equal(partialSum(kind, n), closedForm(kind, n));
    }
  }
});

check('langkah induksi P(k) => P(k+1)', () => {
  const step = inductionStep('sum-naturals', 4);
  assert.equal(step.partialK, 10);
  assert.equal(step.nextTerm, 5);
  assert.equal(step.partialK1, 15);
  assert.equal(step.closedK, 10);
  assert.equal(step.closedK1, 15);
  assert.equal(step.hypothesis, true);
  assert.equal(step.step, true);
});

check('basis dan verifikasi keseluruhan', () => {
  for (const kind of KINDS) {
    assert.equal(baseCase(kind), true, `basis ${kind}`);
    assert.equal(verifyInduction(kind, 12), true, `verifikasi ${kind}`);
  }
});

check('rantai domino menandai setiap simpul benar', () => {
  const chain = inductionChain('sum-squares', 6);
  assert.equal(chain.length, 6);
  assert.deepEqual(
    chain.map((node) => node.n),
    [1, 2, 3, 4, 5, 6],
  );
  assert.ok(chain.every((node) => node.holds));
});

check('deskripsi pernyataan memuat bentuk tertutup', () => {
  assert.ok(describeKind('sum-odd').includes('n²'));
  assert.ok(describeKind('power-two').includes('2ⁿ − 1'));
});

console.log(`PASS sim-induction (${checks.count} pemeriksaan)`);

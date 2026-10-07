// Uji logika murni barisan dan deret: node tests/sim-sequence.mjs
import assert from 'node:assert/strict';
import {
  arithmeticTerm,
  arithmeticSum,
  geometricTerm,
  geometricSum,
  sequenceTerms,
} from '../src/lib/sim/sequence.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

const eq = (actual, expected, label) =>
  assert.deepEqual(actual, expected, `${label}: diharapkan ${JSON.stringify(expected)}, diperoleh ${JSON.stringify(actual)}`);

check('aritmetika a=2, b=2, n=3 => suku [2,4,6], jumlah [2,6,12]', () => {
  const { terms, sums } = sequenceTerms('aritmetika', 2, 2, 3);
  eq(terms, [2, 4, 6], 'suku');
  eq(sums, [2, 6, 12], 'jumlah');
});

check('geometri a=2, r=2, n=3 => suku [2,4,8], jumlah [2,6,14]', () => {
  const { terms, sums } = sequenceTerms('geometri', 2, 2, 3);
  eq(terms, [2, 4, 8], 'suku');
  eq(sums, [2, 6, 14], 'jumlah');
});

check('rumus Un dan Sn aritmetika konsisten', () => {
  assert.equal(arithmeticTerm(2, 2, 3), 6);
  assert.equal(arithmeticSum(2, 2, 3), 12);
  assert.equal(arithmeticTerm(4, 5, 20), 99);
  assert.equal(arithmeticSum(4, 5, 20), 1030);
});

check('rumus Un dan Sn geometri konsisten', () => {
  assert.equal(geometricTerm(2, 2, 3), 8);
  assert.equal(geometricSum(2, 2, 3), 14);
  assert.equal(geometricTerm(5, 3, 7), 3645);
  assert.equal(geometricSum(5, 3, 7), 5465);
});

check('geometri r=1 menghasilkan Sn = n·a', () => {
  assert.equal(geometricSum(3, 1, 5), 15);
});

console.log(`PASS sim-sequence (${passed} pemeriksaan)`);

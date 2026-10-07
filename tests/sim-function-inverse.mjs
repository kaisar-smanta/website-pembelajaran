// Uji fungsi matematika murni untuk komponen FunctionInverseSim.
// Pemakaian: node tests/sim-function-inverse.mjs
import assert from 'node:assert/strict';
import { computeInverse, verifyInverse } from '../src/lib/sim/function-inverse.ts';

let passed = 0;
function check(name, actual, expected) {
  assert.deepEqual(actual, expected, `${name}: diharapkan ${JSON.stringify(expected)}, diperoleh ${JSON.stringify(actual)}`);
  passed++;
  console.log(`PASS ${name}`);
}

check('invers f(x) = 2x + 1', computeInverse(2, 1), { a: 0.5, b: -0.5 });
check('f(f⁻¹(5)) = 5 untuk f(x) = 2x + 1', verifyInverse(2, 1, 5), 5);
check('a = 0 tidak memiliki invers', computeInverse(0, 1), null);

console.log(`\nSemua ${passed} pemeriksaan simulasi lulus.`);

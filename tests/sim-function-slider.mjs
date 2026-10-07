// Uji fungsi matematika murni untuk komponen FunctionSlider.
// Pemakaian: node tests/sim-function-slider.mjs
import assert from 'node:assert/strict';
import { evalFormula, describe } from '../src/lib/sim/function-slider.ts';

let passed = 0;
function check(name, actual, expected) {
  assert.equal(actual, expected, `${name}: diharapkan ${expected}, diperoleh ${actual}`);
  passed++;
  console.log(`PASS ${name}`);
}

check('quadratic f(0) = -4', evalFormula('quadratic', { a: 1, b: 0, c: -4 }, 0), -4);
check('quadratic f(2) = 0', evalFormula('quadratic', { a: 1, b: 0, c: -4 }, 2), 0);
check('exponential f(3) = 8', evalFormula('exponential', { a: 1, b: 2 }, 3), 8);
check('sine f(PI/2) = 1', evalFormula('sine', { a: 1, k: 1 }, Math.PI / 2), 1);
check('transform f(2) = -3', evalFormula('transform', { a: 1, h: 2, k: -3 }, 2), -3);
check('discriminant a=1,b=-6,c=9 = 0', describe('quadratic', { a: 1, b: -6, c: 9 }).discriminant, 0);

console.log(`\nSemua ${passed} pemeriksaan simulasi lulus.`);

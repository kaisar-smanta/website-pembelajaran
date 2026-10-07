// Uji logika murni komposisi fungsi linear: node tests/sim-function-composition.mjs
import assert from 'node:assert/strict';
import {
  composeLinear,
  evaluateLinear,
  formatLinear,
} from '../src/lib/sim/function-composition.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`PASS ${label}`);
}

const f = { a: 2, b: 1 };
const g = { a: -1, b: 3 };

check('defaults (f∘g)(0) = 7', () => {
  assert.equal(evaluateLinear(composeLinear(f, g), 0), 7);
});

check('defaults (g∘f)(0) = 2', () => {
  assert.equal(evaluateLinear(composeLinear(g, f), 0), 2);
});

check('defaults (f∘g)(1) = 5', () => {
  assert.equal(evaluateLinear(composeLinear(f, g), 1), 5);
});

check('defaults (g∘f)(1) = 0', () => {
  assert.equal(evaluateLinear(composeLinear(g, f), 1), 0);
});

check('defaults f∘g ≠ g∘f', () => {
  const fg = composeLinear(f, g);
  const gf = composeLinear(g, f);
  assert.notDeepEqual(fg, gf);
  assert.equal(formatLinear(fg), '−2x + 7');
  assert.equal(formatLinear(gf), '−2x + 2');
});

check('evaluateLinear dasar', () => {
  assert.equal(evaluateLinear({ a: 3, b: -2 }, 4), 10);
});

console.log(`PASS sim-function-composition (${passed} pemeriksaan)`);

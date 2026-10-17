// Uji logika murni matriks 2×2: node tests/sim-matrix.mjs
import { check, report } from './_util.mjs';
import assert from 'node:assert/strict';
import { multiply, determinant, equals, inverse } from '../src/lib/sim/matrix.ts';


const A = [
  [1, 2],
  [3, 4],
];
const B = [
  [2, 0],
  [1, 2],
];

check('defaults AB = [[4,4],[10,8]]', () => {
  assert.deepEqual(multiply(A, B), [
    [4, 4],
    [10, 8],
  ]);
});

check('det A = -2', () => {
  assert.equal(determinant(A), -2);
});

check('det B = 4', () => {
  assert.equal(determinant(B), 4);
});

check('det(AB) = -8', () => {
  assert.equal(determinant(multiply(A, B)), -8);
});

check('AB ≠ BA', () => {
  const AB = multiply(A, B);
  const BA = multiply(B, A);
  assert.equal(equals(AB, BA), false);
  assert.deepEqual(BA, [
    [2, 4],
    [7, 10],
  ]);
});

check('invers A benar dan A · A⁻¹ = I', () => {
  const invA = inverse(A);
  assert.ok(invA, 'A harus punya invers');
  assert.deepEqual(invA, [
    [-2, 1],
    [1.5, -0.5],
  ]);
  assert.deepEqual(multiply(A, invA), [
    [1, 0],
    [0, 1],
  ]);
});

check('matriks singular tidak punya invers', () => {
  assert.equal(inverse([[1, 2], [2, 4]]), null);
  assert.equal(inverse([[0, 0], [0, 0]]), null);
});

report();

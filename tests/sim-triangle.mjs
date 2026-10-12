// Uji logika murni eksplorasi segitiga (aturan sinus): node tests/sim-triangle.mjs
import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
import {
  solveTriangleAAS,
  areaFromSAS,
  triangleVertices,
  sineRuleRatios,
  describeTriangle,
} from '../src/lib/sim/triangle.ts';

const close = (actual, expected, tol, label) =>
  assert.ok(
    Math.abs(actual - expected) <= tol,
    `${label}: diharapkan ≈${expected}, diperoleh ${actual}`,
  );

check('segitiga 30–60–90 dengan sisi a = 5', () => {
  const sol = solveTriangleAAS(30, 60, 5);
  assert.ok(sol, 'solusi ada');
  assert.equal(sol.C, 90);
  close(sol.b, 8.660254, 1e-5, 'sisi b');
  close(sol.c, 10, 1e-9, 'sisi c');
  close(sol.area, 21.650635, 1e-5, 'luas');
  close(sol.circumradius, 5, 1e-9, 'jari-jari lingkaran luar');
});

check('segitiga siku-siku sama kaki', () => {
  const sol = solveTriangleAAS(45, 45, 6);
  assert.ok(sol);
  assert.equal(sol.C, 90);
  close(sol.b, 6, 1e-9, 'sisi b');
  close(sol.c, 6 * Math.SQRT2, 1e-9, 'sisi c');
});

check('data tidak sah menghasilkan null', () => {
  assert.equal(solveTriangleAAS(100, 100, 5), null, 'A + B ≥ 180');
  assert.equal(solveTriangleAAS(0, 60, 5), null, 'sudut nol');
  assert.equal(solveTriangleAAS(30, 60, 0), null, 'sisi nol');
});

check('luas SAS konsisten dengan AAS', () => {
  const sol = solveTriangleAAS(30, 60, 5);
  assert.ok(sol);
  close(areaFromSAS(sol.a, sol.b, sol.C), sol.area, 1e-9, 'luas SAS');
});

check('rasio aturan sinus seragam', () => {
  const sol = solveTriangleAAS(37, 53, 8);
  assert.ok(sol);
  const ratios = sineRuleRatios(sol);
  close(ratios[0], ratios[1], 1e-9, 'a/sin A = b/sin B');
  close(ratios[1], ratios[2], 1e-9, 'b/sin B = c/sin C');
});

check('koordinat titik sudut', () => {
  const sol = solveTriangleAAS(30, 60, 5);
  assert.ok(sol);
  const [A, B, C] = triangleVertices(sol);
  close(A.x, 0, 1e-12, 'A.x');
  close(A.y, 0, 1e-12, 'A.y');
  close(B.x, sol.c, 1e-9, 'B.x');
  close(B.y, 0, 1e-12, 'B.y');
  close(C.x, sol.b * Math.cos(Math.PI / 6), 1e-9, 'C.x');
  close(C.y, sol.b * Math.sin(Math.PI / 6), 1e-9, 'C.y');
});

check('deskripsi memuat ketiga sudut', () => {
  const sol = solveTriangleAAS(30, 60, 5);
  assert.ok(sol);
  const text = describeTriangle(sol);
  assert.ok(text.includes('A = 30°') && text.includes('C = 90°'));
});

check('areaFromSAS menolak masukan tak sah', () => {
  assert.throws(() => areaFromSAS(0, 5, 30), RangeError);
  assert.throws(() => areaFromSAS(3, -1, 30), RangeError);
  assert.throws(() => areaFromSAS(3, 4, 0), RangeError);
  assert.throws(() => areaFromSAS(3, 4, 180), RangeError);
  assert.throws(() => areaFromSAS(Number.NaN, 4, 30), RangeError);
});

check('triangleVertices menolak solusi tak sah', () => {
  assert.throws(() => triangleVertices(null), TypeError);
  assert.throws(() => triangleVertices({ A: 0, B: 60, C: 120, a: 5, b: 5, c: 5 }), RangeError);
  assert.throws(() => triangleVertices({ A: 30, B: 60, C: 90, a: -5, b: 5, c: 10 }), RangeError);
  assert.throws(() => triangleVertices({ A: 100, B: 100, C: 20, a: 5, b: 5, c: 5 }), RangeError);
});

console.log(`PASS sim-triangle (${checks.count} pemeriksaan)`);

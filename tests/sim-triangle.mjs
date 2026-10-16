// Uji logika murni eksplorasi segitiga (aturan sinus): node tests/sim-triangle.mjs
import assert from 'node:assert/strict';
import { check, checks, close } from './_util.mjs';
import {
  solveTriangleAAS,
  areaFromSAS,
  triangleVertices,
  sineRuleRatios,
  describeTriangle,
} from '../src/lib/sim/triangle.ts';


check('segitiga 30–60–90 dengan sisi a = 5', () => {
  const sol = solveTriangleAAS(30, 60, 5);
  assert.ok(sol, 'solusi ada');
  assert.equal(sol.C, 90);
  close(sol.b, 8.660254, 'sisi b', 1e-5);
  close(sol.c, 10, 'sisi c', 1e-9);
  close(sol.area, 21.650635, 'luas', 1e-5);
  close(sol.circumradius, 5, 'jari-jari lingkaran luar', 1e-9);
});

check('segitiga siku-siku sama kaki', () => {
  const sol = solveTriangleAAS(45, 45, 6);
  assert.ok(sol);
  assert.equal(sol.C, 90);
  close(sol.b, 6, 'sisi b', 1e-9);
  close(sol.c, 6 * Math.SQRT2, 'sisi c', 1e-9);
});

check('data tidak sah menghasilkan null', () => {
  assert.equal(solveTriangleAAS(100, 100, 5), null, 'A + B ≥ 180');
  assert.equal(solveTriangleAAS(0, 60, 5), null, 'sudut nol');
  assert.equal(solveTriangleAAS(30, 60, 0), null, 'sisi nol');
});

check('luas SAS konsisten dengan AAS', () => {
  const sol = solveTriangleAAS(30, 60, 5);
  assert.ok(sol);
  close(areaFromSAS(sol.a, sol.b, sol.C), sol.area, 'luas SAS', 1e-9);
});

check('rasio aturan sinus seragam', () => {
  const sol = solveTriangleAAS(37, 53, 8);
  assert.ok(sol);
  const ratios = sineRuleRatios(sol);
  close(ratios[0], ratios[1], 'a/sin A = b/sin B', 1e-9);
  close(ratios[1], ratios[2], 'b/sin B = c/sin C', 1e-9);
});

check('koordinat titik sudut', () => {
  const sol = solveTriangleAAS(30, 60, 5);
  assert.ok(sol);
  const [A, B, C] = triangleVertices(sol);
  close(A.x, 0, 'A.x', 1e-12);
  close(A.y, 0, 'A.y', 1e-12);
  close(B.x, sol.c, 'B.x', 1e-9);
  close(B.y, 0, 'B.y', 1e-12);
  close(C.x, sol.b * Math.cos(Math.PI / 6), 'C.x', 1e-9);
  close(C.y, sol.b * Math.sin(Math.PI / 6), 'C.y', 1e-9);
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

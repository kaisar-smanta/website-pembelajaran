// Verifikasi matematika src/lib/sim/polynomial.ts
// Pemakaian: node tests/sim-polynomial.mjs
import { close, runCase, report } from './_util.mjs';
import assert from 'node:assert/strict';
import {
  evalCubic,
  derivativeCubic,
  criticalPoints,
  findRoots,
} from '../src/lib/sim/polynomial.ts';



runCase('evalCubic dengan akar 1, 2, 3', () => {
  const k = { a: 1, b: -6, c: 11, d: -6 };
  close(evalCubic(k, 0), -6, 'f(0)', 1e-3);
  close(evalCubic(k, 1), 0, 'f(1)', 1e-3);
  close(evalCubic(k, 2), 0, 'f(2)', 1e-3);
  close(evalCubic(k, 3), 0, 'f(3)', 1e-3);
});

runCase('findRoots menemukan 1, 2, 3', () => {
  const roots = findRoots({ a: 1, b: -6, c: 11, d: -6 });
  assert.equal(roots.length, 3, `jumlah akar: ${roots.length}`);
  close(roots[0], 1, 'akar 1', 1e-3);
  close(roots[1], 2, 'akar 2', 1e-3);
  close(roots[2], 3, 'akar 3', 1e-3);
});

runCase('kurva x^3 - x punya akar -1, 0, 1', () => {
  const roots = findRoots({ a: 1, b: 0, c: -1, d: 0 });
  assert.equal(roots.length, 3, `jumlah akar: ${roots.length}`);
  close(roots[0], -1, 'akar -1', 1e-3);
  close(roots[1], 0, 'akar 0', 1e-3);
  close(roots[2], 1, 'akar 1', 1e-3);
});

runCase('derivativeCubic dari x^3 - 3x adalah 3x^2 - 3', () => {
  const d = derivativeCubic({ a: 1, b: 0, c: -3, d: 0 });
  assert.equal(d.a, 3);
  assert.equal(d.b, 0);
  assert.equal(d.c, -3);
});

runCase('criticalPoints x^3 - 3x di x = -1 (maks) dan x = 1 (min)', () => {
  const crit = criticalPoints({ a: 1, b: 0, c: -3, d: 0 });
  assert.equal(crit.length, 2, `jumlah titik: ${crit.length}`);
  close(crit[0].x, -1, 'x maksimum', 1e-3);
  assert.equal(crit[0].kind, 'max');
  close(crit[1].x, 1, 'x minimum', 1e-3);
  assert.equal(crit[1].kind, 'min');
});

runCase('findRoots menemukan akar rangkap (x-1)^2(x+2) di x = 1 dan -2', () => {
  const roots = findRoots({ a: 1, b: 0, c: -3, d: 2 });
  assert.equal(roots.length, 2, `jumlah akar: ${roots.length}`);
  close(roots[0], -2, 'akar -2', 1e-3);
  close(roots[1], 1, 'akar rangkap 1', 1e-3);
});

runCase('findRoots menemukan akar rangkap saat a = 0 (kuadrat)', () => {
  const roots = findRoots({ a: 0, b: 1, c: -1, d: 0.25 });
  assert.equal(roots.length, 1, `jumlah akar: ${roots.length}`);
  close(roots[0], 0.5, 'akar rangkap 0,5', 1e-3);
});

runCase('findRoots a = 0 menemukan akar rangkap tak di grid sampel', () => {
  const roots = findRoots({ a: 0, b: 9, c: -6, d: 1 });
  assert.equal(roots.length, 1, `jumlah akar: ${roots.length}`);
  close(roots[0], 1 / 3, 'akar rangkap 1/3', 1e-3);
});

runCase('findRoots a = 0 pada kuadrat dengan dua akar berbeda', () => {
  const roots = findRoots({ a: 0, b: 1, c: 0, d: -1 });
  assert.equal(roots.length, 2, `jumlah akar: ${roots.length}`);
  close(roots[0], -1, 'akar -1', 1e-3);
  close(roots[1], 1, 'akar 1', 1e-3);
});

runCase('findRoots a = 0 tanpa akar real', () => {
  const roots = findRoots({ a: 0, b: 1, c: 0, d: 1 });
  assert.equal(roots.length, 0, `jumlah akar: ${roots.length}`);
});

runCase('findRoots a = 0 dan b = 0 (linear) menemukan satu akar', () => {
  const roots = findRoots({ a: 0, b: 0, c: 2, d: -4 });
  assert.equal(roots.length, 1, `jumlah akar: ${roots.length}`);
  close(roots[0], 2, 'akar 2', 1e-3);
});

report();

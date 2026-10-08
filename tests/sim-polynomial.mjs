// Verifikasi matematika src/lib/sim/polynomial.ts
// Pemakaian: node tests/sim-polynomial.mjs
import assert from 'node:assert/strict';
import {
  evalCubic,
  derivativeCubic,
  criticalPoints,
  findRoots,
} from '../src/lib/sim/polynomial.ts';

let failed = 0;

function run(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${name}`);
    console.error(`  ${error && error.message ? error.message : error}`);
  }
}

function close(actual, expected, label, eps = 1e-3) {
  assert.ok(
    Math.abs(actual - expected) < eps,
    `${label}: diharapkan ≈ ${expected}, diperoleh ${actual}`,
  );
}

run('evalCubic dengan akar 1, 2, 3', () => {
  const k = { a: 1, b: -6, c: 11, d: -6 };
  close(evalCubic(k, 0), -6, 'f(0)');
  close(evalCubic(k, 1), 0, 'f(1)');
  close(evalCubic(k, 2), 0, 'f(2)');
  close(evalCubic(k, 3), 0, 'f(3)');
});

run('findRoots menemukan 1, 2, 3', () => {
  const roots = findRoots({ a: 1, b: -6, c: 11, d: -6 });
  assert.equal(roots.length, 3, `jumlah akar: ${roots.length}`);
  close(roots[0], 1, 'akar 1');
  close(roots[1], 2, 'akar 2');
  close(roots[2], 3, 'akar 3');
});

run('kurva x^3 - x punya akar -1, 0, 1', () => {
  const roots = findRoots({ a: 1, b: 0, c: -1, d: 0 });
  assert.equal(roots.length, 3, `jumlah akar: ${roots.length}`);
  close(roots[0], -1, 'akar -1');
  close(roots[1], 0, 'akar 0');
  close(roots[2], 1, 'akar 1');
});

run('derivativeCubic dari x^3 - 3x adalah 3x^2 - 3', () => {
  const d = derivativeCubic({ a: 1, b: 0, c: -3, d: 0 });
  assert.equal(d.a, 3);
  assert.equal(d.b, 0);
  assert.equal(d.c, -3);
});

run('criticalPoints x^3 - 3x di x = -1 (maks) dan x = 1 (min)', () => {
  const crit = criticalPoints({ a: 1, b: 0, c: -3, d: 0 });
  assert.equal(crit.length, 2, `jumlah titik: ${crit.length}`);
  close(crit[0].x, -1, 'x maksimum');
  assert.equal(crit[0].kind, 'max');
  close(crit[1].x, 1, 'x minimum');
  assert.equal(crit[1].kind, 'min');
});

run('findRoots menemukan akar rangkap (x-1)^2(x+2) di x = 1 dan -2', () => {
  const roots = findRoots({ a: 1, b: 0, c: -3, d: 2 });
  assert.equal(roots.length, 2, `jumlah akar: ${roots.length}`);
  close(roots[0], -2, 'akar -2');
  close(roots[1], 1, 'akar rangkap 1');
});

run('findRoots menemukan akar rangkap saat a = 0 (kuadrat)', () => {
  const roots = findRoots({ a: 0, b: 1, c: -1, d: 0.25 });
  assert.equal(roots.length, 1, `jumlah akar: ${roots.length}`);
  close(roots[0], 0.5, 'akar rangkap 0,5');
});

run('findRoots a = 0 menemukan akar rangkap tak di grid sampel', () => {
  const roots = findRoots({ a: 0, b: 9, c: -6, d: 1 });
  assert.equal(roots.length, 1, `jumlah akar: ${roots.length}`);
  close(roots[0], 1 / 3, 'akar rangkap 1/3');
});

run('findRoots a = 0 pada kuadrat dengan dua akar berbeda', () => {
  const roots = findRoots({ a: 0, b: 1, c: 0, d: -1 });
  assert.equal(roots.length, 2, `jumlah akar: ${roots.length}`);
  close(roots[0], -1, 'akar -1');
  close(roots[1], 1, 'akar 1');
});

run('findRoots a = 0 tanpa akar real', () => {
  const roots = findRoots({ a: 0, b: 1, c: 0, d: 1 });
  assert.equal(roots.length, 0, `jumlah akar: ${roots.length}`);
});

run('findRoots a = 0 dan b = 0 (linear) menemukan satu akar', () => {
  const roots = findRoots({ a: 0, b: 0, c: 2, d: -4 });
  assert.equal(roots.length, 1, `jumlah akar: ${roots.length}`);
  close(roots[0], 2, 'akar 2');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan polinomial lulus.');

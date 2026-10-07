// Verifikasi perhitungan peluang bersyarat (src/lib/sim/conditional.ts).
// Pemakaian: node tests/sim-conditional.mjs
import assert from 'node:assert/strict';
import { computeConditional } from '../src/lib/sim/conditional.ts';

let failed = 0;

function run(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    failed++;
    console.error(`FAIL ${name}: ${error instanceof Error ? error.message : error}`);
  }
}

function approx(actual, expected, tolerance = 1e-9) {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `diharapkan ≈${expected}, diperoleh ${actual}`,
  );
}

run('kasus diketahui P(B) dan P(A|B)', () => {
  const r = computeConditional(0.5, 0.8, 0.2);
  approx(r.pAB, 0.4);
  approx(r.pAcB, 0.1);
  approx(r.pB, 0.5);
  approx(r.pAGivenB, 0.8);
  approx(r.pBGivenA, 0.8);
  assert.equal(r.verdict, 'similar');
});

run('tabel dua arah konsisten', () => {
  const r = computeConditional(0.3, 0.6, 0.1);
  approx(r.pABc, r.pA - r.pAB);
  approx(r.pAcBc, r.pAc - r.pAcB);
  approx(r.pAB + r.pABc + r.pAcB + r.pAcBc, 1);
  approx(r.pB + r.pBc, 1);
});

run('P(B) = 0 membuat P(A|B) tidak terdefinisi', () => {
  const r = computeConditional(0.5, 0, 0);
  assert.equal(r.pB, 0);
  assert.equal(r.pAGivenB, undefined);
  assert.equal(r.verdict, 'undefined');
});

run('kasus bebas menghasilkan P(A|B) = P(A)', () => {
  const r = computeConditional(0.3, 0.4, 0.4);
  approx(r.pB, 0.4);
  approx(r.pAGivenB, 0.3);
  approx(r.pAGivenB, r.pA);
});

run('arah syarat dapat berbeda', () => {
  const r = computeConditional(0.2, 0.9, 0.1);
  approx(r.pB, 0.26);
  approx(r.pAGivenB, 0.18 / 0.26);
  assert.equal(r.verdict, 'different');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exitCode = 1;
} else {
  console.log('\nSemua pemeriksaan peluang bersyarat lulus.');
}

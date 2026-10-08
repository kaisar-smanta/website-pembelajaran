// Verifikasi matematika src/lib/sim/derivative.ts
// Pemakaian: node tests/sim-derivative.mjs
import assert from 'node:assert/strict';
import {
  DEFAULT_MODEL,
  evalFunction,
  slopeAt,
  tangentAt,
} from '../src/lib/sim/derivative.ts';

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

run('f(x) = x^3 - 3x bernilai f(1) = -2 dan f(2) = 2', () => {
  close(evalFunction(DEFAULT_MODEL, 1), -2, 'f(1)');
  close(evalFunction(DEFAULT_MODEL, 2), 2, 'f(2)');
});

run('gradien f\'(x) = 3x^2 - 3', () => {
  close(slopeAt(DEFAULT_MODEL, 0), -3, 'f\'(0)');
  close(slopeAt(DEFAULT_MODEL, 1), 0, 'f\'(1) stasioner');
  close(slopeAt(DEFAULT_MODEL, -1), 0, 'f\'(-1) stasioner');
  close(slopeAt(DEFAULT_MODEL, 2), 9, 'f\'(2)');
});

run('garis singgung di x = 1 adalah y = -2 (mendatar)', () => {
  const t = tangentAt(DEFAULT_MODEL, 1);
  close(t.slope, 0, 'gradien');
  close(t.intercept, -2, 'titik potong sumbu-y');
  close(t.y0, -2, 'ordinat titik');
});

run('garis singgung di x = 0 adalah y = -3x', () => {
  const t = tangentAt(DEFAULT_MODEL, 0);
  close(t.slope, -3, 'gradien');
  close(t.intercept, 0, 'titik potong sumbu-y');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan turunan lulus.');

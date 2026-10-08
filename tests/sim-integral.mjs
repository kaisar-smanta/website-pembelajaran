// Verifikasi matematika src/lib/sim/integral.ts
// Pemakaian: node tests/sim-integral.mjs
import assert from 'node:assert/strict';
import {
  evalIntegrand,
  exactIntegral,
  riemannSum,
} from '../src/lib/sim/integral.ts';

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

run('integran x^2 bernilai 9 di x = 3', () => {
  close(evalIntegrand(3), 9, 'f(3)');
});

run('integral eksak: int_0^1 x^2 = 1/3 dan int_0^2 x^2 = 8/3', () => {
  close(exactIntegral(0, 1), 1 / 3, 'int 0..1');
  close(exactIntegral(0, 2), 8 / 3, 'int 0..2');
});

run('jumlah Riemann tengah n=1 pada [0,1] = 0,25', () => {
  close(riemannSum(0, 1, 1, 'mid'), 0.25, 'n=1');
});

run('jumlah Riemann tengah mendekati nilai eksak saat n besar', () => {
  close(riemannSum(0, 1, 1000, 'mid'), 1 / 3, 'n=1000', 1e-5);
});

run('jumlah Riemann kiri dan kanan mengapit nilai eksak', () => {
  const left = riemannSum(0, 1, 100, 'left');
  const right = riemannSum(0, 1, 100, 'right');
  assert.ok(left < 1 / 3 && right > 1 / 3, `kiri=${left}, kanan=${right}`);
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan integral lulus.');

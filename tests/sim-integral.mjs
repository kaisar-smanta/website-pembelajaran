// Verifikasi matematika src/lib/sim/integral.ts
// Pemakaian: node tests/sim-integral.mjs
import { close, runCase, report } from './_util.mjs';
import assert from 'node:assert/strict';
import {
  evalIntegrand,
  exactIntegral,
  riemannSum,
} from '../src/lib/sim/integral.ts';



runCase('integran x^2 bernilai 9 di x = 3', () => {
  close(evalIntegrand(3), 9, 'f(3)', 1e-3);
});

runCase('integral eksak: int_0^1 x^2 = 1/3 dan int_0^2 x^2 = 8/3', () => {
  close(exactIntegral(0, 1), 1 / 3, 'int 0..1', 1e-3);
  close(exactIntegral(0, 2), 8 / 3, 'int 0..2', 1e-3);
});

runCase('jumlah Riemann tengah n=1 pada [0,1] = 0,25', () => {
  close(riemannSum(0, 1, 1, 'mid'), 0.25, 'n=1', 1e-3);
});

runCase('jumlah Riemann tengah mendekati nilai eksak saat n besar', () => {
  close(riemannSum(0, 1, 1000, 'mid'), 1 / 3, 'n=1000', 1e-5);
});

runCase('jumlah Riemann kiri dan kanan mengapit nilai eksak', () => {
  const left = riemannSum(0, 1, 100, 'left');
  const right = riemannSum(0, 1, 100, 'right');
  assert.ok(left < 1 / 3 && right > 1 / 3, `kiri=${left}, kanan=${right}`);
});

report();

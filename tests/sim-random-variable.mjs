// Verifikasi matematika src/lib/sim/random-variable.ts
// Pemakaian: node tests/sim-random-variable.mjs
import assert from 'node:assert/strict';
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import {
  sumProbabilities,
  expectedValue,
  variance,
  stdDev,
  isValidPmf,
  buildPmfReadout,
} from '../src/lib/sim/random-variable.ts';

const koin3 = [
  { x: 0, p: 1 / 8 },
  { x: 1, p: 3 / 8 },
  { x: 2, p: 3 / 8 },
  { x: 3, p: 1 / 8 },
];

runSimSuite({
  name: 'sim-random-variable',
  cases: [
    [
      'tiga koin: jumlah peluang = 1 dan sah',
      () => {
        close(sumProbabilities(koin3), 1, 'jumlah', 1e-3);
        assert.equal(isValidPmf(koin3), true);
      },
    ],
    [
      'tiga koin: E(X) = 1,5',
      () => {
        close(expectedValue(koin3), 1.5, 'E(X)', 1e-3);
      },
    ],
    [
      'tiga koin: varians = 0,75 dan sigma ≈ 0,866',
      () => {
        close(variance(koin3), 0.75, 'varians', 1e-3);
        close(stdDev(koin3), Math.sqrt(0.75), 'simpangan baku', 1e-3);
      },
    ],
    [
      'distribusi tak sah terdeteksi',
      () => {
        const bad = [
          { x: 1, p: 0.5 },
          { x: 2, p: 0.4 },
        ];
        assert.equal(isValidPmf(bad), false);
        const readout = buildPmfReadout(bad, (v) => String(Number(v.toFixed(3))));
        assert.ok(readout.includes('belum sama dengan 1'), 'tidak memperingatkan jumlah');
      },
    ],
    [
      'distribusi sah memberi rangkuman nilai harapan',
      () => {
        const readout = buildPmfReadout(koin3, (v) => String(Number(v.toFixed(3))));
        assert.ok(readout.includes('E(X) = 1.5'), `readout: ${readout}`);
      },
    ],
  ],
});

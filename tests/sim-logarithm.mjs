// Uji logika murni eksponen-logaritma: node tests/sim-logarithm.mjs
import assert from 'node:assert/strict';
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import {
  exponentialValue,
  logarithmValue,
  mirrorOverYEqualsX,
  keyPoints,
  describeLogarithm,
} from '../src/lib/sim/logarithm.ts';

runSimSuite({
  name: 'sim-logarithm',
  cases: [
    [
      'eksponen b^x',
      () => {
        assert.equal(exponentialValue(2, 3), 8);
        close(exponentialValue(3, 0), 1, 'b^0', 1e-12);
        close(exponentialValue(10, 2), 100, '10^2', 1e-9);
      },
    ],
    [
      'logaritma log_b x',
      () => {
        close(logarithmValue(2, 8), 3, 'log2 8', 1e-12);
        close(logarithmValue(10, 1000), 3, 'log10 1000', 1e-12);
        close(logarithmValue(2, 1), 0, 'log 1', 1e-12);
        close(logarithmValue(2, 2), 1, 'log_b b', 1e-12);
        assert.ok(Number.isNaN(logarithmValue(2, -1)), 'numerus negatif tak terdefinisi');
        assert.ok(Number.isNaN(logarithmValue(1, 5)), 'basis 1 tak terdefinisi');
      },
    ],
    [
      'logaritma adalah invers eksponen',
      () => {
        for (const x of [-2, -0.5, 0, 1.5, 3]) {
          close(logarithmValue(2, exponentialValue(2, x)), x, `invers di x=${x}`, 1e-9);
        }
      },
    ],
    [
      'pencerminan terhadap y = x',
      () => {
        assert.deepEqual(mirrorOverYEqualsX([0, 1]), [1, 0]);
        assert.deepEqual(mirrorOverYEqualsX([1, 2]), [2, 1]);
        assert.deepEqual(mirrorOverYEqualsX([3, -4]), [-4, 3]);
      },
    ],
    [
      'titik kunci saling bertukar peran',
      () => {
        const points = keyPoints(2);
        assert.deepEqual(points.exponential, [
          { x: 0, y: 1 },
          { x: 1, y: 2 },
        ]);
        assert.deepEqual(points.logarithm, [
          { x: 1, y: 0 },
          { x: 2, y: 1 },
        ]);
      },
    ],
    [
      'ringkasan sifat grafik',
      () => {
        const naik = describeLogarithm(2);
        assert.ok(naik.includes('naik'));
        assert.ok(naik.includes('y = x'));
        const turun = describeLogarithm(0.5);
        assert.ok(turun.includes('turun'));
        assert.ok(describeLogarithm(1).includes('tidak sama dengan 1'));
      },
    ],
  ],
});

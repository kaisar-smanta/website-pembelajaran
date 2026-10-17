// Uji logika murni peta tanda (sign chart): node tests/sim-sign-chart.mjs
import assert from 'node:assert/strict';
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import {
  quadraticRoots,
  quadraticSignChart,
  rationalSignChart,
  solutionIntervals,
  describeSolution,
  signOf,
} from '../src/lib/sim/sign-chart.ts';

runSimSuite({
  name: 'sim-sign-chart',
  cases: [
    [
      'akar kuadrat x² − x − 6 = (x+2)(x−3)',
      () => {
        assert.deepEqual(quadraticRoots(1, -1, -6), [-2, 3]);
      },
    ],
    [
      'akar kembar dan tanpa akar real',
      () => {
        assert.deepEqual(quadraticRoots(1, -2, 1), [1]);
        assert.deepEqual(quadraticRoots(1, 0, 1), []);
      },
    ],
    [
      'tanda kuadrat di sekitar akar',
      () => {
        const chart = quadraticSignChart(1, -1, -6);
        assert.deepEqual(
          chart.regions.map((r) => r.sign),
          [1, -1, 1],
        );
        assert.deepEqual(
          chart.critical.map((c) => [c.value, c.kind]),
          [
            [-2, 'zero'],
            [3, 'zero'],
          ],
        );
      },
    ],
    [
      'penyelesaian pertidaksamaan kuadrat',
      () => {
        const chart = quadraticSignChart(1, -1, -6);
        assert.equal(describeSolution(chart, '>'), 'x < -2 atau x > 3');
        assert.equal(describeSolution(chart, '>='), 'x ≤ -2 atau x ≥ 3');
        assert.equal(describeSolution(chart, '<'), '-2 < x < 3');
        assert.equal(describeSolution(chart, '<='), '-2 ≤ x ≤ 3');
      },
    ],
    [
      'kuadrat sempurna selalu tak negatif',
      () => {
        const chart = quadraticSignChart(1, -2, 1);
        assert.equal(describeSolution(chart, '>='), 'semua bilangan real x');
        const only = solutionIntervals(chart, '<=');
        assert.equal(only.length, 1);
        assert.equal(only[0].from, 1);
        assert.equal(only[0].to, 1);
        assert.equal(only[0].openFrom, false);
        assert.equal(only[0].openTo, false);
      },
    ],
    [
      'peta tanda rasional terfaktor',
      () => {
        const chart = rationalSignChart(1, [1, -2], [3]);
        assert.deepEqual(
          chart.critical.map((c) => [c.value, c.kind]),
          [
            [-2, 'zero'],
            [1, 'zero'],
            [3, 'pole'],
          ],
        );
        assert.deepEqual(
          chart.regions.map((r) => r.sign),
          [-1, 1, -1, 1],
        );
        assert.equal(describeSolution(chart, '>'), '-2 < x < 1 atau x > 3');
        assert.equal(describeSolution(chart, '>='), '-2 ≤ x ≤ 1 atau x > 3');
      },
    ],
    [
      'signOf dengan toleransi',
      () => {
        assert.equal(signOf(2), 1);
        assert.equal(signOf(-0.5), -1);
        assert.equal(signOf(1e-12), 0);
      },
    ],
    [
      'kasus linear (a = 0) tetap terbaca',
      () => {
        const chart = quadraticSignChart(0, 1, -4);
        close(chart.critical[0].value, 4, 'akar linear', 1e-9);
        assert.equal(describeSolution(chart, '>'), 'x > 4');
      },
    ],
  ],
});

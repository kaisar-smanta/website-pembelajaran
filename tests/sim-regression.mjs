// Uji murni untuk src/lib/sim/regression.ts
// Pemakaian: node tests/sim-regression.mjs
import { runSimSuite } from './_sim-harness.mjs';
import assert from 'node:assert/strict';
import {
  regression,
  diagnose,
  computeSums,
  pearsonR,
  coefficientOfDetermination,
} from '../src/lib/sim/regression.ts';

runSimSuite({
  name: 'sim-regression',
  cases: [
    [
      'garis sempurna (0,1),(1,3),(2,5) -> slope 2, intercept 1, r 1, r2 1',
      () => {
        const r = regression([
          { x: 0, y: 1 },
          { x: 1, y: 3 },
          { x: 2, y: 5 },
        ]);
        assert.equal(r.slope, 2);
        assert.equal(r.intercept, 1);
        assert.equal(r.r, 1);
        assert.equal(r.r2, 1);
        assert.equal(r.diagnostic, 'ok');
      },
    ],
    [
      'x konstan mengembalikan diagnostik constant-x',
      () => {
        const r = regression([
          { x: 3, y: 1 },
          { x: 3, y: 2 },
          { x: 3, y: 5 },
        ]);
        assert.equal(r.diagnostic, 'constant-x');
        assert.ok(Number.isNaN(r.slope), 'slope harus NaN');
        assert.ok(Number.isNaN(r.intercept), 'intercept harus NaN');
      },
    ],
    [
      'ragam y nol mengembalikan r NaN',
      () => {
        const r = regression([
          { x: 0, y: 4 },
          { x: 1, y: 4 },
          { x: 2, y: 4 },
        ]);
        assert.equal(r.diagnostic, 'zero-y-variance');
        assert.ok(Number.isNaN(r.r), 'r harus NaN');
        assert.ok(Number.isNaN(r.r2), 'r2 harus NaN');
      },
    ],
    [
      'kurang dari dua titik -> insufficient',
      () => {
        assert.equal(regression([]).diagnostic, 'insufficient');
        assert.equal(regression([{ x: 1, y: 1 }]).diagnostic, 'insufficient');
      },
    ],
    [
      'helper computeSums/diagnose/pearsonR konsisten',
      () => {
        const pts = [
          { x: 0, y: 2 },
          { x: 1, y: 4 },
          { x: 2, y: 6 },
        ];
        const sums = computeSums(pts);
        assert.equal(sums.sxx, 2);
        assert.equal(diagnose(sums), 'ok');
        assert.equal(pearsonR(sums), 1);
        assert.equal(coefficientOfDetermination(0.5), 0.25);
      },
    ],
  ],
});

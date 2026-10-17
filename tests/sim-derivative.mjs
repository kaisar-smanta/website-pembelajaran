// Verifikasi matematika src/lib/sim/derivative.ts
// Pemakaian: node tests/sim-derivative.mjs
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import {
  DEFAULT_MODEL,
  evalFunction,
  slopeAt,
  tangentAt,
} from '../src/lib/sim/derivative.ts';

runSimSuite({
  name: 'sim-derivative',
  cases: [
    [
      'f(x) = x^3 - 3x bernilai f(1) = -2 dan f(2) = 2',
      () => {
        close(evalFunction(DEFAULT_MODEL, 1), -2, 'f(1)', 1e-3);
        close(evalFunction(DEFAULT_MODEL, 2), 2, 'f(2)', 1e-3);
      },
    ],
    [
      'gradien f\'(x) = 3x^2 - 3',
      () => {
        close(slopeAt(DEFAULT_MODEL, 0), -3, 'f\'(0)', 1e-3);
        close(slopeAt(DEFAULT_MODEL, 1), 0, 'f\'(1) stasioner', 1e-3);
        close(slopeAt(DEFAULT_MODEL, -1), 0, 'f\'(-1) stasioner', 1e-3);
        close(slopeAt(DEFAULT_MODEL, 2), 9, 'f\'(2)', 1e-3);
      },
    ],
    [
      'garis singgung di x = 1 adalah y = -2 (mendatar)',
      () => {
        const t = tangentAt(DEFAULT_MODEL, 1);
        close(t.slope, 0, 'gradien', 1e-3);
        close(t.intercept, -2, 'titik potong sumbu-y', 1e-3);
        close(t.y0, -2, 'ordinat titik', 1e-3);
      },
    ],
    [
      'garis singgung di x = 0 adalah y = -3x',
      () => {
        const t = tangentAt(DEFAULT_MODEL, 0);
        close(t.slope, -3, 'gradien', 1e-3);
        close(t.intercept, 0, 'titik potong sumbu-y', 1e-3);
      },
    ],
  ],
});

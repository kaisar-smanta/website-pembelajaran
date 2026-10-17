// Uji logika murni eksplorasi fungsi piecewise dua potong:
// node tests/sim-piecewise.mjs
import assert from 'node:assert/strict';
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import {
  evalLeft,
  evalRight,
  evaluate,
  leftLimit,
  rightValue,
  jump,
  isContinuous,
  openEndpoint,
  closedEndpoint,
  analyze,
  samplePiecewise,
  continuityLabel,
} from '../src/lib/sim/piecewise.ts';

runSimSuite({
  name: 'sim-piecewise',
  cases: [
    [
      'nilai tiap potongan dan pemilihan sisi',
      () => {
        const p = { c: 0, m1: -1, m2: 1, k: 0 };
        assert.equal(evaluate(-2, p).side, 'left');
        assert.equal(evaluate(3, p).side, 'right');
        // Titik sambung mengikuti potongan kanan (titik ujung tertutup).
        assert.equal(evaluate(0, p).side, 'right');
        close(evaluate(-2, p).y, 2, 'f(-2)', 1e-9);
        close(evaluate(3, p).y, 3, 'f(3)', 1e-9);
        close(evalLeft(4, p), -4, 'm1 x', 1e-9);
        close(evalRight(4, p), 4, 'm2 x', 1e-9);
      },
    ],
    [
      'V kontinu di titik sambung c = 0',
      () => {
        const p = { c: 0, m1: -1, m2: 1, k: 0 };
        close(leftLimit(p), 0, 'limit kiri', 1e-9);
        close(rightValue(p), 0, 'nilai kanan', 1e-9);
        close(jump(p), 0, 'lompatan', 1e-9);
        assert.ok(isContinuous(p));
        assert.equal(continuityLabel(p), 'kontinu');
      },
    ],
    [
      'lompatan saat titik sambung bergeser dari x = 0',
      () => {
        const p = { c: 2, m1: -1, m2: 1, k: 0 };
        close(leftLimit(p), -2, 'limit kiri di c = 2', 1e-9);
        close(rightValue(p), 2, 'nilai kanan di c = 2', 1e-9);
        // lompatan = (m2 - m1) c = (1 - (-1)) * 2 = 4
        close(jump(p), 4, 'lompatan', 1e-9);
        assert.ok(!isContinuous(p));
        assert.equal(continuityLabel(p), 'tak kontinu');
      },
    ],
    [
      'geseran vertikal menggeser nilai tanpa mengubah lompatan',
      () => {
        const datar = { c: 1, m1: 2, m2: 3, k: 0 };
        const geser = { c: 1, m1: 2, m2: 3, k: 5 };
        close(jump(datar), 1, 'lompatan tanpa geseran', 1e-9);
        close(jump(geser), 1, 'lompatan dengan geseran', 1e-9);
        close(leftLimit(geser) - leftLimit(datar), 5, 'selisih limit kiri', 1e-9);
        close(rightValue(geser) - rightValue(datar), 5, 'selisih nilai kanan', 1e-9);
        assert.equal(isContinuous(geser), isContinuous(datar));
      },
    ],
    [
      'kemiringan sama menjadi satu garis yang selalu kontinu',
      () => {
        const p = { c: 3, m1: 2, m2: 2, k: -1 };
        close(jump(p), 0, 'lompatan saat m1 = m2', 1e-9);
        assert.ok(isContinuous(p));
        close(evaluate(-4, p).y, -9, 'f(-4)', 1e-9);
        close(evaluate(5, p).y, 9, 'f(5)', 1e-9);
      },
    ],
    [
      'titik ujung terbuka dan tertutup di titik sambung',
      () => {
        const p = { c: 2, m1: -1, m2: 1, k: 0 };
        assert.deepEqual(openEndpoint(p), { x: 2, y: -2, kind: 'open' });
        assert.deepEqual(closedEndpoint(p), { x: 2, y: 2, kind: 'closed' });
        const info = analyze(p);
        close(info.jump, 4, 'analisis lompatan', 1e-9);
        assert.equal(info.continuous, false);
        assert.equal(info.open.kind, 'open');
        assert.equal(info.closed.kind, 'closed');
      },
    ],
    [
      'sampel grafik memisahkan kedua potongan di titik sambung',
      () => {
        const p = { c: 1, m1: -1, m2: 1, k: 0 };
        const samples = samplePiecewise(p, -4, 4, 100);
        assert.equal(samples.left.length, 101);
        assert.equal(samples.right.length, 101);
        const lastLeft = samples.left[samples.left.length - 1];
        const firstRight = samples.right[0];
        close(lastLeft.x, 1, 'ujung kiri mencapai c', 1e-9);
        close(firstRight.x, 1, 'awal kanan mulai di c', 1e-9);
        close(lastLeft.y, -1, 'nilai kiri di c', 1e-9);
        close(firstRight.y, 1, 'nilai kanan di c', 1e-9);
        assert.notEqual(lastLeft.y, firstRight.y);
      },
    ],
    [
      'sampel menangani titik sambung di luar rentang',
      () => {
        const kiri = samplePiecewise({ c: -9, m1: 1, m2: 1, k: 0 }, -4, 4, 20);
        assert.equal(kiri.left.length, 0, 'tiada potongan kiri bila c di kiri rentang');
        assert.equal(kiri.right.length, 21);
        const kanan = samplePiecewise({ c: 9, m1: 1, m2: 1, k: 0 }, -4, 4, 20);
        assert.equal(kanan.left.length, 21);
        assert.equal(kanan.right.length, 0);
      },
    ],
    [
      'rentang menyusut menjadi satu titik tetap aman',
      () => {
        const samples = samplePiecewise({ c: 0, m1: 1, m2: -1, k: 0 }, 2, 2, 10);
        assert.equal(samples.left.length, 0);
        assert.equal(samples.right.length, 11);
        samples.right.forEach((point) => close(point.x, 2, 'titik tetap', 1e-9));
      },
    ],
  ],
});

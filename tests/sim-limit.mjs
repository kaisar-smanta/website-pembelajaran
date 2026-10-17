// Verifikasi matematika src/lib/sim/limit.ts
// Pemakaian: node tests/sim-limit.mjs
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import assert from 'node:assert/strict';
import {
  LIMIT_FUNCTIONS,
  DEFAULT_LIMIT_KEY,
  oneSidedSamples,
  estimateLimit,
  buildLimitTable,
  describeLimit,
} from '../src/lib/sim/limit.ts';

runSimSuite({
  name: 'sim-limit',
  cases: [
    [
      'fungsi rasional bernilai f(0) = 1 dan f(2) = 3',
      () => {
        const f = LIMIT_FUNCTIONS.rasional.evaluate;
        close(f(0), 1, 'f(0)', 1e-3);
        close(f(2), 3, 'f(2)', 1e-3);
      },
    ],
    [
      'f(1) pada fungsi rasional tak terdefinisi',
      () => {
        assert.ok(Number.isNaN(LIMIT_FUNCTIONS.rasional.evaluate(1)), 'f(1) seharusnya NaN');
      },
    ],
    [
      'limit rasional di x = 1 mendekati 2',
      () => {
        const est = estimateLimit(LIMIT_FUNCTIONS.rasional.evaluate, 1, 1e-6);
        close(est.left, 2, 'limit kiri', 1e-3);
        close(est.right, 2, 'limit kanan', 1e-3);
        close(est.value, 2, 'taksiran', 1e-3);
        assert.equal(est.exists, true);
      },
    ],
    [
      'limit fungsi akar sekawan di x = 1 mendekati 1/4',
      () => {
        const est = estimateLimit(LIMIT_FUNCTIONS.akar.evaluate, 1, 1e-6);
        close(est.value, 0.25, 'taksiran', 1e-3);
        assert.equal(est.exists, true);
      },
    ],
    [
      'limit fungsi mutlak di x = 2 tidak ada (kiri -1, kanan 1)',
      () => {
        const est = estimateLimit(LIMIT_FUNCTIONS.mutlak.evaluate, 2, 1e-6);
        close(est.left, -1, 'limit kiri', 1e-3);
        close(est.right, 1, 'limit kanan', 1e-3);
        assert.equal(est.exists, false);
      },
    ],
    [
      'sampel satu sisi makin dekat ke titik',
      () => {
        const samples = oneSidedSamples(LIMIT_FUNCTIONS.rasional.evaluate, 1, -1, 5, 0.5);
        assert.equal(samples.length, 5);
        for (let i = 1; i < samples.length; i++) {
          assert.ok(
            Math.abs(samples[i].x - 1) < Math.abs(samples[i - 1].x - 1),
            `sampel ${i} tidak lebih dekat`,
          );
        }
      },
    ],
    [
      'tabel limit memuat kolom kiri dan kanan',
      () => {
        const table = buildLimitTable(LIMIT_FUNCTIONS.rasional.evaluate, 1, 0.5, 5);
        assert.equal(table.left.length, 5);
        assert.equal(table.right.length, 5);
        assert.equal(table.estimate.exists, true);
      },
    ],
    [
      'uraian limit menyebut tidak ada untuk fungsi mutlak',
      () => {
        const model = LIMIT_FUNCTIONS.mutlak;
        const est = estimateLimit(model.evaluate, model.target, 1e-6);
        const text = describeLimit(model, est);
        assert.ok(text.includes('tidak ada'), `uraian: ${text}`);
      },
    ],
    [
      'model bawaan adalah fungsi rasional',
      () => {
        assert.equal(LIMIT_FUNCTIONS[DEFAULT_LIMIT_KEY].key, 'rasional');
      },
    ],
  ],
});

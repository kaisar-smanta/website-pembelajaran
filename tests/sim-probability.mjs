// Uji logika murni peluang: node tests/sim-probability.mjs
import { runSimSuite } from './_sim-harness.mjs';
import assert from 'node:assert/strict';
import { outcomesFor, sampleOnce } from '../src/lib/sim/probability.ts';

const near = (a, b, tol = 1e-12) => Math.abs(a - b) <= tol;

runSimSuite({
  name: 'sim-probability',
  cases: [
    [
      'koin memiliki peluang 0,5 untuk tiap hasil',
      () => {
        const outcomes = outcomesFor('koin');
        assert.equal(outcomes.length, 2);
        for (const o of outcomes) assert.ok(near(o.p, 0.5), `${o.key}: ${o.p}`);
      },
    ],
    [
      'dadu memiliki enam hasil berpeluang 1/6',
      () => {
        const outcomes = outcomesFor('dadu');
        assert.equal(outcomes.length, 6);
        for (const o of outcomes) assert.ok(near(o.p, 1 / 6), `${o.key}: ${o.p}`);
      },
    ],
    [
      'dua dadu jumlah 7 berpeluang 6/36',
      () => {
        const tujuh = outcomesFor('dua-dadu').find((o) => o.key === '7');
        assert.ok(tujuh, 'hasil jumlah 7 harus ada');
        assert.ok(near(tujuh.p, 6 / 36), `p = ${tujuh.p}`);
      },
    ],
    [
      'dua dadu jumlah 2 berpeluang 1/36',
      () => {
        const dua = outcomesFor('dua-dadu').find((o) => o.key === '2');
        assert.ok(dua, 'hasil jumlah 2 harus ada');
        assert.ok(near(dua.p, 1 / 36), `p = ${dua.p}`);
      },
    ],
    [
      'jumlah seluruh peluang dua dadu sama dengan 1',
      () => {
        const total = outcomesFor('dua-dadu').reduce((a, o) => a + o.p, 0);
        assert.ok(near(total, 1), `total = ${total}`);
      },
    ],
    [
      'sampler mengembalikan salah satu hasil yang valid',
      () => {
        for (const kind of ['koin', 'dadu', 'dua-dadu']) {
          const keys = new Set(outcomesFor(kind).map((o) => o.key));
          for (let i = 0; i < 50; i++) assert.ok(keys.has(sampleOnce(kind)));
        }
      },
    ],
  ],
});

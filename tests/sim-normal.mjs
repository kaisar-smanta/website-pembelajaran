// Uji logika murni eksplorasi distribusi normal: node tests/sim-normal.mjs
import assert from 'node:assert/strict';
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import {
  erf,
  normalPdf,
  normalCdf,
  standardize,
  intervalProbability,
  normalStats,
  sampleNormal,
  withinStd,
  describeNormal,
} from '../src/lib/sim/normal.ts';

runSimSuite({
  name: 'sim-normal',
  cases: [
    [
      'fungsi galat simetris dan bernilai nol di nol',
      () => {
        close(erf(0), 0, 'erf(0)', 1e-9);
        close(erf(1), 0.8427008, 'erf(1)', 1e-5);
        close(erf(-1), -0.8427008, 'erf(-1)', 1e-5);
      },
    ],
    [
      'kepadatan normal memuncak di rata-rata',
      () => {
        close(normalPdf(0, 0, 1), 1 / Math.sqrt(2 * Math.PI), 'f(0)', 1e-9);
        close(normalPdf(70, 70, 10), 1 / (10 * Math.sqrt(2 * Math.PI)), 'f(μ)', 1e-12);
        assert.ok(normalPdf(2, 0, 1) < normalPdf(1, 0, 1), 'menurun menjauh dari rata-rata');
      },
    ],
    [
      'cdf standar di titik kunci',
      () => {
        close(normalCdf(0, 0, 1), 0.5, 'P(X ≤ 0)', 1e-9);
        close(normalCdf(1.96, 0, 1), 0.9750021, 'P(X ≤ 1,96)', 1e-5);
        close(normalCdf(-1.96, 0, 1), 0.0249979, 'P(X ≤ −1,96)', 1e-5);
        close(normalCdf(70, 70, 10), 0.5, 'P(X ≤ μ)', 1e-9);
      },
    ],
    [
      'skor baku',
      () => {
        close(standardize(85, 70, 10), 1.5, 'z(85)', 1e-9);
        close(standardize(55, 70, 10), -1.5, 'z(55)', 1e-9);
      },
    ],
    [
      'peluang selang',
      () => {
        close(intervalProbability(-1, 1, 0, 1), 0.6826895, 'P(−1 ≤ X ≤ 1)', 1e-5);
        close(intervalProbability(-2, 2, 0, 1), 0.9544997, 'P(−2 ≤ X ≤ 2)', 1e-5);
        close(intervalProbability(-3, 3, 0, 1), 0.9973002, 'P(−3 ≤ X ≤ 3)', 1e-5);
        // Urutan batas tidak berpengaruh.
        close(intervalProbability(1, -1, 0, 1), intervalProbability(-1, 1, 0, 1), 'batas tertukar', 1e-12);
      },
    ],
    [
      'kaidah empiris 68–95–99,7',
      () => {
        close(withinStd(0, 1, 1), 0.6826895, '1σ', 1e-5);
        close(withinStd(0, 1, 2), 0.9544997, '2σ', 1e-5);
        close(withinStd(0, 1, 3), 0.9973002, '3σ', 1e-5);
      },
    ],
    [
      'statistik dan deskripsi',
      () => {
        const st = normalStats(70, 10);
        assert.equal(st.mean, 70);
        assert.equal(st.variance, 100);
        assert.equal(st.stdDev, 10);
        assert.ok(describeNormal(70, 10).includes('x = 70'));
      },
    ],
    [
      'sampel kurva berurutan dan memuncak di tengah',
      () => {
        const pts = sampleNormal(0, 1, -4, 4, 200);
        assert.equal(pts.length, 201);
        close(pts[0].z, -4, 'z awal', 1e-9);
        const middle = pts[100];
        close(middle.z, 0, 'z tengah', 1e-9);
        assert.ok(middle.y >= pts[0].y && middle.y >= pts[200].y, 'puncak di tengah');
      },
    ],
  ],
});

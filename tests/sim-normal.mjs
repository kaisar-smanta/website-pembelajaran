// Uji logika murni eksplorasi distribusi normal: node tests/sim-normal.mjs
import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
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

const close = (actual, expected, tol, label) =>
  assert.ok(
    Math.abs(actual - expected) <= tol,
    `${label}: diharapkan ≈${expected}, diperoleh ${actual}`,
  );

check('fungsi galat simetris dan bernilai nol di nol', () => {
  close(erf(0), 0, 1e-9, 'erf(0)');
  close(erf(1), 0.8427008, 1e-5, 'erf(1)');
  close(erf(-1), -0.8427008, 1e-5, 'erf(-1)');
});

check('kepadatan normal memuncak di rata-rata', () => {
  close(normalPdf(0, 0, 1), 1 / Math.sqrt(2 * Math.PI), 1e-9, 'f(0)');
  close(normalPdf(70, 70, 10), 1 / (10 * Math.sqrt(2 * Math.PI)), 1e-12, 'f(μ)');
  assert.ok(normalPdf(2, 0, 1) < normalPdf(1, 0, 1), 'menurun menjauh dari rata-rata');
});

check('cdf standar di titik kunci', () => {
  close(normalCdf(0, 0, 1), 0.5, 1e-9, 'P(X ≤ 0)');
  close(normalCdf(1.96, 0, 1), 0.9750021, 1e-5, 'P(X ≤ 1,96)');
  close(normalCdf(-1.96, 0, 1), 0.0249979, 1e-5, 'P(X ≤ −1,96)');
  close(normalCdf(70, 70, 10), 0.5, 1e-9, 'P(X ≤ μ)');
});

check('skor baku', () => {
  close(standardize(85, 70, 10), 1.5, 1e-9, 'z(85)');
  close(standardize(55, 70, 10), -1.5, 1e-9, 'z(55)');
});

check('peluang selang', () => {
  close(intervalProbability(-1, 1, 0, 1), 0.6826895, 1e-5, 'P(−1 ≤ X ≤ 1)');
  close(intervalProbability(-2, 2, 0, 1), 0.9544997, 1e-5, 'P(−2 ≤ X ≤ 2)');
  close(intervalProbability(-3, 3, 0, 1), 0.9973002, 1e-5, 'P(−3 ≤ X ≤ 3)');
  // Urutan batas tidak berpengaruh.
  close(intervalProbability(1, -1, 0, 1), intervalProbability(-1, 1, 0, 1), 1e-12, 'batas tertukar');
});

check('kaidah empiris 68–95–99,7', () => {
  close(withinStd(0, 1, 1), 0.6826895, 1e-5, '1σ');
  close(withinStd(0, 1, 2), 0.9544997, 1e-5, '2σ');
  close(withinStd(0, 1, 3), 0.9973002, 1e-5, '3σ');
});

check('statistik dan deskripsi', () => {
  const st = normalStats(70, 10);
  assert.equal(st.mean, 70);
  assert.equal(st.variance, 100);
  assert.equal(st.stdDev, 10);
  assert.ok(describeNormal(70, 10).includes('x = 70'));
});

check('sampel kurva berurutan dan memuncak di tengah', () => {
  const pts = sampleNormal(0, 1, -4, 4, 200);
  assert.equal(pts.length, 201);
  close(pts[0].z, -4, 1e-9, 'z awal');
  const middle = pts[100];
  close(middle.z, 0, 1e-9, 'z tengah');
  assert.ok(middle.y >= pts[0].y && middle.y >= pts[200].y, 'puncak di tengah');
});

console.log(`PASS sim-normal (${checks.count} pemeriksaan)`);

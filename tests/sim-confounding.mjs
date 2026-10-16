// Uji logika murni eksplorasi perancu/paradoks Simpson: node tests/sim-confounding.mjs
import assert from 'node:assert/strict';
import { check, checks, close } from './_util.mjs';
import {
  rate,
  makeStratum,
  groupFromRate,
  aggregate,
  analyze,
  defaultStrata,
} from '../src/lib/sim/confounding.ts';


check('proporsi kelompok dan pengaman ukuran', () => {
  assert.equal(rate({ n: 10, success: 4 }).rate, 0.4);
  assert.equal(rate({ n: 0, success: 0 }).rate, 0);
  assert.equal(rate({ n: 10, success: 20 }).rate, 1);
  assert.deepEqual(groupFromRate(100, 0.9), { n: 100, success: 90 });
  assert.deepEqual(groupFromRate(10, 2), { n: 10, success: 10 });
});

check('data bawaan memperlihatkan paradoks Simpson', () => {
  const analysis = analyze(defaultStrata());
  // Perlakuan unggul di setiap strata ...
  assert.deepEqual(analysis.perStratumDifferences.map((d) => Number(d.toFixed(4))), [0.1, 0.1]);
  assert.equal(analysis.stratumDirection, 'treatment');
  // ... tetapi kalah saat digabung.
  close(analysis.overallControl.rate, 0.83, 'kontrol keseluruhan', 1e-9);
  close(analysis.overallTreatment.rate, 0.37, 'perlakuan keseluruhan', 1e-9);
  close(analysis.overallDifference, -0.46, 'selisih keseluruhan', 1e-9);
  assert.equal(analysis.overallDirection, 'control');
  assert.equal(analysis.reversed, true);
});

check('agregasi menjumlahkan hitungan, bukan merata-ratakan proporsi', () => {
  const strata = [
    makeStratum('A', { n: 90, success: 81 }, { n: 10, success: 10 }),
    makeStratum('B', { n: 10, success: 2 }, { n: 90, success: 27 }),
  ];
  const overall = aggregate(strata);
  assert.equal(overall.control.n, 100);
  assert.equal(overall.treatment.n, 100);
  close(overall.control.rate, 0.83, 'kontrol', 1e-9);
  close(overall.treatment.rate, 0.37, 'perlakuan', 1e-9);
});

check('tanpa perancu, arah strata sama dengan keseluruhan', () => {
  const strata = [
    makeStratum('A', { n: 50, success: 40 }, { n: 50, success: 45 }),
    makeStratum('B', { n: 50, success: 10 }, { n: 50, success: 15 }),
  ];
  const analysis = analyze(strata);
  assert.equal(analysis.reversed, false);
  assert.equal(analysis.stratumDirection, 'treatment');
  assert.equal(analysis.overallDirection, 'treatment');
});

console.log(`PASS sim-confounding (${checks.count} pemeriksaan)`);

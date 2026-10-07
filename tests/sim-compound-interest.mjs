// Uji logika murni bunga dan anuitas: node tests/sim-compound-interest.mjs
import assert from 'node:assert/strict';
import {
  simpleInterestSeries,
  compoundInterestSeries,
  effectiveAnnualRate,
  annuityPayment,
  annuityTotalInterest,
} from '../src/lib/sim/compound-interest.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

const close = (actual, expected, tol, label) =>
  assert.ok(
    Math.abs(actual - expected) <= tol,
    `${label}: diharapkan ≈${expected}, diperoleh ${actual}`,
  );

check('bunga tunggal P=1.000.000, i=10%, n=2 => 1.200.000', () => {
  const series = simpleInterestSeries(1_000_000, 0.1, 2);
  assert.deepEqual(series, [1_000_000, 1_100_000, 1_200_000]);
});

check('bunga majemuk tahunan P=1.000.000, i=10%, n=2 => 1.210.000', () => {
  const series = compoundInterestSeries(1_000_000, 0.1, 2, 1);
  close(series[2], 1_210_000, 1e-6, 'saldo akhir');
});

check('bunga majemuk bulanan lebih besar daripada tahunan', () => {
  const tahunan = compoundInterestSeries(1_000_000, 0.1, 2, 1)[2];
  const bulanan = compoundInterestSeries(1_000_000, 0.1, 2, 12)[2];
  assert.ok(bulanan > tahunan);
});

check('suku bunga efektif 6% bulanan ≈ 6,1678%', () => {
  close(effectiveAnnualRate(0.06, 12) * 100, 6.1678, 0.0005, 'efektif');
});

check('anuitas P=12.000.000, 12%/tahun, 12 bulan ≈ 1.066.185,9', () => {
  close(annuityPayment(12_000_000, 0.12, 12), 1_066_185.9, 1, 'angsuran');
});

check('total bunga anuitas = total pembayaran − pokok', () => {
  const A = annuityPayment(12_000_000, 0.12, 12);
  close(annuityTotalInterest(12_000_000, 0.12, 12), A * 12 - 12_000_000, 1e-6, 'total bunga');
});

check('anuitas tanpa bunga membagi pokok rata', () => {
  close(annuityPayment(12_000_000, 0, 12), 1_000_000, 1e-9, 'angsuran');
});

console.log(`PASS sim-compound-interest (${passed} pemeriksaan)`);

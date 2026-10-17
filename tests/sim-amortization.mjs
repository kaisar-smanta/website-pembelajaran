// Uji logika murni jadwal amortisasi: node tests/sim-amortization.mjs
import assert from 'node:assert/strict';
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import {
  monthlyPayment,
  amortizationSchedule,
  summarizeRows,
} from '../src/lib/sim/amortization.ts';

const P = 12_000_000;
const RATE = 0.12;
const MONTHS = 12;

runSimSuite({
  name: 'sim-amortization',
  cases: [
    [
      'angsuran bulanan anuitas',
      () => {
        close(monthlyPayment(P, RATE, MONTHS), 1_066_185.9, 'angsuran', 1);
        close(monthlyPayment(P, 0, MONTHS), P / MONTHS, 'tanpa bunga', 1e-6);
      },
    ],
    [
      'jadwal tanpa tambahan lunas dalam tenor',
      () => {
        const result = amortizationSchedule(P, RATE, MONTHS);
        assert.equal(result.rows.length, MONTHS);
        assert.equal(result.months, MONTHS);
        close(result.rows[0].interest, 120_000, 'bunga bulan 1', 1e-6);
        close(result.rows[0].principal, result.monthlyPayment - 120_000, 'pokok bulan 1', 1e-6);
        assert.ok(result.rows[MONTHS - 1].balance < 0.01, 'sisa akhir mendekati nol');
        const sumPrincipal = result.rows.reduce((a, r) => a + r.principal, 0);
        close(sumPrincipal, P, 'jumlah pokok = pinjaman', 0.5);
        close(result.totalInterest, result.monthlyPayment * MONTHS - P, 'total bunga', 1);
      },
    ],
    [
      'sisa pinjaman menurun monoton',
      () => {
        const { rows } = amortizationSchedule(P, RATE, MONTHS);
        for (let i = 1; i < rows.length; i++) {
          assert.ok(rows[i].balance <= rows[i - 1].balance + 1e-6, `baris ${i} tidak menurun`);
        }
      },
    ],
    [
      'angsuran tambahan mempercepat pelunasan dan menghemat bunga',
      () => {
        const base = amortizationSchedule(P, RATE, MONTHS);
        const extra = amortizationSchedule(P, RATE, MONTHS, 500_000);
        assert.ok(extra.months < base.months, 'lunas lebih cepat');
        assert.ok(extra.totalInterest < base.totalInterest, 'bunga lebih kecil');
        close(extra.rows.reduce((a, r) => a + r.principal, 0), P, 'jumlah pokok dengan tambahan', 1);
      },
    ],
    [
      'tambahan lebih besar mempercepat lebih banyak',
      () => {
        const kecil = amortizationSchedule(P, RATE, MONTHS, 250_000);
        const besar = amortizationSchedule(P, RATE, MONTHS, 1_000_000);
        assert.ok(besar.months <= kecil.months);
        assert.ok(besar.totalInterest <= kecil.totalInterest);
      },
    ],
    [
      'ringkasan membatasi baris dan menyisakan baris terakhir',
      () => {
        const long = amortizationSchedule(100_000_000, 0.09, 60).rows;
        const ringkas = summarizeRows(long, 12);
        assert.equal(ringkas.length, 13);
        assert.equal(ringkas[ringkas.length - 1].period, long[long.length - 1].period);

        const pendek = amortizationSchedule(P, RATE, MONTHS).rows;
        assert.equal(summarizeRows(pendek, 12).length, pendek.length);
      },
    ],
  ],
});

// Uji logika murni sifat-sifat eksponen: node tests/sim-exponent-laws.mjs
import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
import {
  powerValue,
  almostEqual,
  exponentLaws,
  describeExponentLaws,
} from '../src/lib/sim/exponent-laws.ts';

const close = (actual, expected, tol, label) =>
  assert.ok(
    Math.abs(actual - expected) <= tol,
    `${label}: diharapkan ≈${expected}, diperoleh ${actual}`,
  );

check('nilai pangkat a^x', () => {
  assert.equal(powerValue(2, 3), 8);
  assert.equal(powerValue(5, 2), 25);
  close(powerValue(2, 0), 1, 1e-12, 'a^0');
  close(powerValue(2, -1), 0.5, 1e-12, 'a^-1');
  close(powerValue(3, -2), 1 / 9, 1e-12, 'a^-2');
  assert.ok(Number.isNaN(powerValue(0, -1)), 'nol pangkat negatif tak terdefinisi');
});

check('almostEqual menangani toleransi dan NaN', () => {
  assert.ok(almostEqual(8, 8), 'sama persis');
  assert.ok(almostEqual(1, 1 + 1e-12), 'selisih sangat kecil');
  assert.ok(!almostEqual(1, 1.01), 'selisih nyata');
  assert.ok(!almostEqual(NaN, NaN), 'NaN tidak dianggap sama');
});

check('aturan a^m * a^n = a^(m+n)', () => {
  for (const [a, m, n] of [
    [2, 3, 4],
    [3, -2, 5],
    [5, 0, 2],
    [2, -3, -2],
    [10, 2, 3],
    [4, -1, -1],
  ]) {
    const r = exponentLaws(a, m, n);
    assert.ok(r.productHolds, `aturan hasil kali gagal untuk a=${a}, m=${m}, n=${n}`);
    close(r.productLeft, r.productRight, 1e-9, `ruas a=${a}, m=${m}, n=${n}`);
  }
});

check('aturan a^m / a^n = a^(m-n)', () => {
  for (const [a, m, n] of [
    [2, 5, 2],
    [3, 4, 6],
    [5, -1, 3],
    [2, 3, 3],
    [10, -2, -5],
  ]) {
    const r = exponentLaws(a, m, n);
    assert.ok(r.quotientHolds, `aturan hasil bagi gagal untuk a=${a}, m=${m}, n=${n}`);
  }
});

check('aturan (a^m)^n = a^(mn)', () => {
  for (const [a, m, n] of [
    [2, 3, 2],
    [3, 2, 3],
    [5, -2, 2],
    [2, 4, 0],
    [7, -1, 3],
  ]) {
    const r = exponentLaws(a, m, n);
    assert.ok(r.powerHolds, `aturan pangkat dari pangkat gagal untuk a=${a}, m=${m}, n=${n}`);
  }
});

check('nilai pendukung a^m dan a^n', () => {
  const r = exponentLaws(2, 3, 4);
  close(r.aPowM, 8, 1e-12, 'a^m');
  close(r.aPowN, 16, 1e-12, 'a^n');
  close(r.productLeft, 128, 1e-9, 'a^m * a^n');
  close(r.productRight, 128, 1e-9, 'a^(m+n)');
  close(r.quotientLeft, 0.5, 1e-9, 'a^m / a^n');
  close(r.quotientRight, 0.5, 1e-9, 'a^(m-n)');
  close(r.powerLeft, 4096, 1e-6, '(a^m)^n');
  close(r.powerRight, 4096, 1e-6, 'a^(mn)');
});

check('ringkasan sifat eksponen', () => {
  const dua = describeExponentLaws(2);
  assert.ok(dua.includes('a^0'), 'menyinggung pangkat nol');
  assert.ok(dua.includes('Basis a = 2'), 'menyebut basis');
  assert.ok(describeExponentLaws(1).includes('Basis a = 1'), 'memperingatkan basis satu');
  assert.ok(describeExponentLaws(0).includes('positif'), 'memperingatkan basis tak positif');
});

console.log(`PASS sim-exponent-laws (${checks.count} pemeriksaan)`);

// Uji pemformat angka bersama: node tests/format.mjs
import assert from 'node:assert/strict';
import {
  formatId,
  formatRounded,
  formatPlain,
  formatFixed,
  formatPercent,
} from '../src/lib/format.ts';
import { check, checks } from './_util.mjs';

// Rapikan spasi tak-terpisah agar perbandingan stabil lintas versi ICU.
const tidy = (value) => value.replace(/[\u00a0\u202f]/g, '');

check('formatId memakai pemisah ribuan dan koma desimal id-ID', () => {
  assert.equal(tidy(formatId(1234.5)), '1.234,5');
  assert.equal(tidy(formatId(1000000)), '1.000.000');
});

check('formatId memetakan nilai tak hingga ke 0', () => {
  assert.equal(formatId(Number.NaN), '0');
  assert.equal(formatId(Number.POSITIVE_INFINITY), '0');
  assert.equal(formatId(Number.NEGATIVE_INFINITY), '0');
});

check('formatRounded membulatkan dan membuang nol di belakang', () => {
  assert.equal(formatRounded(1.2345, 2), '1.23');
  assert.equal(formatRounded(1.5), '1.5');
  assert.equal(formatRounded(2), '2');
  assert.equal(formatRounded(2.0), '2');
  assert.equal(formatRounded(-0.0), '0');
});

check('formatRounded aman untuk nilai tak hingga', () => {
  assert.equal(formatRounded(Number.NaN), '0');
  assert.equal(formatRounded(Number.POSITIVE_INFINITY), '0');
});

check('formatPlain sama dengan formatRounded dua desimal', () => {
  assert.equal(formatPlain(3.14159), '3.14');
  assert.equal(formatPlain(10), '10');
});

check('formatFixed mempertahankan jumlah desimal', () => {
  assert.equal(formatFixed(2, 3), '2.000');
  assert.equal(formatFixed(1.005, 1), '1.0');
});

check('formatPercent menghasilkan persen id-ID', () => {
  assert.equal(tidy(formatPercent(0.25)), '25%');
  assert.equal(tidy(formatPercent(1)), '100%');
  assert.ok(tidy(formatPercent(1 / 3)).startsWith('33,33'));
});

console.log(`PASS format (${checks.count} pemeriksaan)`);

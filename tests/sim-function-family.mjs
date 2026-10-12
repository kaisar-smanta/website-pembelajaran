// Uji logika murni eksplorasi keluarga fungsi: node tests/sim-function-family.mjs
import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
import {
  evalRaw,
  evalSimplified,
  evaluate,
  analyze,
  sampleFunctionFamily,
  describeFunctionFamily,
} from '../src/lib/sim/function-family.ts';

const close = (actual, expected, tol, label) =>
  assert.ok(
    Math.abs(actual - expected) <= tol,
    `${label}: diharapkan ≈${expected}, diperoleh ${actual}`,
  );

check('nilai fungsi di luar titik istimewa', () => {
  const p = evaluate(1, 2, 3);
  assert.equal(p.kind, 'value');
  close(p.y, -1.5, 1e-9, 'f(1)');
  close(evalSimplified(0, 2, 3), -2 / 3, 1e-9, 'bentuk sederhana');
});

check('diskontinuitas terhapus (lubang) di x = a', () => {
  const p = evaluate(2, 2, 3);
  assert.equal(p.kind, 'hole');
  close(p.y, -4, 1e-9, 'ordinat lubang = 2a/(a-b)');
  assert.ok(Number.isNaN(evalRaw(2, 2, 3)), 'bentuk mentah tak terdefinisi');
});

check('asimtot tegak di x = b', () => {
  const p = evaluate(3, 2, 3);
  assert.equal(p.kind, 'pole');
  assert.equal(p.y, null);
});

check('kasus a = b menjadi kutub, bukan lubang', () => {
  const p = evaluate(2, 2, 2);
  assert.equal(p.kind, 'pole');
  assert.equal(p.y, null);
  const far = evaluate(0, 2, 2);
  assert.equal(far.kind, 'value');
  close(far.y, -1, 1e-9, 'f(0) saat a = b');
});

check('analisis lubang dan asimtot', () => {
  const a = analyze(2, 3);
  assert.deepEqual(a.hole, { x: 2, y: -4 });
  assert.equal(a.verticalAsymptote, 3);
  assert.equal(a.horizontalAsymptote, 1);

  const b = analyze(2, 2);
  assert.equal(b.hole, null);
  assert.equal(b.verticalAsymptote, 2);
  assert.ok(describeFunctionFamily(a).includes('lubang di (2, -4)'));
  assert.ok(describeFunctionFamily(b).includes('tanpa lubang'));
});

check('sampel grafik berurutan', () => {
  const samples = sampleFunctionFamily(2, 3, -6, 6, 120);
  assert.equal(samples.length, 121);
  assert.equal(samples[0].kind, 'value');
  assert.ok(samples.some((p) => p.kind === 'hole'));
  assert.ok(samples.some((p) => p.kind === 'pole'));
});

console.log(`PASS sim-function-family (${checks.count} pemeriksaan)`);

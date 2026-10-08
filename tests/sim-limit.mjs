// Verifikasi matematika src/lib/sim/limit.ts
// Pemakaian: node tests/sim-limit.mjs
import assert from 'node:assert/strict';
import {
  LIMIT_FUNCTIONS,
  DEFAULT_LIMIT_KEY,
  oneSidedSamples,
  estimateLimit,
  buildLimitTable,
  describeLimit,
} from '../src/lib/sim/limit.ts';

let failed = 0;

function run(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${name}`);
    console.error(`  ${error && error.message ? error.message : error}`);
  }
}

function close(actual, expected, label, eps = 1e-3) {
  assert.ok(
    Math.abs(actual - expected) < eps,
    `${label}: diharapkan ≈ ${expected}, diperoleh ${actual}`,
  );
}

run('fungsi rasional bernilai f(0) = 1 dan f(2) = 3', () => {
  const f = LIMIT_FUNCTIONS.rasional.evaluate;
  close(f(0), 1, 'f(0)');
  close(f(2), 3, 'f(2)');
});

run('f(1) pada fungsi rasional tak terdefinisi', () => {
  assert.ok(Number.isNaN(LIMIT_FUNCTIONS.rasional.evaluate(1)), 'f(1) seharusnya NaN');
});

run('limit rasional di x = 1 mendekati 2', () => {
  const est = estimateLimit(LIMIT_FUNCTIONS.rasional.evaluate, 1, 1e-6);
  close(est.left, 2, 'limit kiri');
  close(est.right, 2, 'limit kanan');
  close(est.value, 2, 'taksiran');
  assert.equal(est.exists, true);
});

run('limit fungsi akar sekawan di x = 1 mendekati 1/4', () => {
  const est = estimateLimit(LIMIT_FUNCTIONS.akar.evaluate, 1, 1e-6);
  close(est.value, 0.25, 'taksiran');
  assert.equal(est.exists, true);
});

run('limit fungsi mutlak di x = 2 tidak ada (kiri -1, kanan 1)', () => {
  const est = estimateLimit(LIMIT_FUNCTIONS.mutlak.evaluate, 2, 1e-6);
  close(est.left, -1, 'limit kiri');
  close(est.right, 1, 'limit kanan');
  assert.equal(est.exists, false);
});

run('sampel satu sisi makin dekat ke titik', () => {
  const samples = oneSidedSamples(LIMIT_FUNCTIONS.rasional.evaluate, 1, -1, 5, 0.5);
  assert.equal(samples.length, 5);
  for (let i = 1; i < samples.length; i++) {
    assert.ok(
      Math.abs(samples[i].x - 1) < Math.abs(samples[i - 1].x - 1),
      `sampel ${i} tidak lebih dekat`,
    );
  }
});

run('tabel limit memuat kolom kiri dan kanan', () => {
  const table = buildLimitTable(LIMIT_FUNCTIONS.rasional.evaluate, 1, 0.5, 5);
  assert.equal(table.left.length, 5);
  assert.equal(table.right.length, 5);
  assert.equal(table.estimate.exists, true);
});

run('uraian limit menyebut tidak ada untuk fungsi mutlak', () => {
  const model = LIMIT_FUNCTIONS.mutlak;
  const est = estimateLimit(model.evaluate, model.target, 1e-6);
  const text = describeLimit(model, est);
  assert.ok(text.includes('tidak ada'), `uraian: ${text}`);
});

run('model bawaan adalah fungsi rasional', () => {
  assert.equal(LIMIT_FUNCTIONS[DEFAULT_LIMIT_KEY].key, 'rasional');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan limit lulus.');

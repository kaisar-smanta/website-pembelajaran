// Verifikasi matematika src/lib/sim/random-variable.ts
// Pemakaian: node tests/sim-random-variable.mjs
import assert from 'node:assert/strict';
import {
  sumProbabilities,
  expectedValue,
  variance,
  stdDev,
  isValidPmf,
  buildPmfReadout,
} from '../src/lib/sim/random-variable.ts';

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

const koin3 = [
  { x: 0, p: 1 / 8 },
  { x: 1, p: 3 / 8 },
  { x: 2, p: 3 / 8 },
  { x: 3, p: 1 / 8 },
];

run('tiga koin: jumlah peluang = 1 dan sah', () => {
  close(sumProbabilities(koin3), 1, 'jumlah');
  assert.equal(isValidPmf(koin3), true);
});

run('tiga koin: E(X) = 1,5', () => {
  close(expectedValue(koin3), 1.5, 'E(X)');
});

run('tiga koin: varians = 0,75 dan sigma ≈ 0,866', () => {
  close(variance(koin3), 0.75, 'varians');
  close(stdDev(koin3), Math.sqrt(0.75), 'simpangan baku');
});

run('distribusi tak sah terdeteksi', () => {
  const bad = [
    { x: 1, p: 0.5 },
    { x: 2, p: 0.4 },
  ];
  assert.equal(isValidPmf(bad), false);
  const readout = buildPmfReadout(bad, (v) => String(Number(v.toFixed(3))));
  assert.ok(readout.includes('belum sama dengan 1'), 'tidak memperingatkan jumlah');
});

run('distribusi sah memberi rangkuman nilai harapan', () => {
  const readout = buildPmfReadout(koin3, (v) => String(Number(v.toFixed(3))));
  assert.ok(readout.includes('E(X) = 1.5'), `readout: ${readout}`);
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan variabel acak lulus.');

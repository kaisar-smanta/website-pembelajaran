// Verifikasi matematika src/lib/sim/distribution.ts
// Pemakaian: node tests/sim-distribution.mjs
import assert from 'node:assert/strict';
import {
  parseData,
  computeStats,
  classifySkew,
} from '../src/lib/sim/distribution.ts';

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

run('IQR = 0 tetap mendeteksi pencilan', () => {
  const st = computeStats(parseData('5,5,5,5,5,100'));
  assert.ok(st, 'statistik tersedia');
  assert.equal(st.iqr, 0, 'IQR nol');
  assert.equal(st.lowFence, 5, 'pagar bawah = Q1');
  assert.equal(st.highFence, 5, 'pagar atas = Q3');
  assert.deepEqual(st.outliers, [100], '100 terdeteksi sebagai pencilan');
  assert.deepEqual(st.inside, [5, 5, 5, 5, 5], 'nilai lain tetap di dalam pagar');
});

run('rata-rata, median, dan kuartil [1,2,3,4,5]', () => {
  const st = computeStats([1, 2, 3, 4, 5]);
  assert.ok(st, 'statistik tersedia');
  assert.equal(st.n, 5);
  assert.equal(st.mean, 3, 'mean');
  assert.equal(st.median, 3, 'median');
  assert.equal(st.q1, 1.5, 'Q1');
  assert.equal(st.q3, 4.5, 'Q3');
  assert.equal(st.iqr, 3, 'IQR');
});

run('sebaran simetris tidak ditandai miring', () => {
  const st = computeStats([1, 2, 3, 4, 5]);
  assert.ok(st, 'statistik tersedia');
  assert.equal(classifySkew(st.mean, st.median), 'simetris');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan distribusi lulus.');

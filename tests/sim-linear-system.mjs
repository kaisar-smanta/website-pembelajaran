// Verifikasi logika src/lib/sim/linear-system.ts
// Pemakaian: node tests/sim-linear-system.mjs
import assert from 'node:assert/strict';
import { solve2x2 } from '../src/lib/sim/linear-system.ts';

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

run('default x + y = 4 dan x − y = 0 => solusi tunggal (2, 2), det −2', () => {
  const sol = solve2x2(1, 1, 4, 1, -1, 0);
  assert.equal(sol.kind, 'unique', 'jenis solusi');
  assert.equal(sol.det, -2, 'determinan');
  assert.equal(sol.x, 2, 'x');
  assert.equal(sol.y, 2, 'y');
});

run('garis sejajar x + y = 1 dan x + y = 3 => tidak ada solusi', () => {
  const sol = solve2x2(1, 1, 1, 1, 1, 3);
  assert.equal(sol.kind, 'none', 'jenis solusi');
  assert.equal(sol.det, 0, 'determinan nol');
});

run('garis berimpit x + y = 1 dan 2x + 2y = 2 => tak hingga solusi', () => {
  const sol = solve2x2(1, 1, 1, 2, 2, 2);
  assert.equal(sol.kind, 'infinite', 'jenis solusi');
  assert.equal(sol.det, 0, 'determinan nol');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan sistem linear lulus.');

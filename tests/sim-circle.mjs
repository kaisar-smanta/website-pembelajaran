// Verifikasi matematika src/lib/sim/circle.ts
// Pemakaian: node tests/sim-circle.mjs
import assert from 'node:assert/strict';
import {
  circumference,
  area,
  arcLength,
  sectorArea,
  degToRad,
} from '../src/lib/sim/circle.ts';

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

run('r = 4 => K ≈ 25,1327 dan L ≈ 50,2655', () => {
  close(circumference(4), 25.1327, 'keliling');
  close(area(4), 50.2655, 'luas');
});

run('θ = 90° dan r = 4 => busur ≈ 6,2832 dan juring ≈ 12,5664', () => {
  close(arcLength(4, 90), 6.2832, 'panjang busur');
  close(sectorArea(4, 90), 12.5664, 'luas juring');
});

run('sudut penuh 360° menyamai keliling dan luas lingkaran', () => {
  close(arcLength(4, 360), circumference(4), 'busur penuh');
  close(sectorArea(4, 360), area(4), 'juring penuh');
});

run('konversi derajat ke radian', () => {
  close(degToRad(180), Math.PI, '180° = π rad');
  close(degToRad(90), Math.PI / 2, '90° = π/2 rad');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan lingkaran lulus.');

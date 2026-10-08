// Verifikasi matematika src/lib/sim/vector.ts
// Pemakaian: node tests/sim-vector.mjs
import assert from 'node:assert/strict';
import {
  magnitude,
  add,
  subtract,
  scale,
  dot,
  angle,
  unit,
  projection,
} from '../src/lib/sim/vector.ts';

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

function closeVec(actual, expected, label, eps = 1e-3) {
  close(actual.x, expected.x, `${label}.x`, eps);
  close(actual.y, expected.y, `${label}.y`, eps);
}

run('besar vektor (3, 4) adalah 5', () => {
  close(magnitude({ x: 3, y: 4 }), 5, '|v|');
  close(magnitude({ x: 0, y: 0 }), 0, '|0|');
});

run('penjumlahan dan pengurangan vektor', () => {
  closeVec(add({ x: 3, y: 1 }, { x: 1, y: 3 }), { x: 4, y: 4 }, 'A + B');
  closeVec(subtract({ x: 3, y: 1 }, { x: 1, y: 3 }), { x: 2, y: -2 }, 'A - B');
});

run('perkalian skalar', () => {
  closeVec(scale({ x: 2, y: -3 }, 2.5), { x: 5, y: -7.5 }, '2,5·v');
});

run('hasil kali titik', () => {
  close(dot({ x: 1, y: 2 }, { x: 3, y: 4 }), 11, 'a·b');
  close(dot({ x: 1, y: 0 }, { x: 0, y: 1 }), 0, 'tegak lurus');
});

run('sudut antara vektor dalam derajat', () => {
  close(angle({ x: 1, y: 0 }, { x: 0, y: 1 }), 90, '90 derajat');
  close(angle({ x: 1, y: 0 }, { x: 1, y: 0 }), 0, 'searah');
  close(angle({ x: 1, y: 0 }, { x: -1, y: 0 }), 180, 'berlawanan');
  close(angle({ x: 3, y: 1 }, { x: 1, y: 3 }), 53.1301, 'A dan B');
  close(angle({ x: 0, y: 0 }, { x: 1, y: 1 }), 0, 'vektor nol');
});

run('vektor satuan', () => {
  closeVec(unit({ x: 3, y: 4 }), { x: 0.6, y: 0.8 }, 'unit');
  close(magnitude(unit({ x: -2, y: 5 })), 1, 'panjang vektor satuan');
  closeVec(unit({ x: 0, y: 0 }), { x: 0, y: 0 }, 'unit vektor nol');
});

run('proyeksi vektor', () => {
  closeVec(projection({ x: 3, y: 4 }, { x: 1, y: 0 }), { x: 3, y: 0 }, 'proyeksi pada sumbu-x');
  closeVec(projection({ x: 3, y: 1 }, { x: 1, y: 3 }), { x: 0.6, y: 1.8 }, 'A pada B');
  closeVec(projection({ x: 3, y: 1 }, { x: 0, y: 0 }), { x: 0, y: 0 }, 'proyeksi pada nol');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan vektor lulus.');

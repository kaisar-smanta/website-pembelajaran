// Verifikasi matematika src/lib/sim/vector.ts
// Pemakaian: node tests/sim-vector.mjs
import { close, closeVec, runCase, report } from './_util.mjs';
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

runCase('besar vektor (3, 4) adalah 5', () => {
  close(magnitude({ x: 3, y: 4 }), 5, '|v|', 1e-3);
  close(magnitude({ x: 0, y: 0 }), 0, '|0|', 1e-3);
});

runCase('penjumlahan dan pengurangan vektor', () => {
  closeVec(add({ x: 3, y: 1 }, { x: 1, y: 3 }), { x: 4, y: 4 }, 'A + B', 1e-3);
  closeVec(subtract({ x: 3, y: 1 }, { x: 1, y: 3 }), { x: 2, y: -2 }, 'A - B', 1e-3);
});

runCase('perkalian skalar', () => {
  closeVec(scale({ x: 2, y: -3 }, 2.5), { x: 5, y: -7.5 }, '2,5·v', 1e-3);
});

runCase('hasil kali titik', () => {
  close(dot({ x: 1, y: 2 }, { x: 3, y: 4 }), 11, 'a·b', 1e-3);
  close(dot({ x: 1, y: 0 }, { x: 0, y: 1 }), 0, 'tegak lurus', 1e-3);
});

runCase('sudut antara vektor dalam derajat', () => {
  close(angle({ x: 1, y: 0 }, { x: 0, y: 1 }), 90, '90 derajat', 1e-3);
  close(angle({ x: 1, y: 0 }, { x: 1, y: 0 }), 0, 'searah', 1e-3);
  close(angle({ x: 1, y: 0 }, { x: -1, y: 0 }), 180, 'berlawanan', 1e-3);
  close(angle({ x: 3, y: 1 }, { x: 1, y: 3 }), 53.1301, 'A dan B', 1e-3);
  close(angle({ x: 0, y: 0 }, { x: 1, y: 1 }), 0, 'vektor nol', 1e-3);
});

runCase('vektor satuan', () => {
  closeVec(unit({ x: 3, y: 4 }), { x: 0.6, y: 0.8 }, 'unit', 1e-3);
  close(magnitude(unit({ x: -2, y: 5 })), 1, 'panjang vektor satuan', 1e-3);
  closeVec(unit({ x: 0, y: 0 }), { x: 0, y: 0 }, 'unit vektor nol', 1e-3);
});

runCase('proyeksi vektor', () => {
  closeVec(projection({ x: 3, y: 4 }, { x: 1, y: 0 }), { x: 3, y: 0 }, 'proyeksi pada sumbu-x', 1e-3);
  closeVec(projection({ x: 3, y: 1 }, { x: 1, y: 3 }), { x: 0.6, y: 1.8 }, 'A pada B', 1e-3);
  closeVec(projection({ x: 3, y: 1 }, { x: 0, y: 0 }), { x: 0, y: 0 }, 'proyeksi pada nol', 1e-3);
});

report();

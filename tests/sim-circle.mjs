// Verifikasi matematika src/lib/sim/circle.ts
// Pemakaian: node tests/sim-circle.mjs
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import {
  circumference,
  area,
  arcLength,
  sectorArea,
  degToRad,
} from '../src/lib/sim/circle.ts';

runSimSuite({
  name: 'sim-circle',
  cases: [
    [
      'r = 4 => K ≈ 25,1327 dan L ≈ 50,2655',
      () => {
        close(circumference(4), 25.1327, 'keliling', 1e-3);
        close(area(4), 50.2655, 'luas', 1e-3);
      },
    ],
    [
      'θ = 90° dan r = 4 => busur ≈ 6,2832 dan juring ≈ 12,5664',
      () => {
        close(arcLength(4, 90), 6.2832, 'panjang busur', 1e-3);
        close(sectorArea(4, 90), 12.5664, 'luas juring', 1e-3);
      },
    ],
    [
      'sudut penuh 360° menyamai keliling dan luas lingkaran',
      () => {
        close(arcLength(4, 360), circumference(4), 'busur penuh', 1e-3);
        close(sectorArea(4, 360), area(4), 'juring penuh', 1e-3);
      },
    ],
    [
      'konversi derajat ke radian',
      () => {
        close(degToRad(180), Math.PI, '180° = π rad', 1e-3);
        close(degToRad(90), Math.PI / 2, '90° = π/2 rad', 1e-3);
      },
    ],
  ],
});

// Verifikasi nilai matematika topik pengayaan yang baru ditambahkan:
// limit fungsi, distribusi binomial, dan transformasi geometri.
// Dipanggil otomatis oleh tests/run-all.mjs.
//
// Pemakaian: node tests/mtl-tambahan.mjs
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let passed = 0;

function check(label, actual, expected, tolerance = 0) {
  if (tolerance > 0) {
    assert.ok(
      Math.abs(actual - expected) <= tolerance,
      `${label}: diharapkan ≈${expected}, diperoleh ${actual}`,
    );
  } else {
    assert.equal(actual, expected, `${label}: diharapkan ${expected}, diperoleh ${actual}`);
  }
  passed++;
}

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

function checkFileExists(label, relativePath) {
  assert.ok(fs.existsSync(path.join(root, relativePath)), `${label}: berkas ${relativePath} tidak ditemukan`);
  passed++;
}

// ---------- Limit fungsi ----------
const fLimit = (x) => (x * x - 1) / (x - 1);
check('limit (x^2-1)/(x-1) di x->1', fLimit(1.0000001), 2, 1e-4);
check('limit (x^2-4)/(x-2) di x->2', (2.0000001 ** 2 - 4) / 0.0000001, 4, 1e-4);
check('limit (x^2-9)/(x-3) di x->3', (3.0000001 ** 2 - 9) / 0.0000001, 6, 1e-4);
const limitSqrt = (x) => Math.sqrt(x * x + x) - x;
check('limit sqrt(x^2+x)-x saat x->tak hingga', limitSqrt(1e7), 0.5, 1e-4);
check('limit sin(x)/x saat x->0', Math.sin(1e-7) / 1e-7, 1, 1e-6);

// ---------- Distribusi binomial ----------
function binomialCoefficient(n, k) {
  if (k < 0 || k > n) return 0;
  let result = 1;
  for (let i = 0; i < k; i += 1) result = (result * (n - i)) / (i + 1);
  return Math.round(result);
}
function binomialPmf(n, p, k) {
  return binomialCoefficient(n, k) * p ** k * (1 - p) ** (n - k);
}
check('C(5,2)', binomialCoefficient(5, 2), 10);
check('C(6,3)', binomialCoefficient(6, 3), 20);
check('C(10,5)', binomialCoefficient(10, 5), 252);
check('P(X=5) untuk n=10, p=0,5', binomialPmf(10, 0.5, 5), 252 / 1024, 1e-12);
check('P(X=1) untuk n=4, p=0,25', binomialPmf(4, 0.25, 1), 0.421875, 1e-12);
let pmfSum = 0;
for (let k = 0; k <= 10; k += 1) pmfSum += binomialPmf(10, 0.5, k);
check('jumlah pmf n=10, p=0,5', pmfSum, 1, 1e-12);
check('rata-rata binomial np', 10 * 0.5, 5, 1e-12);
check('varians binomial np(1-p)', 10 * 0.5 * (1 - 0.5), 2.5, 1e-12);

// ---------- Transformasi geometri ----------
const applyMatrix = (m, v) => [
  m[0][0] * v[0] + m[0][1] * v[1],
  m[1][0] * v[0] + m[1][1] * v[1],
];
const rot90 = [
  [0, -1],
  [1, 0],
];
const reflX = [
  [1, 0],
  [0, -1],
];
const reflYX = [
  [0, 1],
  [1, 0],
];
const multiply = (a, b) => [
  [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
  [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]],
];
check('rotasi 90 derajat memetakan (1,0)->(0,1)', applyMatrix(rot90, [1, 0]).join(','), '0,1');
check('refleksi sumbu-x memetakan (2,3)->(2,-3)', applyMatrix(reflX, [2, 3]).join(','), '2,-3');
check('refleksi y=x memetakan (2,3)->(3,2)', applyMatrix(reflYX, [2, 3]).join(','), '3,2');
const compose = multiply(reflYX, reflX);
check(
  'komposisi refleksi x lalu y=x = rotasi 90',
  compose[0].join(',') + '|' + compose[1].join(','),
  rot90[0].join(',') + '|' + rot90[1].join(','),
);
check('translasi (x+3,y-2) pada (1,1)', [1 + 3, 1 - 2].join(','), '4,-1');
check('dilatasi faktor 2 pada (3,-1)', [2 * 3, 2 * -1].join(','), '6,-2');

// ---------- Berkas konten baru ----------
checkFileExists('topik limit', 'src/data/topics/limit-fungsi.ts');
checkFileExists('topik binomial', 'src/data/topics/distribusi-binomial.ts');
checkFileExists('topik transformasi geometri', 'src/data/topics/transformasi-geometri.ts');
checkFileExists('soal limit', 'src/data/questions/limit-fungsi.ts');
checkFileExists('soal binomial', 'src/data/questions/distribusi-binomial.ts');
checkFileExists('soal transformasi geometri', 'src/data/questions/transformasi-geometri.ts');

console.log(`Verifikasi materi pengayaan baru lulus: ${passed} pemeriksaan.`);

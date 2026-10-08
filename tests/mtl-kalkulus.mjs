// Verifikasi nilai matematika topik Kalkulus Matematika Tingkat Lanjut:
// turunan, aplikasi turunan, dan integral. Dipanggil otomatis oleh tests/run-all.mjs.
//
// Pemakaian: node tests/mtl-kalkulus.mjs
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
  const full = path.join(root, relativePath);
  assert.ok(fs.existsSync(full), `${label}: berkas ${relativePath} tidak ditemukan`);
  passed++;
}

function checkFileContains(label, relativePath, needle) {
  const full = path.join(root, relativePath);
  const text = fs.readFileSync(full, 'utf8');
  assert.ok(text.includes(needle), `${label}: ${relativePath} tidak memuat "${needle}"`);
  passed++;
}

// ---------- Turunan: fungsi dan aturannya ----------
const f = (x) => x ** 3 - 3 * x ** 2 + 2;
const f1 = (x) => 3 * x ** 2 - 6 * x;
check('turunan f di x=2', f1(2), 0);
check('turunan f di x=3', f1(3), 9);
check('turunan f di x=0', f1(0), 0);

const g1 = (x) => 6 * x ** 2 - 10 * x + 3;
check('turunan g=2x^3-5x^2+3x-7 di x=1', g1(1), -1);

const chain = (x) => 12 * (3 * x + 1) ** 3;
check('aturan rantai (3x+1)^4 di x=0', chain(0), 12);

const prod = (x) => 6 * x ** 2 - 6 * x + 2;
check('aturan hasil kali di x=1', prod(1), 2);

const quot = (x) => -3 / (x - 1) ** 2;
check('aturan hasil bagi (2x+1)/(x-1) di x=2', quot(2), -3);

check('turunan 2^x di x=0', 2 ** 0 * Math.log(2), Math.LN2, 1e-12);
check('turunan e^{3x} di x=0', 3 * Math.E ** 0, 3);
check('turunan sin(2x) di x=0', 2 * Math.cos(0), 2);

const xcos = (x) => Math.cos(x) - x * Math.sin(x);
check('turunan x cos x di x=0', xcos(0), 1, 1e-12);
check('turunan tan x di pi/4', 1 / Math.cos(Math.PI / 4) ** 2, 2, 1e-12);

const avgRate = (b, a) => (b ** 2 - a ** 2) / (b - a);
check('laju rata-rata x^2 pada [1,3]', avgRate(3, 1), 4);

// ---------- Aplikasi turunan: garis singgung & normal ----------
check('gradien y=x^2 di x=3', 2 * 3, 6);
check('nilai garis singgung y=6x-9 di x=0', 6 * 0 - 9, -9);
check('gradien garis normal y=x^2 di x=3', -1 / 6, -1 / 6, 1e-12);

// ---------- Aplikasi turunan: sketsa kurva ----------
check('titik stasioner f di x=0', f1(0), 0);
check('titik stasioner f di x=2', f1(2), 0);
check('nilai maksimum lokal f(0)', f(0), 2);
check('nilai minimum lokal f(2)', f(2), -2);
const f2 = (x) => 6 * x - 6;
check('uji turunan kedua f di 0', f2(0), -6);
check('uji turunan kedua f di 2', f2(2), 6);
check('titik belok f(1) dari f=0', f2(1), 0);

// ---------- Aplikasi turunan: kecepatan, percepatan, optimasi ----------
const v = (t) => 3 * t ** 2 - 12 * t + 9;
const a = (t) => 6 * t - 12;
check('kecepatan v(2)', v(2), -3);
check('percepatan a(2)', a(2), 0);
check('kecepatan awal v(0)', v(0), 9);
check('luas maksimum kandang 40 m', 10 * (40 - 2 * 10), 200);

const boxVolume = (x) => x * (20 - 2 * x) ** 2;
check('volume kotak maksimum di x=10/3', boxVolume(10 / 3), 16000 / 27, 1e-9);
check('hasil kali maksimum dua bilangan berjumlah 20', 10 * 10, 100);

// ---------- Integral: antiturunan dan integral tentu ----------
const antiX2 = (x) => x ** 3 / 3;
check('integral 0..2 x^2', antiX2(2) - antiX2(0), 8 / 3, 1e-12);

const antiLinear = (x) => x ** 2 + x;
check('integral 1..3 (2x+1)', antiLinear(3) - antiLinear(1), 10);
check('integral 0..pi sin x', -Math.cos(Math.PI) - -Math.cos(0), 2, 1e-12);
check('integral 0..1 e^x', Math.E - 1, Math.E - 1, 1e-12);

const anti3x2 = (x) => x ** 3;
check('integral 1..2 3x^2', anti3x2(2) - anti3x2(1), 7);
check('integral 0..1 3x^2', anti3x2(1) - anti3x2(0), 1);

const antiPoly = (x) => x ** 3 - 2 * x ** 2 + 5 * x;
check('integral 0..2 (3x^2-4x+5)', antiPoly(2) - antiPoly(0), 10);

// ---------- Integral: luas ----------
const areaXvsX2 = (x) => x ** 2 / 2 - x ** 3 / 3;
check('luas antara y=x dan y=x^2', areaXvsX2(1) - areaXvsX2(0), 1 / 6, 1e-12);

const areaParabola = (x) => 4 * x - x ** 3 / 3;
check('luas 4-x^2 pada [-2,2]', areaParabola(2) - areaParabola(-2), 32 / 3, 1e-12);

const areaTwoCurves = (x) => -(x ** 3) / 3 + x ** 2 / 2 + 2 * x;
check('luas antara y=x+1 dan y=x^2-1', areaTwoCurves(2) - areaTwoCurves(-1), 9 / 2, 1e-12);

// ---------- Keberadaan berkas materi dan bank soal ----------
checkFileExists('topik turunan', 'src/data/topics/turunan.ts');
checkFileExists('topik aplikasi-turunan', 'src/data/topics/aplikasi-turunan.ts');
checkFileExists('topik integral', 'src/data/topics/integral.ts');
checkFileExists('soal turunan', 'src/data/questions/turunan.ts');
checkFileExists('soal aplikasi-turunan', 'src/data/questions/aplikasi-turunan.ts');
checkFileExists('soal integral', 'src/data/questions/integral.ts');

checkFileContains('ekspor topik turunan', 'src/data/topics/turunan.ts', 'export const turunan: Topic');
checkFileContains('ekspor topik aplikasi', 'src/data/topics/aplikasi-turunan.ts', 'export const aplikasiTurunan: Topic');
checkFileContains('ekspor topik integral', 'src/data/topics/integral.ts', 'export const integral: Topic');
checkFileContains('ekspor soal turunan', 'src/data/questions/turunan.ts', 'export const turunanQuestions: Question[]');
checkFileContains('ekspor soal aplikasi', 'src/data/questions/aplikasi-turunan.ts', 'export const aplikasiTurunanQuestions: Question[]');
checkFileContains('ekspor soal integral', 'src/data/questions/integral.ts', 'export const integralQuestions: Question[]');

console.log(`\nSemua ${passed} pemeriksaan kalkulus (MTL) lulus.`);

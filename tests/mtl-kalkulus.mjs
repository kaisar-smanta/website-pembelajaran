// Verifikasi nilai matematika topik Kalkulus Matematika Tingkat Lanjut:
// turunan, aplikasi turunan, dan integral. Dipanggil otomatis oleh tests/run-all.mjs.
//
// Pemakaian: node tests/mtl-kalkulus.mjs
import { checkFileExists, close, ok, report } from './_util.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

function checkFileContains(label, relativePath, needle) {
  const full = path.join(root, relativePath);
  const text = fs.readFileSync(full, 'utf8');
  ok(text.includes(needle), `${label}: ${relativePath} tidak memuat "${needle}"`);
}

// ---------- Turunan: fungsi dan aturannya ----------
const f = (x) => x ** 3 - 3 * x ** 2 + 2;
const f1 = (x) => 3 * x ** 2 - 6 * x;
close(f1(2), 0, 'turunan f di x=2', 0);
close(f1(3), 9, 'turunan f di x=3', 0);
close(f1(0), 0, 'turunan f di x=0', 0);

const g1 = (x) => 6 * x ** 2 - 10 * x + 3;
close(g1(1), -1, 'turunan g=2x^3-5x^2+3x-7 di x=1', 0);

const chain = (x) => 12 * (3 * x + 1) ** 3;
close(chain(0), 12, 'aturan rantai (3x+1)^4 di x=0', 0);

const prod = (x) => 6 * x ** 2 - 6 * x + 2;
close(prod(1), 2, 'aturan hasil kali di x=1', 0);

const quot = (x) => -3 / (x - 1) ** 2;
close(quot(2), -3, 'aturan hasil bagi (2x+1)/(x-1) di x=2', 0);

close(2 ** 0 * Math.log(2), Math.LN2, 'turunan 2^x di x=0', 1e-12);
close(3 * Math.E ** 0, 3, 'turunan e^{3x} di x=0', 0);
close(2 * Math.cos(0), 2, 'turunan sin(2x) di x=0', 0);

const xcos = (x) => Math.cos(x) - x * Math.sin(x);
close(xcos(0), 1, 'turunan x cos x di x=0', 1e-12);
close(1 / Math.cos(Math.PI / 4) ** 2, 2, 'turunan tan x di pi/4', 1e-12);

const avgRate = (b, a) => (b ** 2 - a ** 2) / (b - a);
close(avgRate(3, 1), 4, 'laju rata-rata x^2 pada [1,3]', 0);

// ---------- Aplikasi turunan: garis singgung & normal ----------
close(2 * 3, 6, 'gradien y=x^2 di x=3', 0);
close(6 * 0 - 9, -9, 'nilai garis singgung y=6x-9 di x=0', 0);
close(-1 / (2 * 3), -1 / 6, 'gradien garis normal y=x^2 di x=3', 1e-12);

// ---------- Aplikasi turunan: sketsa kurva ----------
close(f1(0), 0, 'titik stasioner f di x=0', 0);
close(f1(2), 0, 'titik stasioner f di x=2', 0);
close(f(0), 2, 'nilai maksimum lokal f(0)', 0);
close(f(2), -2, 'nilai minimum lokal f(2)', 0);
const f2 = (x) => 6 * x - 6;
close(f2(0), -6, 'uji turunan kedua f di 0', 0);
close(f2(2), 6, 'uji turunan kedua f di 2', 0);
close(f2(1), 0, 'titik belok f(1) dari f=0', 0);

// ---------- Aplikasi turunan: kecepatan, percepatan, optimasi ----------
const v = (t) => 3 * t ** 2 - 12 * t + 9;
const a = (t) => 6 * t - 12;
close(v(2), -3, 'kecepatan v(2)', 0);
close(a(2), 0, 'percepatan a(2)', 0);
close(v(0), 9, 'kecepatan awal v(0)', 0);
close(10 * (40 - 2 * 10), 200, 'luas maksimum kandang 40 m', 0);

const boxVolume = (x) => x * (20 - 2 * x) ** 2;
close(boxVolume(10 / 3), 16000 / 27, 'volume kotak maksimum di x=10/3', 1e-9);
close(10 * 10, 100, 'hasil kali maksimum dua bilangan berjumlah 20', 0);

// ---------- Integral: antiturunan dan integral tentu ----------
const antiX2 = (x) => x ** 3 / 3;
close(antiX2(2) - antiX2(0), 8 / 3, 'integral 0..2 x^2', 1e-12);

const antiLinear = (x) => x ** 2 + x;
close(antiLinear(3) - antiLinear(1), 10, 'integral 1..3 (2x+1)', 0);
close(-Math.cos(Math.PI) - -Math.cos(0), 2, 'integral 0..pi sin x', 1e-12);
const antiExp = (x) => Math.exp(x);
close(antiExp(1) - antiExp(0), Math.E - 1, 'integral 0..1 e^x', 1e-12);

const anti3x2 = (x) => x ** 3;
close(anti3x2(2) - anti3x2(1), 7, 'integral 1..2 3x^2', 0);
close(anti3x2(1) - anti3x2(0), 1, 'integral 0..1 3x^2', 0);

const antiPoly = (x) => x ** 3 - 2 * x ** 2 + 5 * x;
close(antiPoly(2) - antiPoly(0), 10, 'integral 0..2 (3x^2-4x+5)', 0);

// ---------- Integral: luas ----------
const areaXvsX2 = (x) => x ** 2 / 2 - x ** 3 / 3;
close(areaXvsX2(1) - areaXvsX2(0), 1 / 6, 'luas antara y=x dan y=x^2', 1e-12);

const areaParabola = (x) => 4 * x - x ** 3 / 3;
close(areaParabola(2) - areaParabola(-2), 32 / 3, 'luas 4-x^2 pada [-2,2]', 1e-12);

const areaTwoCurves = (x) => -(x ** 3) / 3 + x ** 2 / 2 + 2 * x;
close(areaTwoCurves(2) - areaTwoCurves(-1), 9 / 2, 'luas antara y=x+1 dan y=x^2-1', 1e-12);

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

report();

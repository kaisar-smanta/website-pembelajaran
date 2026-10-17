// Verifikasi nilai matematika soal `mahir` auto-graded yang baru ditambahkan
// pada Wave 2 grup Q3: pemodelan-fungsi, permutasi-kombinasi, polinomial,
// regresi, sistem-pertidaksamaan, spltv, dan statistik-dalam-kehidupan.
// Dipanggil otomatis oleh tests/run-all.mjs.
//
// Pemakaian: node tests/question-values-q3.mjs

import assert from 'node:assert/strict';
import { check, close, ok, load, report } from './_util.mjs';

function combination(n, k) {
  if (k < 0 || k > n) return 0;
  let result = 1;
  for (let i = 0; i < k; i += 1) result = (result * (n - i)) / (i + 1);
  return Math.round(result);
}

// ---------- pemodelan-fungsi (pmf-18) ----------
const revenue = (x) => (40000 - 5000 * x) * (200 + 50 * x);
close(40000 - 5000 * 2, 30000, 'pmf-18 harga tiket optimum', 0);
close(200 + 50 * 2, 300, 'pmf-18 banyak tiket optimum', 0);
close(revenue(2), 9000000, 'pmf-18 pendapatan maksimum', 0);
close(revenue(1), 8750000, 'pmf-18 pendapatan pada satu penurunan', 0);
close(revenue(3), 8750000, 'pmf-18 pendapatan pada tiga penurunan', 0);
ok(revenue(2) > revenue(1) && revenue(2) > revenue(3), 'pmf-18 titik puncak benar-benar maksimum');

// ---------- permutasi-kombinasi (perkom-17) ----------
const byCases =
  combination(4, 2) * combination(6, 2) +
  combination(4, 3) * combination(6, 1) +
  combination(4, 4) * combination(6, 0);
close(byCases, 115, 'perkom-17 komite paling sedikit dua wanita', 0);
const byComplement = combination(10, 4) - combination(6, 4) - combination(4, 1) * combination(6, 3);
close(byComplement, 115, 'perkom-17 komite lewat komplemen', 0);

// ---------- polinomial (pol-18) ----------
const aPoly = (5 + 7) / 3;
const bPoly = 5 - aPoly;
close(aPoly, 4, 'pol-18 koefisien a', 0);
close(bPoly, 1, 'pol-18 koefisien b', 0);
const P = (x) => x ** 3 + aPoly * x * x + bPoly * x - 6;
close(P(1), 0, 'pol-18 P(1)=0', 0);
close(P(-2), 0, 'pol-18 P(-2)=0', 0);
close(P(2), 20, 'pol-18 P(2)', 0);

// ---------- regresi (rg-16) ----------
const xs = [1, 2, 3, 4];
const ys = [2, 4, 5, 7];
const n = xs.length;
const sumX = xs.reduce((s, v) => s + v, 0);
const sumY = ys.reduce((s, v) => s + v, 0);
const sumXY = xs.reduce((s, v, i) => s + v * ys[i], 0);
const sumX2 = xs.reduce((s, v) => s + v * v, 0);
const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
const intercept = sumY / n - slope * (sumX / n);
close(slope, 1.6, 'rg-16 gradien regresi', 1e-12);
close(intercept, 0.5, 'rg-16 intersep regresi', 1e-12);
close(slope * 3 + intercept, 5.3, 'rg-16 taksiran pada x=3', 1e-12);
close(5 - (slope * 3 + intercept), -0.3, 'rg-16 residu pada x=3', 1e-12);

// ---------- sistem-pertidaksamaan (spt-17) ----------
const objective = (x, y) => 3 * x + 4 * y;
close(objective(0, 0), 0, 'spt-17 f di (0,0)', 0);
close(objective(8, 0), 24, 'spt-17 f di (8,0)', 0);
close(objective(4, 4), 28, 'spt-17 f di (4,4)', 0);
close(objective(0, 6), 24, 'spt-17 f di (0,6)', 0);
close(
  Math.max(objective(0, 0), objective(8, 0), objective(4, 4), objective(0, 6)),
  28,
  'spt-17 nilai maksimum f',
  0,
);

// ---------- spltv (sp-16) ----------
const first = 9.5;
const third = first + 5;
const second = (first + third) / 2;
close(third, 14.5, 'sp-16 bilangan ketiga', 1e-12);
close(second, 12, 'sp-16 bilangan kedua', 1e-12);
close(first + second + third, 36, 'sp-16 jumlah tiga bilangan', 1e-12);
close((first + second + third) / 3, 12, 'sp-16 rata-rata tiga bilangan', 1e-12);

// ---------- statistik-dalam-kehidupan (sdk-18) ----------
const learnData = [1, 1, 2, 2, 2, 3, 3, 4, 5, 7];
const mean = (arr) => arr.reduce((s, v) => s + v, 0) / arr.length;
const median = (arr) => {
  const sorted = [...arr].sort((p, q) => p - q);
  const middle = sorted.length >> 1;
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};
const fixedData = learnData.map((v) => (v === 7 ? 4 : v));
close(mean(learnData), 3, 'sdk-18 mean sebelum koreksi', 1e-12);
close(median(learnData), 2.5, 'sdk-18 median sebelum koreksi', 1e-12);
close(mean(fixedData), 2.7, 'sdk-18 mean sesudah koreksi', 1e-12);
close(median(fixedData), 2.5, 'sdk-18 median sesudah koreksi', 1e-12);
close(mean(fixedData) - mean(learnData), -0.3, 'sdk-18 perubahan mean', 1e-12);

// ---------- Kesesuaian kunci jawaban pada berkas soal ----------
const cases = [
  ['src/data/questions/pemodelan-fungsi.ts', 'pmf-18', 'A'],
  ['src/data/questions/permutasi-kombinasi.ts', 'perkom-17', '115'],
  ['src/data/questions/polinomial.ts', 'pol-18', '20'],
  ['src/data/questions/regresi.ts', 'rg-16', 'A'],
  ['src/data/questions/sistem-pertidaksamaan.ts', 'spt-17', 'B'],
  ['src/data/questions/spltv.ts', 'sp-16', '14,5'],
  ['src/data/questions/statistik-dalam-kehidupan.ts', 'sdk-18', 'A'],
];

for (const [file, id, expected] of cases) {
  const mod = await load(file);
  const list = Object.values(mod).find(Array.isArray);
  const question = (list ?? []).find((item) => item && item.id === id);
  ok(question, `${id} tidak ditemukan di ${file}`);
  check(`${id} adalah soal mahir di ${file}`, () => assert.equal(question.difficulty, 'mahir'));
  check(`${id} memiliki kunci jawaban ${expected}`, () => assert.equal(question.answer, expected));
  check(`${id} memiliki minimal dua petunjuk`, () => {
    assert.ok(Array.isArray(question.hints) && question.hints.length >= 2);
  });
}

report();

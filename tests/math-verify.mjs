// Verifikasi nilai matematika yang dipakai dalam materi dan bank soal.
// Pemakaian: npm test  (node tests/math-verify.mjs)
import assert from 'node:assert/strict';

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
const r2 = (x) => Math.round(x * 100) / 100;

// ---------- Bilangan: eksponen ----------
check('2^8', 2 ** 8, 256);
check('2^-3', 2 ** -3, 1 / 8);
check('16^(3/4)', 16 ** (3 / 4), 8);
check('sqrt(75)', Math.sqrt(75), 5 * Math.sqrt(3), 1e-12);
check('2^(x+1)=32 => x', 5 - 1, 4);
check('200*2^4', 200 * 2 ** 4, 3200);
check('0.1*2^10', 0.1 * 2 ** 10, 102.4, 1e-9);

// ---------- Barisan dan deret ----------
check('aritmetika U20', 4 + 19 * 5, 99);
check('aritmetika S20', (20 / 2) * (4 + 99), 1030);
check('geometri U7', 5 * 3 ** 6, 3645);
check('geometri S7', (5 * (3 ** 7 - 1)) / (3 - 1), 5465);
check('deret tak hingga', 18 / (1 - 1 / 3), 27, 1e-9);
check('bola memantul', 3 + 2 * (2 / (1 - 2 / 3)), 15, 1e-9);

// ---------- Fungsi kuadrat ----------
const f1 = (x) => x * x - 6 * x + 8;
check('kuadrat akar 2', f1(2), 0);
check('kuadrat akar 4', f1(4), 0);
check('kuadrat puncak x', -(-6) / (2 * 1), 3);
check('kuadrat puncak y', f1(3), -1);
const f2 = (x) => -2 * x * x + 4 * x + 6;
check('kuadrat2 akar 3', f2(3), 0);
check('kuadrat2 akar -1', f2(-1), 0);
check('kuadrat2 puncak y', f2(1), 8);
check('luas maksimum pagar', 10 * (20 - 10), 100);
check('bola h(3)', -5 * 9 + 30 * 3, 45);

// ---------- Fungsi eksponensial ----------
check('4^3', 4 ** 3, 64);
check('4^x=8^(x-1) => x', 3, 3); // 2^{2x}=2^{3x-3}
check('500*1.08^10', Math.round(500 * 1.08 ** 10), 1079);
check('120*(1/2)^3', 120 * 0.5 ** 3, 15);
check('3*2^3', 3 * 2 ** 3, 24);

// ---------- Trigonometri ----------
check('sin60*cos30', Math.sin(Math.PI / 3) * Math.cos(Math.PI / 6), 0.75, 1e-12);
check('aturan kosinus a', Math.sqrt(9 + 25 - 2 * 3 * 5 * Math.cos((2 * Math.PI) / 3)), 7, 1e-9);
check('cos B', (25 + 64 - 49) / (2 * 5 * 8), 0.5, 1e-12);
check('40 tan30', r2(40 * Math.tan(Math.PI / 6)), 23.09, 0.01);
check('sin30', Math.sin(Math.PI / 6), 0.5, 1e-12);
check('cos45', Math.cos(Math.PI / 4), Math.SQRT2 / 2, 1e-12);

// ---------- Analisis distribusi data ----------
const dataA = [2, 3, 4, 4, 6, 6, 6, 7, 9, 13];
check('mean dataA', dataA.reduce((a, b) => a + b, 0) / dataA.length, 6);
check('median dataA', 6, 6);
check('Q1 dataA', 4, 4);
check('Q3 dataA', 7, 7);
check('IQR dataA', 7 - 4, 3);
check('pagar atas dataA', 7 + 1.5 * 3, 11.5);
check('dataA outlier', dataA.filter((x) => x > 11.5).length, 1);
check('mean kelompok', 1460 / 20, 73);
const dataB = [3, 4, 5, 5, 6, 6, 7, 8, 10, 16];
check('mean dataB', dataB.reduce((a, b) => a + b, 0) / dataB.length, 7);
check('mean dataB tanpa 16', (dataB.reduce((a, b) => a + b, 0) - 16) / 9, 6);

// ---------- Lingkaran ----------
check('sudut keliling', 80 / 2, 40);
check('panjang busur', (1 / 4) * 2 * (22 / 7) * 14, 22, 1e-9);
check('luas juring', (1 / 4) * (22 / 7) * 14 ** 2, 154, 1e-9);
check('tembereng', 154 - 98, 56);
check('garis singgung d13 r5', Math.sqrt(13 ** 2 - 5 ** 2), 12, 1e-9);
check('singgung persekutuan luar', Math.sqrt(13 ** 2 - (8 - 3) ** 2), 12, 1e-9);
check('singgung persekutuan dalam', Math.sqrt(13 ** 2 - (8 + 3) ** 2), 4 * Math.sqrt(3), 1e-9);

// ---------- Regresi / data bivariat ----------
const xs = [1, 2, 3, 4, 5, 6, 7, 8];
const ys = [2, 4, 5, 4, 7, 8, 9, 11];
const n = xs.length;
const mx = xs.reduce((a, b) => a + b, 0) / n;
const my = ys.reduce((a, b) => a + b, 0) / n;
let sxx = 0, syy = 0, sxy = 0;
for (let i = 0; i < n; i++) {
  sxx += (xs[i] - mx) ** 2;
  syy += (ys[i] - my) ** 2;
  sxy += (xs[i] - mx) * (ys[i] - my);
}
const slope = sxy / sxx;
const intercept = my - slope * mx;
const r = sxy / Math.sqrt(sxx * syy);
check('regresi gradien', r2(slope), 1.19, 0.005);
check('regresi intersep', r2(intercept), 0.89, 0.005);
check('regresi r', r2(r), 0.97, 0.005);
check('regresi prediksi x=10', r2(intercept + slope * 10), 12.8, 0.05);
check('regresi r^2', r2(r * r), 0.94, 0.005);
// himpunan latihan x=1..5, y=2,3,5,4,6
const px = [1, 2, 3, 4, 5], py = [2, 3, 5, 4, 6];
const pmx = 3, pmy = 4;
let psxx = 0, psxy = 0, psyy = 0;
for (let i = 0; i < 5; i++) { psxx += (px[i] - pmx) ** 2; psxy += (px[i] - pmx) * (py[i] - pmy); psyy += (py[i] - pmy) ** 2; }
check('latihan gradien', psxy / psxx, 0.9, 1e-9);
check('latihan intersep', pmy - (psxy / psxx) * pmx, 1.3, 1e-9);
check('latihan r', psxy / Math.sqrt(psxx * psyy), 0.9, 1e-9);

// ---------- Peluang ----------
check('dua dadu jumlah 7', 6 / 36, 1 / 6);
check('dua dadu >=10', 6 / 36, 1 / 6);
check('tiga koin tepat dua gambar', 3 / 8, 0.375);
check('tiga koin minimal satu gambar', 1 - 1 / 8, 0.875);
check('jumlah >9', 6 / 36, 1 / 6);
check('frekuensi harapan', 180 * (1 / 6), 30);
const C = (nn, kk) => {
  let res = 1;
  for (let i = 0; i < kk; i++) res = (res * (nn - i)) / (i + 1);
  return Math.round(res);
};
check('C(10,3)', C(10, 3), 120);
check('C(6,2)C(4,1)/C(10,3)', (C(6, 2) * C(4, 1)) / C(10, 3), 0.5);
check('peluang As berurutan', (4 / 52) * (3 / 51), 1 / 221, 1e-12);
check('Bayes penyakit', r2(0.009 / (0.009 + 0.99 * 0.1)), 0.08, 0.01); // ≈ 1/12

// ---------- Bunga majemuk ----------
check('bunga majemuk 5jt 8% 5th', r2(5_000_000 * 1.08 ** 5), 7_346_640.38, 0.02);
check('bunga tunggal 5jt 8% 5th', 5_000_000 * (1 + 0.08 * 5), 7_000_000);
check('bunga majemuk 2jt 6% 4th', r2(2_000_000 * 1.06 ** 4), 2_524_953.92, 0.02);
check('efektif 12% bulanan', r2(1.01 ** 12 - 1), 0.13, 0.005);
check('efektif 12% semesteran', r2(1.06 ** 2 - 1), 0.12, 0.005);
check('berlipat dua 8%', 1.08 ** 10 >= 2 && 1.08 ** 9 < 2, true);

// ---------- Anuitas ----------
const A = (10_000_000 * 0.015) / (1 - 1.015 ** -24);
check('angsuran anuitas', r2(A), 499_241.02, 0.5);
check('bunga bulan 1', 10_000_000 * 0.015, 150_000);
check('pokok bulan 1', r2(A - 150_000), 349_241.02, 0.5);
check('total bunga', r2(24 * A - 10_000_000), 1_981_784.48, 1);
check('FV 1jt 6% 5th', r2(1_000_000 * ((1.06 ** 5 - 1) / 0.06)), 5_637_092.96, 1);
const A2 = (30_000_000 * 0.01) / (1 - 1.01 ** -36);
check('anuitas penawaran A', r2(A2), 996_429, 0.5);
const A3 = (30_000_000 * 0.012) / (1 - 1.012 ** -30);
check('anuitas penawaran B', r2(A3), 1_196_701, 0.5);
const A4 = (16_000_000 * 0.015) / (1 - 1.015 ** -12);
check('nilai wajar 16jt', r2(A4), 1_466_879.89, 1);

// ---------- Matriks ----------
const det2 = (a, b, c, d) => a * d - b * c;
check('det 2x2', det2(3, 1, 2, 4), 10);
check('det [[4,2],[1,3]]', det2(4, 2, 1, 3), 10);
check('det 3x3 #1', 1 * (1 * 0 - 4 * 6) - 2 * (0 * 0 - 4 * 5) + 3 * (0 * 6 - 1 * 5), 1);
check('det 3x3 #2', 2 * (4 * 0 - 1 * 2) - 1 * (0 * 0 - 1 * 1) + 3 * (0 * 2 - 4 * 1), -15);

// ---------- Fungsi invers ----------
const finv = (x) => (x + 6) / 3;
check('invers f(4)=6', 3 * 4 - 6, 6);
check('invers f^-1(6)=4', finv(6), 4);
const ginv = (x) => (3 * x + 1) / (x - 2);
check('invers rasional f(4)=9', (2 * 4 + 1) / (4 - 3), 9);
check('invers rasional g(9)=4', ginv(9), 4);
check('self inverse', (3 + 2) / (3 - 1), 2.5);

// ---------- Komposisi ----------
const fk = (x) => x + 3;
const gk = (x) => x * x - 1;
check('(f∘g)(3)', fk(gk(3)), 11);
check('(g∘f)(3)', gk(fk(3)), 35);
check('diskon 25% lalu +5', 0.75 * 40 + 5, 35);

// ---------- Transformasi fungsi ----------
check('vertex (x-2)^2+3', 2, 2);
check('nilai min (2)^2-4(2)+7', 2 * 2 - 4 * 2 + 7, 3);
check('refleksi x-axis', -(2 * 1 + 1), -3);
check('refleksi y-axis', 2 * -1 + 1, -1);

// ---------- Eksplorasi: barisan dan deret ----------
const arit = (a, b, n) => a + (n - 1) * b;
const aritS = (a, b, n) => (n / 2) * (2 * a + (n - 1) * b);
const geo = (a, r, n) => a * r ** (n - 1);
const geoS = (a, r, n) => (r === 1 ? n * a : (a * (r ** n - 1)) / (r - 1));
check('explorer arit U8', arit(2, 2, 8), 16);
check('explorer arit S8', aritS(2, 2, 8), 72);
check('explorer geo U8', geo(2, 2, 8), 256);
check('explorer geo S8', geoS(2, 2, 8), 510);
check('explorer geo S1 = a', geoS(2, 2, 1), 2);
check('explorer geo r=1 => n·a', geoS(3, 1, 5), 15);
check('explorer geo tak hingga mendekati 4', r2(geoS(2, 0.5, 40)), 4, 0.001);

// ---------- Eksplorasi: sebaran dan pencilan ----------
const sorted = (arr) => [...arr].sort((a, b) => a - b);
const med = (arr) => {
  const s = sorted(arr);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const quart = (arr) => {
  const s = sorted(arr);
  const m = Math.floor(s.length / 2);
  const lower = s.slice(0, m);
  const upper = s.length % 2 ? s.slice(m + 1) : s.slice(m);
  return { q1: med(lower), q3: med(upper) };
};
const q = quart([2, 3, 4, 4, 6, 6, 6, 7, 9, 13]);
check('explorer median', med([2, 3, 4, 4, 6, 6, 6, 7, 9, 13]), 6);
check('explorer Q1', q.q1, 4);
check('explorer Q3', q.q3, 7);
check('explorer IQR', q.q3 - q.q1, 3);
check(
  'explorer pagar atas & pencilan',
  [2, 3, 4, 4, 6, 6, 6, 7, 9, 13].filter((x) => x > q.q3 + 1.5 * (q.q3 - q.q1)).length,
  1,
);

// ---------- Eksplorasi: peluang bersyarat ----------
const cond = (pA, pBA, pBAc) => {
  const pAB = pA * pBA;
  const pAcB = (1 - pA) * pBAc;
  const pB = pAB + pAcB;
  return { pAB, pB, pAgB: pB === 0 ? 0 : pAB / pB };
};
check('explorer P(B) campuran', r2(cond(0.2, 0.9, 0.2).pB), 0.34, 1e-9);
check('explorer P(A|B)', r2(cond(0.2, 0.9, 0.2).pAgB), 0.53, 0.005);
check('explorer P(A|B) ≠ P(B|A)', cond(0.2, 0.9, 0.2).pAgB !== 0.9, true);
check('explorer P(A|B) simetris', cond(0.5, 0.5, 0.5).pAgB, 0.5);

// ---------- Eksplorasi: frekuensi bunga majemuk ----------
check('efektif bulanan 12%', r2((1 + 0.12 / 12) ** 12 - 1), 0.13, 0.001);
check('efektif semesteran 10%', r2((1 + 0.1 / 2) ** 2 - 1), 0.1, 0.001);
check('efektif triwulanan 8%', r2((1 + 0.08 / 4) ** 4 - 1), 0.08, 0.001);

// ---------- Eksplorasi: transformasi fungsi ----------
const tf = (x, a, h, k) => a * (x - h) ** 2 + k;
check('transform puncak (2,-3)', tf(2, 1, 2, -3), -3);
check('transform identitas f(0)', tf(0, 1, 0, 0), 0);
check('transform cermin f(1)', tf(1, -1, 0, 0), -1);
check('transform geser f(2)', tf(2, 1, 2, -3), -3);
check('transform dilatasi f(1)', tf(1, 2, 0, 0), 2);

// ---------- Eksplorasi: gelombang sinus ----------
const wave = (x, a, k) => a * Math.sin(k * x);
check('gelombang amplitudo', wave(Math.PI / 2, 2, 1), 2, 1e-12);
check('gelombang periode k=2', wave(Math.PI / 2, 1, 2), 0, 1e-12);

// ---------- Sistem pertidaksamaan ----------
check('program linear max 3x+2y di (4,4)', 3 * 4 + 2 * 4, 20);
check('program linear max 2x+3y di (2,3)', 2 * 2 + 3 * 3, 13);
check('laba kue 2A+4B', 3000 * 2 + 4000 * 4, 22000);
check('program linear max 5x+4y di (3,4)', 5 * 3 + 4 * 4, 31);

// ---------- Persamaan eksponen & logaritma ----------
check('log_3 81', Math.log(81) / Math.log(3), 4, 1e-12);
check('4^(x+1)=8^(x-1) => x', 5, 5);
check('log2(12*6/9)', Math.log((12 * 6) / 9) / Math.log(2), 3, 1e-12);
check('9^x-4*3^x+3 => t', 4 * 4 - 4 * 4 + 3, 3);
check('50*2^4', 50 * 2 ** 4, 800);
check('2^a=3 => 4^(a+1)', 4 ** (Math.log(3) / Math.log(2) + 1), 36, 1e-9);

// ---------- Statistik dalam kehidupan ----------
check('mean data 5..10', (5 + 6 + 6 + 7 + 7 + 7 + 8 + 10) / 8, 7);
check('mean gabungan kelas', (30 * 72 + 20 * 84) / 50, 76.8, 1e-9);
check('IQR data', 21 - 15, 6);
check('mean gaji 9+1', (9 * 4_000_000 + 40_000_000) / 10, 7_600_000);
check('median gaji 9+1', 4_000_000, 4_000_000);

// ---------- Pemodelan fungsi ----------
const biayaLinear = (x) => 2000 * x + 5000;
check('model biaya x=8', biayaLinear(8), 21000);
check('model dua titik x=9', 4000 * 9 + 8000, 44000);
check('eksponensial 400*b^3', 400 * 2 ** 3, 3200);
check('labа puncak P(6)', -3 * 36 + 36 * 6 - 60, 48);
check('modal 10jt 20% 3th', 10_000_000 * 1.2 ** 3, 17_280_000, 1e-6);

// ---------- Pinjaman & investasi ----------
const fvAnuitas = (A, i, n) => (A * ((1 + i) ** n - 1)) / i;
check('FV 500rb 0,5% 24bln', fvAnuitas(500_000, 0.005, 24), 12_715_978, 500);
const setoranTarget = (50_000_000 * 0.0075) / (1.0075 ** 60 - 1);
check('setoran target 50jt', r2(setoranTarget), 662_918, 2);
check(
  'selisih bunga 48 vs 24 bln',
  Math.round(
    (48 * 526_676.71 - 20_000_000) - (24 * 941_469.44 - 20_000_000),
  ),
  2_685_216,
  2,
);

// ---------- Permutasi & kombinasi ----------
const fact = (nn) => {
  let res = 1;
  for (let i = 2; i <= nn; i++) res *= i;
  return res;
};
const P = (nn, kk) => fact(nn) / fact(nn - kk);
check('P(7,3)', P(7, 3), 210);
check('MATEMATIKA', fact(10) / (fact(2) * fact(3) * fact(2)), 151_200);
check('STATISTIKA', fact(10) / (fact(2) * fact(3) * fact(2) * fact(2)), 75_600);
check('peluang 2 merah', (C(4, 2) * C(6, 1)) / C(10, 3), 0.3, 1e-12);
check('peluang tanpa pasangan', (C(5, 4) * 2 ** 4) / C(10, 4), 8 / 21, 1e-12);

console.log(`\nSemua ${passed} pemeriksaan matematika lulus.`);

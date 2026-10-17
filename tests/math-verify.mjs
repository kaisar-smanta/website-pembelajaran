// Verifikasi nilai matematika yang dipakai dalam materi dan bank soal.
// Pemakaian: npm test  (node tests/math-verify.mjs)
import { close, report } from './_util.mjs';

const r2 = (x) => Math.round(x * 100) / 100;

// ---------- Bilangan: eksponen ----------
close(2 ** 8, 256, '2^8', 0);
close(2 ** -3, 1 / 8, '2^-3', 0);
close(16 ** (3 / 4), 8, '16^(3/4)', 0);
close(Math.sqrt(75), 5 * Math.sqrt(3), 'sqrt(75)', 1e-12);
close(5 - 1, 4, '2^(x+1)=32 => x', 0);
close(200 * 2 ** 4, 3200, '200*2^4', 0);
close(0.1 * 2 ** 10, 102.4, '0.1*2^10', 1e-9);

// ---------- Barisan dan deret ----------
close(4 + 19 * 5, 99, 'aritmetika U20', 0);
close((20 / 2) * (4 + 99), 1030, 'aritmetika S20', 0);
close(5 * 3 ** 6, 3645, 'geometri U7', 0);
close((5 * (3 ** 7 - 1)) / (3 - 1), 5465, 'geometri S7', 0);
close(18 / (1 - 1 / 3), 27, 'deret tak hingga', 1e-9);
close(3 + 2 * (2 / (1 - 2 / 3)), 15, 'bola memantul', 1e-9);

// ---------- Fungsi kuadrat ----------
const f1 = (x) => x * x - 6 * x + 8;
close(f1(2), 0, 'kuadrat akar 2', 0);
close(f1(4), 0, 'kuadrat akar 4', 0);
close(-(-6) / (2 * 1), 3, 'kuadrat puncak x', 0);
close(f1(3), -1, 'kuadrat puncak y', 0);
const f2 = (x) => -2 * x * x + 4 * x + 6;
close(f2(3), 0, 'kuadrat2 akar 3', 0);
close(f2(-1), 0, 'kuadrat2 akar -1', 0);
close(f2(1), 8, 'kuadrat2 puncak y', 0);
close(10 * (20 - 10), 100, 'luas maksimum pagar', 0);
close(-5 * 9 + 30 * 3, 45, 'bola h(3)', 0);

// ---------- Fungsi eksponensial ----------
close(4 ** 3, 64, '4^3', 0);
close(2 * 3, 3 * 3 - 3, '4^x=8^(x-1) => x=3', 0); // 2^{2x}=2^{3x-3}
close(Math.round(500 * 1.08 ** 10), 1079, '500*1.08^10', 0);
close(120 * 0.5 ** 3, 15, '120*(1/2)^3', 0);
close(3 * 2 ** 3, 24, '3*2^3', 0);

// ---------- Trigonometri ----------
close(Math.sin(Math.PI / 3) * Math.cos(Math.PI / 6), 0.75, 'sin60*cos30', 1e-12);
close(Math.sqrt(9 + 25 - 2 * 3 * 5 * Math.cos((2 * Math.PI) / 3)), 7, 'aturan kosinus a', 1e-9);
close((25 + 64 - 49) / (2 * 5 * 8), 0.5, 'cos B', 1e-12);
close(r2(40 * Math.tan(Math.PI / 6)), 23.09, '40 tan30', 0.01);
close(Math.sin(Math.PI / 6), 0.5, 'sin30', 1e-12);
close(Math.cos(Math.PI / 4), Math.SQRT2 / 2, 'cos45', 1e-12);

// ---------- Analisis distribusi data ----------
const dataA = [2, 3, 4, 4, 6, 6, 6, 7, 9, 13];
const sortedA = [...dataA].sort((a, b) => a - b);
close(dataA.reduce((a, b) => a + b, 0) / dataA.length, 6, 'mean dataA', 0);
close((sortedA[4] + sortedA[5]) / 2, 6, 'median dataA', 0);
close(sortedA[2], 4, 'Q1 dataA', 0);
close(sortedA[7], 7, 'Q3 dataA', 0);
close(7 - 4, 3, 'IQR dataA', 0);
close(7 + 1.5 * 3, 11.5, 'pagar atas dataA', 0);
close(dataA.filter((x) => x > 11.5).length, 1, 'dataA outlier', 0);
close(1460 / 20, 73, 'mean kelompok', 0);
const dataB = [3, 4, 5, 5, 6, 6, 7, 8, 10, 16];
close(dataB.reduce((a, b) => a + b, 0) / dataB.length, 7, 'mean dataB', 0);
close((dataB.reduce((a, b) => a + b, 0) - 16) / 9, 6, 'mean dataB tanpa 16', 0);

// ---------- Lingkaran ----------
close(80 / 2, 40, 'sudut keliling', 0);
close((1 / 4) * 2 * (22 / 7) * 14, 22, 'panjang busur', 1e-9);
close((1 / 4) * (22 / 7) * 14 ** 2, 154, 'luas juring', 1e-9);
close(154 - 98, 56, 'tembereng', 0);
close(Math.sqrt(13 ** 2 - 5 ** 2), 12, 'garis singgung d13 r5', 1e-9);
close(Math.sqrt(13 ** 2 - (8 - 3) ** 2), 12, 'singgung persekutuan luar', 1e-9);
close(Math.sqrt(13 ** 2 - (8 + 3) ** 2), 4 * Math.sqrt(3), 'singgung persekutuan dalam', 1e-9);

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
close(r2(slope), 1.19, 'regresi gradien', 0.005);
close(r2(intercept), 0.89, 'regresi intersep', 0.005);
close(r2(r), 0.97, 'regresi r', 0.005);
close(r2(intercept + slope * 10), 12.8, 'regresi prediksi x=10', 0.05);
close(r2(r * r), 0.94, 'regresi r^2', 0.005);
// himpunan latihan x=1..5, y=2,3,5,4,6
const px = [1, 2, 3, 4, 5], py = [2, 3, 5, 4, 6];
const pmx = 3, pmy = 4;
let psxx = 0, psxy = 0, psyy = 0;
for (let i = 0; i < 5; i++) { psxx += (px[i] - pmx) ** 2; psxy += (px[i] - pmx) * (py[i] - pmy); psyy += (py[i] - pmy) ** 2; }
close(psxy / psxx, 0.9, 'latihan gradien', 1e-9);
close(pmy - (psxy / psxx) * pmx, 1.3, 'latihan intersep', 1e-9);
close(psxy / Math.sqrt(psxx * psyy), 0.9, 'latihan r', 1e-9);

// ---------- Peluang ----------
close(6 / 36, 1 / 6, 'dua dadu jumlah 7', 0);
close(6 / 36, 1 / 6, 'dua dadu >=10', 0);
close(3 / 8, 0.375, 'tiga koin tepat dua gambar', 0);
close(1 - 1 / 8, 0.875, 'tiga koin minimal satu gambar', 0);
close(6 / 36, 1 / 6, 'jumlah >9', 0);
close(180 * (1 / 6), 30, 'frekuensi harapan', 0);
const C = (nn, kk) => {
  let res = 1;
  for (let i = 0; i < kk; i++) res = (res * (nn - i)) / (i + 1);
  return Math.round(res);
};
close(C(10, 3), 120, 'C(10,3)', 0);
close((C(6, 2) * C(4, 1)) / C(10, 3), 0.5, 'C(6,2)C(4,1)/C(10,3)', 0);
close((4 / 52) * (3 / 51), 1 / 221, 'peluang As berurutan', 1e-12);
close(r2(0.009 / (0.009 + 0.99 * 0.1)), 0.08, 'Bayes penyakit', 0.01); // ≈ 1/12

// ---------- Bunga majemuk ----------
close(r2(5_000_000 * 1.08 ** 5), 7_346_640.38, 'bunga majemuk 5jt 8% 5th', 0.02);
close(5_000_000 * (1 + 0.08 * 5), 7_000_000, 'bunga tunggal 5jt 8% 5th', 0);
close(r2(2_000_000 * 1.06 ** 4), 2_524_953.92, 'bunga majemuk 2jt 6% 4th', 0.02);
close(r2(1.01 ** 12 - 1), 0.13, 'efektif 12% bulanan', 0.005);
close(r2(1.06 ** 2 - 1), 0.12, 'efektif 12% semesteran', 0.005);
close(1.08 ** 10 >= 2 && 1.08 ** 9 < 2, true, 'berlipat dua 8%', 0);

// ---------- Anuitas ----------
const A = (10_000_000 * 0.015) / (1 - 1.015 ** -24);
close(r2(A), 499_241.02, 'angsuran anuitas', 0.5);
close(10_000_000 * 0.015, 150_000, 'bunga bulan 1', 0);
close(r2(A - 150_000), 349_241.02, 'pokok bulan 1', 0.5);
close(r2(24 * A - 10_000_000), 1_981_784.48, 'total bunga', 1);
close(r2(1_000_000 * ((1.06 ** 5 - 1) / 0.06)), 5_637_092.96, 'FV 1jt 6% 5th', 1);
const A2 = (30_000_000 * 0.01) / (1 - 1.01 ** -36);
close(r2(A2), 996_429, 'anuitas penawaran A', 0.5);
const A3 = (30_000_000 * 0.012) / (1 - 1.012 ** -30);
close(r2(A3), 1_196_701, 'anuitas penawaran B', 0.5);
const A4 = (16_000_000 * 0.015) / (1 - 1.015 ** -12);
close(r2(A4), 1_466_879.89, 'nilai wajar 16jt', 1);

// ---------- Matriks ----------
const det2 = (a, b, c, d) => a * d - b * c;
close(det2(3, 1, 2, 4), 10, 'det 2x2', 0);
close(det2(4, 2, 1, 3), 10, 'det [[4,2],[1,3]]', 0);
close(1 * (1 * 0 - 4 * 6) - 2 * (0 * 0 - 4 * 5) + 3 * (0 * 6 - 1 * 5), 1, 'det 3x3 #1', 0);
close(2 * (4 * 0 - 1 * 2) - 1 * (0 * 0 - 1 * 1) + 3 * (0 * 2 - 4 * 1), -15, 'det 3x3 #2', 0);

// ---------- Fungsi invers ----------
const finv = (x) => (x + 6) / 3;
close(3 * 4 - 6, 6, 'invers f(4)=6', 0);
close(finv(6), 4, 'invers f^-1(6)=4', 0);
const ginv = (x) => (3 * x + 1) / (x - 2);
close((2 * 4 + 1) / (4 - 3), 9, 'invers rasional f(4)=9', 0);
close(ginv(9), 4, 'invers rasional g(9)=4', 0);
close((3 + 2) / (3 - 1), 2.5, 'self inverse', 0);

// ---------- Komposisi ----------
const fk = (x) => x + 3;
const gk = (x) => x * x - 1;
close(fk(gk(3)), 11, '(f∘g)(3)', 0);
close(gk(fk(3)), 35, '(g∘f)(3)', 0);
close(0.75 * 40 + 5, 35, 'diskon 25% lalu +5', 0);

// ---------- Transformasi fungsi ----------
close(-(-4) / (2 * 1), 2, 'vertex (x-2)^2+3', 0);
close(2 * 2 - 4 * 2 + 7, 3, 'nilai min (2)^2-4(2)+7', 0);
close(-(2 * 1 + 1), -3, 'refleksi x-axis', 0);
close(2 * -1 + 1, -1, 'refleksi y-axis', 0);

// ---------- Eksplorasi: barisan dan deret ----------
const arit = (a, b, n) => a + (n - 1) * b;
const aritS = (a, b, n) => (n / 2) * (2 * a + (n - 1) * b);
const geo = (a, r, n) => a * r ** (n - 1);
const geoS = (a, r, n) => (r === 1 ? n * a : (a * (r ** n - 1)) / (r - 1));
close(arit(2, 2, 8), 16, 'explorer arit U8', 0);
close(aritS(2, 2, 8), 72, 'explorer arit S8', 0);
close(geo(2, 2, 8), 256, 'explorer geo U8', 0);
close(geoS(2, 2, 8), 510, 'explorer geo S8', 0);
close(geoS(2, 2, 1), 2, 'explorer geo S1 = a', 0);
close(geoS(3, 1, 5), 15, 'explorer geo r=1 => n·a', 0);
close(r2(geoS(2, 0.5, 40)), 4, 'explorer geo tak hingga mendekati 4', 0.001);

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
close(med([2, 3, 4, 4, 6, 6, 6, 7, 9, 13]), 6, 'explorer median', 0);
close(q.q1, 4, 'explorer Q1', 0);
close(q.q3, 7, 'explorer Q3', 0);
close(q.q3 - q.q1, 3, 'explorer IQR', 0);
close([2, 3, 4, 4, 6, 6, 6, 7, 9, 13].filter((x) => x > q.q3 + 1.5 * (q.q3 - q.q1)).length, 1, 'explorer pagar atas & pencilan', 0);

// ---------- Eksplorasi: peluang bersyarat ----------
const cond = (pA, pBA, pBAc) => {
  const pAB = pA * pBA;
  const pAcB = (1 - pA) * pBAc;
  const pB = pAB + pAcB;
  return { pAB, pB, pAgB: pB === 0 ? 0 : pAB / pB };
};
close(r2(cond(0.2, 0.9, 0.2).pB), 0.34, 'explorer P(B) campuran', 1e-9);
close(r2(cond(0.2, 0.9, 0.2).pAgB), 0.53, 'explorer P(A|B)', 0.005);
close(cond(0.2, 0.9, 0.2).pAgB !== 0.9, true, 'explorer P(A|B) ≠ P(B|A)', 0);
close(cond(0.5, 0.5, 0.5).pAgB, 0.5, 'explorer P(A|B) simetris', 0);

// ---------- Eksplorasi: frekuensi bunga majemuk ----------
close(r2((1 + 0.12 / 12) ** 12 - 1), 0.13, 'efektif bulanan 12%', 0.001);
close(r2((1 + 0.1 / 2) ** 2 - 1), 0.1, 'efektif semesteran 10%', 0.001);
close(r2((1 + 0.08 / 4) ** 4 - 1), 0.08, 'efektif triwulanan 8%', 0.001);

// ---------- Eksplorasi: transformasi fungsi ----------
const tf = (x, a, h, k) => a * (x - h) ** 2 + k;
close(tf(2, 1, 2, -3), -3, 'transform puncak (2,-3)', 0);
close(tf(0, 1, 0, 0), 0, 'transform identitas f(0)', 0);
close(tf(1, -1, 0, 0), -1, 'transform cermin f(1)', 0);
close(tf(2, 1, 2, -3), -3, 'transform geser f(2)', 0);
close(tf(1, 2, 0, 0), 2, 'transform dilatasi f(1)', 0);

// ---------- Eksplorasi: gelombang sinus ----------
const wave = (x, a, k) => a * Math.sin(k * x);
close(wave(Math.PI / 2, 2, 1), 2, 'gelombang amplitudo', 1e-12);
close(wave(Math.PI / 2, 1, 2), 0, 'gelombang periode k=2', 1e-12);

// ---------- Sistem pertidaksamaan ----------
close(3 * 4 + 2 * 4, 20, 'program linear max 3x+2y di (4,4)', 0);
close(2 * 2 + 3 * 3, 13, 'program linear max 2x+3y di (2,3)', 0);
close(3000 * 2 + 4000 * 4, 22000, 'laba kue 2A+4B', 0);
close(5 * 3 + 4 * 4, 31, 'program linear max 5x+4y di (3,4)', 0);

// ---------- Persamaan eksponen & logaritma ----------
close(Math.log(81) / Math.log(3), 4, 'log_3 81', 1e-12);
close(2 * 5 + 2, 3 * 5 - 3, '4^(x+1)=8^(x-1) => x=5', 0);
close(Math.log((12 * 6) / 9) / Math.log(2), 3, 'log2(12*6/9)', 1e-12);
close(4 * 4 - 4 * 4 + 3, 3, '9^x-4*3^x+3 => t', 0);
close(50 * 2 ** 4, 800, '50*2^4', 0);
close(4 ** (Math.log(3) / Math.log(2) + 1), 36, '2^a=3 => 4^(a+1)', 1e-9);

// ---------- Statistik dalam kehidupan ----------
close((5 + 6 + 6 + 7 + 7 + 7 + 8 + 10) / 8, 7, 'mean data 5..10', 0);
close((30 * 72 + 20 * 84) / 50, 76.8, 'mean gabungan kelas', 1e-9);
close(21 - 15, 6, 'IQR data', 0);
close((9 * 4_000_000 + 40_000_000) / 10, 7_600_000, 'mean gaji 9+1', 0);
const gaji = [...Array(9).fill(4_000_000), 40_000_000];
close((gaji[4] + gaji[5]) / 2, 4_000_000, 'median gaji 9+1', 0);

// ---------- Pemodelan fungsi ----------
const biayaLinear = (x) => 2000 * x + 5000;
close(biayaLinear(8), 21000, 'model biaya x=8', 0);
close(4000 * 9 + 8000, 44000, 'model dua titik x=9', 0);
close(400 * 2 ** 3, 3200, 'eksponensial 400*b^3', 0);
close(-3 * 36 + 36 * 6 - 60, 48, 'labа puncak P(6)', 0);
close(10_000_000 * 1.2 ** 3, 17_280_000, 'modal 10jt 20% 3th', 1e-6);

// ---------- Pinjaman & investasi ----------
const fvAnuitas = (A, i, n) => (A * ((1 + i) ** n - 1)) / i;
close(fvAnuitas(500_000, 0.005, 24), 12_715_978, 'FV 500rb 0,5% 24bln', 500);
const setoranTarget = (50_000_000 * 0.0075) / (1.0075 ** 60 - 1);
close(r2(setoranTarget), 662_918, 'setoran target 50jt', 2);
close(Math.round(
    (48 * 526_676.71 - 20_000_000) - (24 * 941_469.44 - 20_000_000),
  ), 2_685_216, 'selisih bunga 48 vs 24 bln', 2);

// ---------- Permutasi & kombinasi ----------
const fact = (nn) => {
  let res = 1;
  for (let i = 2; i <= nn; i++) res *= i;
  return res;
};
const P = (nn, kk) => fact(nn) / fact(nn - kk);
close(P(7, 3), 210, 'P(7,3)', 0);
close(fact(10) / (fact(2) * fact(3) * fact(2)), 151_200, 'MATEMATIKA', 0);
close(fact(10) / (fact(2) * fact(3) * fact(2) * fact(2)), 75_600, 'STATISTIKA', 0);
close((C(4, 2) * C(6, 1)) / C(10, 3), 0.3, 'peluang 2 merah', 1e-12);
close((C(5, 4) * 2 ** 4) / C(10, 4), 8 / 21, 'peluang tanpa pasangan', 1e-12);

// ---------- Turunan ----------
// Turunan numerik (beda tengah) dipakai untuk memverifikasi nilai turunan
// yang diklaim pada contoh materi tanpa mengulang rumus yang sama.
const numDeriv = (f, x, h = 1e-6) => (f(x + h) - f(x - h)) / (2 * h);
const numSecond = (f, x, h = 1e-3) => (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
close(numDeriv((x) => 2 * x ** 3 - 5 * x ** 2 + 3 * x - 7, 1), -1, 'turunan 2x³-5x²+3x-7 di 1', 1e-4);
close(numDeriv((x) => (x * x + 1) * (2 * x - 3), 1), 2, 'turunan hasil kali di 1', 1e-4);
close(numDeriv((x) => (3 * x + 1) ** 4, 0), 12, 'turunan rantai (3x+1)⁴ di 0', 1e-4);
close(numDeriv((x) => Math.exp(3 * x), 0), 3, 'turunan e^(3x) di 0', 1e-4);
close(numDeriv((x) => 2 ** x, 0), Math.LN2, 'turunan 2^x di 0', 1e-4);
close(numDeriv((x) => x * Math.cos(x), 0), 1, 'turunan x·cos x di 0', 1e-4);
close(numDeriv((x) => (2 * x + 1) / (x - 1), 2), -3, 'turunan (2x+1)/(x-1) di 2', 1e-4);
close(numDeriv((x) => x ** 3 - 3 * x ** 2 + 2, 2), 0, 'turunan x³-3x²+2 di 2', 1e-4);
close(numDeriv((x) => 4 * x ** 5 - 2 * x ** 2 + 7, 1), 16, 'turunan 4x⁵-2x²+7 di 1', 1e-4);
close(numDeriv((x) => x * x * Math.sin(x), 0), 0, 'turunan x²·sin x di 0', 1e-4);

// ---------- Integral ----------
const integralNum = (f, a, b, steps = 1000) => {
  const h = (b - a) / steps;
  let s = f(a) + f(b);
  for (let i = 1; i < steps; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
};
close(integralNum((x) => 3 * x * x, 0, 1), 1, '∫_0^1 3x² dx', 1e-9);
close(integralNum((x) => x * x, 0, 2), 8 / 3, '∫_0^2 x² dx', 1e-9);
close((3 ** 2 + 3) - (1 ** 2 + 1), 10, '∫_1^3 (2x+1) dx', 0);
close(1 / 2 - 1 / 3, 1 / 6, 'luas y=x dan y=x² pada [0,1]', 1e-12);
close(2 ** 3 - 1 ** 3, 7, '∫_1^2 3x² dx', 0);
close(-Math.cos(Math.PI) - -Math.cos(0), 2, '∫_0^π sin x dx', 1e-12);
close(Math.E - 1, 1.718281828459045, '∫_0^1 e^x dx', 1e-12);
close((8 - 8 + 10) - 0, 10, '∫_0^2 (3x²-4x+5) dx', 0);
close((4 * 2 - 2 ** 3 / 3) - (4 * -2 - (-2) ** 3 / 3), 32 / 3, '∫_{-2}^{2} (4-x²) dx', 1e-12);
close((-(2 ** 3) / 3 + 2 ** 2 / 2 + 2 * 2) - (-((-1) ** 3) / 3 + (-1) ** 2 / 2 + 2 * -1), 9 / 2, 'luas y=x+1 dan y=x²-1', 1e-12);
close(numDeriv((x) => x ** 3 - 2 * x ** 2 + 5 * x, 1.3), 3 * 1.3 ** 2 - 4 * 1.3 + 5, 'antiturunan 3x²-4x+5 menurunkan kembali', 1e-4);
close(numDeriv((x) => 2 ** x / Math.LN2, 1), 2, 'antiturunan 2^x/ln2', 1e-4);

// ---------- Vektor ----------
const vlen = (x, y) => Math.hypot(x, y);
const vdot = (ax, ay, bx, by) => ax * bx + ay * by;
close(vlen(3, 4), 5, 'panjang (3,4)', 1e-12);
close(vlen(5, 12), 13, 'panjang (5,12)', 1e-12);
close(vlen(6, 8), 10, 'panjang (6,8)', 1e-12);
close(vlen(3 / 5, 4 / 5), 1, 'vektor satuan (3,4) berunit', 1e-12);
close(vdot(3, 4, 1, 2), 11, 'perkalian titik (3,4)·(1,2)', 0);
close(vdot(1, 2, 3, 1), 5, 'perkalian titik (1,2)·(3,1)', 0);
close(vdot(1, 2, 3, 1) / (vlen(1, 2) * vlen(3, 1)), Math.SQRT2 / 2, 'cos sudut (1,2),(3,1)', 1e-12);
close(Math.acos(vdot(1, 2, 3, 1) / (vlen(1, 2) * vlen(3, 1))) * (180 / Math.PI), 45, 'sudut (1,2),(3,1)', 1e-9);
close(vdot(3, 4, 4, -3), 0, 'tegak lurus (3,4)·(4,-3)', 0);
close(vdot(3, 4, 1, 0) / vlen(1, 0), 3, 'proyeksi skalar pada (1,0)', 1e-12);
close((vdot(3, 4, 1, 2) / vlen(1, 2) ** 2) * 1, 11 / 5, 'proyeksi vektor pada (1,2) x', 1e-12);
close((vdot(3, 4, 1, 2) / vlen(1, 2) ** 2) * 2, 22 / 5, 'proyeksi vektor pada (1,2) y', 1e-12);
close(vlen(11 / 5, 22 / 5), 11 / Math.sqrt(5), 'panjang proyeksi vektor', 1e-12);
close((5 - 1) / (3 - 1), 2, 'kolinear AC = 2·AB', 1e-12);
close(vlen(0 - 2, 3 - 0), Math.sqrt(13), 'titik tengah MN', 1e-12);
close(vlen(0 - 4, 6 - 0), 2 * vlen(0 - 2, 3 - 0), 'BC = 2·MN', 1e-12);
close(2 * 2 + 1, 5, 'kolinear C(5,k) => k=5', 0);
close(2 * 6 - 12, 0, 'tegak lurus x=6', 0);
close(Math.round(vlen(300, 80) * 10) / 10, 310.5, 'resultan pesawat (300,80)', 0.05);

// ---------- Polinomial ----------
const polyAt = (coefs, x) => coefs.reduce((acc, c) => acc * x + c, 0);
const polP = [2, -3, 4, -5];
const polQ = [1, 2, 1];
for (const x of [0, 1, 2, -1]) {
  close(polyAt([2, -2, 6, -4], x), polyAt(polP, x) + polyAt(polQ, x), `polinomial P+Q x=${x}`, 1e-9);
  close(polyAt([2, 1, 0, 0, -6, -5], x), polyAt(polP, x) * polyAt(polQ, x), `polinomial P·Q x=${x}`, 1e-9);
}
for (const x of [-3, 0, 1, 4]) {
  close((x + 2) * (x * x - 5) + 4, x ** 3 + 2 * x ** 2 - 5 * x - 6, `bagi (x+2) x=${x}`, 1e-9);
  close((x - 2) * (2 * x * x + 5 * x + 7) + 18, 2 * x ** 3 + x ** 2 - 3 * x + 4, `Horner (x-2) x=${x}`, 1e-9);
}
close(2 * 2 ** 3 - 5 * 2 ** 2 + 4 * 2 - 7, -3, 'sisa P(2) 2x³-5x²+4x-7', 0);
close(2 * (-1) ** 3 - 5 * (-1) ** 2 + 4 * (-1) - 7, -18, 'sisa P(-1) 2x³-5x²+4x-7', 0);
const polFaktor = (x) => x ** 3 - 4 * x ** 2 + x + 6;
close(polFaktor(3), 0, 'faktor x=3', 0);
close(polFaktor(2), 0, 'faktor x=2', 0);
close(polFaktor(-1), 0, 'faktor x=-1', 0);
close((-2) ** 4 - 3 * (-2) ** 2 + 2 * (-2) - 5, -5, 'sisa x⁴-3x²+2x-5 di -2', 0);
for (const x of [0, 2, 4]) {
  close((x - 1) * (x + 2) * (x - 3), polyAt([1, -2, -5, 6], x), `identitas (x-1)(x+2)(x-3) x=${x}`, 0);
  close((x - 1) * (x * x + 4 * x + 3), polyAt([1, 3, -1, -3], x), `identitas (x-1)(x²+4x+3) x=${x}`, 0);
  close((x + 1) * (x + 2) ** 2, polyAt([1, 5, 8, 4], x), `identitas (x+1)(x+2)² x=${x}`, 0);
}

// ---------- Operasi matriks ----------
const mA = [[1, 2], [3, 4]];
const mB = [[2, 0], [1, 3]];
const matMul = (M, N) =>
  M.map((row, i) => N[0].map((_, j) => row.reduce((s, _, k) => s + M[i][k] * N[k][j], 0)));
const matAdd = (M, N) => M.map((row, i) => row.map((v, j) => v + N[i][j]));
const matSub = (M, N) => M.map((row, i) => row.map((v, j) => v - N[i][j]));
const matVec = (M, v) => M.map((row) => row.reduce((s, _, k) => s + row[k] * v[k], 0));
const eqMat = (M, N) => JSON.stringify(M) === JSON.stringify(N);
close(eqMat(matAdd(mA, mB), [[3, 2], [4, 7]]), true, 'matriks A+B', 0);
close(eqMat(matSub(mA, mB), [[-1, 2], [2, 1]]), true, 'matriks A-B', 0);
close(eqMat(matMul(mA, mB), [[4, 6], [10, 12]]), true, 'matriks AB', 0);
close(eqMat(matMul(mB, mA), [[2, 4], [10, 14]]), true, 'matriks BA', 0);
close(eqMat(matSub(mA.map((row) => row.map((v) => 3 * v)), mB), [[1, 6], [8, 9]]), true, 'matriks 3A-B', 0);
const det3 = (M) =>
  M[0][0] * det2(M[1][1], M[1][2], M[2][1], M[2][2]) -
  M[0][1] * det2(M[1][0], M[1][2], M[2][0], M[2][2]) +
  M[0][2] * det2(M[1][0], M[1][1], M[2][0], M[2][1]);
close(det3([[1, 2, 3], [0, 1, 4], [5, 6, 0]]), 1, 'determinan 3x3 #1', 0);
close(det3([[2, 1, 3], [0, 4, 1], [1, 2, 0]]), -15, 'determinan 3x3 #2', 0);
const matInv = [[4 / 10, -1 / 10], [-2 / 10, 3 / 10]];
close(matInv[0][0], 0.4, 'invers A entri a', 1e-12);
close(matInv[0][1], -0.1, 'invers A entri b', 1e-12);
close(eqMat(matMul([[3, 1], [2, 4]], matInv).map((row) => row.map((v) => Math.round(v))), [[1, 0], [0, 1]]), true, 'A·A⁻¹ = I', 0);
close(eqMat(matMul([[2, 1], [0, 3]], [[1, 3], [2, 4]]), [[4, 10], [6, 12]]), true, 'B^T·A^T = (AB)^T', 0);
close(det2(2, 4, 1, 2), 0, 'matriks singular det = 0', 0);
close(2 * 2 - 4, 0, 'singular x² - 4', 0);
const solMat = matVec([[2, -3], [-1, 2]], [8, 5]);
close(solMat[0], 1, 'SPLDV matriks x=1', 0);
close(solMat[1], 2, 'SPLDV matriks y=2', 0);
const solMat2 = matVec([[3 / 5, -1 / 5], [-1 / 5, 2 / 5]], [7, 11]);
close(solMat2[0], 2, 'SPLDV matriks 2x+y=7 x=2', 1e-12);
close(solMat2[1], 3, 'SPLDV matriks 2x+y=7 y=3', 1e-12);
close(det2(2, 3, 1, 2), 1, 'Cramer D', 0);
close(det2(8, 3, 5, 2), 1, 'Cramer Dx', 0);
close(det2(2, 8, 1, 5), 2, 'Cramer Dy', 0);

// ---------- Aplikasi turunan ----------
close(numDeriv((x) => x * x, 3), 6, 'gradien y=x² di 3', 1e-4);
close(6 * 4 - 9, 15, 'garis singgung y=6x-9 di x=4', 0);
const polApp = (x) => x ** 3 - 3 * x ** 2 + 2;
close(polApp(0), 2, 'stasioner f(0) = 2', 0);
close(polApp(2), -2, 'stasioner f(2) = -2', 0);
close(numSecond(polApp, 0), -6, 'uji f\'\'(0) = -6 maksimum', 1e-2);
close(numSecond(polApp, 2), 6, 'uji f\'\'(2) = 6 minimum', 1e-2);
close(polApp(1), 0, 'titik belok f(1) = 0', 0);
const sPos = (t) => t ** 3 - 9 * t ** 2 + 24 * t;
close(numDeriv(sPos, 3), -3, 'kecepatan v(3) = -3', 1e-4);
close(numDeriv((t) => 3 * t * t - 18 * t + 24, 3), 0, 'percepatan a(3) = 0', 1e-4);
close(3 * 2 * 2 - 18 * 2 + 24, 0, 'berhenti sesaat t=2', 0);
close(3 * 4 * 4 - 18 * 4 + 24, 0, 'berhenti sesaat t=4', 0);
const sPos2 = (t) => t ** 3 - 6 * t ** 2 + 9 * t;
close(numDeriv(sPos2, 2), -3, 'latihan v(2) = -3', 1e-4);
close(numDeriv((t) => 3 * t * t - 12 * t + 9, 2), 0, 'latihan a(2) = 0', 1e-4);
close(40 - 4 * 10, 0, 'optimasi kandang x=10', 0);
close(10 * (40 - 2 * 10), 200, 'luas kandang maksimum 200', 0);
close((10 / 3) * (20 - 2 * (10 / 3)) ** 2, 16000 / 27, 'kotak volume V(10/3)', 1e-9);
close(10 * (20 - 10), 100, 'dua bilangan hasil kali maksimum', 0);
close(2 * Math.PI * 2 ** 2 + 2 * Math.PI * 2 * 4, 24 * Math.PI, 'tabung minimum S=24π', 1e-9);

// ---------- Peluang: komplemen tiga koin ----------
// Kunci numerik agar salah tulis komplemen (mis. menukar GGG dengan AAA) tertangkap.
close((1 / 2) ** 3, 1 / 8, 'tiga koin tanpa gambar (AAA)', 0);
close(1 - (1 / 2) ** 3, 7 / 8, 'tiga koin paling sedikit satu gambar', 0);

report();

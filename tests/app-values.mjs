// Verifikasi nilai studi kasus yang ditambahkan pada Content Plan 4.
//
// Memastikan angka pada analisis studi kasus baru tetap konsisten setelah
// penyuntingan lanjutan. Nilai dihitung ulang secara mandiri, bukan dibaca dari
// berkas data.
//
// Pemakaian: node tests/app-values.mjs (dipanggil oleh `npm test`).

import { close, ok, report } from './_util.mjs';

const round2 = (x) => Math.round(x * 100) / 100;

// Laba maksimum kedai kopi: R(p) = p(140 - 4p), C(p) = 1700 - 40p (ribu rupiah).
const profit = (p) => -4 * p * p + 180 * p - 1700;
close(-180 / (2 * -4), 22.5, 'laba: harga optimum', 1e-9);
close(140 - 4 * 22.5, 50, 'laba: banyak cangkir optimum', 1e-9);
close(profit(22.5), 325, 'laba: laba maksimum', 1e-9);
close(profit(20), 300, 'laba: laba di p=20', 1e-9);
close(profit(25), 300, 'laba: laba di p=25', 1e-9);

// Pakan ternak: x+y+z=100, 0,30x+0,20y+0,10z=18, 16x+8y+4z=820.
const feed = [25, 30, 45];
close(feed[0] + feed[1] + feed[2], 100, 'pakan: total berat', 1e-9);
close(0.3 * feed[0] + 0.2 * feed[1] + 0.1 * feed[2], 18, 'pakan: total protein', 1e-9);
close(16 * feed[0] + 8 * feed[1] + 4 * feed[2], 820, 'pakan: total biaya', 1e-9);

// Uji A/B: 48 konversi dari 400, dan 60 dari 400.
close(48 / 400, 0.12, 'uji A/B: laju A', 1e-12);
close(60 / 400, 0.15, 'uji A/B: laju B', 1e-12);

// Interval rujukan: z = (58 - 28) / 9.
close(round2((58 - 28) / 9), 3.33, 'interval: skor z', 0.01);

// Deteksi transaksi: 1.000.000 transaksi, 0,2% penipuan, sensitivitas 90%, positif palsu 2%.
const fraud = 0.002 * 1_000_000;
const caught = 0.9 * fraud;
const falsePositive = 0.02 * (1_000_000 - fraud);
close(fraud, 2000, 'deteksi: banyak penipuan', 1e-9);
close(caught, 1800, 'deteksi: penipuan tertangkap', 1e-9);
close(falsePositive, 19960, 'deteksi: positif palsu', 1e-9);
close(caught + falsePositive, 21760, 'deteksi: total ditandai', 1e-9);

// Depresiasi kendaraan: 300 juta, menyusut 15% per tahun.
close(round2(300_000_000 * 0.85 ** 5 / 1_000_000), 133.11, 'depresiasi: nilai tahun ke-5 (juta)', 0.01);

// Penanggalan karbon: t = 5730 * ln(0,4) / ln(0,5).
close(round2(5730 * Math.log(0.4) / Math.log(0.5)), 7574.65, 'karbon: usia sampel', 0.5);
close(Math.round(5730 * Math.log(0.4) / Math.log(0.5)), 7575, 'karbon: usia dibulatkan', 1e-9);

// Roda gigi: R=20, r=5, d=30.
close(round2(Math.asin((20 - 5) / 30) * (180 / Math.PI)), 30, 'roda gigi: sudut bantu', 1e-9);
close(round2(Math.sqrt(30 ** 2 - 15 ** 2)), 25.98, 'roda gigi: panjang singgung luar', 0.01);

// Resultan gaya: (30,0) dan (0,40).
close(Math.hypot(30, 40), 50, 'gaya: besar resultan', 1e-9);
close(round2(Math.atan2(40, 30) * (180 / Math.PI)), 53.13, 'gaya: arah resultan', 0.01);

// pH: -log10(2,5e-5) dan 10^(-4,2).
close(round2(-Math.log10(2.5e-5)), 4.6, 'pH: sampel P', 0.01);
close(round2(10 ** -4.2 * 1e5), 6.31, 'pH: konsentrasi Q (1e-5 M)', 0.01);

// Kunci publik modulo: n=55, e=3, d=27, m=9.
const modPow = (base, exponent, modulus) => {
  let result = 1;
  let b = base % modulus;
  let e = exponent;
  while (e > 0) {
    if (e % 2 === 1) result = (result * b) % modulus;
    b = (b * b) % modulus;
    e = Math.floor(e / 2);
  }
  return result;
};
close((3 * 27) % 40, 1, 'kunci: 3d = 1 mod 40', 1e-9);
close(modPow(9, 3, 55), 14, 'kunci: sandi 9^3 mod 55', 1e-9);
close(modPow(14, 27, 55), 9, 'kunci: dekripsi 14^27 mod 55', 1e-9);

// Jaringan rute: M^2 dihitung dari matriks ketetanggaan.
const M = [
  [0, 1, 1, 0],
  [0, 0, 1, 1],
  [0, 0, 0, 1],
  [1, 0, 0, 0],
];
const M2 = M.map((row, i) =>
  row.map((_, j) => M.reduce((sum, _, k) => sum + M[i][k] * M[k][j], 0)),
);
ok(
  JSON.stringify(M2) === JSON.stringify([[0, 0, 1, 2], [1, 0, 0, 1], [1, 0, 0, 0], [0, 1, 1, 0]]),
  'jaringan: M^2 sesuai',
);

// Energi dari daya: dua segitiga 400 Wh dan persegi panjang 800 Wh.
close(0.5 * 2 * 400 + 2 * 400 + 0.5 * 2 * 400, 1600, 'energi: total Wh', 1e-9);
close(1600 / 1000, 1.6, 'energi: total kWh', 1e-12);
close(round2(1600 / 6), 266.67, 'energi: daya rata-rata', 0.01);

// Ongkos kirim bertingkat: C(1)=8.000, C(4)=19.000, invers C=25.000 -> 6,5 kg.
const shipping = (w) => (w <= 1 ? 8000 : w <= 3 ? 8000 + 4000 * (w - 1) : w <= 5 ? 16000 + 3000 * (w - 3) : 22000 + 2000 * (w - 5));
close(shipping(1), 8000, 'ongkos: C(1)', 1e-9);
close(shipping(4), 19000, 'ongkos: C(4)', 1e-9);
close((25000 - 22000) / 2000 + 5, 6.5, 'ongkos: berat untuk Rp25.000', 1e-9);

report();

// Verifikasi nilai numerik soal mahir otomatis grup Q1 (Wave 2):
// anuitas, barisan-deret, bunga-majemuk, eksponen, fungsi-eksponensial,
// fungsi-kuadrat, dan fungsi-logaritma. Dipanggil otomatis oleh tests/run-all.mjs.
//
// Pemakaian: node tests/question-values-q1.mjs
import { close, ok, report } from './_util.mjs';

// ---------- anuitas: an-15 ----------
const M = 8000000;
const i = 0.015;
const n = 12;
const annuity = (M * i) / (1 - (1 + i) ** -n);
close(annuity, 733439.94, 'an-15 angsuran anuitas bulanan', 0.05);
close(annuity * n - M, 801279.32, 'an-15 total bunga', 0.5);
close(Math.round(annuity * n - M), 801279, 'an-15 total bunga dibulatkan', 0);

// ---------- barisan-deret: bd-16 ----------
const r = 24 / 12;
const a = 12 / r ** 2;
close(r, 2, 'bd-16 rasio barisan geometri', 0);
close(a, 3, 'bd-16 suku pertama', 0);
const sumBD = a * (2 ** 2 + 2 ** 3 + 2 ** 4 + 2 ** 5 + 2 ** 6);
close(sumBD, 372, 'bd-16 jumlah suku ke-3 sampai ke-7', 0);

// ---------- bunga-majemuk: bm-16 ----------
const price = 240000000;
const keep = 0.85;
close(price * keep ** 4, 125281500, 'bm-16 nilai tahun ke-4', 1);
ok(price * keep ** 4 > 120000000, 'bm-16 tahun ke-4 belum di bawah ambang');
close(price * keep ** 5, 106489275, 'bm-16 nilai tahun ke-5', 1);
let firstBelow = 0;
for (let t = 1; t <= 8; t += 1) {
  if (price * keep ** t < 120000000) {
    firstBelow = t;
    break;
  }
}
close(firstBelow, 5, 'bm-16 tahun pertama di bawah ambang', 0);

// ---------- eksponen: eks-16 ----------
const twoP = 3;
const twoQ = 5;
close(twoP ** 2 * twoQ, 45, 'eks-16 nilai 2^(2p+q)', 0);

// ---------- fungsi-eksponensial: fe-16 ----------
// 4^x - 5*2^x + 4 = 0 dengan y = 2^x memberi y^2 - 5y + 4 = 0.
const yRoots = [1, 4];
const xRoots = yRoots.map((y) => Math.log2(y));
close(Math.min(...xRoots), 0, 'fe-16 akar x terkecil', 0);
close(Math.max(...xRoots), 2, 'fe-16 akar x terbesar', 0);
close(xRoots.reduce((sum, value) => sum + value, 0), 2, 'fe-16 jumlah akar', 0);

// ---------- fungsi-kuadrat: fk-17 ----------
const disc = (k) => 4 * k * k - 4 * k - 8;
close(disc(-1), 0, 'fk-17 diskriminan di k=-1', 0);
close(disc(2), 0, 'fk-17 diskriminan di k=2', 0);
ok(disc(0) < 0, 'fk-17 diskriminan negatif di k=0 (fungsi selalu positif)');
ok(!(disc(-2) < 0) && !(disc(3) < 0), 'fk-17 diskriminan tak negatif di luar rentang -1<k<2');

// ---------- fungsi-logaritma: flg-16 ----------
const log3of8 = Math.log(8) / Math.log(3);
const log2of9 = Math.log(9) / Math.log(2);
close(log3of8 * log2of9, 6, 'flg-16 log_3(8) * log_2(9)', 1e-9);

report();

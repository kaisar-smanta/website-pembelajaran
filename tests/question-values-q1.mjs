// Verifikasi nilai numerik soal mahir otomatis grup Q1 (Wave 2):
// anuitas, barisan-deret, bunga-majemuk, eksponen, fungsi-eksponensial,
// fungsi-kuadrat, dan fungsi-logaritma. Dipanggil otomatis oleh tests/run-all.mjs.
//
// Setiap nilai dihitung ulang di sini, lalu dibandingkan dengan kunci jawaban
// yang BENAR-BENAR tersimpan pada soal di `src/data/questions/*.ts`. Bila soal
// diubah, dipindah, atau kuncinya dirusak, uji gagal.
//
// Pemakaian: node tests/question-values-q1.mjs
import assert from 'node:assert/strict';
import { check, close, loadQuestion, report } from './_util.mjs';

// ---------- anuitas: an-15 ----------
const M = 8000000;
const i = 0.015;
const n = 12;
const annuity = (M * i) / (1 - (1 + i) ** -n);
close(annuity, 733439.94, 'an-15 angsuran anuitas bulanan', 0.05);
close(annuity * n - M, 801279.32, 'an-15 total bunga', 0.5);
close(Math.round(annuity * n - M), 801279, 'an-15 total bunga dibulatkan', 0);
{
  const q = await loadQuestion('src/data/questions/anuitas.ts', 'an-15');
  check('an-15 kunci jawaban memuat total bunga terhitung Rp801.279', () => {
    assert.equal(q.answer, 'Rp801.279');
    assert.ok(q.acceptedAnswers.includes('801279'));
  });
  check('an-15 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- barisan-deret: bd-16 ----------
const r = 24 / 12;
const a = 12 / r ** 2;
close(r, 2, 'bd-16 rasio barisan geometri', 0);
close(a, 3, 'bd-16 suku pertama', 0);
const sumBD = a * (2 ** 2 + 2 ** 3 + 2 ** 4 + 2 ** 5 + 2 ** 6);
close(sumBD, 372, 'bd-16 jumlah suku ke-3 sampai ke-7', 0);
{
  const q = await loadQuestion('src/data/questions/barisan-deret.ts', 'bd-16');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('bd-16 kunci menunjuk opsi bernilai 372', () => {
    assert.equal(q.answer, 'B');
    assert.ok(chosen && chosen.text.includes(String(sumBD)));
  });
  check('bd-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- bunga-majemuk: bm-16 ----------
const price = 240000000;
const keep = 0.85;
close(price * keep ** 4, 125281500, 'bm-16 nilai tahun ke-4', 1);
assert.ok(price * keep ** 4 > 120000000, 'bm-16 tahun ke-4 masih di atas ambang');
close(price * keep ** 5, 106489275, 'bm-16 nilai tahun ke-5', 1);
let firstBelow = 0;
for (let t = 1; t <= 8; t += 1) {
  if (price * keep ** t < 120000000) {
    firstBelow = t;
    break;
  }
}
close(firstBelow, 5, 'bm-16 tahun pertama di bawah ambang', 0);
{
  const q = await loadQuestion('src/data/questions/bunga-majemuk.ts', 'bm-16');
  check('bm-16 kunci jawaban adalah tahun terhitung', () => {
    assert.equal(q.answer, String(firstBelow));
    assert.ok(q.acceptedAnswers.includes('tahun ke-5'));
  });
  check('bm-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- eksponen: eks-16 ----------
const twoP = 3;
const twoQ = 5;
const valueEks = twoP ** 2 * twoQ;
close(valueEks, 45, 'eks-16 nilai 2^(2p+q)', 0);
{
  const q = await loadQuestion('src/data/questions/eksponen.ts', 'eks-16');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('eks-16 kunci menunjuk opsi bernilai 45', () => {
    assert.equal(q.answer, 'C');
    assert.ok(chosen && chosen.text.includes(String(valueEks)));
  });
  check('eks-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- fungsi-eksponensial: fe-16 ----------
// 4^x - 5*2^x + 4 = 0 dengan y = 2^x memberi y^2 - 5y + 4 = 0.
const yRoots = [1, 4];
const xRoots = yRoots.map((y) => Math.log2(y));
close(Math.min(...xRoots), 0, 'fe-16 akar x terkecil', 0);
close(Math.max(...xRoots), 2, 'fe-16 akar x terbesar', 0);
const sumXRoots = xRoots.reduce((sum, value) => sum + value, 0);
close(sumXRoots, 2, 'fe-16 jumlah akar', 0);
{
  const q = await loadQuestion('src/data/questions/fungsi-eksponensial.ts', 'fe-16');
  check('fe-16 kunci jawaban adalah jumlah akar terhitung', () => {
    assert.equal(q.answer, String(sumXRoots));
  });
  check('fe-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- fungsi-kuadrat: fk-17 ----------
const disc = (k) => 4 * k * k - 4 * k - 8;
close(disc(-1), 0, 'fk-17 diskriminan di k=-1', 0);
close(disc(2), 0, 'fk-17 diskriminan di k=2', 0);
assert.ok(disc(0) < 0, 'fk-17 diskriminan negatif di k=0 (fungsi selalu positif)');
assert.ok(!(disc(-2) < 0) && !(disc(3) < 0), 'fk-17 diskriminan tak negatif di luar rentang -1<k<2');
{
  const q = await loadQuestion('src/data/questions/fungsi-kuadrat.ts', 'fk-17');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('fk-17 kunci menunjuk rentang akar diskriminan', () => {
    assert.equal(q.answer, 'A');
    assert.ok(chosen && chosen.text.includes('-1<k<2'));
  });
  check('fk-17 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- fungsi-logaritma: flg-16 ----------
const log3of8 = Math.log(8) / Math.log(3);
const log2of9 = Math.log(9) / Math.log(2);
const valueFlg = log3of8 * log2of9;
close(valueFlg, 6, 'flg-16 log_3(8) * log_2(9)', 1e-9);
{
  const q = await loadQuestion('src/data/questions/fungsi-logaritma.ts', 'flg-16');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('flg-16 kunci menunjuk opsi bernilai 6', () => {
    assert.equal(q.answer, 'B');
    assert.ok(chosen && chosen.text.includes(String(Math.round(valueFlg))));
  });
  check('flg-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

report();

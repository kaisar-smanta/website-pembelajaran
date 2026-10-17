// Verifikasi nilai jawaban soal mahir Wave 2 grup Q5: analisis-distribusi-data,
// distribusi-binomial, distribusi-normal, dan variabel-acak-diskret.
// Dipanggil otomatis oleh tests/run-all.mjs.
//
// Nilai dihitung ulang di sini lalu dibandingkan dengan kunci jawaban yang
// tersimpan pada soal di `src/data/questions/*.ts`, sehingga perubahan atau
// penghapusan soal menggagalkan uji.
//
// Pemakaian: node tests/question-values-q5.mjs
import assert from 'node:assert/strict';
import { check, close, loadQuestion, report } from './_util.mjs';

function combination(n, k) {
  if (k < 0 || k > n) return 0;
  let result = 1;
  for (let i = 0; i < k; i += 1) result = (result * (n - i)) / (i + 1);
  return Math.round(result);
}

// ---------- analisis-distribusi-data (ad-17) ----------
// Rata-rata 10 datum 15, lalu 11 datum 16: nilai baru = 11*16 - 10*15.
const sumOld = 10 * 15;
const sumNew = 11 * 16;
close(sumOld, 150, 'ad-17 jumlah 10 datum', 0);
close(sumNew, 176, 'ad-17 jumlah 11 datum', 0);
close(sumNew - sumOld, 26, 'ad-17 nilai siswa baru', 0);
{
  const q = await loadQuestion('src/data/questions/analisis-distribusi-data.ts', 'ad-17');
  check('ad-17 kunci jawaban adalah selisih jumlah terhitung', () => {
    assert.equal(q.answer, String(sumNew - sumOld));
  });
  check('ad-17 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- analisis-distribusi-data (ad-18, open-response) ----------
// Data A = 65,70,75 dan data B = 50,70,90; keduanya rata-rata 70.
const varA = (25 + 0 + 25) / 3;
const varB = (400 + 0 + 400) / 3;
close(varA, 50 / 3, 'ad-18 variansi data A', 1e-12);
close(varB, 800 / 3, 'ad-18 variansi data B', 1e-12);
close(Math.sqrt(varA), 4.08248290463863, 'ad-18 simpangan baku data A', 1e-9);
close(Math.sqrt(varB), 16.32993161855452, 'ad-18 simpangan baku data B', 1e-9);
{
  const q = await loadQuestion('src/data/questions/analisis-distribusi-data.ts', 'ad-18');
  const rubric = Array.isArray(q.rubric) ? q.rubric.join(' ') : '';
  check('ad-18 jawaban menyebut variansi data A 50/3', () => {
    assert.ok(q.answer.includes('\\dfrac{50}{3}'));
    assert.ok(q.answer.includes('16{,}67'));
  });
  check('ad-18 jawaban menyebut variansi data B 800/3', () => {
    assert.ok(q.answer.includes('\\dfrac{800}{3}'));
    assert.ok(q.answer.includes('266{,}67'));
  });
  check('ad-18 rubrik menuntut kedua variansi', () => {
    assert.ok(rubric.includes('16{,}67'));
    assert.ok(rubric.includes('266{,}67'));
  });
  check('ad-18 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- distribusi-binomial (bin-18) ----------
// X ~ B(8, 1/2): P(X=2) = C(8,2)/2^8 = 28/256 = 7/64.
const binomProb = combination(8, 2) / 2 ** 8;
close(combination(8, 2), 28, 'bin-18 koefisien C(8,2)', 0);
close(2 ** 8, 256, 'bin-18 penyebut 2^8', 0);
close(binomProb, 7 / 64, 'bin-18 peluang P(X=2) sebagai pecahan', 1e-12);
close(binomProb, 0.109375, 'bin-18 peluang P(X=2) desimal', 1e-12);
{
  const q = await loadQuestion('src/data/questions/distribusi-binomial.ts', 'bin-18');
  check('bin-18 kunci jawaban adalah 7/64', () => {
    assert.equal(q.answer, '7/64');
    assert.ok(q.acceptedAnswers.includes('0,109375'));
  });
  check('bin-18 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- distribusi-binomial (bin-19) ----------
// 10 soal, p = 1/5, k = 2: P(X=2) = C(10,2)(0,2)^2(0,8)^8.
const quizProb = combination(10, 2) * 0.2 ** 2 * 0.8 ** 8;
close(quizProb, 0.301989888, 'bin-19 peluang P(X=2) penuh', 1e-12);
close(Math.round(quizProb * 10000) / 10000, 0.302, 'bin-19 peluang dibulatkan 4 desimal', 1e-12);
{
  const q = await loadQuestion('src/data/questions/distribusi-binomial.ts', 'bin-19');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('bin-19 kunci menunjuk peluang 0,3020', () => {
    assert.equal(q.answer, 'A');
    assert.ok(chosen && chosen.text.includes('0{,}3020'));
  });
  check('bin-19 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- distribusi-normal (dn-17) ----------
// N(60, 5^2), x = 70: z = (70 - 60)/5 = 2; P(Z > 2) = (1 - 0,9545)/2.
const zDn = (70 - 60) / 5;
close(zDn, 2, 'dn-17 skor baku z', 0);
close((1 - 0.9545) / 2, 0.02275, 'dn-17 peluang ekor kanan', 1e-12);
close((1 - 0.9545) / 2, 0.0228, 'dn-17 peluang dibulatkan', 1e-4);
{
  const q = await loadQuestion('src/data/questions/distribusi-normal.ts', 'dn-17');
  check('dn-17 kunci jawaban adalah peluang ekor', () => {
    assert.equal(q.answer, '0,0228');
    assert.ok(q.acceptedAnswers.includes('0.0228'));
  });
  check('dn-17 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- distribusi-normal (dn-18) ----------
// N(500, 100^2), batas 2,5% teratas: x = 500 + 1,96*100 = 696.
close(500 + 1.96 * 100, 696, 'dn-18 skor minimum kelulusan', 1e-9);
{
  const q = await loadQuestion('src/data/questions/distribusi-normal.ts', 'dn-18');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('dn-18 kunci menunjuk skor 696', () => {
    assert.equal(q.answer, 'B');
    assert.ok(chosen && chosen.text.includes('696'));
  });
  check('dn-18 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- variabel-acak-diskret (vad-17) ----------
// X = banyak gambar dari 3 koin: E(X) = 1,5, E(X^2) = 3, Var = 3/4.
const probs = [1 / 8, 3 / 8, 3 / 8, 1 / 8];
const eVad = probs.reduce((sum, p, x) => sum + p * x, 0);
const e2Vad = probs.reduce((sum, p, x) => sum + p * x * x, 0);
close(eVad, 1.5, 'vad-17 nilai harapan E(X)', 1e-12);
close(e2Vad, 3, 'vad-17 momen kedua E(X^2)', 1e-12);
close(e2Vad - eVad ** 2, 0.75, 'vad-17 varians', 1e-12);
close(e2Vad - eVad ** 2, 3 / 4, 'vad-17 varians sebagai 3/4', 1e-12);
{
  const q = await loadQuestion('src/data/questions/variabel-acak-diskret.ts', 'vad-17');
  check('vad-17 kunci jawaban adalah 3/4', () => {
    assert.equal(q.answer, '3/4');
    assert.ok(q.acceptedAnswers.includes('0,75'));
  });
  check('vad-17 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- variabel-acak-diskret (vad-18, open-response) ----------
// Dua bola dari 1,2,3,4: 6 pasangan; P(X=5) = 2/6; E(X) = 30/6 = 5.
const sumsVad = [3, 4, 5, 5, 6, 7];
close(sumsVad.length, combination(4, 2), 'vad-18 banyak pasangan C(4,2)', 0);
close(sumsVad.filter((s) => s === 5).length / sumsVad.length, 2 / 6, 'vad-18 peluang P(X=5)', 1e-12);
close(sumsVad.reduce((sum, s) => sum + s, 0) / sumsVad.length, 5, 'vad-18 nilai harapan E(X)', 1e-12);
{
  const q = await loadQuestion('src/data/questions/variabel-acak-diskret.ts', 'vad-18');
  const rubric = Array.isArray(q.rubric) ? q.rubric.join(' ') : '';
  check('vad-18 jawaban menyebut P(X=5) = 2/6', () => {
    assert.ok(q.answer.includes('\\dfrac26'));
  });
  check('vad-18 jawaban menyebut E(X) = 30/6 = 5', () => {
    assert.ok(q.answer.includes('\\dfrac{30}{6}'));
  });
  check('vad-18 rubrik menuntut P(X=5) dan E(X)', () => {
    assert.ok(rubric.includes('2}{6}'));
    assert.ok(rubric.includes('E(X)=5'));
  });
  check('vad-18 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

report();

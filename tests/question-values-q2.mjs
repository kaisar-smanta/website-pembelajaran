// Verifikasi nilai matematika soal auto-graded `mahir` yang baru ditambahkan
// pada grup Q2: fungsi-rasional-akar, irisan-kerucut, komposisi-fungsi,
// lingkaran, matriks-transformasi, matriks, dan peluang. Dipanggil otomatis oleh
// tests/run-all.mjs.
//
// Nilai dihitung ulang di sini lalu dibandingkan dengan kunci jawaban yang
// tersimpan pada soal di `src/data/questions/*.ts`, sehingga perubahan atau
// penghapusan soal menggagalkan uji.
//
// Pemakaian: node tests/question-values-q2.mjs
import assert from 'node:assert/strict';
import { check, checkFileExists, close, loadQuestion, report } from './_util.mjs';

// ---------- Berkas soal grup Q2 ----------
checkFileExists('soal fungsi rasional akar', 'src/data/questions/fungsi-rasional-akar.ts');
checkFileExists('soal irisan kerucut', 'src/data/questions/irisan-kerucut.ts');
checkFileExists('soal komposisi fungsi', 'src/data/questions/komposisi-fungsi.ts');
checkFileExists('soal lingkaran', 'src/data/questions/lingkaran.ts');
checkFileExists('soal matriks transformasi', 'src/data/questions/matriks-transformasi.ts');
checkFileExists('soal matriks', 'src/data/questions/matriks.ts');
checkFileExists('soal peluang', 'src/data/questions/peluang.ts');

// ---------- fra-16: ordinat lubang (x^2+x-6)/(x^2-4) ----------
// (x+3)(x-2)/((x-2)(x+2)) -> (x+3)/(x+2) di x=2.
const holeOrdinate = (2 + 3) / (2 + 2);
close(holeOrdinate, 1.25, 'fra-16 ordinat lubang (2+3)/(2+2)', 0);
close(5 / 4, 1.25, 'fra-16 bentuk pecahan 5/4', 0);
{
  const q = await loadQuestion('src/data/questions/fungsi-rasional-akar.ts', 'fra-16');
  check('fra-16 kunci jawaban adalah ordinat lubang terhitung', () => {
    assert.equal(q.answer, '5/4');
    assert.ok(q.acceptedAnswers.includes('1,25'));
  });
  check('fra-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- ik-16: eksentrisitas elips dari titik puncak (4,0) dan (0,3) ----------
const a2 = 4 * 4;
const b2 = 3 * 3;
close(a2, 16, 'ik-16 a^2', 0);
close(b2, 9, 'ik-16 b^2', 0);
const focus = Math.sqrt(a2 - b2);
close(focus, Math.sqrt(7), 'ik-16 jarak fokus c=sqrt(16-9)', 0);
const eccentricity = focus / 4;
close(eccentricity, Math.sqrt(7) / 4, 'ik-16 eksentrisitas e=c/a', 0);
{
  const q = await loadQuestion('src/data/questions/irisan-kerucut.ts', 'ik-16');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('ik-16 kunci menunjuk elips sumbu mayor mendatar dan e=akar7/4', () => {
    assert.equal(q.answer, 'A');
    assert.ok(chosen && chosen.text.includes('\\dfrac{x^{2}}{16}'));
    assert.ok(chosen && chosen.text.includes('\\dfrac{\\sqrt{7}}{4}'));
  });
  check('ik-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- kf-16: g(3) bila f(x)=x-2 dan (f o g)(x)=2x^2-3 ----------
const gOf = (x) => 2 * x * x - 1;
const fOf = (x) => x - 2;
const g3 = gOf(3);
close(g3, 17, 'kf-16 rumus g memberi g(3)=2*3^2-1', 0);
close(fOf(g3), 15, 'kf-16 (f o g)(3)=f(g(3))', 0);
close(2 * 3 * 3 - 3, 15, 'kf-16 nilai (f o g)(3) langsung', 0);
{
  const q = await loadQuestion('src/data/questions/komposisi-fungsi.ts', 'kf-16');
  check('kf-16 kunci jawaban adalah g(3) terhitung', () => {
    assert.equal(q.answer, String(g3));
  });
  check('kf-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- lk-16: sudut pusat dan sudut keliling ----------
// 3x-20 = 2(x+15) -> x=50; sudut pusat 130, sudut keliling 65.
const lkX = (2 * 15 + 20) / (3 - 2);
close(lkX, 50, 'lk-16 solusi x dari 3x-20=2(x+15)', 0);
const central = 3 * lkX - 20;
const inscribed = lkX + 15;
close(central, 130, 'lk-16 sudut pusat 3(50)-20', 0);
close(inscribed, 65, 'lk-16 sudut keliling 50+15', 0);
assert.equal(central, 2 * inscribed, 'lk-16 sudut pusat dua kali sudut keliling');
{
  const q = await loadQuestion('src/data/questions/lingkaran.ts', 'lk-16');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('lk-16 kunci menunjuk sudut keliling 65 derajat', () => {
    assert.equal(q.answer, 'B');
    assert.ok(chosen && chosen.text.includes(String(inscribed)));
  });
  check('lk-16 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- mtf-18: luas akhir setelah transformasi dan dilatasi ----------
close(3 * Math.abs(-4), 12, 'mtf-18 luas setelah transformasi 3*|det(A)|', 0);
const finalArea = 12 * 3 * 3;
close(finalArea, 108, 'mtf-18 luas akhir setelah dilatasi faktor 3', 0);
{
  const q = await loadQuestion('src/data/questions/matriks-transformasi.ts', 'mtf-18');
  check('mtf-18 kunci jawaban adalah luas akhir terhitung', () => {
    assert.equal(q.answer, String(finalArea));
  });
  check('mtf-18 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- mt-18: entri (1,1) dari M^2 ----------
const M = [
  [2, 1],
  [3, 2],
];
const m2 = [
  [M[0][0] * M[0][0] + M[0][1] * M[1][0], M[0][0] * M[0][1] + M[0][1] * M[1][1]],
  [M[1][0] * M[0][0] + M[1][1] * M[1][0], M[1][0] * M[0][1] + M[1][1] * M[1][1]],
];
close(m2[0][0], 7, 'mt-18 entri (1,1) M^2=2*2+1*3', 0);
close(m2[0][1], 4, 'mt-18 entri (1,2) M^2', 0);
close(m2[1][0], 12, 'mt-18 entri (2,1) M^2', 0);
close(m2[1][1], 7, 'mt-18 entri (2,2) M^2', 0);
{
  const q = await loadQuestion('src/data/questions/matriks.ts', 'mt-18');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('mt-18 kunci menunjuk entri (1,1) M^2 = 7', () => {
    assert.equal(q.answer, 'B');
    assert.ok(chosen && chosen.text.includes(String(m2[0][0])));
  });
  check('mt-18 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

// ---------- pl-17: peluang paling sedikit satu merah ----------
const noRed = (6 / 10) * (5 / 9);
const atLeastOneRed = 1 - noRed;
close(noRed, 1 / 3, 'pl-17 peluang kedua bola putih', 1e-12);
close(atLeastOneRed, 2 / 3, 'pl-17 peluang paling sedikit satu merah', 1e-12);
close((4 / 10) * (6 / 9) + (6 / 10) * (4 / 9), 8 / 15, 'pl-17 peluang tepat satu merah', 1e-12);
close((4 / 10) * (3 / 9), 2 / 15, 'pl-17 peluang kedua bola merah', 1e-12);
{
  const q = await loadQuestion('src/data/questions/peluang.ts', 'pl-17');
  const chosen = q.options.find((option) => option.key === q.answer);
  check('pl-17 kunci menunjuk peluang 2/3', () => {
    assert.equal(q.answer, 'B');
    assert.ok(chosen && chosen.text.includes('2}{3'));
  });
  check('pl-17 soal mahir berpetunjuk', () => {
    assert.equal(q.difficulty, 'mahir');
    assert.ok(Array.isArray(q.hints) && q.hints.length >= 2);
  });
}

report();

// Uji logika murni pencocokan jawaban singkat: node tests/answer.mjs
//
// Kasus konkret diambil dari bank soal (eksponen, anuitas, lingkaran,
// trigonometri, vektor) ditambah kasus tepi (superskrip, tanda minus, simbol
// perkalian, pecahan/akar LaTeX vs Unicode).
import assert from 'node:assert/strict';
import { normalizeAnswer, isAcceptedAnswer } from '../src/lib/answer.ts';

let passed = 0;
function check(label, fn) {
  fn();
  passed++;
  console.log(`  ok - ${label}`);
}

// ---- Format dasar ----
check('lowercase, trim, dan spasi internal dibuang', () => {
  assert.equal(normalizeAnswer('  Rp 120.000  '), normalizeAnswer('rp120.000'));
  assert.equal(normalizeAnswer('9 b ^ 5'), '9b^5');
});

check('membuang $, braces, \\left, \\right, \\, \\; \\!', () => {
  assert.equal(normalizeAnswer('\\left(x\\right)'), '(x)');
  assert.equal(normalizeAnswer('$5$'), '5');
  assert.equal(normalizeAnswer('a\\;b'), 'ab');
  assert.equal(normalizeAnswer('x\\!y'), 'xy');
  assert.equal(normalizeAnswer('5\\,000'), '5000');
});

// ---- Tanda minus / dash Unicode ----
check('menyeragamkan U+2212, en dash, em dash ke ASCII -', () => {
  assert.equal(normalizeAnswer('\u22125'), '-5');
  assert.equal(normalizeAnswer('3\u20134'), '3-4');
  assert.equal(normalizeAnswer('3\u20144'), '3-4');
  assert.equal(normalizeAnswer('x\u22121'), 'x-1');
});

// ---- Superskrip ----
check('mengubah superskrip angka menjadi ^n', () => {
  assert.equal(normalizeAnswer('x²'), 'x^2');
  assert.equal(normalizeAnswer('x³'), 'x^3');
  assert.equal(normalizeAnswer('y⁴⁵'), 'y^45');
  assert.equal(normalizeAnswer('10⁰'), '10^0');
});

check('mengubah superskrip minus menjadi ^-', () => {
  assert.equal(normalizeAnswer('x⁻¹'), 'x^-1');
  assert.equal(normalizeAnswer('2⁻⁵'), '2^-5');
});

// ---- Pecahan & akar (LaTeX vs Unicode) ----
check('\\dfrac dan \\frac menjadi (a)/(b) sebelum braces dibuang', () => {
  assert.equal(normalizeAnswer('\\dfrac{3}{4}'), '(3)/(4)');
  assert.equal(normalizeAnswer('\\frac{3}{4}'), '(3)/(4)');
  assert.equal(normalizeAnswer('\\dfrac{1}{2^{3}}'), '(1)/(2^3)');
});

check('\\sqrt{x}, \\sqrt x, dan √x menjadi sqrt(x)', () => {
  assert.equal(normalizeAnswer('\\sqrt{5}'), 'sqrt(5)');
  assert.equal(normalizeAnswer('\\sqrt 5'), 'sqrt(5)');
  assert.equal(normalizeAnswer('√5'), 'sqrt(5)');
  assert.equal(normalizeAnswer('8√2'), '8sqrt(2)');
  assert.equal(normalizeAnswer('8\\sqrt{2}'), '8sqrt(2)');
});

check('trigonometri: 8√2 dan 8\\sqrt{2} saling cocok', () => {
  const accepted = ['8\\sqrt{2}', '8√2', '8 akar 2'];
  assert.equal(isAcceptedAnswer('8√2', '8√2', accepted), true);
  assert.equal(isAcceptedAnswer('8\\sqrt{2}', '8√2', accepted), true);
  assert.equal(normalizeAnswer('8√2'), normalizeAnswer('8\\sqrt{2}'));
});

check('trigonometri: 3/4, 0,75, 0.75, dan \\dfrac{3}{4} diterima', () => {
  const accepted = ['0,75', '0.75', '\\dfrac{3}{4}'];
  assert.equal(isAcceptedAnswer('3/4', '3/4', accepted), true);
  assert.equal(isAcceptedAnswer('0,75', '3/4', accepted), true);
  assert.equal(isAcceptedAnswer('0.75', '3/4', accepted), true);
  assert.equal(isAcceptedAnswer('\\dfrac{3}{4}', '3/4', accepted), true);
});

check('trigonometri: 10√3 dan bentuk desimalnya diterima', () => {
  const accepted = ['10\\sqrt{3}', '10√3', '17,32', '17.32'];
  assert.equal(isAcceptedAnswer('10√3', '10√3', accepted), true);
  assert.equal(isAcceptedAnswer('10\\sqrt{3}', '10√3', accepted), true);
  assert.equal(isAcceptedAnswer('17,32', '10√3', accepted), true);
  assert.equal(isAcceptedAnswer('17.32', '10√3', accepted), true);
});

// ---- Angka ala Indonesia (anuitas / rupiah) ----
check('anuitas: Rp120.000 dan variannya cocok', () => {
  const accepted = ['Rp120.000,00', '120.000', '120000', 'Rp 120.000'];
  assert.equal(normalizeAnswer('Rp120.000'), '120000');
  assert.equal(normalizeAnswer('Rp120.000,00'), '120000.00');
  assert.equal(normalizeAnswer('120.000'), '120000');
  assert.equal(normalizeAnswer('Rp 120.000'), '120000');
  assert.equal(isAcceptedAnswer('120.000', 'Rp120.000', accepted), true);
  assert.equal(isAcceptedAnswer('Rp 120.000', 'Rp120.000', accepted), true);
  assert.equal(isAcceptedAnswer('120000', 'Rp120.000', accepted), true);
});

check('anuitas: pemisah ribuan berulang dibuang', () => {
  assert.equal(normalizeAnswer('Rp5.637.093'), '5637093');
  assert.equal(normalizeAnswer('Rp5.637.092,96'), '5637092.96');
  assert.equal(normalizeAnswer('5.637.093'), '5637093');
});

check('koma desimal vs titik desimal', () => {
  assert.equal(normalizeAnswer('0,96'), '0.96');
  assert.equal(normalizeAnswer('17,32'), '17.32');
  assert.equal(normalizeAnswer('17.32'), '17.32');
  assert.equal(normalizeAnswer('0.75'), '0.75');
  assert.equal(normalizeAnswer('1.2345'), '1.2345');
});

// ---- Simbol perkalian (jangan dihapus) ----
check('×, ·, *, dan \\cdot menjadi * tanpa menghapus', () => {
  assert.equal(normalizeAnswer('3×4'), '3*4');
  assert.equal(normalizeAnswer('3·4'), '3*4');
  assert.equal(normalizeAnswer('3*4'), '3*4');
  assert.equal(normalizeAnswer('3\\cdot4'), '3*4');
  assert.notEqual(normalizeAnswer('3×4'), normalizeAnswer('34'));
  assert.equal(isAcceptedAnswer('3×4', '3*4'), true);
});

// ---- Eksponen (eksponen.ts) ----
check('eksponen: 9b^5 dan varian penulisannya cocok', () => {
  const accepted = ['9b^{5}', '9 b^5', '9b5'];
  assert.equal(normalizeAnswer('9b^{5}'), '9b^5');
  assert.equal(normalizeAnswer('9 b^5'), '9b^5');
  assert.equal(isAcceptedAnswer('9b^5', '9b^5', accepted), true);
  assert.equal(isAcceptedAnswer('9b^{5}', '9b^5', accepted), true);
  assert.equal(isAcceptedAnswer('9b5', '9b^5', accepted), true);
});

check('eksponen: bentuk sekawan 2(√5+√2) cocok dengan LaTeX', () => {
  const accepted = [
    '2(\\sqrt{5}+\\sqrt{2})',
    '2√5+2√2',
    '2\\sqrt{5}+2\\sqrt{2}',
  ];
  assert.equal(
    normalizeAnswer('2(\\sqrt{5}+\\sqrt{2})'),
    normalizeAnswer('2(√5+√2)'),
  );
  assert.equal(isAcceptedAnswer('2(\\sqrt{5}+\\sqrt{2})', '2(√5+√2)', accepted), true);
});

// ---- Vektor & lingkaran ----
check('vektor: 3/5 dan 0.6 diterima', () => {
  assert.equal(isAcceptedAnswer('0.6', '3/5', ['0.6', '3/5']), true);
  assert.equal(isAcceptedAnswer('3/5', '3/5', ['0.6', '3/5']), true);
});

check('lingkaran: derajat tetap cocok lewat acceptedAnswers', () => {
  assert.equal(isAcceptedAnswer('35°', '35', ['35°', '35^\\circ', '35 derajat']), true);
  assert.equal(isAcceptedAnswer('35', '35', ['35°', '35^\\circ', '35 derajat']), true);
});

// ---- Kasus tepi ----
check('jawaban kosong ditolak', () => {
  assert.equal(normalizeAnswer(''), '');
  assert.equal(normalizeAnswer('   '), '');
  assert.equal(isAcceptedAnswer('', '5'), false);
  assert.equal(isAcceptedAnswer('   ', '5'), false);
});

check('pencocokan tidak memutasi input', () => {
  const accepted = ['0,75'];
  isAcceptedAnswer('0,75', '3/4', accepted);
  assert.deepEqual(accepted, ['0,75']);
});

console.log(`\nPASS answer (${passed} pemeriksaan)`);

// Verifikasi nilai matematika untuk topik Matematika Tingkat Lanjut Fase F:
// polinomial, matriks transformasi, dan trigonometri lanjut.
// Pemakaian: node tests/mtl-aljabar.mjs (dijalankan otomatis oleh tests/run-all.mjs).
import assert from 'node:assert/strict';

let passed = 0;
function check(label, actual, expected, tolerance = 0) {
  if (tolerance > 0) {
    assert.ok(
      Math.abs(actual - expected) <= tolerance,
      `${label}: diharapkan ≈${expected}, diperoleh ${actual}`,
    );
  } else if (Array.isArray(expected)) {
    assert.deepEqual(actual, expected, `${label}: diharapkan ${expected}, diperoleh ${actual}`);
  } else {
    assert.equal(actual, expected, `${label}: diharapkan ${expected}, diperoleh ${actual}`);
  }
  passed++;
}

const P = (x) => 2 * x ** 3 - 3 * x ** 2 + 4 * x - 5;
const Q = (x) => x ** 2 + 2 * x + 1;

// ---------- Polinomial: operasi aritmetika ----------
check('polinomial jumlah koefisien x^2', -3 + 1, -2);
check('polinomial hasil kali P*Q di x=1', P(1) * Q(1), -8);
check('polinomial (x+2)(x^2-x+3) di x=1', (1 + 2) * (1 - 1 + 3), 9);

// ---------- Polinomial: teorema sisa ----------
const R = (x) => 2 * x ** 3 - 5 * x ** 2 + 4 * x - 7;
check('sisa 2x^3-5x^2+4x-7 oleh (x-2)', R(2), -3);
check('sisa 2x^3-5x^2+4x-7 oleh (x+1)', R(-1), -18);
check('sisa 2x^3-5x^2+4x-7 oleh (2x-1)', R(0.5), -6);
check('sisa x^3+2x^2-5x+3 oleh (x+2)', (-2) ** 3 + 2 * (-2) ** 2 - 5 * (-2) + 3, 13);
check('sisa x^4-3x^2+2x-5 oleh (x+2)', (-2) ** 4 - 3 * (-2) ** 2 + 2 * (-2) - 5, -5);

// ---------- Polinomial: pembagian Horner ----------
const Ph = (x) => 2 * x ** 3 + x ** 2 - 3 * x + 4;
const H = (x) => 2 * x ** 2 + 5 * x + 7;
check('hasil bagi Horner di x=3 dikali (x-2) + 18', (3 - 2) * H(3) + 18, Ph(3));
check('hasil bagi Horner konstan', H(0), 7);
check('sisa Horner 2x^3+x^2-3x+4 oleh (x-2)', Ph(2), 18);

// ---------- Polinomial: teorema faktor dan akar ----------
const F = (x) => x ** 3 - 4 * x ** 2 + x + 6;
check('akar x=3', F(3), 0);
check('akar x=2', F(2), 0);
check('akar x=-1', F(-1), 0);
check('faktor (x-2) pada x^3-4x^2+5x-2', 2 ** 3 - 4 * 2 ** 2 + 5 * 2 - 2, 0);
check('k=-1 membuat (x-2) faktor', 2 ** 3 - 1 * 2 ** 2 - 4 * 2 + 4, 0);
check('k=0 membuat (x-1) faktor', 1 ** 3 - 3 * 1 + 2, 0);
const F2 = (x) => 2 * x ** 3 - 3 * x ** 2 - 5 * x + 6;
check('pl-12 akar x=2', F2(2), 0);
check('pl-12 akar x=-3/2', F2(-1.5), 0);

// ---------- Polinomial: identitas ----------
const identity = (x) => x ** 3 - 2 * x ** 2 - 5 * x + 6;
check('identitas di x=0', (0 - 1) * (0 + 2) * (0 - 3), identity(0));
check('identitas di x=4', (4 - 1) * (4 + 2) * (4 - 3), identity(4));

// ---------- Matriks transformasi: refleksi, rotasi, dilatasi ----------
const apply = (m, p) => [
  m[0][0] * p[0] + m[0][1] * p[1],
  m[1][0] * p[0] + m[1][1] * p[1],
];
const R90 = [
  [0, -1],
  [1, 0],
];
check('refleksi y=x pada (2,3)', apply([[0, 1], [1, 0]], [2, 3]), [3, 2]);
check('rotasi 90 CCW pada (1,0)', apply(R90, [1, 0]), [0, 1]);
check('rotasi 90 CCW koordinat a pada (3,1)', apply(R90, [3, 1])[0], -1);
check('rotasi 180 pada (2,3)', apply([[-1, 0], [0, -1]], [2, 3]), [-2, -3]);
check('rotasi 180 pada (-2,5)', apply([[-1, 0], [0, -1]], [-2, 5]), [2, -5]);
check('refleksi sumbu x pada (3,-2)', apply([[1, 0], [0, -1]], [3, -2]), [3, 2]);
check('dilatasi 3 pada (2,1)', apply([[3, 0], [0, 3]], [2, 1]), [6, 3]);

// ---------- Matriks transformasi: determinan, invers, komposisi ----------
const det2 = (m) => m[0][0] * m[1][1] - m[0][1] * m[1][0];
check('determinan matriks rotasi 90', det2(R90), 1);
check('determinan dilatasi 3', det2([[3, 0], [0, 3]]), 9);
check('determinan matriks diagonal (2,3)', det2([[2, 0], [0, 3]]), 6);
check('faktor skala luas (3,2)', Math.abs(det2([[3, 0], [0, 2]])), 6);

const comp = [
  [1 * 0 + 0 * 1, 1 * -1 + 0 * 0],
  [0 * 0 + -1 * 1, 0 * -1 + -1 * 0],
];
check('komposisi rotasi 90 lalu refleksi sumbu x pada (2,1)', apply(comp, [2, 1]), [-1, -2]);
check('komposisi itu sama dengan refleksi y=-x', apply([[0, -1], [-1, 0]], [2, 1]), [-1, -2]);
check(
  'refleksi sumbu x dilanjutkan sumbu y = rotasi 180',
  apply(
    [
      [-1, 0],
      [0, 1],
    ],
    apply([[1, 0], [0, -1]], [2, 3]),
  ),
  [-2, -3],
);

const invD = [
  [3 / 6, 0],
  [0, 2 / 6],
];
check('invers matriks (2,3) pada (2,-6)', apply(invD, [2, -6]), [1, -2]);
check('translasi (3,-2) pada (1,4)', [1 + 3, 4 - 2], [4, 2]);

// ---------- Trigonometri lanjut: periodik ----------
check('amplitudo y=4 sin(3x)', 4, 4);
check('periode y=sin(2x) dalam derajat', 360 / 2, 180);
check('periode f(x)=2 sin(3(x-30))+1', 360 / 3, 120);
check('nilai maksimum f(x)=2 sin(3(x-30))+1', 2 + 1, 3);

// ---------- Trigonometri lanjut: identitas ----------
const deg = (d) => (d * Math.PI) / 180;
check('sin 75 derajat', Math.sin(deg(75)), (Math.sqrt(6) + Math.sqrt(2)) / 4, 1e-12);
check('cos 75 derajat', Math.cos(deg(75)), (Math.sqrt(6) - Math.sqrt(2)) / 4, 1e-12);
check('sin 2a dengan sin a=3/5', 2 * (3 / 5) * (4 / 5), 24 / 25, 1e-12);
check('cos 2a dengan cos a=4/5', 2 * (4 / 5) ** 2 - 1, 7 / 25, 1e-12);
check('tan 2a dengan tan a=1/2', (2 * 0.5) / (1 - 0.5 ** 2), 4 / 3, 1e-12);
check('sin 2(30 derajat)', 2 * Math.sin(deg(30)) * Math.cos(deg(30)), Math.sqrt(3) / 2, 1e-12);
check(
  'cos(a+b)cos b + sin(a+b)sin b = cos a',
  Math.cos(deg(50 + 20)) * Math.cos(deg(20)) + Math.sin(deg(50 + 20)) * Math.sin(deg(20)),
  Math.cos(deg(50)),
  1e-12,
);

// ---------- Trigonometri lanjut: aturan sinus, kosinus, luas ----------
check('aturan kosinus a (b=5,c=8,A=60)', Math.sqrt(25 + 64 - 2 * 5 * 8 * Math.cos(deg(60))), 7, 1e-9);
check('aturan kosinus a (b=3,c=5,A=120)', Math.sqrt(9 + 25 - 2 * 3 * 5 * Math.cos(deg(120))), 7, 1e-9);
check('aturan sinus b (a=8,A=30,B=45)', (8 / Math.sin(deg(30))) * Math.sin(deg(45)), 8 * Math.SQRT2, 1e-9);
check('sudut B (a=5,b=7,c=8)', Math.cos(deg(60)), (25 + 64 - 49) / (2 * 5 * 8), 1e-12);
check('luas segitiga b=5,c=8,A=60', 0.5 * 5 * 8 * Math.sin(deg(60)), 10 * Math.sqrt(3), 1e-9);
check('luas segitiga perkiraan', Math.round(0.5 * 5 * 8 * Math.sin(deg(60)) * 100) / 100, 17.32, 0.005);

console.log(`\nmtl-aljabar: ${passed} pemeriksaan lulus.`);

// Verifikasi nilai matematika untuk topik Matematika Tingkat Lanjut Fase F:
// polinomial, matriks transformasi, dan trigonometri lanjut.
// Pemakaian: node tests/mtl-aljabar.mjs (dijalankan otomatis oleh tests/run-all.mjs).
import { close, closeVec, report } from './_util.mjs';

const P = (x) => 2 * x ** 3 - 3 * x ** 2 + 4 * x - 5;
const Q = (x) => x ** 2 + 2 * x + 1;

// ---------- Polinomial: operasi aritmetika ----------
close(-3 + 1, -2, 'polinomial jumlah koefisien x^2', 0);
close(P(1) * Q(1), -8, 'polinomial hasil kali P*Q di x=1', 0);
close((1 + 2) * (1 - 1 + 3), 9, 'polinomial (x+2)(x^2-x+3) di x=1', 0);

// ---------- Polinomial: teorema sisa ----------
const R = (x) => 2 * x ** 3 - 5 * x ** 2 + 4 * x - 7;
close(R(2), -3, 'sisa 2x^3-5x^2+4x-7 oleh (x-2)', 0);
close(R(-1), -18, 'sisa 2x^3-5x^2+4x-7 oleh (x+1)', 0);
close(R(0.5), -6, 'sisa 2x^3-5x^2+4x-7 oleh (2x-1)', 0);
close((-2) ** 3 + 2 * (-2) ** 2 - 5 * (-2) + 3, 13, 'sisa x^3+2x^2-5x+3 oleh (x+2)', 0);
close((-2) ** 4 - 3 * (-2) ** 2 + 2 * (-2) - 5, -5, 'sisa x^4-3x^2+2x-5 oleh (x+2)', 0);

// ---------- Polinomial: pembagian Horner ----------
const Ph = (x) => 2 * x ** 3 + x ** 2 - 3 * x + 4;
const H = (x) => 2 * x ** 2 + 5 * x + 7;
close((3 - 2) * H(3) + 18, Ph(3), 'hasil bagi Horner di x=3 dikali (x-2) + 18', 0);
close(H(0), 7, 'hasil bagi Horner konstan', 0);
close(Ph(2), 18, 'sisa Horner 2x^3+x^2-3x+4 oleh (x-2)', 0);

// ---------- Polinomial: teorema faktor dan akar ----------
const F = (x) => x ** 3 - 4 * x ** 2 + x + 6;
close(F(3), 0, 'akar x=3', 0);
close(F(2), 0, 'akar x=2', 0);
close(F(-1), 0, 'akar x=-1', 0);
close(2 ** 3 - 4 * 2 ** 2 + 5 * 2 - 2, 0, 'faktor (x-2) pada x^3-4x^2+5x-2', 0);
close(2 ** 3 - 1 * 2 ** 2 - 4 * 2 + 4, 0, 'k=-1 membuat (x-2) faktor', 0);
close(1 ** 3 - 3 * 1 + 2, 0, 'k=0 membuat (x-1) faktor', 0);
const F2 = (x) => 2 * x ** 3 - 3 * x ** 2 - 5 * x + 6;
close(F2(2), 0, 'pl-12 akar x=2', 0);
close(F2(-1.5), 0, 'pl-12 akar x=-3/2', 0);

// ---------- Polinomial: identitas ----------
const identity = (x) => x ** 3 - 2 * x ** 2 - 5 * x + 6;
close((0 - 1) * (0 + 2) * (0 - 3), identity(0), 'identitas di x=0', 0);
close((4 - 1) * (4 + 2) * (4 - 3), identity(4), 'identitas di x=4', 0);

// ---------- Matriks transformasi: refleksi, rotasi, dilatasi ----------
const apply = (m, p) => [
  m[0][0] * p[0] + m[0][1] * p[1],
  m[1][0] * p[0] + m[1][1] * p[1],
];
const R90 = [
  [0, -1],
  [1, 0],
];
closeVec(apply([[0, 1], [1, 0]], [2, 3]), [3, 2], 'refleksi y=x pada (2,3)', 0);
closeVec(apply(R90, [1, 0]), [0, 1], 'rotasi 90 CCW pada (1,0)', 0);
close(apply(R90, [3, 1])[0], -1, 'rotasi 90 CCW koordinat a pada (3,1)', 0);
closeVec(apply([[-1, 0], [0, -1]], [2, 3]), [-2, -3], 'rotasi 180 pada (2,3)', 0);
closeVec(apply([[-1, 0], [0, -1]], [-2, 5]), [2, -5], 'rotasi 180 pada (-2,5)', 0);
closeVec(apply([[1, 0], [0, -1]], [3, -2]), [3, 2], 'refleksi sumbu x pada (3,-2)', 0);
closeVec(apply([[3, 0], [0, 3]], [2, 1]), [6, 3], 'dilatasi 3 pada (2,1)', 0);

// ---------- Matriks transformasi: determinan, invers, komposisi ----------
const det2 = (m) => m[0][0] * m[1][1] - m[0][1] * m[1][0];
close(det2(R90), 1, 'determinan matriks rotasi 90', 0);
close(det2([[3, 0], [0, 3]]), 9, 'determinan dilatasi 3', 0);
close(det2([[2, 0], [0, 3]]), 6, 'determinan matriks diagonal (2,3)', 0);
close(Math.abs(det2([[3, 0], [0, 2]])), 6, 'faktor skala luas (3,2)', 0);

const comp = [
  [1 * 0 + 0 * 1, 1 * -1 + 0 * 0],
  [0 * 0 + -1 * 1, 0 * -1 + -1 * 0],
];
closeVec(apply(comp, [2, 1]), [-1, -2], 'komposisi rotasi 90 lalu refleksi sumbu x pada (2,1)', 0);
closeVec(apply([[0, -1], [-1, 0]], [2, 1]), [-1, -2], 'komposisi itu sama dengan refleksi y=-x', 0);
closeVec(apply(
    [
      [-1, 0],
      [0, 1],
    ],
    apply([[1, 0], [0, -1]], [2, 3]),
  ), [-2, -3], 'refleksi sumbu x dilanjutkan sumbu y = rotasi 180', 0);

const invD = [
  [3 / 6, 0],
  [0, 2 / 6],
];
closeVec(apply(invD, [2, -6]), [1, -2], 'invers matriks (2,3) pada (2,-6)', 0);
closeVec([1 + 3, 4 - 2], [4, 2], 'translasi (3,-2) pada (1,4)', 0);

// ---------- Trigonometri lanjut: periodik ----------
close((4 - (-4)) / 2, 4, 'amplitudo y=4 sin(3x)', 0);
close(360 / 2, 180, 'periode y=sin(2x) dalam derajat', 0);
close(360 / 3, 120, 'periode f(x)=2 sin(3(x-30))+1', 0);
close(2 + 1, 3, 'nilai maksimum f(x)=2 sin(3(x-30))+1', 0);

// ---------- Trigonometri lanjut: identitas ----------
const deg = (d) => (d * Math.PI) / 180;
close(Math.sin(deg(75)), (Math.sqrt(6) + Math.sqrt(2)) / 4, 'sin 75 derajat', 1e-12);
close(Math.cos(deg(75)), (Math.sqrt(6) - Math.sqrt(2)) / 4, 'cos 75 derajat', 1e-12);
close(2 * (3 / 5) * (4 / 5), 24 / 25, 'sin 2a dengan sin a=3/5', 1e-12);
close(2 * (4 / 5) ** 2 - 1, 7 / 25, 'cos 2a dengan cos a=4/5', 1e-12);
close((2 * 0.5) / (1 - 0.5 ** 2), 4 / 3, 'tan 2a dengan tan a=1/2', 1e-12);
close(2 * Math.sin(deg(30)) * Math.cos(deg(30)), Math.sqrt(3) / 2, 'sin 2(30 derajat)', 1e-12);
close(Math.cos(deg(50 + 20)) * Math.cos(deg(20)) + Math.sin(deg(50 + 20)) * Math.sin(deg(20)), Math.cos(deg(50)), 'cos(a+b)cos b + sin(a+b)sin b = cos a', 1e-12);

// ---------- Trigonometri lanjut: aturan sinus, kosinus, luas ----------
close(Math.sqrt(25 + 64 - 2 * 5 * 8 * Math.cos(deg(60))), 7, 'aturan kosinus a (b=5,c=8,A=60)', 1e-9);
close(Math.sqrt(9 + 25 - 2 * 3 * 5 * Math.cos(deg(120))), 7, 'aturan kosinus a (b=3,c=5,A=120)', 1e-9);
close((8 / Math.sin(deg(30))) * Math.sin(deg(45)), 8 * Math.SQRT2, 'aturan sinus b (a=8,A=30,B=45)', 1e-9);
close(Math.cos(deg(60)), (25 + 64 - 49) / (2 * 5 * 8), 'sudut B (a=5,b=7,c=8)', 1e-12);
close(0.5 * 5 * 8 * Math.sin(deg(60)), 10 * Math.sqrt(3), 'luas segitiga b=5,c=8,A=60', 1e-9);
close(Math.round(0.5 * 5 * 8 * Math.sin(deg(60)) * 100) / 100, 17.32, 'luas segitiga perkiraan', 0.005);

report();

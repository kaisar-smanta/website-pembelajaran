// Verifikasi nilai matematika topik "Variabel Acak Diskret" (Matematika Tingkat Lanjut).
// Pemakaian: npm test  (node tests/mtl-data.mjs)
import assert from 'node:assert/strict';

let passed = 0;
let failed = 0;

function check(label, actual, expected, tolerance = 0) {
  try {
    if (tolerance > 0) {
      assert.ok(
        Math.abs(actual - expected) <= tolerance,
        `${label}: diharapkan ≈${expected}, diperoleh ${actual}`,
      );
    } else {
      assert.equal(actual, expected, `${label}: diharapkan ${expected}, diperoleh ${actual}`);
    }
    passed++;
  } catch (error) {
    failed++;
    console.error(`GAGAL — ${error.message}`);
  }
}

const r2 = (x) => Math.round(x * 100) / 100;
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const mean = (values, probs) => sum(values.map((x, i) => x * probs[i]));
const secondMoment = (values, probs) => sum(values.map((x, i) => x * x * probs[i]));
const variance = (values, probs) => {
  const m = mean(values, probs);
  return secondMoment(values, probs) - m * m;
};

// ---------- Dua dadu: X = jumlah mata ----------
const daduX = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const daduP = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].map((n) => n / 36);
check('jumlah peluang dua dadu', r2(sum(daduP)), 1);
check('E(X) jumlah dua dadu', mean(daduX, daduP), 7, 1e-9);
check('E(X^2) dua dadu', r2(secondMoment(daduX, daduP)), 54.83, 0.01);
check('Varians dua dadu', variance(daduX, daduP), 35 / 6, 1e-9);
check('Simpangan baku dua dadu', r2(Math.sqrt(variance(daduX, daduP))), 2.42, 0.01);

// ---------- Tiga koin: X = banyak gambar ----------
const koinX = [0, 1, 2, 3];
const koinP = [1, 3, 3, 1].map((n) => n / 8);
check('jumlah peluang tiga koin', r2(sum(koinP)), 1);
check('E(X) banyak gambar', mean(koinX, koinP), 1.5, 1e-9);
check('Varians banyak gambar', variance(koinX, koinP), 0.75, 1e-9);
check('Simpangan baku banyak gambar', r2(Math.sqrt(variance(koinX, koinP))), 0.87, 0.01);

// ---------- f(x) = kx untuk x = 1,2,3,4 ----------
const kxX = [1, 2, 3, 4];
const k = 1 / sum(kxX);
const kxP = kxX.map((x) => k * x);
check('konstanta k = 0,1', k, 0.1);
check('jumlah peluang f(x)=kx', r2(sum(kxP)), 1);
check('E(X) f(x)=kx', mean(kxX, kxP), 3, 1e-9);
check('Varians f(x)=kx', variance(kxX, kxP), 1, 1e-9);

// ---------- f(x) = c(x+1) untuk x = 0,1,2,3 ----------
const cxX = [0, 1, 2, 3];
const cxRaw = cxX.map((x) => x + 1);
const c = 1 / sum(cxRaw);
const cxP = cxRaw.map((n) => c * n);
check('konstanta c = 0,1', c, 0.1);
check('E(X) f(x)=c(x+1)', mean(cxX, cxP), 2, 1e-9);
check('Varians f(x)=c(x+1)', variance(cxX, cxP), 1, 1e-9);

// ---------- Latihan: distribusi P(X=1..4) = 0,2/0,3/0,3/p ----------
const latP = [0.2, 0.3, 0.3, 0.2];
check('peluang p melengkapi menjadi 1', r2(sum(latP)), 1);
check('E(X) latihan 1..4', mean([1, 2, 3, 4], latP), 2.5, 1e-9);
check('P(X>=3) latihan', r2(latP[2] + latP[3]), 0.5);

// ---------- Pemodelan: mobil datang per jam ----------
const cuciX = [0, 1, 2, 3];
const cuciP = [0.4, 0.3, 0.2, 0.1];
check('jumlah peluang model cuci', r2(sum(cuciP)), 1);
check('E(X) model cuci', mean(cuciX, cuciP), 1, 1e-9);
check('Varians model cuci', variance(cuciX, cuciP), 1, 1e-9);
check('Simpangan baku model cuci', Math.sqrt(variance(cuciX, cuciP)), 1, 1e-9);

// ---------- Distribusi tidak sah ----------
check('distribusi 0,5+0,3+0,3 bukan 1', r2(sum([0.5, 0.3, 0.3])), 1.1);

// ---------- Permainan dadu: menang Rp24.000 saat mata 6, bayar Rp3.000 lainnya ----------
check('nilai harapan permainan dadu', (1 / 6) * 24000 + (5 / 6) * -3000, 1500, 1e-9);

console.log(`\nUji MTL variabel acak diskret: ${passed} lulus, ${failed} gagal.`);
if (failed > 0) process.exit(1);

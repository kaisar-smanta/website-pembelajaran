// Verifikasi nilai matematika topik "Variabel Acak Diskret" (Matematika Tingkat Lanjut).
// Pemakaian: npm test  (node tests/mtl-data.mjs)
import { close, runCase, report } from './_util.mjs';

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
runCase('jumlah peluang dua dadu', () => close(r2(sum(daduP)), 1, 'jumlah peluang dua dadu', 0));
runCase('E(X) jumlah dua dadu', () => close(mean(daduX, daduP), 7, 'E(X) jumlah dua dadu', 1e-9));
runCase('E(X^2) dua dadu', () => close(r2(secondMoment(daduX, daduP)), 54.83, 'E(X^2) dua dadu', 0.01));
runCase('Varians dua dadu', () => close(variance(daduX, daduP), 35 / 6, 'Varians dua dadu', 1e-9));
runCase('Simpangan baku dua dadu', () => close(r2(Math.sqrt(variance(daduX, daduP))), 2.42, 'Simpangan baku dua dadu', 0.01));

// ---------- Tiga koin: X = banyak gambar ----------
const koinX = [0, 1, 2, 3];
const koinP = [1, 3, 3, 1].map((n) => n / 8);
runCase('jumlah peluang tiga koin', () => close(r2(sum(koinP)), 1, 'jumlah peluang tiga koin', 0));
runCase('E(X) banyak gambar', () => close(mean(koinX, koinP), 1.5, 'E(X) banyak gambar', 1e-9));
runCase('Varians banyak gambar', () => close(variance(koinX, koinP), 0.75, 'Varians banyak gambar', 1e-9));
runCase('Simpangan baku banyak gambar', () => close(r2(Math.sqrt(variance(koinX, koinP))), 0.87, 'Simpangan baku banyak gambar', 0.01));

// ---------- f(x) = kx untuk x = 1,2,3,4 ----------
const kxX = [1, 2, 3, 4];
const k = 1 / sum(kxX);
const kxP = kxX.map((x) => k * x);
runCase('konstanta k = 0,1', () => close(k, 0.1, 'konstanta k = 0,1', 0));
runCase('jumlah peluang f(x)=kx', () => close(r2(sum(kxP)), 1, 'jumlah peluang f(x)=kx', 0));
runCase('E(X) f(x)=kx', () => close(mean(kxX, kxP), 3, 'E(X) f(x)=kx', 1e-9));
runCase('Varians f(x)=kx', () => close(variance(kxX, kxP), 1, 'Varians f(x)=kx', 1e-9));

// ---------- f(x) = c(x+1) untuk x = 0,1,2,3 ----------
const cxX = [0, 1, 2, 3];
const cxRaw = cxX.map((x) => x + 1);
const c = 1 / sum(cxRaw);
const cxP = cxRaw.map((n) => c * n);
runCase('konstanta c = 0,1', () => close(c, 0.1, 'konstanta c = 0,1', 0));
runCase('E(X) f(x)=c(x+1)', () => close(mean(cxX, cxP), 2, 'E(X) f(x)=c(x+1)', 1e-9));
runCase('Varians f(x)=c(x+1)', () => close(variance(cxX, cxP), 1, 'Varians f(x)=c(x+1)', 1e-9));

// ---------- Latihan: distribusi P(X=1..4) = 0,2/0,3/0,3/p ----------
const latP = [0.2, 0.3, 0.3, 0.2];
runCase('peluang p melengkapi menjadi 1', () => close(r2(sum(latP)), 1, 'peluang p melengkapi menjadi 1', 0));
runCase('E(X) latihan 1..4', () => close(mean([1, 2, 3, 4], latP), 2.5, 'E(X) latihan 1..4', 1e-9));
runCase('P(X>=3) latihan', () => close(r2(latP[2] + latP[3]), 0.5, 'P(X>=3) latihan', 0));

// ---------- Pemodelan: mobil datang per jam ----------
const cuciX = [0, 1, 2, 3];
const cuciP = [0.4, 0.3, 0.2, 0.1];
runCase('jumlah peluang model cuci', () => close(r2(sum(cuciP)), 1, 'jumlah peluang model cuci', 0));
runCase('E(X) model cuci', () => close(mean(cuciX, cuciP), 1, 'E(X) model cuci', 1e-9));
runCase('Varians model cuci', () => close(variance(cuciX, cuciP), 1, 'Varians model cuci', 1e-9));
runCase('Simpangan baku model cuci', () => close(Math.sqrt(variance(cuciX, cuciP)), 1, 'Simpangan baku model cuci', 1e-9));

// ---------- Distribusi tidak sah ----------
runCase('distribusi 0,5+0,3+0,3 bukan 1', () => close(r2(sum([0.5, 0.3, 0.3])), 1.1, 'distribusi 0,5+0,3+0,3 bukan 1', 0));

// ---------- Permainan dadu: menang Rp24.000 saat mata 6, bayar Rp3.000 lainnya ----------
runCase('nilai harapan permainan dadu', () => close((1 / 6) * 24000 + (5 / 6) * -3000, 1500, 'nilai harapan permainan dadu', 1e-9));

report();

/**
 * Logika murni untuk eksplorasi variabel acak diskret (tanpa DOM).
 *
 * Distribusi peluang disimpan sebagai daftar pasangan nilai–peluang. Modul
 * menghitung jumlah peluang, nilai harapan, momen kedua, varians, dan simpangan
 * baku, serta menyusun rangkuman verbal untuk pembaca.
 */

export interface Outcome {
  x: number;
  p: number;
}

export interface PmfStats {
  sum: number;
  mean: number;
  second: number;
  variance: number;
  stdDev: number;
  valid: boolean;
}

/** Jumlah seluruh peluang $\\sum f(x)$. */
export function sumProbabilities(pmf: Outcome[]): number {
  return pmf.reduce((acc, o) => acc + o.p, 0);
}

/** Nilai harapan $E(X)=\\sum x\\,f(x)$. */
export function expectedValue(pmf: Outcome[]): number {
  return pmf.reduce((acc, o) => acc + o.x * o.p, 0);
}

/** Momen kedua $E(X^{2})=\\sum x^{2}f(x)$. */
export function secondMoment(pmf: Outcome[]): number {
  return pmf.reduce((acc, o) => acc + o.x * o.x * o.p, 0);
}

/** Varians $\\operatorname{Var}(X)=E(X^{2})-[E(X)]^{2}$. */
export function variance(pmf: Outcome[]): number {
  const mean = expectedValue(pmf);
  return secondMoment(pmf) - mean * mean;
}

/** Simpangan baku $\\sigma=\\sqrt{\\operatorname{Var}(X)}$. */
export function stdDev(pmf: Outcome[]): number {
  return Math.sqrt(Math.max(0, variance(pmf)));
}

/** Distribusi sah bila semua peluang di $[0,1]$ dan jumlahnya $1$. */
export function isValidPmf(pmf: Outcome[]): boolean {
  const allInRange = pmf.every((o) => o.p >= 0 && o.p <= 1);
  return allInRange && Math.abs(sumProbabilities(pmf) - 1) < 1e-6;
}

export function computePmfStats(pmf: Outcome[]): PmfStats {
  const sum = sumProbabilities(pmf);
  const mean = expectedValue(pmf);
  const second = secondMoment(pmf);
  const v = second - mean * mean;
  return {
    sum,
    mean,
    second,
    variance: v,
    stdDev: Math.sqrt(Math.max(0, v)),
    valid: isValidPmf(pmf),
  };
}

/** Rangkuman verbal dengan format angka yang diserahkan pemanggil. */
export function buildPmfReadout(pmf: Outcome[], fmt: (v: number) => string): string {
  if (pmf.length === 0) return 'Tambahkan nilai untuk menyusun distribusi peluang.';
  const st = computePmfStats(pmf);
  const head = `Nilai harapan E(X) = ${fmt(st.mean)}, E(X²) = ${fmt(st.second)}, varians = ${fmt(st.variance)}, dan simpangan baku σ = ${fmt(st.stdDev)}.`;
  if (!st.valid) {
    return `Jumlah peluang saat ini ${fmt(st.sum)}, belum sama dengan 1. Atur peluang agar totalnya 1. ${head}`;
  }
  return `Jumlah peluang tepat 1, sehingga tabel ini sah sebagai distribusi. Rata-rata jangka panjangnya adalah E(X) = ${fmt(st.mean)}; varians ${fmt(st.variance)} dan simpangan baku ${fmt(st.stdDev)} mengukur seberapa jauh nilai menyebar dari nilai harapannya.`;
}

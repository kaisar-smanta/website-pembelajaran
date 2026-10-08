/**
 * Logika murni untuk eksplorasi distribusi binomial (tanpa DOM).
 *
 * Distribusi binomial memodelkan banyak keberhasilan $k$ dari $n$ percobaan
 * saling bebas dengan peluang sukses $p$ yang tetap. Modul menghitung koefisien
 * binomial, fungsi peluang $P(X=k)=\\binom{n}{k}p^{k}(1-p)^{n-k}$, peluang
 * kumulatif, serta nilai harapan, varians, dan simpangan bakunya.
 */

import { formatPlain } from '../format.ts';

/** Satu titik distribusi: nilai $k$ dan peluang $P(X=k)$. */
export interface BinomialPoint {
  k: number;
  p: number;
}

export interface BinomialStats {
  n: number;
  p: number;
  mean: number;
  variance: number;
  stdDev: number;
}

/** Koefisien binomial $\\binom{n}{k}$ secara iteratif. */
export function binomialCoefficient(n: number, k: number): number {
  if (!Number.isInteger(n) || !Number.isInteger(k) || k < 0 || k > n) return 0;
  const kk = Math.min(k, n - k);
  let result = 1;
  for (let i = 1; i <= kk; i++) {
    result = (result * (n - kk + i)) / i;
  }
  return Math.round(result);
}

/** Peluang tepat $k$ sukses dari $n$ percobaan. */
export function binomialPmf(n: number, k: number, p: number): number {
  if (k < 0 || k > n) return 0;
  if (p <= 0) return k === 0 ? 1 : 0;
  if (p >= 1) return k === n ? 1 : 0;
  return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

/** Daftar peluang $P(X=k)$ untuk $k=0,1,\\dots,n$. */
export function binomialDistribution(n: number, p: number): BinomialPoint[] {
  const count = Math.max(0, Math.floor(n));
  const points: BinomialPoint[] = [];
  for (let k = 0; k <= count; k++) {
    points.push({ k, p: binomialPmf(count, k, p) });
  }
  return points;
}

/** Nilai harapan $E(X)=np$. */
export function binomialMean(n: number, p: number): number {
  return n * p;
}

/** Varians $\\operatorname{Var}(X)=np(1-p)$. */
export function binomialVariance(n: number, p: number): number {
  return n * p * (1 - p);
}

/** Simpangan baku $\\sigma=\\sqrt{np(1-p)}$. */
export function binomialStdDev(n: number, p: number): number {
  return Math.sqrt(binomialVariance(n, p));
}

/** Peluang kumulatif $P(X\\le k)$. */
export function cumulativeBinomial(n: number, p: number, k: number): number {
  let sum = 0;
  for (let i = 0; i <= k; i++) sum += binomialPmf(n, i, p);
  return sum;
}

export function binomialStats(n: number, p: number): BinomialStats {
  return {
    n,
    p,
    mean: binomialMean(n, p),
    variance: binomialVariance(n, p),
    stdDev: binomialStdDev(n, p),
  };
}

/** Rangkuman verbal nilai harapan, varians, dan simpangan baku. */
export function describeBinomial(n: number, p: number): string {
  const st = binomialStats(n, p);
  const f = (v: number) => formatPlain(Number(v.toFixed(4)));
  return `Untuk n = ${n} percobaan dengan peluang sukses p = ${f(p)}, nilai harapan E(X) = np = ${f(st.mean)}, varians np(1 − p) = ${f(st.variance)}, dan simpangan baku σ = ${f(st.stdDev)}.`;
}

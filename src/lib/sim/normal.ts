/**
 * Logika murni untuk eksplorasi distribusi normal.
 *
 * Distribusi normal $N(\mu, \sigma)$ dijelaskan oleh fungsi kepadatan
 * $$f(x)=\frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}$$
 * dan fungsi distribusi kumulatif yang dihitung lewat fungsi galat (erf).
 * Modul ini tanpa DOM sehingga dapat diuji di Node.
 */

const SQRT_2PI = Math.sqrt(2 * Math.PI);

/** Fungsi galat (aproksimasi Abramowitz-Stegun 7.1.26). */
export function erf(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const p = 0.3275911;
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const t = 1 / (1 + p * ax);
  const poly = ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t;
  const value = 1 - poly * Math.exp(-ax * ax);
  return sign * value;
}

/** Fungsi kepadatan peluang normal di titik $x$. */
export function normalPdf(x: number, mean: number, sd: number): number {
  if (sd <= 0) return NaN;
  const z = (x - mean) / sd;
  return Math.exp(-0.5 * z * z) / (sd * SQRT_2PI);
}

/** Fungsi distribusi kumulatif normal, $P(X \le x)$. */
export function normalCdf(x: number, mean: number, sd: number): number {
  if (sd <= 0) return NaN;
  return 0.5 * (1 + erf((x - mean) / (sd * Math.SQRT2)));
}

/** Skor baku $z = \dfrac{x-\mu}{\sigma}$ (NaN bila $\sigma \le 0$). */
export function standardize(x: number, mean: number, sd: number): number {
  if (sd <= 0) return NaN;
  return (x - mean) / sd;
}

/** Peluang selang $P(a \le X \le b)$. */
export function intervalProbability(a: number, b: number, mean: number, sd: number): number {
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  return normalCdf(hi, mean, sd) - normalCdf(lo, mean, sd);
}

export interface NormalStats {
  mean: number;
  variance: number;
  stdDev: number;
}

/** Nilai harapan, varians, dan simpangan baku normal. */
export function normalStats(mean: number, sd: number): NormalStats {
  return { mean, variance: sd * sd, stdDev: sd };
}

export interface NormalPoint {
  x: number;
  y: number;
  /** Skor baku titik ini. */
  z: number;
}

/** Contoh titik kurva pada selang $[xMin, xMax]$ untuk digambar. */
export function sampleNormal(
  mean: number,
  sd: number,
  xMin: number,
  xMax: number,
  count = 240,
): NormalPoint[] {
  const out: NormalPoint[] = [];
  const steps = Math.max(1, Math.floor(count));
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    out.push({ x, y: normalPdf(x, mean, sd), z: standardize(x, mean, sd) });
  }
  return out;
}

/**
 * Selang satu standar baku umum: mengembalikan peluang $P(\mu - k\sigma \le X \le \mu + k\sigma)$.
 * Berguna untuk memeriksa kaidah empiris 68–95–99,7.
 */
export function withinStd(mean: number, sd: number, k: number): number {
  return intervalProbability(mean - k * sd, mean + k * sd, mean, sd);
}

/** Kalimat ringkas sifat distribusi. */
export function describeNormal(mean: number, sd: number): string {
  return `Distribusi normal dengan rata-rata ${mean} dan simpangan baku ${sd}; kurva simetris terhadap x = ${mean}.`;
}

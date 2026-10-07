/**
 * Perhitungan murni untuk simulasi regresi linear (tanpa DOM).
 *
 * Semua fungsi di sini bebas efek samping dan dapat diuji langsung dengan Node.
 * Hanya memakai sintaks TypeScript yang dapat dihapus (erasable), tanpa enum
 * atau namespace, sehingga berkas dapat dijalankan setelah type stripping.
 */

export interface Point {
  x: number;
  y: number;
}

export interface Domain {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export interface Sums {
  n: number;
  meanX: number;
  meanY: number;
  sxx: number;
  syy: number;
  sxy: number;
}

export type RegressionDiagnostic =
  | 'ok'
  | 'insufficient'
  | 'constant-x'
  | 'zero-y-variance';

export interface RegressionResult extends Sums {
  slope: number;
  intercept: number;
  r: number;
  r2: number;
  diagnostic: RegressionDiagnostic;
}

/** Batas jumlah titik data yang boleh ditambahkan. */
export const MAX_POINTS = 40;

/** Banyak titik yang ditambahkan sekali klik tombol data acak. */
export const RANDOM_BATCH_SIZE = 8;

/** Konstanta generator data acak (tanpa faktor ajaib). */
export const RANDOM_INTERCEPT_MIN = 2;
export const RANDOM_INTERCEPT_MAX = 4;
export const RANDOM_NOISE_MIN = 0.6;
export const RANDOM_NOISE_MAX = 2;
export const RANDOM_SLOPE = 0.7;
export const RANDOM_MAX_ATTEMPTS = 100;

/** Hitung rata-rata x, rata-rata y, dan jumlah kuadrat sxx, syy, sxy. */
export function computeSums(points: Point[]): Sums {
  const n = points.length;
  if (n === 0) {
    return { n, meanX: NaN, meanY: NaN, sxx: 0, syy: 0, sxy: 0 };
  }
  const meanX = points.reduce((s, p) => s + p.x, 0) / n;
  const meanY = points.reduce((s, p) => s + p.y, 0) / n;
  let sxx = 0;
  let syy = 0;
  let sxy = 0;
  for (const p of points) {
    const dx = p.x - meanX;
    const dy = p.y - meanY;
    sxx += dx * dx;
    syy += dy * dy;
    sxy += dx * dy;
  }
  return { n, meanX, meanY, sxx, syy, sxy };
}

/** Diagnostik: data tidak cukup, x konstan, atau varians y nol. */
export function diagnose(sums: Sums): RegressionDiagnostic {
  if (sums.n < 2) return 'insufficient';
  if (sums.sxx === 0) return 'constant-x';
  if (sums.syy === 0) return 'zero-y-variance';
  return 'ok';
}

/** Koefisien korelasi Pearson r; NaN bila ragam salah satu variabel nol. */
export function pearsonR(sums: Sums): number {
  if (sums.sxx === 0 || sums.syy === 0) return NaN;
  return sums.sxy / Math.sqrt(sums.sxx * sums.syy);
}

/** Koefisien determinasi r². */
export function coefficientOfDetermination(r: number): number {
  return r * r;
}

/** Regresi kuadrat terkecil lengkap beserta diagnostiknya. */
export function regression(points: Point[]): RegressionResult {
  const sums = computeSums(points);
  const diagnostic = diagnose(sums);
  const definable = diagnostic === 'ok' || diagnostic === 'zero-y-variance';
  const slope = definable ? sums.sxy / sums.sxx : NaN;
  const intercept = definable ? sums.meanY - slope * sums.meanX : NaN;
  const r = pearsonR(sums);
  const r2 = coefficientOfDetermination(r);
  return { ...sums, slope, intercept, r, r2, diagnostic };
}

/**
 * Bangkitkan titik acak di dalam domain tanpa menjepit (clamp).
 * Titik yang keluar rentang y akan diambil ulang, bukan dipotong ke tepi,
 * agar tidak muncul baris datar palsu di batas domain.
 */
export function generateRandomPoints(
  count: number,
  domain: Domain,
  rng: () => number = Math.random,
): Point[] {
  const base = RANDOM_INTERCEPT_MIN + rng() * (RANDOM_INTERCEPT_MAX - RANDOM_INTERCEPT_MIN);
  const noise = RANDOM_NOISE_MIN + rng() * (RANDOM_NOISE_MAX - RANDOM_NOISE_MIN);
  const out: Point[] = [];
  const limit = Math.max(1, count) * RANDOM_MAX_ATTEMPTS;
  let attempts = 0;
  while (out.length < count && attempts < limit) {
    attempts++;
    const x = domain.xMin + rng() * (domain.xMax - domain.xMin);
    const y = base + RANDOM_SLOPE * x + (rng() - 0.5) * 2 * noise;
    if (y >= domain.yMin && y <= domain.yMax) out.push({ x, y });
  }
  return out;
}

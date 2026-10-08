/**
 * Logika murni untuk eksplorasi limit fungsi (tanpa DOM).
 *
 * Modul menyediakan beberapa contoh fungsi yang memiliki perilaku berbeda di
 * sekitar titik yang didekati: lubang yang dapat dihapus, bentuk akar sekawan,
 * dan fungsi bernilai mutlak yang limit kirinya berbeda dari limit kanannya.
 * Nilai limit dihampiri dengan mengevaluasi fungsi pada titik-titik di kiri dan
 * kanan titik tersebut.
 */

import { formatPlain } from '../format.ts';

export type LimitFunctionKey = 'rasional' | 'akar' | 'mutlak';

export interface LimitFunction {
  key: LimitFunctionKey;
  /** Rumus fungsi untuk ditampilkan. */
  label: string;
  /** Titik $a$ yang didekati, $x \\to a$. */
  target: number;
  /** Nilai $f(x)$. */
  evaluate: (x: number) => number;
  /** Nilai limit eksak $L$, bila fungsi kontinu atau bentuknya dapat dihapus. */
  exact: number;
  /** Apakah limit dua sisinya ada dan sama. */
  exists: boolean;
}

/**
 * Kumpulan fungsi contoh. Fungsi rasional memiliki lubang di $x=1$ sehingga
 * $f(1)$ tak terdefinisi, tetapi limitnya ada; fungsi mutlak memperlihatkan
 * limit kiri dan kanan yang berbeda.
 */
export const LIMIT_FUNCTIONS: Record<LimitFunctionKey, LimitFunction> = {
  rasional: {
    key: 'rasional',
    label: 'f(x) = (x² − 1)/(x − 1)',
    target: 1,
    evaluate: (x) => (x * x - 1) / (x - 1),
    exact: 2,
    exists: true,
  },
  akar: {
    key: 'akar',
    label: 'f(x) = (√(x + 3) − 2)/(x − 1)',
    target: 1,
    evaluate: (x) => (Math.sqrt(x + 3) - 2) / (x - 1),
    exact: 0.25,
    exists: true,
  },
  mutlak: {
    key: 'mutlak',
    label: 'f(x) = |x − 2|/(x − 2)',
    target: 2,
    evaluate: (x) => Math.abs(x - 2) / (x - 2),
    exact: NaN,
    exists: false,
  },
};

export const DEFAULT_LIMIT_KEY: LimitFunctionKey = 'rasional';

/** Satu baris tabel: nilai $x$ dan nilai $f(x)$ di titik itu. */
export interface SamplePoint {
  x: number;
  f: number;
}

/** Taksiran limit dari kiri, dari kanan, dan nilai dua sisinya. */
export interface LimitEstimate {
  left: number;
  right: number;
  value: number;
  exists: boolean;
}

/**
 * Daftar sampel di satu sisi titik $a$.
 *
 * Jarak sampel ke titik mengecil secara geometris: $h_0$, lalu $h_0/10$, dan
 * seterusnya, sehingga tabel memperlihatkan pendekatan menuju limit.
 */
export function oneSidedSamples(
  fn: (x: number) => number,
  target: number,
  side: -1 | 1,
  count = 5,
  h0 = 0.5,
): SamplePoint[] {
  const samples: SamplePoint[] = [];
  for (let i = 0; i < count; i++) {
    const h = h0 / Math.pow(10, i);
    const x = target + side * h;
    samples.push({ x, f: fn(x) });
  }
  return samples;
}

/**
 * Taksiran limit di $x=a$ dengan mengevaluasi fungsi pada jarak $h$ di kiri dan
 * kanan. Nilai dua sisi dianggap ada bila keduanya berhingga dan berdekatan.
 */
export function estimateLimit(
  fn: (x: number) => number,
  target: number,
  h = 1e-6,
): LimitEstimate {
  const left = fn(target - h);
  const right = fn(target + h);
  const exists =
    Number.isFinite(left) && Number.isFinite(right) && Math.abs(left - right) < 1e-3;
  return { left, right, value: (left + right) / 2, exists };
}

export interface LimitTable {
  left: SamplePoint[];
  right: SamplePoint[];
  estimate: LimitEstimate;
}

/** Tabel sampel dua sisi beserta taksiran limitnya. */
export function buildLimitTable(
  fn: (x: number) => number,
  target: number,
  h0 = 0.5,
  count = 5,
): LimitTable {
  return {
    left: oneSidedSamples(fn, target, -1, count, h0),
    right: oneSidedSamples(fn, target, 1, count, h0),
    estimate: estimateLimit(fn, target, h0 / Math.pow(10, count - 1)),
  };
}

/** Uraian verbal limit kiri, limit kanan, dan kesimpulan keberadaan limit. */
export function describeLimit(model: LimitFunction, estimate: LimitEstimate): string {
  const a = formatPlain(model.target);
  const f = (v: number) => formatPlain(Number(v.toFixed(4)));
  const left = Number.isFinite(estimate.left) ? f(estimate.left) : 'tak terdefinisi';
  const right = Number.isFinite(estimate.right) ? f(estimate.right) : 'tak terdefinisi';
  if (!model.exists || !estimate.exists) {
    return `Saat x mendekati ${a} dari kiri, f(x) menuju ${left}; dari kanan menuju ${right}. Keduanya berbeda, sehingga lim x→${a} f(x) tidak ada.`;
  }
  return `Saat x mendekati ${a} dari kiri maupun kanan, f(x) menuju nilai yang sama, yaitu ≈ ${f(estimate.value)}. Jadi lim x→${a} f(x) = ${formatPlain(model.exact)}.`;
}

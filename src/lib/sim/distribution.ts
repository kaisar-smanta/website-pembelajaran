export interface DistributionStats {
  n: number;
  min: number;
  max: number;
  mean: number;
  median: number;
  q1: number;
  q3: number;
  iqr: number;
  lowFence: number;
  highFence: number;
  lowWhisker: number;
  highWhisker: number;
  outliers: number[];
  inside: number[];
  sorted: number[];
}

export type Skewness = 'simetris' | 'kanan' | 'kiri';

export function medianOf(sorted: number[]): number {
  const m = sorted.length;
  if (m === 0) return NaN;
  const mid = Math.floor(m / 2);
  return m % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export function parseData(text: string): number[] {
  const tokens = text.split(/[\s,;]+/);
  const values: number[] = [];
  for (const token of tokens) {
    if (!token) continue;
    const value = Number(token);
    if (Number.isFinite(value)) values.push(value);
  }
  return values;
}

export function computeStats(data: number[]): DistributionStats | null {
  const n = data.length;
  if (n === 0) return null;
  const sorted = [...data].sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[n - 1];
  const mean = sorted.reduce((a, b) => a + b, 0) / n;
  const median = medianOf(sorted);

  let q1 = NaN;
  let q3 = NaN;
  let iqr = 0;
  if (n >= 2) {
    const mid = Math.floor(n / 2);
    const lower = sorted.slice(0, mid);
    const upper = n % 2 === 0 ? sorted.slice(mid) : sorted.slice(mid + 1);
    q1 = medianOf(lower);
    q3 = medianOf(upper);
    iqr = q3 - q1;
  }

  let lowFence = NaN;
  let highFence = NaN;
  let lowWhisker = min;
  let highWhisker = max;
  let outliers: number[] = [];
  let inside = sorted;
  if (n >= 4) {
    lowFence = q1 - 1.5 * iqr;
    highFence = q3 + 1.5 * iqr;
    inside = sorted.filter((v) => v >= lowFence && v <= highFence);
    outliers = sorted.filter((v) => v < lowFence || v > highFence);
    lowWhisker = inside[0];
    highWhisker = inside[inside.length - 1];
  }

  return {
    n,
    min,
    max,
    mean,
    median,
    q1,
    q3,
    iqr,
    lowFence,
    highFence,
    lowWhisker,
    highWhisker,
    outliers,
    inside,
    sorted,
  };
}

export function classifySkew(mean: number, median: number): Skewness {
  const tolerance = Math.max(0.01, Math.abs(median) * 0.01);
  const diff = mean - median;
  if (Math.abs(diff) <= tolerance) return 'simetris';
  return diff > 0 ? 'kanan' : 'kiri';
}

export function buildReadout(
  st: DistributionStats,
  fmt: (value: number) => string,
): string {
  if (st.n === 1) {
    return `Dengan satu nilai saja, rata-rata dan median sama, yaitu ${fmt(st.mean)}. Tambahkan data lain untuk melihat sebarannya.`;
  }
  if (st.n < 4) {
    return `Dengan ${st.n} nilai, rata-rata ${fmt(st.mean)} dan median ${fmt(st.median)}. Masukkan minimal 4 nilai agar box plot dan deteksi pencilan dapat ditampilkan.`;
  }
  const skew = classifySkew(st.mean, st.median);
  let text: string;
  if (skew === 'simetris') {
    text = `Rata-rata (${fmt(st.mean)}) hampir sama dengan median (${fmt(st.median)}), menandakan sebaran cenderung simetris.`;
  } else if (skew === 'kanan') {
    text = `Rata-rata (${fmt(st.mean)}) lebih besar daripada median (${fmt(st.median)}), tanda sebaran miring ke kanan.`;
  } else {
    text = `Rata-rata (${fmt(st.mean)}) lebih kecil daripada median (${fmt(st.median)}), tanda sebaran miring ke kiri.`;
  }
  if (st.outliers.length > 0) {
    const cleanCount = st.inside.length;
    const cleanMean =
      cleanCount > 0 ? st.inside.reduce((a, b) => a + b, 0) / cleanCount : st.mean;
    text += ` Ada ${st.outliers.length} pencilan; tanpa pencilan rata-rata berubah menjadi ${fmt(cleanMean)}. Median dan IQR lebih tahan terhadap nilai ekstrem sehingga tetap stabil.`;
  } else {
    text +=
      ' Karena IQR memperhitungkan separuh data tengah, ukuran ini tidak terpengaruh nilai ekstrem.';
  }
  return text;
}

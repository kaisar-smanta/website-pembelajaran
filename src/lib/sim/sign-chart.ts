/**
 * Logika murni untuk eksplorasi peta tanda (sign chart) ketaksamaan.
 *
 * Menyusun daerah tanda fungsi pada garis bilangan untuk bentuk kuadrat
 * $ax^2+bx+c$ maupun rasional terfaktor
 * $\dfrac{(x-p)(x-q)}{x-r}$, lalu menurunkan daerah penyelesaian suatu
 * pertidaksamaan. Tanpa DOM sehingga dapat diuji dengan Node.
 */

import { formatPlain } from '../format.ts';

/** Rentang garis bilangan yang dipakai komponen dan pengujian. */
export const SIGN_CHART_RANGE: { xMin: number; xMax: number } = { xMin: -10, xMax: 10 };

export interface CriticalPoint {
  value: number;
  /** `zero` = pembuat nol (titik tertutup), `pole` = asimtot/tak terdefinisi. */
  kind: 'zero' | 'pole';
}

export interface SignRegion {
  from: number;
  to: number;
  sign: -1 | 0 | 1;
  /** Titik contoh di dalam selang untuk menetapkan tanda. */
  sample: number;
}

export interface SignChart {
  critical: CriticalPoint[];
  regions: SignRegion[];
}

/** Daerah penyelesaian pada garis bilangan (ujung boleh terbuka/tertutup). */
export interface SolutionInterval {
  from: number;
  to: number;
  openFrom: boolean;
  openTo: boolean;
}

export type Relation = '>' | '<' | '>=' | '<=';

const EPS = 1e-9;

/** Tanda sebuah bilangan: -1, 0, atau 1 (dengan toleransi kecil). */
export function signOf(value: number): -1 | 0 | 1 {
  if (value > EPS) return 1;
  if (value < -EPS) return -1;
  return 0;
}

/** Akar real kuadrat $ax^2+bx+c$ terurut menaik (tanpa duplikat). */
export function quadraticRoots(a: number, b: number, c: number): number[] {
  if (a === 0) {
    if (b === 0) return [];
    return [-c / b];
  }
  const d = b * b - 4 * a * c;
  if (d < 0) return [];
  if (d === 0) return [-b / (2 * a)];
  const root = Math.sqrt(d);
  return [(-b - root) / (2 * a), (-b + root) / (2 * a)].sort((p, q) => p - q);
}

/** Nilai $ax^2+bx+c$ di titik $x$. */
export function evalQuadratic(a: number, b: number, c: number, x: number): number {
  return a * x * x + b * x + c;
}

/** Nilai $\dfrac{(x-p)(x-q)}{x-r}$ dengan faktor pembilang dan penyebut. */
export function evalFactoredRational(
  leading: number,
  numeratorRoots: number[],
  denominatorRoots: number[],
  x: number,
): number {
  let value = leading;
  for (const root of numeratorRoots) value *= x - root;
  for (const root of denominatorRoots) value /= x - root;
  return value;
}

function uniqueCritical(points: CriticalPoint[]): CriticalPoint[] {
  const sorted = [...points].sort((a, b) => a.value - b.value);
  const out: CriticalPoint[] = [];
  for (const point of sorted) {
    const last = out[out.length - 1];
    if (last && Math.abs(last.value - point.value) < EPS) {
      // Titik yang sekaligus nol dan kutub diperlakukan sebagai nol (lubang).
      if (point.kind === 'zero') last.kind = 'zero';
      continue;
    }
    out.push({ ...point });
  }
  return out;
}

function buildSignChart(
  critical: CriticalPoint[],
  evalAt: (x: number) => number,
  xMin: number,
  xMax: number,
): SignChart {
  const points = uniqueCritical(critical).filter(
    (point) => point.value > xMin && point.value < xMax,
  );
  const boundaries = [xMin, ...points.map((p) => p.value), xMax];
  const regions: SignRegion[] = [];
  for (let i = 0; i < boundaries.length - 1; i++) {
    const from = boundaries[i];
    const to = boundaries[i + 1];
    const sample = (from + to) / 2;
    regions.push({ from, to, sign: signOf(evalAt(sample)), sample });
  }
  return { critical: points, regions };
}

/** Peta tanda kuadrat $ax^2+bx+c$ pada rentang garis bilangan. */
export function quadraticSignChart(
  a: number,
  b: number,
  c: number,
  xMin = SIGN_CHART_RANGE.xMin,
  xMax = SIGN_CHART_RANGE.xMax,
): SignChart {
  const critical: CriticalPoint[] = quadraticRoots(a, b, c).map((value) => ({
    value,
    kind: 'zero',
  }));
  return buildSignChart(critical, (x) => evalQuadratic(a, b, c, x), xMin, xMax);
}

/** Peta tanda rasional terfaktor dengan pembuluh nol dan kutub terpisah. */
export function rationalSignChart(
  leading: number,
  numeratorRoots: number[],
  denominatorRoots: number[],
  xMin = SIGN_CHART_RANGE.xMin,
  xMax = SIGN_CHART_RANGE.xMax,
): SignChart {
  const critical: CriticalPoint[] = [
    ...numeratorRoots.map((value) => ({ value, kind: 'zero' as const })),
    ...denominatorRoots.map((value) => ({ value, kind: 'pole' as const })),
  ];
  return buildSignChart(
    critical,
    (x) => evalFactoredRational(leading, numeratorRoots, denominatorRoots, x),
    xMin,
    xMax,
  );
}

function satisfies(sign: -1 | 0 | 1, relation: Relation): boolean {
  switch (relation) {
    case '>':
      return sign === 1;
    case '<':
      return sign === -1;
    case '>=':
      return sign !== -1;
    case '<=':
      return sign !== 1;
  }
}

function equalityAllowed(relation: Relation): boolean {
  return relation === '>=' || relation === '<=';
}

/** Daerah penyelesaian $f(x)\ \text{rel}\ 0$ sebagai gabungan selang. */
export function solutionIntervals(chart: SignChart, relation: Relation): SolutionInterval[] {
  const { regions } = chart;
  if (regions.length === 0) return [];
  const eq = equalityAllowed(relation);
  const zeroAt = (value: number): boolean =>
    chart.critical.some((p) => p.kind === 'zero' && Math.abs(p.value - value) < EPS);

  const raw: SolutionInterval[] = [];
  for (const region of regions) {
    if (!satisfies(region.sign, relation)) continue;
    raw.push({
      from: region.from,
      to: region.to,
      openFrom: !(eq && zeroAt(region.from)),
      openTo: !(eq && zeroAt(region.to)),
    });
  }

  raw.sort((a, b) => a.from - b.from);
  const merged: SolutionInterval[] = [];
  for (const interval of raw) {
    const last = merged[merged.length - 1];
    if (last && interval.from < last.to + EPS) {
      const touching = Math.abs(interval.from - last.to) < EPS;
      const joinable = !touching || (!last.openTo && !interval.openFrom);
      if (joinable) {
        if (interval.to > last.to) {
          last.to = interval.to;
          last.openTo = interval.openTo;
        } else if (Math.abs(interval.to - last.to) < EPS) {
          last.openTo = last.openTo && interval.openTo;
        }
        continue;
      }
    }
    merged.push({ ...interval });
  }

  if (eq) {
    for (const point of chart.critical) {
      if (point.kind !== 'zero') continue;
      const covered = merged.some(
        (interval) =>
          point.value > interval.from - EPS &&
          point.value < interval.to + EPS &&
          !(Math.abs(point.value - interval.from) < EPS && interval.openFrom) &&
          !(Math.abs(point.value - interval.to) < EPS && interval.openTo),
      );
      if (!covered) {
        merged.push({ from: point.value, to: point.value, openFrom: false, openTo: false });
      }
    }
    merged.sort((a, b) => a.from - b.from);
  }

  return merged;
}

/** Kalimat hasil penyelesaian, mis. "x < -2 atau x > 3". */
export function describeSolution(chart: SignChart, relation: Relation): string {
  const intervals = solutionIntervals(chart, relation);
  if (intervals.length === 0) return 'tidak ada nilai x yang memenuhi';
  const { regions } = chart;
  if (regions.length === 0) return 'tidak ada nilai x yang memenuhi';
  const xMin = regions[0].from;
  const xMax = regions[regions.length - 1].to;

  const coversAll = intervals.some(
    (interval) => interval.from <= xMin + EPS && interval.to >= xMax - EPS,
  );
  if (coversAll) return 'semua bilangan real x';

  return intervals
    .map((interval) => {
      const bound = (open: boolean): string => (open ? '<' : '≤');
      const leftInf = interval.from <= xMin + EPS;
      const rightInf = interval.to >= xMax - EPS;
      if (leftInf && rightInf) return 'semua bilangan real x';
      if (leftInf) return `x ${bound(interval.openTo)} ${formatPlain(interval.to)}`;
      if (rightInf) return `x ${interval.openFrom ? '>' : '≥'} ${formatPlain(interval.from)}`;
      return `${formatPlain(interval.from)} ${bound(interval.openFrom)} x ${bound(interval.openTo)} ${formatPlain(interval.to)}`;
    })
    .join(' atau ');
}

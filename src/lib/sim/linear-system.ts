/**
 * Logika murni untuk eksplorasi sistem persamaan linear dua variabel.
 *
 * Sistem ditulis a₁x + b₁y = c₁ dan a₂x + b₂y = c₂. Determinan
 * det = a₁b₂ − a₂b₁ menentukan apakah sistem punya satu solusi, tak hingga
 * solusi, atau tidak punya solusi sama sekali.
 */

export type SolutionKind = 'unique' | 'none' | 'infinite';

export interface LinearSolution {
  kind: SolutionKind;
  x?: number;
  y?: number;
  det: number;
}

const EPS = 1e-9;

function nearZero(value: number): boolean {
  return Math.abs(value) < EPS;
}

/** Banyaknya solusi beserta titik potong (bila tunggal) dari sistem 2×2. */
export function solve2x2(
  a1: number,
  b1: number,
  c1: number,
  a2: number,
  b2: number,
  c2: number,
): LinearSolution {
  const det = a1 * b2 - a2 * b1;

  if (!nearZero(det)) {
    const x = (c1 * b2 - c2 * b1) / det;
    const y = (a1 * c2 - a2 * c1) / det;
    return { kind: 'unique', x, y, det };
  }

  const n1 = !nearZero(a1) || !nearZero(b1);
  const n2 = !nearZero(a2) || !nearZero(b2);

  if (!n1 && !n2) {
    return { kind: nearZero(c1) && nearZero(c2) ? 'infinite' : 'none', det };
  }
  if (!n1) {
    return { kind: nearZero(c1) ? 'infinite' : 'none', det };
  }
  if (!n2) {
    return { kind: nearZero(c2) ? 'infinite' : 'none', det };
  }

  const konsisten =
    nearZero(a1 * c2 - a2 * c1) && nearZero(b1 * c2 - b2 * c1);
  return { kind: konsisten ? 'infinite' : 'none', det };
}

/** Nilai y pada garis a·x + b·y = c untuk x tertentu (NaN bila bukan fungsi y). */
export function lineYAt(a: number, b: number, c: number, x: number): number {
  if (nearZero(b)) return NaN;
  return (c - a * x) / b;
}

/** Nilai x pada garis a·x + b·y = c untuk y tertentu (NaN bila bukan fungsi x). */
export function lineXAt(a: number, b: number, c: number, y: number): number {
  if (nearZero(a)) return NaN;
  return (c - b * y) / a;
}

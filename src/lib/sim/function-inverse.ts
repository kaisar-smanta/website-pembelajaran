/**
 * Logika murni untuk eksplorasi fungsi invers linear f(x) = a·x + b.
 *
 * Fungsi linear memiliki invers selama a ≠ 0, yaitu
 * f⁻¹(x) = (x − b) / a = (1/a)·x − b/a.
 */

export interface LinearCoef {
  a: number;
  b: number;
}

/** Mengembalikan koefisien f⁻¹, atau null jika a = 0 (tidak satu-satu). */
export function computeInverse(a: number, b: number): LinearCoef | null {
  if (a === 0) return null;
  return { a: 1 / a, b: -b / a };
}

/** Menghitung nilai f(x) = a·x + b untuk koefisien apa pun. */
export function evaluateLinear(coef: LinearCoef, x: number): number {
  return coef.a * x + coef.b;
}

/** Menghitung f(f⁻¹(t)) yang seharusnya sama dengan t. */
export function verifyInverse(a: number, b: number, t: number): number {
  const inv = computeInverse(a, b);
  if (!inv) return Number.NaN;
  return evaluateLinear({ a, b }, evaluateLinear(inv, t));
}

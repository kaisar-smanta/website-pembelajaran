/**
 * Logika murni untuk eksplorasi komposisi fungsi linear (tanpa DOM).
 *
 * Fungsi linear f(x) = a·x + b diwakili objek { a, b }. Komposisi
 * (f∘g)(x) = f(g(x)) juga berupa fungsi linear.
 */

export interface Linear {
  a: number;
  b: number;
}

/** Menghitung (f∘g)(x) = f(g(x)) sebagai fungsi linear baru. */
export function composeLinear(f: Linear, g: Linear): Linear {
  return { a: f.a * g.a, b: f.a * g.b + f.b };
}

/** Menghitung nilai fungsi linear di titik x. */
export function evaluateLinear(coef: Linear, x: number): number {
  return coef.a * x + coef.b;
}

function trim(v: number): string {
  const rounded = Number(v.toFixed(4));
  return String(rounded);
}

/** Menyusun teks fungsi linear, mis. { a: -2, b: 7 } menjadi "−2x + 7". */
export function formatLinear(coef: Linear): string {
  const { a, b } = coef;
  const parts: string[] = [];
  if (a !== 0) {
    if (a === 1) parts.push('x');
    else if (a === -1) parts.push('−x');
    else parts.push(`${trim(a)}x`.replace('-', '−'));
  }
  if (b !== 0) {
    const mag = trim(Math.abs(b));
    if (parts.length === 0) parts.push(`${b < 0 ? '−' : ''}${mag}`);
    else parts.push(`${b < 0 ? ' − ' : ' + '}${mag}`);
  }
  return parts.length === 0 ? '0' : parts.join('');
}

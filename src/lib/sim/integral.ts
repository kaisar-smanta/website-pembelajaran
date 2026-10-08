/**
 * Logika murni untuk eksplorasi integral tentu dan jumlah Riemann (tanpa DOM).
 *
 * Fungsi contoh $f(x)=x^{2}$ dipilih agar nilai eksaknya sederhana, sehingga
 * siswa dapat membandingkan jumlah Riemann dengan hasil teorema dasar kalkulus.
 */

import { formatPlain } from '../format.ts';

export type RiemannRule = 'left' | 'right' | 'mid';

/** Fungsi integran $f(x)=x^{2}$. */
export function evalIntegrand(x: number): number {
  return x * x;
}

/** Antiturunan $F(x)=\\dfrac{x^{3}}{3}$. */
export function antiderivative(x: number): number {
  return (x * x * x) / 3;
}

/** Nilai eksak $\\int_{a}^{b} x^{2}\\,dx = F(b)-F(a)$. */
export function exactIntegral(a: number, b: number): number {
  return antiderivative(b) - antiderivative(a);
}

/** Jumlah Riemann dengan $n$ persegi panjang pada $[a,b]$. */
export function riemannSum(a: number, b: number, n: number, rule: RiemannRule = 'mid'): number {
  const count = Math.max(1, Math.floor(n));
  const dx = (b - a) / count;
  let sum = 0;
  for (let i = 0; i < count; i++) {
    let sample: number;
    if (rule === 'left') sample = a + i * dx;
    else if (rule === 'right') sample = a + (i + 1) * dx;
    else sample = a + (i + 0.5) * dx;
    sum += evalIntegrand(sample);
  }
  return sum * dx;
}

/** Uraian verbal: lebar, hampiran jumlah Riemann, nilai eksak, dan galat. */
export function describeIntegral(
  a: number,
  b: number,
  n: number,
  rule: RiemannRule = 'mid',
): string {
  const f = (v: number) => formatPlain(Number(v.toFixed(4)));
  const count = Math.max(1, Math.floor(n));
  const dx = (b - a) / count;
  const approx = riemannSum(a, b, count, rule);
  const exact = exactIntegral(a, b);
  const error = Math.abs(approx - exact);
  const ruleLabel = rule === 'left' ? 'kiri' : rule === 'right' ? 'kanan' : 'tengah';
  return `Selang [${formatPlain(a)}, ${formatPlain(b)}] dibagi menjadi ${count} persegi panjang dengan lebar Δx = ${f(dx)}. Jumlah Riemann (titik ${ruleLabel}) ≈ ${f(approx)}, sedangkan nilai eksak ∫ = ${f(exact)}. Galat ≈ ${f(error)}.`;
}

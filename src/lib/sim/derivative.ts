/**
 * Logika murni untuk eksplorasi turunan dan garis singgung (tanpa DOM).
 *
 * Model tetap berupa kubik $f(x)=ax^{3}+bx^{2}+cx+d$. Pengguna menggeser titik
 * singgung $x_{0}$; modul menghitung gradien $f'(x_{0})$, persamaan garis
 * singgung, dan menafsirkan naik/turunnya kurva di titik itu.
 */

import { formatPlain } from '../format.ts';

export interface CubicModel {
  a: number;
  b: number;
  c: number;
  d: number;
}

/** $f(x)=x^{3}-3x$: stasioner di $x=\\pm 1$, mudah diuji. */
export const DEFAULT_MODEL: CubicModel = { a: 1, b: 0, c: -3, d: 0 };

/** Selang titik singgung yang dipakai komponen. */
export const POINT_RANGE = { min: -2.5, max: 2.5, step: 0.1 };

export interface TangentLine {
  /** Gradien garis singgung $f'(x_0)$. */
  slope: number;
  /** Titik ordinat potong sumbu-$y$: $y = slope\\cdot x + intercept$. */
  intercept: number;
  x0: number;
  y0: number;
}

export function evalFunction(model: CubicModel, x: number): number {
  return ((model.a * x + model.b) * x + model.c) * x + model.d;
}

/** Gradien $f'(x)=3ax^{2}+2bx+c$. */
export function slopeAt(model: CubicModel, x: number): number {
  return 3 * model.a * x * x + 2 * model.b * x + model.c;
}

/** Garis singgung di $x_{0}$ dalam bentuk $y = m x + c$. */
export function tangentAt(model: CubicModel, x0: number): TangentLine {
  const slope = slopeAt(model, x0);
  const y0 = evalFunction(model, x0);
  return { slope, intercept: y0 - slope * x0, x0, y0 };
}

/** Uraian verbal gradien dan kecenderungan fungsi di $x_{0}$. */
export function describeAt(model: CubicModel, x0: number): string {
  const slope = slopeAt(model, x0);
  const y0 = evalFunction(model, x0);
  const a = formatPlain(Number(x0.toFixed(2)));
  const b = formatPlain(Number(y0.toFixed(2)));
  const m = formatPlain(Number(slope.toFixed(2)));
  let tendency: string;
  if (Math.abs(slope) < 1e-9) tendency = 'titik stasioner';
  else if (slope > 0) tendency = 'fungsi naik';
  else tendency = 'fungsi turun';
  return `Di titik (${a}, ${b}), gradien garis singgung f'(${a}) = ${m}, sehingga ${tendency}. Persamaan garis singgung: y = ${m}x + ${formatPlain(Number(tangentAt(model, x0).intercept.toFixed(2)))}.`;
}

/**
 * Logika murni untuk eksplorasi grafik polinomial kubik
 * $f(x)=ax^{3}+bx^{2}+cx+d$ (tanpa DOM), sehingga dapat diuji dengan Node.
 *
 * Menyediakan evaluasi, titik stasioner dari turunan, dan pencarian akar real
 * secara numerik (pindai tanda + bagi dua) agar tetap dapat diuji tanpa CAS.
 */

import { formatPlain } from '../format.ts';

export interface Cubic {
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface CriticalPoint extends Point {
  kind: 'max' | 'min';
}

/** Model kubik contoh yang akarnya bulat $1, 2, 3$. */
export const DEFAULT_CUBIC: Cubic = { a: 1, b: -6, c: 11, d: -6 };

/** Menghitung $f(x)$ dengan skema Horner. */
export function evalCubic(k: Cubic, x: number): number {
  return ((k.a * x + k.b) * x + k.c) * x + k.d;
}

/** Turunan pertama $f'(x)=3ax^{2}+2bx+c$ sebagai koefisien kuadrat. */
export function derivativeCubic(k: Cubic): { a: number; b: number; c: number } {
  return { a: 3 * k.a, b: 2 * k.b, c: k.c };
}

/** Titik stasioner (akar turunan) beserta jenisnya. Kosong bila tidak ada. */
export function criticalPoints(k: Cubic): CriticalPoint[] {
  const { a, b, c } = derivativeCubic(k);
  if (Math.abs(a) < 1e-9) return [];
  const disc = b * b - 4 * a * c;
  if (disc < 0) return [];
  const sq = Math.sqrt(disc);
  const xs =
    disc === 0 ? [-b / (2 * a)] : [(-b - sq) / (2 * a), (-b + sq) / (2 * a)];
  xs.sort((p, q) => p - q);
  return xs.map((x) => {
    const second = 6 * a * x + 2 * b;
    return { x, y: evalCubic(k, x), kind: second > 0 ? 'min' : 'max' };
  });
}

/**
 * Akar-akar real dari $f'(x)=3ax^{2}+2bx+c$, termasuk saat $a=0$ (turunan
 * berupa fungsi linear).
 */
function derivativeRoots(k: Cubic): number[] {
  const { a, b, c } = derivativeCubic(k);
  if (Math.abs(a) > 1e-9) {
    const disc = b * b - 4 * a * c;
    if (disc < 0) return [];
    const sq = Math.sqrt(disc);
    return disc === 0 ? [-b / (2 * a)] : [(-b - sq) / (2 * a), (-b + sq) / (2 * a)];
  }
  if (Math.abs(b) > 1e-9) return [-c / b];
  return [];
}

/**
 * Akar real pada selang $[lo, hi]$.
 *
 * Memakai dua cara: (1) memindai perubahan tanda lalu memperhalus dengan bagi
 * dua untuk akar berganti tanda (multiplisitas ganjil), dan (2) memeriksa titik
 * stasioner tempat $f$ menyentuh nol untuk akar bermultiplisitas genap
 * (menyinggung sumbu-$x$). Akar di luar selang tidak dikembalikan.
 */
export function findRoots(k: Cubic, lo = -10, hi = 10, steps = 2000): number[] {
  const roots: number[] = [];
  const push = (r: number) => {
    if (r < lo - 1e-6 || r > hi + 1e-6) return;
    if (!roots.some((v) => Math.abs(v - r) < 1e-6)) roots.push(r);
  };

  let prevX = lo;
  let prevY = evalCubic(k, lo);
  if (Math.abs(prevY) < 1e-9) push(lo);

  for (let i = 1; i <= steps; i++) {
    const x = lo + (i / steps) * (hi - lo);
    const y = evalCubic(k, x);
    if (Math.abs(y) < 1e-9) push(x);
    if (prevY * y < 0) {
      let a = prevX;
      let b = x;
      let fa = prevY;
      for (let j = 0; j < 60; j++) {
        const m = (a + b) / 2;
        const fm = evalCubic(k, m);
        if (fa * fm <= 0) {
          b = m;
        } else {
          a = m;
          fa = fm;
        }
      }
      push((a + b) / 2);
    }
    prevX = x;
    prevY = y;
  }

  for (const x of derivativeRoots(k)) {
    if (x < lo || x > hi) continue;
    if (Math.abs(evalCubic(k, x)) < 1e-6) push(x);
  }

  return roots.sort((p, q) => p - q);
}

/** Selang tampilan tetap yang cukup untuk variasi koefisien pada slider. */
export function cubicDomain(): { xMin: number; xMax: number; yMin: number; yMax: number } {
  return { xMin: -4, xMax: 4, yMin: -8, yMax: 8 };
}

/** Uraian verbal tentang arah, akar, dan titik stasioner. */
export function describeCubic(k: Cubic): string {
  const roots = findRoots(k);
  const crit = criticalPoints(k);
  let text = `a = ${formatPlain(k.a)}. `;
  text +=
    k.a > 0
      ? 'Karena a > 0, kurva turun dari kiri dan naik ke kanan. '
      : k.a < 0
        ? 'Karena a < 0, kurva naik dari kiri dan turun ke kanan. '
        : 'Karena a = 0, grafik bukan kubik melainkan kuadratik. ';

  if (roots.length === 0) {
    text += 'Tidak ada akar real pada selang tampilan. ';
  } else {
    text += `Akar real: x = ${roots.map((r) => formatPlain(Number(r.toFixed(3)))).join(', ')}. `;
  }

  if (crit.length > 0) {
    const parts = crit.map(
      (p) =>
        `${p.kind === 'max' ? 'maksimum' : 'minimum'} (${formatPlain(Number(p.x.toFixed(2)))}, ${formatPlain(Number(p.y.toFixed(2)))})`,
    );
    text += `Titik stasioner: ${parts.join(' dan ')}.`;
  } else {
    text += 'Tidak ada titik stasioner (turunan tidak berubah tanda).';
  }
  return text;
}

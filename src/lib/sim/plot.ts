/**
 * Pembantu gambar grafik bersama untuk komponen simulasi interaktif.
 *
 * Berisi potongan yang benar-benar identik di beberapa simulasi: pengambilan
 * nilai awal parameter eksplorasi, sapuan kisi latar, dan kedua sumbu
 * koordinat. Semua fungsi hanya menyentuh DOM saat dipanggil.
 */

import { el } from '@/lib/dom';

/** Parameter awal eksplorasi yang memuat nama dan nilainya. */
export interface ParamLike {
  name: string;
  value: number;
}

/**
 * Membaca nilai awal sebuah parameter eksplorasi berdasarkan namanya.
 *
 * Bila parameter tidak disebut atau nilainya bukan bilangan berhingga, dipakai
 * `fallback`.
 */
export function paramValue(
  params: readonly ParamLike[] | undefined,
  name: string,
  fallback: number,
): number {
  const found = params?.find((param) => param.name === name);
  return found && Number.isFinite(found.value) ? found.value : fallback;
}

/** Ukuran kotak gambar beserta padding seragam di tiap sisi. */
export interface PlotBox {
  width: number;
  height: number;
  pad: number;
}

/** Kotak gambar plus cacah sel kisi pada tiap arah. */
export interface GridBox extends PlotBox {
  cols: number;
  rows: number;
}

/**
 * Menggambar kisi latar: `cols` sel mendatar dan `rows` sel tegak, memakai
 * garis tipis berwarna batas. Urutan elemen: seluruh garis tegak lebih dulu,
 * baru seluruh garis mendatar.
 */
export function drawGrid(svg: SVGElement, { width, height, pad, cols, rows }: GridBox): void {
  for (let i = 0; i <= cols; i++) {
    const x = pad + (i / cols) * (width - 2 * pad);
    svg.appendChild(
      el('line', { x1: x, y1: pad, x2: x, y2: height - pad, stroke: 'var(--color-border)', 'stroke-width': 1 }),
    );
  }
  for (let i = 0; i <= rows; i++) {
    const y = pad + (i / rows) * (height - 2 * pad);
    svg.appendChild(
      el('line', { x1: pad, y1: y, x2: width - pad, y2: y, stroke: 'var(--color-border)', 'stroke-width': 1 }),
    );
  }
}

/** Pemetaan koordinat matematika ke piksel SVG. */
export interface PlotScale {
  sx: (x: number) => number;
  sy: (y: number) => number;
}

/**
 * Menggambar sumbu x (garis `y = 0`) lalu sumbu y (garis `x = 0`) dengan garis
 * agak tebal berwarna teks lembut.
 */
export function drawAxes(
  svg: SVGElement,
  { sx, sy }: PlotScale,
  { width, height, pad }: PlotBox,
): void {
  svg.appendChild(
    el('line', { x1: pad, y1: sy(0), x2: width - pad, y2: sy(0), stroke: 'var(--color-text-soft)', 'stroke-width': 1.6 }),
  );
  svg.appendChild(
    el('line', { x1: sx(0), y1: pad, x2: sx(0), y2: height - pad, stroke: 'var(--color-text-soft)', 'stroke-width': 1.6 }),
  );
}

/**
 * Logika murni untuk eksplorasi eksponen dan logaritma sebagai fungsi invers.
 *
 * Menyediakan nilai $b^x$, nilai $\log_b x$, pencerminan titik terhadap garis
 * $y=x$, pasangan titik kunci, dan ringkasan sifat grafik. Tanpa DOM agar dapat
 * diuji dengan Node.
 */

/** Nilai $b^x$. */
export function exponentialValue(base: number, x: number): number {
  return Math.pow(base, x);
}

/** Nilai $\log_b x$; `NaN` bila $x \le 0$ atau basis tidak sah. */
export function logarithmValue(base: number, x: number): number {
  if (x <= 0 || base <= 0 || base === 1) return NaN;
  return Math.log(x) / Math.log(base);
}

/** Pencerminan titik terhadap garis $y=x$: $(x,y) \mapsto (y,x)$. */
export function mirrorOverYEqualsX(point: [number, number]): [number, number] {
  return [point[1], point[0]];
}

export interface Point {
  x: number;
  y: number;
}

export interface LogKeyPoints {
  exponential: Point[];
  logarithm: Point[];
}

/**
 * Pasangan titik kunci: grafik eksponen memuat $(0,1)$ dan $(1,b)$, sedangkan
 * grafik logaritma memuat pencerminannya $(1,0)$ dan $(b,1)$.
 */
export function keyPoints(base: number): LogKeyPoints {
  const exponential: [number, number][] = [
    [0, exponentialValue(base, 0)],
    [1, exponentialValue(base, 1)],
  ];
  return {
    exponential: exponential.map(([x, y]) => ({ x, y })),
    logarithm: exponential.map(([x, y]) => {
      const [mx, my] = mirrorOverYEqualsX([x, y]);
      return { x: mx, y: my };
    }),
  };
}

/** Ringkasan sifat grafik untuk basis $b > 0$ dan $b \ne 1$. */
export function describeLogarithm(base: number): string {
  if (base <= 0 || base === 1) {
    return 'Basis harus positif dan tidak sama dengan 1.';
  }
  const mode =
    base > 1
      ? 'naik: makin besar x, makin besar logaritmanya'
      : 'turun: makin besar x, makin kecil logaritmanya';
  return (
    `Basis b = ${base}. Grafik y = b^x dan y = log_b x saling mencerminkan terhadap ` +
    `garis y = x; grafik logaritma ${mode}. Selalu log_b 1 = 0 dan log_b b = 1, ` +
    `sedangkan b^0 = 1 dan b^1 = b. Logaritma terdefinisi hanya untuk x > 0.`
  );
}

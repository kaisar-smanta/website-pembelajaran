/**
 * Logika murni untuk eksplorasi perkalian dan determinan matriks 2×2
 * (tanpa DOM), sehingga dapat diuji dengan Node.
 *
 * Matriks disimpan sebagai tupel baris: [[a, b], [c, d]].
 */

export type Matrix2 = [[number, number], [number, number]];

/** Hasil kali dua matriks 2×2: (AB)ᵢⱼ = baris i matriks A · kolom j matriks B. */
export function multiply(A: Matrix2, B: Matrix2): Matrix2 {
  const [[a, b], [c, d]] = A;
  const [[e, f], [g, h]] = B;
  return [
    [a * e + b * g, a * f + b * h],
    [c * e + d * g, c * f + d * h],
  ];
}

/** Determinan matriks 2×2: det [[a, b], [c, d]] = ad − bc. */
export function determinant(A: Matrix2): number {
  const [[a, b], [c, d]] = A;
  return a * d - b * c;
}

/** Membandingkan dua matriks 2×2 secara eksak. */
export function equals(A: Matrix2, B: Matrix2): boolean {
  return (
    A[0][0] === B[0][0] &&
    A[0][1] === B[0][1] &&
    A[1][0] === B[1][0] &&
    A[1][1] === B[1][1]
  );
}

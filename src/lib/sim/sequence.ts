/**
 * Logika murni untuk eksplorasi barisan dan deret (tanpa DOM).
 *
 * Menyediakan daftar suku aritmetika/geometri, jumlah kumulatif, serta rumus
 * suku ke-n (Uₙ) dan jumlah n suku pertama (Sₙ).
 */

export type SequenceKind = 'aritmetika' | 'geometri';

/** Rumus suku ke-n barisan aritmetika: Uₙ = a + (n − 1)·b. */
export function arithmeticTerm(a: number, b: number, n: number): number {
  return a + (n - 1) * b;
}

/** Rumus jumlah n suku pertama barisan aritmetika: Sₙ = n/2 · (2a + (n − 1)·b). */
export function arithmeticSum(a: number, b: number, n: number): number {
  return (n / 2) * (2 * a + (n - 1) * b);
}

/** Rumus suku ke-n barisan geometri: Uₙ = a · r^(n − 1). */
export function geometricTerm(a: number, r: number, n: number): number {
  return a * Math.pow(r, n - 1);
}

/** Rumus jumlah n suku pertama barisan geometri (menangani r = 1). */
export function geometricSum(a: number, r: number, n: number): number {
  if (r === 1) return n * a;
  return (a * (Math.pow(r, n) - 1)) / (r - 1);
}

/** Daftar n suku pertama barisan aritmetika. */
export function arithmeticTerms(a: number, b: number, n: number): number[] {
  const terms: number[] = [];
  for (let k = 0; k < n; k++) {
    const value = a + k * b;
    terms.push(Number.isFinite(value) ? value : 0);
  }
  return terms;
}

/** Daftar n suku pertama barisan geometri. */
export function geometricTerms(a: number, r: number, n: number): number[] {
  const terms: number[] = [];
  for (let k = 0; k < n; k++) {
    const value = a * Math.pow(r, k);
    terms.push(Number.isFinite(value) ? value : 0);
  }
  return terms;
}

/** Jumlah kumulatif (S₁, S₂, …) dari sebuah daftar suku. */
export function cumulativeSums(terms: number[]): number[] {
  const sums: number[] = [];
  let acc = 0;
  for (const term of terms) {
    const value = Number.isFinite(term) ? term : 0;
    acc = Number.isFinite(acc + value) ? acc + value : 0;
    sums.push(acc);
  }
  return sums;
}

/** Daftar suku dan jumlah kumulatif sesuai jenis barisan. */
export function sequenceTerms(
  kind: SequenceKind,
  a: number,
  b: number,
  n: number,
): { terms: number[]; sums: number[] } {
  const terms = kind === 'geometri' ? geometricTerms(a, b, n) : arithmeticTerms(a, b, n);
  return { terms, sums: cumulativeSums(terms) };
}

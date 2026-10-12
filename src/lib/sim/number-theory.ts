/**
 * Logika murni untuk eksplorasi teori bilangan.
 *
 * Menyediakan tiga alat yang dipakai bersama komponen: langkah pembagian
 * berulang **algoritma Euklides** untuk FPB, **saringan Eratosthenes** untuk
 * daftar bilangan prima kecil, dan **jam aritmetika modulo** yang menampilkan
 * sisa sekaligus siklus pangkat. Tanpa DOM sehingga dapat diuji dengan Node.
 */

/** Satu langkah pembagian `a = q·b + r` pada algoritma Euklides. */
export interface EuclidStep {
  a: number;
  b: number;
  q: number;
  r: number;
}

export interface EuclidResult {
  steps: EuclidStep[];
  /** FPB dari kedua bilangan masukan. */
  gcd: number;
}

/** Langkah pembagian berulang Euklides untuk $\gcd(|a|,|b|)$. */
export function euclidSteps(a: number, b: number): EuclidResult {
  let x = Math.abs(Math.trunc(a));
  let y = Math.abs(Math.trunc(b));
  const steps: EuclidStep[] = [];
  while (y > 0) {
    const q = Math.floor(x / y);
    const r = x - q * y;
    steps.push({ a: x, b: y, q, r });
    x = y;
    y = r;
  }
  return { steps, gcd: x };
}

/** Faktor persekutuan terbesar dua bilangan bulat. */
export function gcd(a: number, b: number): number {
  return euclidSteps(a, b).gcd;
}

/** Kelipatan persekutuan terkecil; nol bila salah satu bilangan nol. */
export function lcm(a: number, b: number): number {
  const g = gcd(a, b);
  if (g === 0) return 0;
  return Math.abs(a * b) / g;
}

/** Saringan Eratosthenes: daftar bilangan prima $\le$ `limit`. */
export function primeSieve(limit: number): number[] {
  const n = Math.floor(limit);
  if (n < 2) return [];
  const composite = new Array<boolean>(n + 1).fill(false);
  composite[0] = true;
  composite[1] = true;
  for (let p = 2; p * p <= n; p++) {
    if (composite[p]) continue;
    for (let m = p * p; m <= n; m += p) composite[m] = true;
  }
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) if (!composite[i]) primes.push(i);
  return primes;
}

/** Uji keprimaan bilangan bulat non-negatif. */
export function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let d = 3; d * d <= n; d += 2) if (n % d === 0) return false;
  return true;
}

/** Sisa non-negatif $a \bmod m$. */
export function mod(a: number, m: number): number {
  if (m <= 0) return NaN;
  return ((a % m) + m) % m;
}

/**
 * Deret sisa $b^{1}, b^{2}, \dots, b^{count} \pmod{m}$.
 *
 * Menunjukkan "jarum jam" aritmetika modulo: kelipatan yang sama akan selalu
 * kembali ke sisa yang sama.
 */
export function modularPowers(base: number, modulus: number, count: number): number[] {
  const m = Math.abs(Math.trunc(modulus));
  const out: number[] = [];
  if (m <= 1) {
    for (let i = 0; i < Math.max(0, count); i++) out.push(0);
    return out;
  }
  let value = 1;
  for (let i = 0; i < Math.max(0, count); i++) {
    value = mod(value * base, m);
    out.push(value);
  }
  return out;
}

/**
 * Siklus sisa $b^{k} \pmod{m}$ mulai dari kemunculan pertama yang berulang.
 *
 * Bila pangkat menemui sisa yang pernah muncul, deret sisa selanjutnya pasti
 * berulang; fungsi ini mengembalikan bagian yang berulang saja.
 */
export function modularPowerCycle(base: number, modulus: number): number[] {
  const m = Math.abs(Math.trunc(modulus));
  if (m <= 1) return [0];
  const b = mod(base, m);
  const seen = new Map<number, number>();
  const sequence: number[] = [];
  let value = b;
  while (!seen.has(value)) {
    seen.set(value, sequence.length);
    sequence.push(value);
    value = mod(value * b, m);
  }
  const start = seen.get(value) ?? 0;
  return sequence.slice(start);
}

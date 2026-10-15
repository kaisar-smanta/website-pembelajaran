/**
 * Logika murni untuk eksplorasi sifat-sifat eksponen.
 *
 * Menyediakan nilai $a^{x}$, pemeriksaan tiga aturan eksponen
 * ($a^{m}\cdot a^{n}=a^{m+n}$, $a^{m}/a^{n}=a^{m-n}$, $(a^{m})^{n}=a^{mn}$),
 * serta ringkasan sifat dalam bahasa Indonesia. Tanpa DOM agar dapat diuji
 * dengan Node.
 */

import { formatPlain } from '../format.ts';

/** Toleransi relatif saat memeriksa kesamaan kedua ruas aturan. */
const TOLERANCE = 1e-9;

/** Nilai $a^{x}$; `NaN` bila basis nol dipangkatkan eksponen negatif. */
export function powerValue(base: number, exponent: number): number {
  if (base === 0 && exponent < 0) return NaN;
  return Math.pow(base, exponent);
}

/**
 * Apakah dua hasil dapat dianggap sama.
 *
 * Nilai tak hingga hanya sama dengan dirinya sendiri, sedangkan `NaN` selalu
 * dianggap tidak sama.
 */
export function almostEqual(a: number, b: number): boolean {
  if (Number.isNaN(a) || Number.isNaN(b)) return false;
  if (!Number.isFinite(a) || !Number.isFinite(b)) return a === b;
  return Math.abs(a - b) <= TOLERANCE * Math.max(1, Math.abs(a), Math.abs(b));
}

export interface ExponentLawsResult {
  base: number;
  m: number;
  n: number;
  /** Nilai $a^{m}$ dan $a^{n}$. */
  aPowM: number;
  aPowN: number;
  /** Kedua ruas aturan hasil kali: $a^{m}\cdot a^{n}$ dan $a^{m+n}$. */
  productLeft: number;
  productRight: number;
  /** Kedua ruas aturan hasil bagi: $a^{m}/a^{n}$ dan $a^{m-n}$. */
  quotientLeft: number;
  quotientRight: number;
  /** Kedua ruas aturan pangkat dari pangkat: $(a^{m})^{n}$ dan $a^{mn}$. */
  powerLeft: number;
  powerRight: number;
  productHolds: boolean;
  quotientHolds: boolean;
  powerHolds: boolean;
}

/**
 * Menghitung kedua ruas tiap aturan untuk basis $a$ dan eksponen `m`, `n`,
 * lalu menandai apakah tiap aturan terpenuhi. Untuk basis positif seluruh
 * hasil selalu terdefinisi.
 */
export function exponentLaws(base: number, m: number, n: number): ExponentLawsResult {
  const aPowM = powerValue(base, m);
  const aPowN = powerValue(base, n);
  const productLeft = aPowM * aPowN;
  const productRight = powerValue(base, m + n);
  const quotientLeft = aPowN === 0 ? NaN : aPowM / aPowN;
  const quotientRight = powerValue(base, m - n);
  const powerLeft = powerValue(aPowM, n);
  const powerRight = powerValue(base, m * n);
  return {
    base,
    m,
    n,
    aPowM,
    aPowN,
    productLeft,
    productRight,
    quotientLeft,
    quotientRight,
    powerLeft,
    powerRight,
    productHolds: almostEqual(productLeft, productRight),
    quotientHolds: almostEqual(quotientLeft, quotientRight),
    powerHolds: almostEqual(powerLeft, powerRight),
  };
}

/** Ringkasan sifat eksponen untuk basis $a$ yang dipilih. */
export function describeExponentLaws(base: number): string {
  if (base <= 0) {
    return 'Basis harus positif agar pangkat negatif dan pangkat pecahan selalu terdefinisi.';
  }
  if (base === 1) {
    return 'Basis a = 1 membuat semua pangkat bernilai 1, sehingga aturan tampak benar tanpa menunjukkan perubahan. Coba basis yang lebih besar dari 1.';
  }
  return (
    `Basis a = ${formatPlain(base)}. Karena basisnya sama, mengalikan dua pangkat ` +
    `menjumlahkan eksponennya, membagi mengurangi eksponennya, dan memangkatkan ` +
    `pangkat mengalikan eksponennya. Aturan ini berlaku untuk semua eksponen bulat, ` +
    `termasuk yang negatif, dan a^0 = 1.`
  );
}

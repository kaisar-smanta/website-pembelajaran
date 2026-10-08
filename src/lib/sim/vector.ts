/**
 * Logika murni untuk eksplorasi vektor pada bidang (tanpa DOM), sehingga dapat
 * diuji langsung dengan Node.
 *
 * Menyediakan besar vektor, penjumlahan/pengurangan, perkalian skalar, hasil
 * kali titik, sudut antara dua vektor, vektor satuan, dan proyeksi.
 */

/** Vektor pada bidang dengan komponen kartesius. */
export interface Vec2 {
  x: number;
  y: number;
}

/** Vektor nol. */
export const ZERO: Vec2 = { x: 0, y: 0 };

/** Besar (panjang) vektor: |v| = √(x² + y²). */
export function magnitude(v: Vec2): number {
  return Math.hypot(v.x, v.y);
}

/** Penjumlahan dua vektor. */
export function add(a: Vec2, b: Vec2): Vec2 {
  return { x: a.x + b.x, y: a.y + b.y };
}

/** Pengurangan dua vektor. */
export function subtract(a: Vec2, b: Vec2): Vec2 {
  return { x: a.x - b.x, y: a.y - b.y };
}

/** Perkalian skalar k·v. */
export function scale(v: Vec2, k: number): Vec2 {
  return { x: v.x * k, y: v.y * k };
}

/** Hasil kali titik: a·b = aₓbₓ + a_yb_y. */
export function dot(a: Vec2, b: Vec2): number {
  return a.x * b.x + a.y * b.y;
}

/**
 * Sudut antara dua vektor dalam derajat pada rentang [0, 180].
 *
 * Mengembalikan 0 bila salah satu vektor nol karena sudutnya tidak terdefinisi.
 */
export function angle(a: Vec2, b: Vec2): number {
  const denom = magnitude(a) * magnitude(b);
  if (denom === 0) return 0;
  const cos = Math.max(-1, Math.min(1, dot(a, b) / denom));
  return (Math.acos(cos) * 180) / Math.PI;
}

/** Vektor satuan searah v; vektor nol dipetakan ke vektor nol. */
export function unit(v: Vec2): Vec2 {
  const m = magnitude(v);
  if (m === 0) return { ...ZERO };
  return { x: v.x / m, y: v.y / m };
}

/**
 * Proyeksi vektor a pada arah vektor b: ((a·b)/(b·b))·b.
 *
 * Mengembalikan vektor nol bila b adalah vektor nol.
 */
export function projection(a: Vec2, b: Vec2): Vec2 {
  const bb = dot(b, b);
  if (bb === 0) return { ...ZERO };
  const k = dot(a, b) / bb;
  return { x: b.x * k, y: b.y * k };
}

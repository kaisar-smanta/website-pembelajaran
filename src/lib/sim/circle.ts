/**
 * Logika murni untuk eksplorasi busur dan juring lingkaran (tanpa DOM).
 *
 * Menyediakan keliling, luas, panjang busur, dan luas juring sebagai pecahan
 * dari keliling atau luas lingkaran berdasarkan besar sudut pusat (derajat).
 */

/** Konversi sudut derajat ke radian. */
export function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** Keliling lingkaran: K = 2πr. */
export function circumference(r: number): number {
  return 2 * Math.PI * r;
}

/** Luas lingkaran: L = πr². */
export function area(r: number): number {
  return Math.PI * r * r;
}

/** Panjang busur untuk sudut pusat θ (derajat): s = (θ/360)·2πr. */
export function arcLength(r: number, deg: number): number {
  return (deg / 360) * circumference(r);
}

/** Luas juring untuk sudut pusat θ (derajat): J = (θ/360)·πr². */
export function sectorArea(r: number, deg: number): number {
  return (deg / 360) * area(r);
}

/**
 * Pemformat angka ringkas dan deterministik untuk tampilan.
 *
 * Membuang nol di belakang koma lalu memakai koma sebagai pemisah desimal
 * agar sesuai kaidah penulisan bilangan Indonesia.
 */
export function formatNumber(value: number, digits = 4): string {
  if (!Number.isFinite(value)) return '0';
  const rounded = Number(value.toFixed(digits));
  return String(rounded).replace('.', ',');
}

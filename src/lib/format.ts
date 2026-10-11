/**
 * Pemformatan angka bersama untuk komponen interaktif.
 *
 * Konvensi: bilangan pada simulasi (sumbu, koordinat, bacaan) memakai **titik**
 * desimal agar pasangan koordinat seperti `(1.5, 2.3)` tidak ambigu dengan koma
 * pemisah. Teks prosa memakai `formatId`/`formatPercent` (koma, `id-ID`).
 * Pemformat bersama ini mencegah tiap simulasi menduplikasi logika sendiri.
 */

const idNumber = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 });
const idPercent = new Intl.NumberFormat('id-ID', {
  style: 'percent',
  maximumFractionDigits: 2,
});

/** Format `id-ID` dengan maksimal 2 desimal; nilai tak hingga menjadi `'0'`. */
export function formatId(v: number): string {
  return idNumber.format(Number.isFinite(v) ? v : 0);
}

/**
 * Membulatkan ke `digits` desimal lalu membuang nol di belakang; nilai tak
 * hingga menjadi `'0'`. Dipakai simulasi yang butuh presisi berbeda.
 */
export function formatRounded(v: number, digits = 2): string {
  if (!Number.isFinite(v)) return '0';
  return String(Number(v.toFixed(digits)));
}

/** Bilangan ringkas (maksimal 2 desimal, tanpa nol di belakang). */
export function formatPlain(v: number): string {
  return formatRounded(v, 2);
}

/** Bilangan dengan jumlah desimal tetap (default 2). */
export function formatFixed(v: number, digits = 2): string {
  return v.toFixed(digits);
}

/** Peluang dalam format persen `id-ID`, mis. 0,25 menjadi `'25%'`. */
export function formatPercent(v: number): string {
  return idPercent.format(v);
}

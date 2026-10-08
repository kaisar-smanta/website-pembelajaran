/**
 * Pemformatan angka bersama untuk komponen interaktif.
 *
 * Menjaga kaidah penulisan bilangan Indonesia (koma sebagai pemisah desimal)
 * di satu tempat agar tiap simulasi tidak menduplikasi pemformatnya sendiri.
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

/** Bilangan bulat apa adanya, selain itu 2 desimal tanpa nol di belakang. */
export function formatPlain(v: number): string {
  if (Number.isInteger(v)) return String(v);
  return String(Number(v.toFixed(2)));
}

/** Bilangan dengan jumlah desimal tetap (default 2). */
export function formatFixed(v: number, digits = 2): string {
  return v.toFixed(digits);
}

/** Peluang dalam format persen `id-ID`, mis. 0,25 menjadi `'25%'`. */
export function formatPercent(v: number): string {
  return idPercent.format(v);
}

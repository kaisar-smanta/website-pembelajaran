/**
 * Logika murni untuk simulasi bunga dan anuitas (tanpa DOM).
 *
 * Menyediakan deret saldo bunga tunggal, deret saldo bunga majemuk dengan
 * frekuensi tertentu, suku bunga efektif tahunan, serta angsuran dan total
 * bunga anuitas.
 */

/** Deret saldo bunga tunggal dari tahun 0 sampai tahun ke-n. */
export function simpleInterestSeries(p: number, annualRate: number, years: number): number[] {
  const series: number[] = [];
  for (let t = 0; t <= years; t++) {
    series.push(p * (1 + annualRate * t));
  }
  return series;
}

/** Deret saldo bunga majemuk dengan frekuensi penggandaan per tahun. */
export function compoundInterestSeries(
  p: number,
  annualRate: number,
  years: number,
  frequency: number,
): number[] {
  const m = frequency > 0 ? frequency : 1;
  const series: number[] = [];
  for (let t = 0; t <= years; t++) {
    series.push(p * Math.pow(1 + annualRate / m, m * t));
  }
  return series;
}

/** Suku bunga efektif tahunan: (1 + i/m)^m − 1. */
export function effectiveAnnualRate(annualRate: number, frequency: number): number {
  const m = frequency > 0 ? frequency : 1;
  return Math.pow(1 + annualRate / m, m) - 1;
}

/** Angsuran bulanan anuitas dari suku bunga tahunan dan lama (bulan). */
export function annuityPayment(p: number, annualRate: number, months: number): number {
  const r = annualRate / 12;
  if (r === 0) return months > 0 ? p / months : 0;
  return (p * r) / (1 - Math.pow(1 + r, -months));
}

/** Total bunga anuitas: total pembayaran − pokok pinjaman. */
export function annuityTotalInterest(p: number, annualRate: number, months: number): number {
  return annuityPayment(p, annualRate, months) * months - p;
}

/**
 * Logika murni untuk simulasi jadwal amortisasi pinjaman.
 *
 * Berbeda dari simulasi bunga (`compound-interest`) yang membandingkan saldo
 * tabungan, modul ini menyusun jadwal angsuran: pemisahan pokok dan bunga tiap
 * periode, sisa utang, serta pengaruh **angsuran tambahan** bulanan yang
 * mempercepat pelunasan. Tanpa DOM sehingga dapat diuji dengan Node.
 */

export interface AmortizationRow {
  period: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
}

export interface AmortizationResult {
  rows: AmortizationRow[];
  /** Angsuran anuitas dasar sebelum tambahan. */
  monthlyPayment: number;
  extraMonthly: number;
  totalPayment: number;
  totalInterest: number;
  /** Banyak periode hingga lunas (dengan memperhitungkan tambahan). */
  months: number;
  /** Tenor yang diminta. */
  baseMonths: number;
}

/** Angsuran bulanan anuitas dari suku bunga tahunan dan lama (bulan). */
export function monthlyPayment(
  principal: number,
  annualRate: number,
  months: number,
): number {
  if (months <= 0 || principal <= 0) return 0;
  const r = annualRate / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

/**
 * Menyusun jadwal amortisasi. `extraMonthly` ditambahkan pada setiap angsuran
 * dan efektif mempercepat pelunasan bila masih ada sisa utang.
 */
export function amortizationSchedule(
  principal: number,
  annualRate: number,
  months: number,
  extraMonthly = 0,
): AmortizationResult {
  const r = annualRate / 12;
  const base = monthlyPayment(principal, annualRate, months);
  const extra = Math.max(0, extraMonthly);
  const rows: AmortizationRow[] = [];
  let balance = Math.max(0, principal);
  let totalInterest = 0;
  let totalPayment = 0;
  let period = 0;
  const cap = Math.max(1, Math.ceil(months)) + 1;

  while (balance > 1e-6 && period < cap) {
    period++;
    const interest = balance * r;
    let payment = base + extra;
    if (payment > balance + interest) payment = balance + interest;
    const principalPart = payment - interest;
    balance = Math.max(0, balance - principalPart);
    totalInterest += interest;
    totalPayment += payment;
    rows.push({ period, payment, interest, principal: principalPart, balance });
  }

  return {
    rows,
    monthlyPayment: base,
    extraMonthly: extra,
    totalPayment,
    totalInterest,
    months: period,
    baseMonths: months,
  };
}

/** Jumlah baris yang ditampilkan ringkas (sisanya diringkas dengan elipsis). */
export function summarizeRows(rows: AmortizationRow[], max = 12): AmortizationRow[] {
  if (rows.length <= max + 1) return rows;
  return [...rows.slice(0, max), rows[rows.length - 1]];
}

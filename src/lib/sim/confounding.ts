/**
 * Logika murni untuk eksplorasi perancu (confounding) dan paradoks Simpson.
 *
 * Data dibagi menjadi beberapa **strata** (subkelompok). Pada tiap strata kita
 * punya kelompok kontrol dan perlakuan beserta banyak keberhasilannya. Dengan
 * menggeser ukuran dan tingkat keberhasilan tiap strata, siswa dapat membuat
 * arah perbandingan **berbalik** ketika seluruh strata digabung: inti
 * paradoks Simpson dan bukti bahwa variabel perancu harus dikendalikan.
 * Tanpa DOM sehingga dapat diuji dengan Node.
 */

/** Kelompok dengan banyak anggota dan banyak keberhasilan. */
export interface Group {
  n: number;
  success: number;
}

/** Satu strata berisi kelompok kontrol dan perlakuan. */
export interface Stratum {
  name: string;
  control: Group;
  treatment: Group;
}

/** Proporsi keberhasilan satu kelompok. */
export interface Rate {
  n: number;
  success: number;
  rate: number;
}

/** Perbandingan kontrol vs perlakuan dalam satu strata. */
export interface StratumComparison {
  name: string;
  control: Rate;
  treatment: Rate;
  /** Selisih proporsi perlakuan − kontrol. */
  difference: number;
}

export interface ConfoundingAnalysis {
  strata: StratumComparison[];
  overallControl: Rate;
  overallTreatment: Rate;
  /** Selisih proporsi keseluruhan perlakuan − kontrol. */
  overallDifference: number;
  perStratumDifferences: number[];
  /** Arah kesimpulan tiap strata (sebelum digabung). */
  stratumDirection: 'treatment' | 'control' | 'none';
  /** Arah kesimpulan keseluruhan. */
  overallDirection: 'treatment' | 'control' | 'none';
  /** true bila arah keseluruhan berlawanan dengan arah semua strata. */
  reversed: boolean;
}

const EPS = 1e-9;

/** Proporsi keberhasilan sebuah kelompok. */
export function rate(group: Group): Rate {
  const n = Math.max(0, group.n);
  const success = Math.max(0, Math.min(n, group.success));
  return { n, success, rate: n > 0 ? success / n : 0 };
}

/** Menyusun satu strata dari hitungan kontrol dan perlakuan. */
export function makeStratum(
  name: string,
  control: Group,
  treatment: Group,
): Stratum {
  return { name, control, treatment };
}

/** Kelompok dari ukuran dan proporsi keberhasilan (dibulatkan ke hitungan utuh). */
export function groupFromRate(n: number, proportion: number): Group {
  const size = Math.max(0, Math.round(n));
  const clamped = Math.max(0, Math.min(1, proportion));
  return { n: size, success: Math.round(size * clamped) };
}

/** Menggabungkan seluruh strata menjadi satu perbandingan keseluruhan. */
export function aggregate(strata: Stratum[]): {
  control: Rate;
  treatment: Rate;
  difference: number;
} {
  let controlN = 0;
  let controlSuccess = 0;
  let treatmentN = 0;
  let treatmentSuccess = 0;
  const cappedSuccess = (group: Group): number =>
    Math.max(0, Math.min(Math.max(0, group.n), group.success));
  for (const stratum of strata) {
    controlN += Math.max(0, stratum.control.n);
    controlSuccess += cappedSuccess(stratum.control);
    treatmentN += Math.max(0, stratum.treatment.n);
    treatmentSuccess += cappedSuccess(stratum.treatment);
  }
  const control = rate({ n: controlN, success: controlSuccess });
  const treatment = rate({ n: treatmentN, success: treatmentSuccess });
  return { control, treatment, difference: treatment.rate - control.rate };
}

/** Analisis lengkap: tiap strata, gabungan, dan deteksi pembalikan arah. */
export function analyze(strata: Stratum[]): ConfoundingAnalysis {
  const rows: StratumComparison[] = strata.map((stratum) => {
    const control = rate(stratum.control);
    const treatment = rate(stratum.treatment);
    return { name: stratum.name, control, treatment, difference: treatment.rate - control.rate };
  });

  const overall = aggregate(strata);
  const perStratumDifferences = rows.map((row) => row.difference);

  const direction = (difference: number): 'treatment' | 'control' | 'none' => {
    if (difference > EPS) return 'treatment';
    if (difference < -EPS) return 'control';
    return 'none';
  };

  const stratumDirection = commonDirection(perStratumDifferences);
  const overallDirection = direction(overall.difference);
  const reversed =
    stratumDirection !== 'none' &&
    overallDirection !== 'none' &&
    stratumDirection !== overallDirection;

  return {
    strata: rows,
    overallControl: overall.control,
    overallTreatment: overall.treatment,
    overallDifference: overall.difference,
    perStratumDifferences,
    stratumDirection,
    overallDirection,
    reversed,
  };
}

function commonDirection(differences: number[]): 'treatment' | 'control' | 'none' {
  const signs = differences.map((d) => (Math.abs(d) <= EPS ? 'none' : d > 0 ? 'treatment' : 'control'));
  const meaningful = signs.filter((s) => s !== 'none');
  if (meaningful.length === 0) return 'none';
  const first = meaningful[0];
  return meaningful.every((s) => s === first) ? (first as 'treatment' | 'control') : 'none';
}

/**
 * Data bawaan yang memperlihatkan paradoks Simpson: perlakuan lebih unggul di
 * **setiap** strata, tetapi kalah saat seluruh strata digabung, karena
 * perlakuan menumpuk pada strata berisiko tinggi.
 */
export function defaultStrata(): Stratum[] {
  return [
    makeStratum('Ringan', { n: 90, success: 81 }, { n: 10, success: 10 }),
    makeStratum('Berat', { n: 10, success: 2 }, { n: 90, success: 27 }),
  ];
}

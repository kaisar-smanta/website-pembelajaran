/**
 * Logika murni untuk eksplorasi pencacahan berbasis pohon keputusan.
 *
 * Menghitung banyak susunan dari $n$ objek yang diambil $k$ sekaligus dengan
 * dua sakelar: apakah **urutan diperhatikan** (permutasi) dan apakah objek
 * **boleh berulang**. Menyediakan pula faktor percabangan tiap tahap dan
 * contoh susunan untuk digambar sebagai pohon. Tanpa DOM.
 */

export interface CountingChoice {
  n: number;
  k: number;
  /** true = permutasi (urutan penting), false = kombinasi (urutan tidak penting). */
  order: boolean;
  /** true = objek boleh dipakai lebih dari sekali. */
  repetition: boolean;
}

/** Faktorial bilangan bulat tak negatif. */
export function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) return 0;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

/** Banyak permutasi $P(n,k)$: menyusun $k$ objek berbeda dari $n$ objek. */
export function permutations(n: number, k: number): number {
  if (!Number.isInteger(k) || k < 0 || k > n) return 0;
  let result = 1;
  for (let i = 0; i < k; i++) result *= n - i;
  return result;
}

/** Banyak kombinasi $\binom{n}{k}$ melalui hasil kali bertahap. */
export function combinations(n: number, k: number): number {
  if (!Number.isInteger(k) || k < 0 || k > n || n < 0) return 0;
  const kk = Math.min(k, n - k);
  let result = 1;
  for (let i = 1; i <= kk; i++) {
    result = (result * (n - kk + i)) / i;
  }
  return Math.round(result);
}

/** Banyak kombinasi dengan pengulangan $\binom{n+k-1}{k}$. */
export function combinationsWithRepetition(n: number, k: number): number {
  if (n <= 0) return 0;
  return combinations(n + k - 1, k);
}

/** Banyak susunan sesuai pilihan urutan dan pengulangan. */
export function countArrangements(choice: CountingChoice): number {
  const { n, k, order, repetition } = choice;
  if (!Number.isInteger(k) || k < 0 || n < 0) return 0;
  if (repetition) {
    return order ? Math.pow(n, k) : combinationsWithRepetition(n, k);
  }
  return order ? permutations(n, k) : combinations(n, k);
}

/** Banyak pilihan pada setiap tahap (bermakna saat urutan diperhatikan). */
export function branchingFactors(choice: CountingChoice): number[] {
  if (!choice.order) return [];
  const factors: number[] = [];
  for (let i = 0; i < choice.k; i++) {
    const choices = choice.repetition ? choice.n : choice.n - i;
    factors.push(Math.max(0, choices));
  }
  return factors;
}

/** Label rumus singkat yang bersesuaian dengan pilihan. */
export function formulaLabel(choice: CountingChoice): string {
  const { n, k, order, repetition } = choice;
  if (order && repetition) return `${n}^${k}`;
  if (order) return `P(${n}, ${k}) = ${n}!/(${n}-${k})!`;
  if (repetition) return `C(${n}+${k}-1, ${k})`;
  return `C(${n}, ${k}) = ${n}!/(${k}!(${n}-${k})!)`;
}

/** Ringkasan hasil pencacahan dalam bahasa Indonesia. */
export function describeCount(choice: CountingChoice): string {
  const count = countArrangements(choice);
  const { n, k, order, repetition } = choice;
  const jenis = order ? 'permutasi' : 'kombinasi';
  const ulang = repetition ? 'dengan pengulangan' : 'tanpa pengulangan';
  return (
    `${count} cara memilih ${k} dari ${n} objek sebagai ${jenis} ${ulang} ` +
    `(rumus ${formulaLabel(choice)}).`
  );
}

/**
 * Contoh susunan pertama (indeks 1..n) sebanyak `limit`, untuk ditampilkan
 * sebagai dedaunan pohon. Urutan mengikuti kaidah pada tiap mode.
 */
export function samplePaths(choice: CountingChoice, limit = 8): number[][] {
  const { n, k, order, repetition } = choice;
  if (!Number.isInteger(k) || k < 0 || n <= 0 || k > n * 2 + 1) return [];
  if (!order && !repetition && k > n) return [];

  const out: number[][] = [];
  const target = Math.max(0, limit);

  const push = (path: number[]): boolean => {
    out.push([...path]);
    return out.length >= target;
  };

  if (order) {
    const walk = (path: number[]): boolean => {
      if (path.length === k) return push(path);
      for (let i = 1; i <= n; i++) {
        if (!repetition && path.includes(i)) continue;
        path.push(i);
        if (walk(path)) return true;
        path.pop();
      }
      return false;
    };
    walk([]);
    return out;
  }

  // Urutan tidak penting: jaga pilihan tetap menaik (tak menurun bila berulang).
  const walkNonDecreasing = (path: number[], start: number): boolean => {
    if (path.length === k) return push(path);
    for (let i = start; i <= n; i++) {
      path.push(i);
      if (walkNonDecreasing(path, repetition ? i : i + 1)) return true;
      path.pop();
    }
    return false;
  };
  walkNonDecreasing([], 1);
  return out;
}

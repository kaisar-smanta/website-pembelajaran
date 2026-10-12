/**
 * Logika murni untuk eksplorasi induksi matematika.
 *
 * Menyediakan empat pernyataan baku yang lazim dibuktikan dengan induksi,
 * lengkap dengan suku, jumlah parsial (ruas kiri), dan bentuk tertutup yang
 * diklaim (ruas kanan). Komponen memakainya untuk menelusuri rantai domino
 * $P(1) \to P(k) \to P(k+1)$. Tanpa DOM sehingga dapat diuji dengan Node.
 */

export type InductionKind = 'sum-naturals' | 'sum-squares' | 'sum-odd' | 'power-two';

export interface InductionMeta {
  kind: InductionKind;
  /** Nama singkat pernyataan. */
  label: string;
  /** Bentuk deret ruas kiri. */
  statement: string;
  /** Bentuk tertutup yang diklaim pada ruas kanan. */
  closedForm: string;
}

/** Empat pernyataan baku beserta tampilan rumusnya. */
export const INDUCTION_KINDS: InductionMeta[] = [
  {
    kind: 'sum-naturals',
    label: 'Jumlah bilangan asli',
    statement: '1 + 2 + 3 + … + n',
    closedForm: 'n(n + 1) / 2',
  },
  {
    kind: 'sum-squares',
    label: 'Jumlah bilangan kuadrat',
    statement: '1² + 2² + 3² + … + n²',
    closedForm: 'n(n + 1)(2n + 1) / 6',
  },
  {
    kind: 'sum-odd',
    label: 'Jumlah bilangan ganjil',
    statement: '1 + 3 + 5 + … + (2n − 1)',
    closedForm: 'n²',
  },
  {
    kind: 'power-two',
    label: 'Jumlah pangkat dua',
    statement: '1 + 2 + 4 + … + 2ⁿ⁻¹',
    closedForm: '2ⁿ − 1',
  },
];

/** Metadata pernyataan dari jenisnya. */
export function inductionMeta(kind: InductionKind): InductionMeta {
  const found = INDUCTION_KINDS.find((item) => item.kind === kind);
  return found ?? INDUCTION_KINDS[0];
}

/** Suku ke-$n$ (indeks dimulai dari 1). */
export function term(kind: InductionKind, n: number): number {
  switch (kind) {
    case 'sum-naturals':
      return n;
    case 'sum-squares':
      return n * n;
    case 'sum-odd':
      return 2 * n - 1;
    case 'power-two':
      return Math.pow(2, n - 1);
  }
}

/** Jumlah suku ke-$1$ sampai ke-$n$ (ruas kiri). */
export function partialSum(kind: InductionKind, n: number): number {
  if (!Number.isFinite(n) || n <= 0) return 0;
  let total = 0;
  const last = Math.floor(n);
  for (let i = 1; i <= last; i++) total += term(kind, i);
  return total;
}

/** Bentuk tertutup yang diklaim (ruas kanan). */
export function closedForm(kind: InductionKind, n: number): number {
  switch (kind) {
    case 'sum-naturals':
      return (n * (n + 1)) / 2;
    case 'sum-squares':
      return (n * (n + 1) * (2 * n + 1)) / 6;
    case 'sum-odd':
      return n * n;
    case 'power-two':
      return Math.pow(2, n) - 1;
  }
}

/** Apakah $P(n)$ benar: ruas kiri sama dengan ruas kanan? */
export function holdsAt(kind: InductionKind, n: number): boolean {
  return Math.abs(partialSum(kind, n) - closedForm(kind, n)) < 1e-9;
}

/** Rincian langkah induksi dari $P(k)$ menuju $P(k+1)$. */
export interface InductionStep {
  k: number;
  /** Nilai ruas kiri $P(k)$. */
  partialK: number;
  /** Suku ke-$(k+1)$ yang ditambahkan. */
  nextTerm: number;
  /** Nilai ruas kiri $P(k+1)$. */
  partialK1: number;
  /** Nilai ruas kanan $P(k)$. */
  closedK: number;
  /** Nilai ruas kanan $P(k+1)$. */
  closedK1: number;
  /** Hipotesis $P(k)$ benar. */
  hypothesis: boolean;
  /** Langkah $P(k) \Rightarrow P(k+1)$ benar. */
  step: boolean;
}

/** Langkah dari $P(k)$ ke $P(k+1)$ beserta pemeriksaannya. */
export function inductionStep(kind: InductionKind, k: number): InductionStep {
  const partialK = partialSum(kind, k);
  const nextTerm = term(kind, k + 1);
  const partialK1 = partialK + nextTerm;
  const closedK = closedForm(kind, k);
  const closedK1 = closedForm(kind, k + 1);
  return {
    k,
    partialK,
    nextTerm,
    partialK1,
    closedK,
    closedK1,
    hypothesis: Math.abs(partialK - closedK) < 1e-9,
    step: Math.abs(partialK1 - closedK1) < 1e-9,
  };
}

/** Apakah basis $P(n_0)$ benar? */
export function baseCase(kind: InductionKind, n0 = 1): boolean {
  return holdsAt(kind, n0);
}

/** Satu simpul rantai domino: kebenaran $P(n)$ untuk $n$ tertentu. */
export interface ChainNode {
  n: number;
  holds: boolean;
}

/** Rantai $P(1), P(2), \dots, P(upto)$. */
export function inductionChain(kind: InductionKind, upto: number): ChainNode[] {
  const nodes: ChainNode[] = [];
  const last = Math.max(0, Math.floor(upto));
  for (let n = 1; n <= last; n++) nodes.push({ n, holds: holdsAt(kind, n) });
  return nodes;
}

/** Apakah basis dan langkah induksi sama-sama benar sampai `upto`? */
export function verifyInduction(kind: InductionKind, upto: number): boolean {
  if (!baseCase(kind)) return false;
  const chain = inductionChain(kind, upto);
  if (chain.length === 0) return false;
  for (let k = 1; k <= chain.length; k++) {
    if (!inductionStep(kind, k).step) return false;
  }
  return true;
}

/** Kalimat ringkas pernyataan yang dibuktikan. */
export function describeKind(kind: InductionKind): string {
  const meta = inductionMeta(kind);
  return `${meta.statement} = ${meta.closedForm}, untuk setiap n ≥ 1.`;
}

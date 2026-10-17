/**
 * Logika murni untuk eksplorasi fungsi piecewise dua potong.
 *
 * Model yang dipakai adalah fungsi linear dua potong dengan titik sambung $c$,
 * kemiringan kiri $m_1$, kemiringan kanan $m_2$, dan geseran vertikal $k$ yang
 * sama untuk kedua potongan:
 *
 * $$f(x)=\begin{cases} m_1 x + k, & x < c\\ m_2 x + k, & x \ge c.\end{cases}$$
 *
 * Karena kedua garis selalu berpotongan di $x=0$, grafik hanya kontinu di titik
 * sambung bila $c=0$ atau $m_1=m_2$. Selain itu muncul lompatan sebesar
 * $(m_2-m_1)c$ saat melewati $c$. Potongan kanan memuat $x=c$ sebagai titik
 * ujung tertutup, sedangkan potongan kiri menyisakan titik ujung terbuka.
 *
 * Tanpa DOM sehingga dapat diuji langsung di Node.
 */

export interface PiecewiseParams {
  /** Titik sambung tempat aturan potongan berganti. */
  c: number;
  /** Kemiringan potongan kiri (berlaku untuk $x < c$). */
  m1: number;
  /** Kemiringan potongan kanan (berlaku untuk $x \ge c$). */
  m2: number;
  /** Geseran vertikal yang sama untuk kedua potongan. */
  k: number;
}

export type PieceSide = 'left' | 'right';

export interface PiecewiseEvaluation {
  x: number;
  y: number;
  side: PieceSide;
}

export interface SamplePoint {
  x: number;
  y: number;
}

/** Titik contoh terpisah untuk tiap potongan sehingga grafik tak menyambung salah. */
export interface PiecewiseSamples {
  left: SamplePoint[];
  right: SamplePoint[];
}

export interface PiecewiseEndpoint {
  x: number;
  y: number;
  kind: 'open' | 'closed';
}

/** Ringkasan sifat fungsi di titik sambung untuk bacaan dan lencana kesinambungan. */
export interface PiecewiseAnalysis {
  leftLimit: number;
  rightValue: number;
  jump: number;
  continuous: boolean;
  open: PiecewiseEndpoint;
  closed: PiecewiseEndpoint;
}

const EPS = 1e-9;

/** Nilai potongan kiri $m_1 x + k$ di titik $x$. */
export function evalLeft(x: number, params: PiecewiseParams): number {
  return params.m1 * x + params.k;
}

/** Nilai potongan kanan $m_2 x + k$ di titik $x$. */
export function evalRight(x: number, params: PiecewiseParams): number {
  return params.m2 * x + params.k;
}

/**
 * Nilai fungsi sekaligus potongan yang berlaku. Titik sambung $x=c$ mengikuti
 * potongan kanan karena titik ujungnya tertutup.
 */
export function evaluate(x: number, params: PiecewiseParams): PiecewiseEvaluation {
  const side: PieceSide = x < params.c ? 'left' : 'right';
  return { x, y: side === 'left' ? evalLeft(x, params) : evalRight(x, params), side };
}

/** Nilai satu sisi dari kiri saat $x$ menuju $c$. */
export function leftLimit(params: PiecewiseParams): number {
  return evalLeft(params.c, params);
}

/** Nilai fungsi di titik sambung $f(c)$; potongan kanan yang memuat $x=c$. */
export function rightValue(params: PiecewiseParams): number {
  return evalRight(params.c, params);
}

/** Besar lompatan di titik sambung, yaitu nilai kanan dikurangi limit kiri. */
export function jump(params: PiecewiseParams): number {
  return rightValue(params) - leftLimit(params);
}

/** Kontinu di titik sambung bila kedua nilai satu sisinya sama. */
export function isContinuous(params: PiecewiseParams, eps = EPS): boolean {
  return Math.abs(jump(params)) <= eps;
}

/** Titik ujung terbuka, yaitu tempat potongan kiri berhenti tanpa memuat $x=c$. */
export function openEndpoint(params: PiecewiseParams): PiecewiseEndpoint {
  return { x: params.c, y: leftLimit(params), kind: 'open' };
}

/** Titik ujung tertutup, yaitu nilai $f(c)$ pada potongan kanan. */
export function closedEndpoint(params: PiecewiseParams): PiecewiseEndpoint {
  return { x: params.c, y: rightValue(params), kind: 'closed' };
}

/** Menganalisis kedua nilai satu sisi, lompatan, dan kedua titik ujung. */
export function analyze(params: PiecewiseParams): PiecewiseAnalysis {
  const l = leftLimit(params);
  const r = rightValue(params);
  return {
    leftLimit: l,
    rightValue: r,
    jump: r - l,
    continuous: Math.abs(r - l) <= EPS,
    open: openEndpoint(params),
    closed: closedEndpoint(params),
  };
}

/**
 * Contoh titik berurutan untuk tiap potongan pada rentang $[xMin, xMax]$.
 *
 * Potongan kiri diambil dari `xMin` sampai `min(c, xMax)` dan potongan kanan dari
 * `max(c, xMin)` sampai `xMax`, sehingga tiap potongan mencapai titik sambung
 * tanpa mencoba menggambar garis penghubung lompatan.
 */
export function samplePiecewise(
  params: PiecewiseParams,
  xMin: number,
  xMax: number,
  count = 120,
): PiecewiseSamples {
  const steps = Math.max(1, Math.floor(count));
  const span = (from: number, to: number, fn: (x: number) => number): SamplePoint[] => {
    if (to < from) return [];
    return Array.from({ length: steps + 1 }, (_, i) => {
      const x = from + (i / steps) * (to - from);
      return { x, y: fn(x) };
    });
  };
  return {
    left: span(xMin, Math.min(params.c, xMax), (x) => evalLeft(x, params)),
    right: span(Math.max(params.c, xMin), xMax, (x) => evalRight(x, params)),
  };
}

/** Label singkat kesinambungan untuk lencana dan bacaan komponen. */
export function continuityLabel(params: PiecewiseParams): 'kontinu' | 'tak kontinu' {
  return isContinuous(params) ? 'kontinu' : 'tak kontinu';
}

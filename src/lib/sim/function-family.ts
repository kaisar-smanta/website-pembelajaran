/**
 * Logika murni untuk eksplorasi keluarga fungsi rasional.
 *
 * Model yang dipakai adalah
 * $$f(x)=\frac{x^{2}-a^{2}}{(x-a)(x-b)}=\frac{(x-a)(x+a)}{(x-a)(x-b)}=\frac{x+a}{x-b},$$
 * yang memiliki **diskontinuitas terhapus** (lubang) di $x=a$ dan **asimtot
 * tegak** di $x=b$ serta **asimtot datar** $y=1$. Komponen menggambar grafik,
 * menandai lubang, dan menandai asimtot. Tanpa DOM sehingga dapat diuji Node.
 */

export type PointKind = 'value' | 'hole' | 'pole';

export interface PointEvaluation {
  x: number;
  /** Nilai fungsi; null bila fungsi tak terdefinisi di titik itu. */
  y: number | null;
  /** `value` = terdefinisi, `hole` = lubang, `pole` = kutub/asimtot tegak. */
  kind: PointKind;
}

export interface FunctionFamilyAnalysis {
  a: number;
  b: number;
  /** Titik lubang (diskontinuitas terhapus), bila ada. */
  hole: { x: number; y: number } | null;
  /** Letak asimtot tegak, bila ada. */
  verticalAsymptote: number | null;
  /** Nilai asimtot datar. */
  horizontalAsymptote: number;
  /** Tampilan rumus sebelum penyederhanaan. */
  expression: string;
  /** Tampilan rumus setelah faktor bersama dicoret. */
  simplified: string;
}

const EPS = 1e-9;

/** Nilai bentuk belum disederhanakan di titik $x$ (NaN bila tak terdefinisi). */
export function evalRaw(x: number, a: number, b: number): number {
  const denominator = (x - a) * (x - b);
  if (Math.abs(denominator) < EPS) return NaN;
  return (x * x - a * a) / denominator;
}

/** Nilai bentuk tersederhana $\dfrac{x+a}{x-b}$. */
export function evalSimplified(x: number, a: number, b: number): number {
  if (Math.abs(x - b) < EPS) return NaN;
  return (x + a) / (x - b);
}

/**
 * Menghitung nilai fungsi sekaligus jenis titiknya.
 *
 * Bila $a=b$, faktor $(x-a)$ tidak saling meniadakan, sehingga titik itu
 * menjadi kutub, bukan lubang.
 */
export function evaluate(x: number, a: number, b: number): PointEvaluation {
  if (Math.abs(a - b) < EPS) {
    if (Math.abs(x - a) < EPS) return { x, y: null, kind: 'pole' };
    return { x, y: (x + a) / (x - a), kind: 'value' };
  }
  if (Math.abs(x - a) < EPS) {
    // Lubang: limitnya ada, yaitu bentuk sederhana (x+a)/(x-b) dinilai di x = a,
    // sehingga ordinatnya 2a/(a-b); fungsi tetap tak terdefinisi tepat di x = a.
    return { x, y: (2 * a) / (a - b), kind: 'hole' };
  }
  if (Math.abs(x - b) < EPS) return { x, y: null, kind: 'pole' };
  return { x, y: (x + a) / (x - b), kind: 'value' };
}

/** Menganalisis lubang, asimtot tegak, dan asimtot datar. */
export function analyze(a: number, b: number): FunctionFamilyAnalysis {
  const distinct = Math.abs(a - b) > EPS;
  return {
    a,
    b,
    hole: distinct ? { x: a, y: (2 * a) / (a - b) } : null,
    verticalAsymptote: b,
    horizontalAsymptote: 1,
    expression: '(x² − a²) / ((x − a)(x − b))',
    simplified: '(x + a) / (x − b)',
  };
}

/** Contoh titik berurutan untuk digambar, dengan jeda di titik tak terdefinisi. */
export function sampleFunctionFamily(
  a: number,
  b: number,
  xMin: number,
  xMax: number,
  count = 240,
): PointEvaluation[] {
  const out: PointEvaluation[] = [];
  const steps = Math.max(1, Math.floor(count));
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    out.push(evaluate(x, a, b));
  }
  return out;
}

/** Kalimat ringkas sifat grafik. */
export function describeFunctionFamily(analysis: FunctionFamilyAnalysis): string {
  const hole = analysis.hole
    ? `lubang di (${analysis.hole.x}, ${analysis.hole.y})`
    : 'tanpa lubang';
  return `asimtot tegak x = ${analysis.verticalAsymptote}, asimtot datar y = ${analysis.horizontalAsymptote}, ${hole}.`;
}

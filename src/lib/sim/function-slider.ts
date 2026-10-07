export type Formula = 'quadratic' | 'exponential' | 'sine' | 'transform';

export type SimParams = Record<string, number>;

export interface Domain {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

export interface Vertex {
  x: number;
  y: number;
}

export interface Description {
  formula: Formula;
  text: string;
  vertex?: Vertex;
  discriminant?: number;
  discriminantKind?: 'two' | 'one' | 'none';
  opening?: 'up' | 'down' | 'none';
  amplitude?: number;
  period?: number;
  growth?: 'growth' | 'constant' | 'decay';
}

export function fmt(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return String(Number(n.toFixed(2)));
}

export function evalFormula(formula: Formula, params: SimParams, x: number): number {
  if (formula === 'quadratic') {
    const a = params.a ?? 1;
    const b = params.b ?? 0;
    const c = params.c ?? 0;
    return a * x * x + b * x + c;
  }
  if (formula === 'sine') {
    const a = params.a ?? 1;
    const k = params.k ?? 1;
    return a * Math.sin(k * x);
  }
  if (formula === 'transform') {
    const a = params.a ?? 1;
    const h = params.h ?? 0;
    const k = params.k ?? 0;
    const d = x - h;
    return a * d * d + k;
  }
  const a = params.a ?? 1;
  const b = params.b ?? 1;
  return a * Math.pow(b, x);
}

export function mapFor(formula: Formula): Domain {
  if (formula === 'quadratic' || formula === 'transform') {
    return { xMin: -8, xMax: 8, yMin: -12, yMax: 12 };
  }
  if (formula === 'sine') {
    return { xMin: -2 * Math.PI, xMax: 2 * Math.PI, yMin: -3.2, yMax: 3.2 };
  }
  return { xMin: -4, xMax: 4, yMin: -2, yMax: 18 };
}

export function describe(formula: Formula, params: SimParams): Description {
  if (formula === 'quadratic') {
    const a = params.a ?? 0;
    const b = params.b ?? 0;
    const c = params.c ?? 0;
    const D = b * b - 4 * a * c;
    const opening: Description['opening'] = a === 0 ? 'none' : a > 0 ? 'up' : 'down';
    const discriminantKind: Description['discriminantKind'] = D > 0 ? 'two' : D === 0 ? 'one' : 'none';
    let text = `a = ${a}, b = ${b}, c = ${c}. `;
    text += a === 0
      ? 'Jika a = 0, grafik bukan parabola. '
      : a > 0
        ? 'Parabola terbuka ke atas. '
        : 'Parabola terbuka ke bawah. ';
    const result: Description = { formula, text, discriminant: D, discriminantKind, opening };
    if (a !== 0) {
      const x = -b / (2 * a);
      const y = c - (b * b) / (4 * a);
      result.vertex = { x, y };
      text += `Titik puncak (${x.toFixed(2)}, ${y.toFixed(2)}). `;
    }
    text += `Diskriminan D = b² − 4ac = ${D}. `;
    text += D > 0 ? 'Dua akar real berbeda.' : D === 0 ? 'Satu akar real (kembar).' : 'Tidak memiliki akar real.';
    result.text = text;
    return result;
  }

  if (formula === 'sine') {
    const a = params.a ?? 1;
    const k = params.k ?? 1;
    const amplitude = Math.abs(a);
    const period = (2 * Math.PI) / Math.abs(k);
    return {
      formula,
      text: `Amplitudo |a| = ${amplitude}, periode = 2π / |k| ≈ ${period.toFixed(2)}.`,
      amplitude,
      period,
    };
  }

  if (formula === 'transform') {
    const a = params.a ?? 1;
    const h = params.h ?? 0;
    const k = params.k ?? 0;
    const opening: Description['opening'] = a === 0 ? 'none' : a > 0 ? 'up' : 'down';
    let text = `a = ${fmt(a)}, h = ${fmt(h)}, k = ${fmt(k)}. Titik puncak (${fmt(h)}, ${fmt(k)}). `;
    text += a === 0
      ? 'Jika a = 0, grafik bukan parabola. '
      : a > 0
        ? 'Parabola terbuka ke atas. '
        : 'Parabola terbuka ke bawah. ';
    text += `Transformasi dari y = x²: translasi horizontal ${fmt(h)} satuan, translasi vertikal ${fmt(k)} satuan, `;
    if (a === 1) text += 'tanpa dilatasi atau pencerminan (a = 1).';
    else if (a === -1) text += 'pencerminan terhadap sumbu x (a = -1).';
    else if (a < 0) text += `pencerminan terhadap sumbu x dan dilatasi vertikal dengan faktor ${fmt(Math.abs(a))} (a = ${fmt(a)}).`;
    else text += `dilatasi vertikal dengan faktor ${fmt(a)} (a = ${fmt(a)}).`;
    return { formula, text, vertex: { x: h, y: k }, opening };
  }

  const a = params.a ?? 1;
  const b = params.b ?? 1;
  const growth: Description['growth'] = b > 1 ? 'growth' : b === 1 ? 'constant' : 'decay';
  const mode = b > 1 ? 'pertumbuhan (naik)' : b === 1 ? 'konstan' : 'peluruhan (turun)';
  return {
    formula,
    text: `a = ${a}, b = ${b}. Karena b ${b > 1 ? '>' : b === 1 ? '=' : '<'} 1, grafik menunjukkan ${mode}. Nilai f(0) = ${a}, dan f(x+1) = ${b} × f(x).`,
    growth,
  };
}

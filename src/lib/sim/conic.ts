/**
 * Logika murni untuk eksplorasi irisan kerucut: elips, parabola, dan hiperbola
 * (tanpa DOM), sehingga dapat diuji dengan Node.
 *
 * Kurva disampling menjadi daftar titik agar komponen cukup memetakan titik ke
 * SVG. `null` menandai jeda antar cabang (mis. dua cabang hiperbola).
 */

import { formatPlain } from '../format.ts';

export type ConicKind = 'ellipse' | 'parabola' | 'hyperbola';

export interface ConicParams {
  /** Setengah sumbu-$x$ (elips/hiperbola) atau parameter fokus (parabola). */
  a: number;
  /** Setengah sumbu-$y$ (elips/hiperbola); tidak dipakai parabola. */
  b: number;
  /** Koordinat-$x$ pusat / titik puncak. */
  h: number;
  /** Koordinat-$y$ pusat / titik puncak. */
  k: number;
}

export interface Vec2 {
  x: number;
  y: number;
}

/** Fokus kurva. Elips dan hiperbola punya dua; parabola satu. */
export function conicFoci(kind: ConicKind, p: ConicParams): Vec2[] {
  if (kind === 'parabola') return [{ x: p.h, y: p.k + p.a }];
  if (kind === 'hyperbola') {
    const c = Math.sqrt(p.a * p.a + p.b * p.b);
    return [
      { x: p.h - c, y: p.k },
      { x: p.h + c, y: p.k },
    ];
  }
  if (p.a >= p.b) {
    const c = Math.sqrt(p.a * p.a - p.b * p.b);
    return [
      { x: p.h - c, y: p.k },
      { x: p.h + c, y: p.k },
    ];
  }
  const c = Math.sqrt(p.b * p.b - p.a * p.a);
  return [
    { x: p.h, y: p.k - c },
    { x: p.h, y: p.k + c },
  ];
}

/** Titik puncak kurva pada sumbu utama. */
export function conicVertices(kind: ConicKind, p: ConicParams): Vec2[] {
  if (kind === 'parabola') return [{ x: p.h, y: p.k }];
  if (kind === 'hyperbola') {
    return [
      { x: p.h - p.a, y: p.k },
      { x: p.h + p.a, y: p.k },
    ];
  }
  if (p.a >= p.b) {
    return [
      { x: p.h - p.a, y: p.k },
      { x: p.h + p.a, y: p.k },
      { x: p.h, y: p.k - p.b },
      { x: p.h, y: p.k + p.b },
    ];
  }
  return [
    { x: p.h - p.a, y: p.k },
    { x: p.h + p.a, y: p.k },
    { x: p.h, y: p.k - p.b },
    { x: p.h, y: p.k + p.b },
  ];
}

/** Eksentrisitas: elips $0<e<1$, parabola $e=1$, hiperbola $e>1$. */
export function conicEccentricity(kind: ConicKind, p: ConicParams): number {
  if (kind === 'parabola') return 1;
  if (kind === 'hyperbola') {
    const c = Math.sqrt(p.a * p.a + p.b * p.b);
    return c / Math.abs(p.a);
  }
  const focal = Math.abs(p.a * p.a - p.b * p.b);
  const c = Math.sqrt(focal);
  return c / Math.max(Math.abs(p.a), Math.abs(p.b));
}

/** Persamaan garis arah (direktris) parabola: $y = k - a$. */
export function parabolaDirectrix(p: ConicParams): number {
  return p.k - p.a;
}

/**
 * Menyampel kurva menjadi titik-titik. Untuk hiperbola, dua cabang dipisahkan
 * oleh `null` agar tidak tersambung garis lurus di tengah.
 */
export function sampleConic(
  kind: ConicKind,
  p: ConicParams,
  samples = 160,
): Array<[number, number] | null> {
  const out: Array<[number, number] | null> = [];
  if (kind === 'ellipse') {
    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * 2 * Math.PI;
      out.push([p.h + p.a * Math.cos(t), p.k + p.b * Math.sin(t)]);
    }
    return out;
  }
  if (kind === 'hyperbola') {
    const a = Math.max(Math.abs(p.a), 1e-6);
    const b = Math.max(Math.abs(p.b), 1e-6);
    const tMax = 2.2;
    const branch = (sign: number) => {
      for (let i = 0; i <= samples; i++) {
        const t = -tMax + (i / samples) * 2 * tMax;
        out.push([p.h + sign * a * Math.cosh(t), p.k + b * Math.sinh(t)]);
      }
    };
    branch(1);
    out.push(null);
    branch(-1);
    return out;
  }
  const a = Math.abs(p.a) < 1e-6 ? 1 : p.a;
  const span = 8;
  const step = (2 * span) / samples;
  for (let i = 0; i <= samples; i++) {
    const x = p.h - span + i * step;
    const y = p.k + ((x - p.h) * (x - p.h)) / (4 * a);
    out.push([x, y]);
  }
  return out;
}

/** Uraian verbal unsur utama kurva. */
export function describeConic(kind: ConicKind, p: ConicParams): string {
  const f = (v: number) => formatPlain(Number(v.toFixed(2)));
  if (kind === 'ellipse') {
    const e = conicEccentricity(kind, p);
    return `Elips berpusat (${f(p.h)}, ${f(p.k)}) dengan setengah sumbu a = ${formatPlain(p.a)} dan b = ${formatPlain(p.b)}. Fokus di (${conicFoci(kind, p).map((q) => `${f(q.x)}, ${f(q.y)}`).join(') dan (')}). Eksentrisitas e = ${f(e)} (0 < e < 1).`;
  }
  if (kind === 'hyperbola') {
    const e = conicEccentricity(kind, p);
    return `Hiperbola berpusat (${f(p.h)}, ${f(p.k)}), membuka ke kiri dan kanan, dengan a = ${formatPlain(p.a)} dan b = ${formatPlain(p.b)}. Fokus di (${conicFoci(kind, p).map((q) => `${f(q.x)}, ${f(q.y)}`).join(') dan (')}). Eksentrisitas e = ${f(e)} (e > 1).`;
  }
  const v = conicVertices(kind, p)[0];
  return `Parabola berpuncak (${f(v.x)}, ${f(v.y)}) dan membuka ke ${p.a >= 0 ? 'atas' : 'bawah'}. Fokus di (${f(p.h)}, ${f(p.k + p.a)}) dan direktris y = ${f(parabolaDirectrix(p))}. Eksentrisitas e = 1.`;
}

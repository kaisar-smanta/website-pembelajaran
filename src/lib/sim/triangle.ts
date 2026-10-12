/**
 * Logika murni untuk eksplorasi segitiga sembarang (aturan sinus dan kosinus).
 *
 * Diberikan dua sudut dan satu sisi (kasus AAS/ASA), aturan sinus menentukan
 * sudut ketiga dan kedua sisi lainnya:
 * $$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}.$$
 * Modul ini tanpa DOM sehingga dapat diuji di Node.
 */

export interface TriangleSolution {
  /** Sudut dalam derajat. */
  A: number;
  B: number;
  C: number;
  /** Sisi di hadapan sudut yang bersesuaian. */
  a: number;
  b: number;
  c: number;
  /** Luas segitiga. */
  area: number;
  /** Jari-jari lingkaran luar $R = \dfrac{a}{2\sin A}$. */
  circumradius: number;
}

const toRad = (deg: number): number => (deg * Math.PI) / 180;

/**
 * Menyelesaikan segitiga dari dua sudut $A$, $B$ dan sisi $a$ di hadapan $A$.
 * Mengembalikan `null` bila data tidak membentuk segitiga sah.
 */
export function solveTriangleAAS(A: number, B: number, a: number): TriangleSolution | null {
  if (!(A > 0) || !(B > 0) || !(a > 0)) return null;
  if (A + B >= 180) return null;
  const C = 180 - A - B;
  const sinA = Math.sin(toRad(A));
  const sinB = Math.sin(toRad(B));
  const sinC = Math.sin(toRad(C));
  const b = (a * sinB) / sinA;
  const c = (a * sinC) / sinA;
  const area = 0.5 * a * b * sinC;
  const circumradius = a / (2 * sinA);
  return { A, B, C, a, b, c, area, circumradius };
}

/**
 * Luas dari dua sisi dan sudut apitnya (kasus SAS).
 * Melempar `RangeError` bila masukan tidak sah (sisi tidak positif, sudut tidak
 * di antara 0° dan 180°, atau ada nilai tak berhingga).
 */
export function areaFromSAS(a: number, b: number, C: number): number {
  if (![a, b, C].every(Number.isFinite)) {
    throw new RangeError('areaFromSAS: a, b, dan C harus bilangan berhingga.');
  }
  if (a <= 0 || b <= 0) {
    throw new RangeError('areaFromSAS: panjang sisi a dan b harus positif.');
  }
  if (C <= 0 || C >= 180) {
    throw new RangeError('areaFromSAS: sudut apit C harus di antara 0° dan 180°.');
  }
  return 0.5 * a * b * Math.sin(toRad(C));
}

export interface Vertex {
  x: number;
  y: number;
}

/**
 * Koordinat titik sudut pada bidang: $A$ di titik asal, $B$ pada sumbu-$x$
 * sejauh $c$, dan $C$ sejauh $b$ dengan sudut $A$ dari sumbu-$x$.
 * Melempar `TypeError` bila solusi tidak diberikan dan `RangeError` bila
 * sudut/sisi tidak sah (bukan bilangan berhingga, sisi tidak positif, atau
 * $A+B\ge 180^\circ$).
 */
export function triangleVertices(sol: TriangleSolution): [Vertex, Vertex, Vertex] {
  if (!sol || typeof sol !== 'object') {
    throw new TypeError('triangleVertices: solusi segitiga tidak diberikan.');
  }
  const values = [sol.A, sol.B, sol.C, sol.a, sol.b, sol.c];
  if (!values.every((value) => Number.isFinite(value))) {
    throw new RangeError('triangleVertices: sudut dan sisi harus bilangan berhingga.');
  }
  if (sol.a <= 0 || sol.b <= 0 || sol.c <= 0) {
    throw new RangeError('triangleVertices: panjang sisi a, b, dan c harus positif.');
  }
  if (sol.A <= 0 || sol.B <= 0 || sol.C <= 0 || sol.A + sol.B >= 180) {
    throw new RangeError(
      'triangleVertices: sudut harus positif dan A + B harus kurang dari 180°.',
    );
  }
  const vertexA: Vertex = { x: 0, y: 0 };
  const vertexB: Vertex = { x: sol.c, y: 0 };
  const vertexC: Vertex = {
    x: sol.b * Math.cos(toRad(sol.A)),
    y: sol.b * Math.sin(toRad(sol.A)),
  };
  return [vertexA, vertexB, vertexC];
}

/** Memeriksa kesetaraan rasio aturan sinus (untuk validasi). */
export function sineRuleRatios(sol: TriangleSolution): number[] {
  return [
    sol.a / Math.sin(toRad(sol.A)),
    sol.b / Math.sin(toRad(sol.B)),
    sol.c / Math.sin(toRad(sol.C)),
  ];
}

/** Kalimat ringkas sifat segitiga. */
export function describeTriangle(sol: TriangleSolution): string {
  return `Sudut A = ${sol.A}°, B = ${sol.B}°, C = ${sol.C}°; sisi a = ${sol.a}, b = ${sol.b.toFixed(3)}, c = ${sol.c.toFixed(3)}; luas ≈ ${sol.area.toFixed(3)}.`;
}

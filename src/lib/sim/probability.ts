/**
 * Logika murni untuk eksplorasi peluang (tanpa DOM).
 *
 * Menyediakan daftar hasil beserta label dan peluang teoretisnya untuk
 * percobaan koin, satu dadu, dan jumlah dua dadu, serta fungsi pengambilan
 * satu sampel acak.
 */

export type ProbKind = 'koin' | 'dadu' | 'dua-dadu';

export interface Outcome {
  key: string;
  label: string;
  p: number;
}

/** Batas aman banyaknya percobaan per simulasi agar UI tidak membeku. */
export const MAX_TRIALS = 100000;

/** Daftar hasil untuk sebuah jenis percobaan beserta peluang teoretisnya. */
export function outcomesFor(kind: ProbKind): Outcome[] {
  if (kind === 'koin') {
    return [
      { key: 'Angka', label: 'Angka', p: 0.5 },
      { key: 'Gambar', label: 'Gambar', p: 0.5 },
    ];
  }
  if (kind === 'dua-dadu') {
    const list: Outcome[] = [];
    for (let k = 2; k <= 12; k++) {
      list.push({ key: String(k), label: `Jumlah ${k}`, p: (6 - Math.abs(k - 7)) / 36 });
    }
    return list;
  }
  return [1, 2, 3, 4, 5, 6].map((d) => ({ key: String(d), label: `Mata ${d}`, p: 1 / 6 }));
}

/** Mengambil satu hasil acak sesuai jenis percobaan. */
export function sampleOnce(kind: ProbKind): string {
  if (kind === 'koin') return Math.random() < 0.5 ? 'Angka' : 'Gambar';
  if (kind === 'dua-dadu') {
    const a = Math.floor(Math.random() * 6) + 1;
    const b = Math.floor(Math.random() * 6) + 1;
    return String(a + b);
  }
  return String(Math.floor(Math.random() * 6) + 1);
}

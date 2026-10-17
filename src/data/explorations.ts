/**
 * Registri eksplorasi interaktif.
 *
 * Isi dipisah ke `src/data/explorations/bagian-*.ts` agar berkas tidak lagi
 * monolitik; digabung **berurutan** di sini sehingga urutan entri tetap sama
 * (beranda menampilkan eksplorasi unggulan pertama). Ini sumber kebenaran:
 * halaman `/eksplorasi`, beranda, dan sisipan materi membaca data ini.
 */

import type { Exploration, Grade } from '@/types/content';
import { GRADE_RANK } from './curriculum.ts';
import { explorationsBagian1 } from './explorations/bagian-1.ts';
import { explorationsBagian2 } from './explorations/bagian-2.ts';
import { explorationsBagian3 } from './explorations/bagian-3.ts';
import { explorationsBagian4 } from './explorations/bagian-4.ts';
import { explorationsBagian5 } from './explorations/bagian-5.ts';
import { explorationsBagian6 } from './explorations/bagian-6.ts';

export const explorations: Exploration[] = [
  ...explorationsBagian1,
  ...explorationsBagian2,
  ...explorationsBagian3,
  ...explorationsBagian4,
  ...explorationsBagian5,
  ...explorationsBagian6,
];

const byId = new Map<string, Exploration>(explorations.map((e) => [e.id, e]));

export function getExploration(id: string): Exploration | undefined {
  return byId.get(id);
}

/** Semua eksplorasi berstatus lengkap, diurutkan berdasarkan kelas lalu `order`. */
export function orderedExplorations(): Exploration[] {
  return explorations
    .filter((e) => (e.status ?? 'lengkap') === 'lengkap')
    .slice()
    .sort(
      (a, b) =>
        (GRADE_RANK[a.grade ?? 'X'] ?? 9) - (GRADE_RANK[b.grade ?? 'X'] ?? 9) ||
        (a.order ?? 999) - (b.order ?? 999) ||
        a.title.localeCompare(b.title),
    );
}

/** Eksplorasi per kelas. */
export function explorationsByGrade(grade: Grade): Exploration[] {
  return orderedExplorations().filter((e) => e.grade === grade);
}

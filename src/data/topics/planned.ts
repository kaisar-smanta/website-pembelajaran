import type { ElementId, Grade, SubjectId } from '@/types/content';

export interface PlannedTopic {
  id: string;
  slug: string;
  title: string;
  grade: Grade;
  element: ElementId;
  /** Mata pelajaran; kosong berarti 'matematika'. */
  subject?: SubjectId;
  status: 'rencana';
  summary: string;
}

/**
 * Topik yang tercantum dalam peta kurikulum namun materinya masih dalam tahap
 * pengembangan. Ditampilkan sebagai penanda roadmap, bukan tautan kosong.
 * Saat ini kosong: transformasi geometri, limit fungsi, dan distribusi binomial
 * sudah ditulis penuh (lihat src/data/topics/*.ts).
 */
export const plannedTopics: PlannedTopic[] = [];

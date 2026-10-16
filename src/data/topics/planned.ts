import type { Topic } from '@/types/content';

/** Topik roadmap: subset field `Topic` dengan status tetap `rencana`. */
export type PlannedTopic = Pick<
  Topic,
  'id' | 'slug' | 'title' | 'grade' | 'element' | 'subject' | 'summary'
> & { status: 'rencana' };

/**
 * Topik yang tercantum dalam peta kurikulum namun materinya masih dalam tahap
 * pengembangan. Ditampilkan sebagai penanda roadmap, bukan tautan kosong.
 * Saat ini kosong: transformasi geometri, limit fungsi, dan distribusi binomial
 * sudah ditulis penuh (lihat src/data/topics/*.ts).
 */
export const plannedTopics: PlannedTopic[] = [];

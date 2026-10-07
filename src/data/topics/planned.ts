import type { ElementId, Grade } from '@/types/content';

export interface PlannedTopic {
  id: string;
  slug: string;
  title: string;
  grade: Grade;
  element: ElementId;
  status: 'rencana';
  summary: string;
}

/**
 * Topik yang tercantum dalam peta kurikulum namun materinya masih dalam tahap
 * pengembangan. Ditampilkan sebagai penanda roadmap, bukan tautan kosong.
 *
 * Seluruh topik roadmap tahap pertama (sistem pertidaksamaan, statistik dalam
 * kehidupan, persamaan eksponen-logaritma, pemodelan fungsi, pinjaman dan
 * investasi, permutasi dan kombinasi) kini sudah lengkap. Daftar ini dipertahankan
 * sebagai wadah untuk topik rencana berikutnya.
 */
export const plannedTopics: PlannedTopic[] = [];

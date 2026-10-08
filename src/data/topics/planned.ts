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
 */
export const plannedTopics: PlannedTopic[] = [
  {
    id: 'transformasi-geometri',
    slug: 'transformasi-geometri',
    title: 'Transformasi Geometri',
    grade: 'XII',
    element: 'geometri',
    status: 'rencana',
    summary:
      'Menerapkan translasi, refleksi, rotasi, dan dilatasi untuk memindahkan serta mengubah ukuran bangun pada bidang koordinat.',
  },
  {
    id: 'limit-fungsi',
    slug: 'limit-fungsi',
    title: 'Limit Fungsi',
    grade: 'XII',
    element: 'kalkulus',
    subject: 'matematika-lanjut',
    status: 'rencana',
    summary:
      'Menaksir nilai fungsi ketika variabel mendekati suatu titik sebagai jembatan menuju turunan dan integral.',
  },
  {
    id: 'distribusi-binomial',
    slug: 'distribusi-binomial',
    title: 'Distribusi Binomial',
    grade: 'XII',
    element: 'data-peluang',
    subject: 'matematika-lanjut',
    status: 'rencana',
    summary:
      'Menyusun distribusi peluang percobaan berulang dua hasil dan menghitung nilai harapannya pada konteks nyata.',
  },
];

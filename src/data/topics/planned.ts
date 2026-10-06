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
 */
export const plannedTopics: PlannedTopic[] = [
  {
    id: 'sistem-pertidaksamaan',
    slug: 'sistem-pertidaksamaan',
    title: 'Sistem Pertidaksamaan Linear',
    grade: 'X',
    element: 'aljabar-fungsi',
    status: 'rencana',
    summary:
      'Pertidaksamaan linear dua variabel, daerah penyelesaian, dan pemodelan kendala.',
  },
  {
    id: 'statistik-dalam-kehidupan',
    slug: 'statistik-dalam-kehidupan',
    title: 'Statistik dalam Kehidupan',
    grade: 'X',
    element: 'data-peluang',
    status: 'rencana',
    summary:
      'Membaca dan mengevaluasi informasi statistik di media serta mengenali kesimpulan yang menyesatkan.',
  },
  {
    id: 'persamaan-eksponen-logaritma',
    slug: 'persamaan-eksponen-logaritma',
    title: 'Persamaan Eksponen dan Logaritma',
    grade: 'X',
    element: 'bilangan',
    status: 'rencana',
    summary: 'Menyelesaikan persamaan eksponen dan memperkenalkan logaritma sebagai inversnya.',
  },
  {
    id: 'pemodelan-fungsi',
    slug: 'pemodelan-fungsi',
    title: 'Pemodelan Fungsi',
    grade: 'XI',
    element: 'aljabar-fungsi',
    status: 'rencana',
    summary:
      'Alur lengkap dari situasi nyata, asumsi, variabel, fungsi, grafik, hingga interpretasi.',
  },
  {
    id: 'pinjaman-investasi',
    slug: 'pinjaman-investasi',
    title: 'Pinjaman dan Investasi',
    grade: 'XII',
    element: 'bilangan',
    status: 'rencana',
    summary:
      'Membangun model, membandingkan alternatif pinjaman dan investasi, serta mengambil keputusan.',
  },
  {
    id: 'permutasi-kombinasi',
    slug: 'permutasi-kombinasi',
    title: 'Permutasi dan Kombinasi',
    grade: 'XII',
    element: 'data-peluang',
    status: 'rencana',
    summary: 'Aturan pencacahan, permutasi, dan kombinasi untuk menghitung banyak cara.',
  },
];

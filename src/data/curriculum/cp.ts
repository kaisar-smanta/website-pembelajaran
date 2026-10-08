import type { ElementId, Grade, Phase } from '@/types/content';

/**
 * Registri Capaian Pembelajaran (CP) yang berlaku beserta pemetaannya ke topik.
 *
 * Berkas ini adalah satu-satunya tempat CP "dikodekan". Saat regulasi berganti,
 * cukup:
 *   1. tandai regulasi lama `status: 'digantikan'`;
 *   2. tambahkan regulasi baru dengan `supersedes` berisi id lama;
 *   3. perbarui daftar `cpStatements` (tambah/ubah/hapus) beserta `topicIds`;
 *   4. jalankan `npm test` — tests/cp-coverage.mjs akan menunjukkan pernyataan CP
 *      tanpa topik dan topik yang belum dipetakan (kecuali `supplementary`).
 *
 * Teks CP di sini adalah parafrasa terverifikasi untuk keperluan instruksional,
 * BUKAN salinan resmi. Cocokkan selalu dengan dokumen resmi yang berlaku.
 */

export interface Regulation {
  id: string;
  /** Nomor keputusan, mis. '046/H/KR/2025'. */
  number: string;
  /** Pejabat/lembaga penerbit. */
  issuer: string;
  title: string;
  /**
   * Tanggal mulai berlaku (ISO, YYYY-MM-DD). Wajib untuk regulasi berstatus
   * 'berlaku'. Boleh dikosongkan untuk regulasi arsip yang tanggal pastinya
   * belum diverifikasi, agar tidak menuliskan tanggal yang keliru.
   */
  effectiveDate?: string;
  /** Id regulasi yang digantikan oleh regulasi ini. */
  supersedes: string[];
  /** 'berlaku' = acuan situs saat ini; 'digantikan' = arsip. */
  status: 'berlaku' | 'digantikan';
  /** Catatan penting, mis. cakupan atau pengecualian. */
  note?: string;
}

export interface CpStatement {
  /** Kode stabil, mis. 'E-BIL-1'. */
  id: string;
  /** Id regulasi induk pada `regulations`. */
  regulation: string;
  phase: Phase;
  element: ElementId;
  /** Kelas yang dicakup pernyataan ini. */
  grades: Grade[];
  /** Parafrasa capaian, bukan salinan resmi. */
  text: string;
  /** Id topik (src/data/topics) yang memenuhi pernyataan ini. */
  topicIds: string[];
}

export const regulations: Regulation[] = [
  {
    id: 'bskap-046-2025',
    number: '046/H/KR/2025',
    issuer: 'Kepala Badan Standar, Kurikulum, dan Asesmen Pendidikan (BSKAP), Kemendikdasmen',
    title:
      'Capaian Pembelajaran pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah',
    effectiveDate: '2025-07-16',
    supersedes: ['bskap-032-2024'],
    status: 'berlaku',
    note: 'Matematika SMA tercantum pada Lampiran II.',
  },
  {
    id: 'bskap-032-2024',
    number: '032/H/KR/2024',
    issuer: 'Kepala Badan Standar, Kurikulum, dan Asesmen Pendidikan (BSKAP), Kemendikbudristek',
    title: 'Capaian Pembelajaran pada Kurikulum Merdeka',
    supersedes: [],
    status: 'digantikan',
    note: 'Arsip. Digantikan oleh Kepka BSKAP No. 046/H/KR/2025 untuk seluruh jenjang.',
  },
];

/** Regulasi yang menjadi acuan situs saat ini. */
export function activeRegulation(): Regulation {
  const found = regulations.find((r) => r.status === 'berlaku');
  if (!found) throw new Error('Tidak ada regulasi CP berstatus "berlaku".');
  return found;
}

export function getRegulation(id: string): Regulation | undefined {
  return regulations.find((r) => r.id === id);
}

export const cpStatements: CpStatement[] = [
  // ---------------- Fase E (Kelas X) ----------------
  {
    id: 'E-BIL-1',
    regulation: 'bskap-046-2025',
    phase: 'E',
    element: 'bilangan',
    grades: ['X'],
    text: 'Menggeneralisasi sifat bilangan berpangkat, termasuk pangkat pecahan, dan menggunakannya untuk menyelesaikan masalah.',
    topicIds: ['eksponen'],
  },
  {
    id: 'E-ALJ-1',
    regulation: 'bskap-046-2025',
    phase: 'E',
    element: 'aljabar-fungsi',
    grades: ['X'],
    text: 'Menyelesaikan masalah yang melibatkan sistem pertidaksamaan linear dua variabel.',
    topicIds: ['sistem-pertidaksamaan'],
  },
  {
    id: 'E-ALJ-2',
    regulation: 'bskap-046-2025',
    phase: 'E',
    element: 'aljabar-fungsi',
    grades: ['X'],
    text: 'Menyelesaikan masalah persamaan dan fungsi kuadrat, termasuk akar imajiner.',
    topicIds: ['fungsi-kuadrat'],
  },
  {
    id: 'E-ALJ-3',
    regulation: 'bskap-046-2025',
    phase: 'E',
    element: 'aljabar-fungsi',
    grades: ['X'],
    text: 'Menyelesaikan masalah persamaan dan fungsi eksponensial dengan basis sama.',
    topicIds: ['fungsi-eksponensial'],
  },
  {
    id: 'E-GEO-1',
    regulation: 'bskap-046-2025',
    phase: 'E',
    element: 'geometri',
    grades: ['X'],
    text: 'Menerapkan perbandingan trigonometri (sinus, kosinus, tangen) pada sudut lancip.',
    topicIds: ['trigonometri'],
  },
  {
    id: 'E-DAT-1',
    regulation: 'bskap-046-2025',
    phase: 'E',
    element: 'data-peluang',
    grades: ['X'],
    text: 'Menentukan jangkauan kuartil dan interkuartil serta membuat dan menafsirkan box plot, histogram, dan dot plot untuk membandingkan data.',
    topicIds: ['analisis-distribusi-data'],
  },
  {
    id: 'E-DAT-2',
    regulation: 'bskap-046-2025',
    phase: 'E',
    element: 'data-peluang',
    grades: ['X'],
    text: 'Menggunakan diagram pencar untuk menyelidiki hubungan dua variabel numerik.',
    topicIds: ['analisis-distribusi-data'],
  },
  {
    id: 'E-DAT-3',
    regulation: 'bskap-046-2025',
    phase: 'E',
    element: 'data-peluang',
    grades: ['X'],
    text: 'Mengevaluasi laporan statistika di media, termasuk data yang disajikan dalam bentuk matriks.',
    topicIds: ['statistik-dalam-kehidupan'],
  },

  // ---------------- Fase F (Kelas XI–XII) ----------------
  {
    id: 'F-BIL-1',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'bilangan',
    grades: ['XI'],
    text: 'Menjelaskan barisan dan deret aritmetika dan geometri serta menerapkannya.',
    topicIds: ['barisan-deret'],
  },
  {
    id: 'F-BIL-2',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'bilangan',
    grades: ['XI'],
    text: 'Menerapkan barisan dan deret pada masalah bunga tunggal dan bunga majemuk.',
    topicIds: ['bunga-majemuk'],
  },
  {
    id: 'F-BIL-3',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'bilangan',
    grades: ['XI', 'XII'],
    text: 'Memodelkan pinjaman dan investasi dengan bunga majemuk dan anuitas, serta menyelidiki pengaruh suku bunga dan periode pembayaran secara numerik atau grafis.',
    topicIds: ['anuitas', 'pinjaman-investasi'],
  },
  {
    id: 'F-ALJ-1',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'aljabar-fungsi',
    grades: ['XI'],
    text: 'Menentukan fungsi invers untuk memodelkan situasi nyata.',
    topicIds: ['fungsi-invers'],
  },
  {
    id: 'F-ALJ-2',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'aljabar-fungsi',
    grades: ['XI'],
    text: 'Menentukan komposisi fungsi untuk memodelkan situasi nyata.',
    topicIds: ['komposisi-fungsi'],
  },
  {
    id: 'F-ALJ-3',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'aljabar-fungsi',
    grades: ['XI'],
    text: 'Menerapkan transformasi fungsi untuk memodelkan situasi nyata dengan fungsi linear, kuadrat, atau eksponensial.',
    topicIds: ['transformasi-fungsi', 'pemodelan-fungsi'],
  },
  {
    id: 'F-GEO-1',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'geometri',
    grades: ['XI'],
    text: 'Menerapkan dan menjelaskan hubungan antarunsur lingkaran untuk menyelesaikan masalah.',
    topicIds: ['lingkaran'],
  },
  {
    id: 'F-DAT-1',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'data-peluang',
    grades: ['XI', 'XII'],
    text: 'Melakukan penyelidikan statistika untuk menjelaskan asosiasi antara dua variabel kategorikal dan antara dua variabel numerik.',
    topicIds: ['data-bivariat', 'asosiasi-kausalitas', 'peluang-bersyarat'],
  },
  {
    id: 'F-DAT-2',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'data-peluang',
    grades: ['XI', 'XII'],
    text: 'Memperkirakan model linear terbaik (best fit) pada data numerik serta membedakan asosiasi dari sebab-akibat.',
    topicIds: ['regresi', 'asosiasi-kausalitas'],
  },
  {
    id: 'F-DAT-3',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'data-peluang',
    grades: ['XI'],
    text: 'Menentukan frekuensi harapan kejadian majemuk.',
    topicIds: ['peluang'],
  },
  {
    id: 'F-DAT-4',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'data-peluang',
    grades: ['XI'],
    text: 'Menyelidiki kejadian saling bebas dan saling lepas serta peluangnya.',
    topicIds: ['peluang'],
  },
  {
    id: 'F-DAT-5',
    regulation: 'bskap-046-2025',
    phase: 'F',
    element: 'data-peluang',
    grades: ['XII'],
    text: 'Memahami peluang bersyarat dengan menggunakan permutasi dan kombinasi.',
    topicIds: ['peluang-bersyarat', 'permutasi-kombinasi'],
  },
];

/** Pernyataan CP untuk satu fase. */
export function cpStatementsByPhase(phase: Phase): CpStatement[] {
  return cpStatements.filter((s) => s.phase === phase);
}

/** Pernyataan CP untuk satu fase dan elemen. */
export function cpStatementsByElement(phase: Phase, element: ElementId): CpStatement[] {
  return cpStatements.filter((s) => s.phase === phase && s.element === element);
}

/** Pernyataan CP yang dipetakan ke sebuah topik. */
export function cpForTopic(topicId: string): CpStatement[] {
  return cpStatements.filter((s) => s.topicIds.includes(topicId));
}

/** Seluruh id topik yang diacu oleh minimal satu pernyataan CP. */
export function cpCoveredTopicIds(): Set<string> {
  return new Set(cpStatements.flatMap((s) => s.topicIds));
}

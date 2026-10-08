import type { ElementId, Grade, Phase, SubjectId } from '@/types/content';

export interface ElementMeta {
  id: ElementId;
  name: string;
  short: string;
  description: string;
  /** nama berkas ikon svg inline sederhana, lihat ElementIcon.astro */
  icon: string;
  accent: string;
}

export const ELEMENTS: Record<ElementId, ElementMeta> = {
  bilangan: {
    id: 'bilangan',
    name: 'Bilangan',
    short: 'Bilangan',
    description:
      'Eksponen, bentuk akar, barisan dan deret, serta matematika keuangan seperti bunga dan anuitas.',
    icon: 'number',
    accent: 'element-number',
  },
  'aljabar-fungsi': {
    id: 'aljabar-fungsi',
    name: 'Aljabar dan Fungsi',
    short: 'Aljabar & Fungsi',
    description:
      'Sistem persamaan, fungsi kuadrat dan eksponensial, matriks, komposisi, invers, serta transformasi fungsi.',
    icon: 'function',
    accent: 'element-algebra',
  },
  geometri: {
    id: 'geometri',
    name: 'Geometri',
    short: 'Geometri',
    description:
      'Trigonometri, lingkaran, dan transformasi geometri: hubungan sudut, sisi, busur, juring, serta perpindahan dan perubahan ukuran bangun pada bidang koordinat.',
    icon: 'geometry',
    accent: 'element-geometry',
  },
  'data-peluang': {
    id: 'data-peluang',
    name: 'Analisis Data dan Peluang',
    short: 'Data & Peluang',
    description:
      'Distribusi data, data bivariat, regresi, asosiasi dan kausalitas, peluang dan kombinatorika, serta variabel acak dan distribusi binomial.',
    icon: 'data',
    accent: 'element-data',
  },
  kalkulus: {
    id: 'kalkulus',
    name: 'Kalkulus',
    short: 'Kalkulus',
    description:
      'Limit sebagai nilai yang didekati fungsi, laju perubahan dan turunan, penerapan turunan untuk gradien, garis singgung, kecepatan, dan optimasi, serta integral sebagai kebalikan turunan dan penghitung luas.',
    icon: 'calculus',
    accent: 'element-calculus',
  },
};

/** Urutan elemen untuk mata pelajaran Matematika (wajib). */
export const ELEMENT_ORDER: ElementId[] = [
  'bilangan',
  'aljabar-fungsi',
  'geometri',
  'data-peluang',
];

/** Seluruh elemen lintas mata pelajaran (termasuk Kalkulus). */
export const ALL_ELEMENT_ORDER: ElementId[] = [
  'bilangan',
  'aljabar-fungsi',
  'geometri',
  'kalkulus',
  'data-peluang',
];

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  short: string;
  description: string;
  /** Fase yang dicakup. */
  phases: Phase[];
  /** Kelas yang dicakup. */
  grades: Grade[];
  /** Urutan elemen khas mata pelajaran ini. */
  elements: ElementId[];
  /** Mata pelajaran pilihan (bukan wajib). */
  elective: boolean;
  /** Alokasi jam pelajaran (JP) total bila diketahui dari regulasi. */
  hours?: number;
  accent: string;
  /**
   * Deskripsi kelas khas mata pelajaran ini. Bila kosong, dipakai deskripsi
   * umum pada `GRADES` (yang disusun untuk Matematika).
   */
  gradeDescriptions?: Partial<Record<Grade, string>>;
}

/**
 * Dua mata pelajaran yang didukung situs. Matematika Lanjut (Matematika
 * Tingkat Lanjut) hanya ada pada Fase F (Kelas XI–XII) dan tidak memuat elemen
 * Bilangan, tetapi menambah elemen Kalkulus.
 */
export const SUBJECTS: Record<SubjectId, SubjectMeta> = {
  matematika: {
    id: 'matematika',
    name: 'Matematika',
    short: 'Matematika',
    description:
      'Mata pelajaran wajib Fase E–F: bilangan, aljabar dan fungsi, geometri, serta analisis data dan peluang.',
    phases: ['E', 'F'],
    grades: ['X', 'XI', 'XII'],
    elements: ['bilangan', 'aljabar-fungsi', 'geometri', 'data-peluang'],
    elective: false,
    accent: 'subject-matematika',
  },
  'matematika-lanjut': {
    id: 'matematika-lanjut',
    name: 'Matematika Tingkat Lanjut',
    short: 'Mat. Lanjut',
    description:
      'Mata pelajaran pilihan Fase F untuk memperkuat abstraksi dan menyiapkan bidang STEM: polinomial, matriks dan transformasi geometri, trigonometri lanjut, vektor, irisan kerucut, limit, turunan, integral, variabel acak diskret, serta distribusi binomial.',
    phases: ['F'],
    grades: ['XI', 'XII'],
    elements: ['aljabar-fungsi', 'geometri', 'kalkulus', 'data-peluang'],
    elective: true,
    hours: 800,
    accent: 'subject-lanjut',
    gradeDescriptions: {
      XI: 'Penguatan abstraksi: polinomial, matriks dan transformasi geometri, trigonometri lanjut, vektor, serta irisan kerucut.',
      XII: 'Kalkulus dan peluang lanjutan: limit, turunan, penerapannya, integral, variabel acak diskret, serta distribusi binomial untuk bidang STEM.',
    },
  },
};

export const SUBJECT_ORDER: SubjectId[] = ['matematika', 'matematika-lanjut'];

/** Urutan elemen untuk suatu mata pelajaran. */
export function elementOrderFor(subject: SubjectId): ElementId[] {
  return SUBJECTS[subject].elements;
}

/** Kelas yang dicakup suatu mata pelajaran. */
export function gradesFor(subject: SubjectId): Grade[] {
  return SUBJECTS[subject].grades;
}

/** Fase yang dicakup suatu mata pelajaran. */
export function phasesFor(subject: SubjectId): Phase[] {
  return SUBJECTS[subject].phases;
}

/** Mata pelajaran sebuah entri; entri lama tanpa penanda dianggap Matematika. */
export function subjectOf(entry: { subject?: SubjectId } | undefined): SubjectId {
  return entry?.subject ?? 'matematika';
}

export interface GradeMeta {
  id: Grade;
  phase: Phase;
  name: string;
  label: string;
  description: string;
}

export const GRADES: Record<Grade, GradeMeta> = {
  X: {
    id: 'X',
    phase: 'E',
    name: 'Kelas X',
    label: 'Fase E',
    description:
      'Fondasi bilangan, aljabar, geometri, serta analisis data dan peluang pada awal jenjang SMA.',
  },
  XI: {
    id: 'XI',
    phase: 'F',
    name: 'Kelas XI',
    label: 'Fase F',
    description:
      'Penguatan barisan dan deret, fungsi, matriks, lingkaran, statistika bivariat, dan peluang pada jenjang menengah.',
  },
  XII: {
    id: 'XII',
    phase: 'F',
    name: 'Kelas XII',
    label: 'Fase F',
    description:
      'Matematika keuangan, pemodelan, penalaran statistis, dan peluang bersyarat untuk pengambilan keputusan.',
  },
};

export const GRADE_ORDER: Grade[] = ['X', 'XI', 'XII'];

export const ELEMENT_LABELS: Record<ElementId, string> = {
  bilangan: 'Bilangan',
  'aljabar-fungsi': 'Aljabar dan Fungsi',
  geometri: 'Geometri',
  kalkulus: 'Kalkulus',
  'data-peluang': 'Analisis Data dan Peluang',
};

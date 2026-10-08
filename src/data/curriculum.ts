import type { ElementId, Grade, Phase } from '@/types/content';

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
      'Trigonometri dan lingkaran: hubungan sudut, sisi, busur, juring, serta penerapannya dalam pengukuran.',
    icon: 'geometry',
    accent: 'element-geometry',
  },
  'data-peluang': {
    id: 'data-peluang',
    name: 'Analisis Data dan Peluang',
    short: 'Data & Peluang',
    description:
      'Distribusi data, data bivariat, regresi, asosiasi dan kausalitas, serta peluang dan kombinatorika.',
    icon: 'data',
    accent: 'element-data',
  },
};

export const ELEMENT_ORDER: ElementId[] = [
  'bilangan',
  'aljabar-fungsi',
  'geometri',
  'data-peluang',
];

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
  'data-peluang': 'Analisis Data dan Peluang',
};

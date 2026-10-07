import type { Application, ApplicationCategory, ElementId, Grade } from '@/types/content';
import { keuanganApplications } from './keuangan.ts';
import { dataApplications } from './data.ts';
import { pertumbuhanApplications } from './pertumbuhan.ts';
import { pengukuranApplications } from './pengukuran.ts';

export interface ApplicationCategoryMeta {
  name: string;
  description: string;
  /** Elemen kurikulum yang menjadi payung kategori. */
  element: ElementId;
  /** Token warna aksen untuk kartu dan bagan. */
  accent: string;
}

/**
 * Satu-satunya sumber kebenaran metadata kategori.
 *
 * Sebelumnya pemetaan kategori -> elemen dan aksen diduplikasi di halaman
 * `/aplikasi` dan komponen beranda dengan urutan yang berbeda. Sekarang semua
 * konsumen membaca objek ini.
 */
export const applicationCategories: Record<ApplicationCategory, ApplicationCategoryMeta> = {
  keuangan: {
    name: 'Keuangan',
    description: 'Bunga, anuitas, investasi, dan pinjaman dalam keputusan finansial.',
    element: 'bilangan',
    accent: 'var(--color-number)',
  },
  data: {
    name: 'Data',
    description: 'Survei, statistik di media, regresi, dan keputusan berbasis data.',
    element: 'data-peluang',
    accent: 'var(--color-data)',
  },
  pertumbuhan: {
    name: 'Pertumbuhan & Peluruhan',
    description: 'Populasi, investasi, dan peluruhan zat yang mengikuti pola eksponensial.',
    element: 'aljabar-fungsi',
    accent: 'var(--color-algebra)',
  },
  pengukuran: {
    name: 'Pengukuran',
    description: 'Jarak, tinggi, sudut, luas, dan volume yang diukur secara tidak langsung.',
    element: 'geometri',
    accent: 'var(--color-geometry)',
  },
};

export const applicationCategoryOrder: ApplicationCategory[] = [
  'keuangan',
  'data',
  'pertumbuhan',
  'pengukuran',
];

export const applications: Application[] = [
  ...keuanganApplications,
  ...dataApplications,
  ...pertumbuhanApplications,
  ...pengukuranApplications,
];

export function getApplication(id: string): Application | undefined {
  return applications.find((a) => a.id === id);
}

export function applicationsForTopic(topicId: string): Application[] {
  return applications.filter((a) => a.topicIds.includes(topicId));
}

export function applicationsByCategory(category: ApplicationCategory): Application[] {
  return applications.filter((a) => a.category === category);
}

export function applicationsByGrade(grade: Grade): Application[] {
  return applications.filter((a) => a.grade === grade);
}

export function applicationsByElement(element: ElementId): Application[] {
  return applications.filter((a) => a.element === element);
}

/**
 * Studi kasus yang paling relevan dengan sebuah studi kasus: diurutkan dari
 * irisan topik terbanyak, lalu kategori yang sama, lalu elemen yang sama.
 */
export function relatedApplications(id: string, limit = 4): Application[] {
  const base = getApplication(id);
  if (!base) return [];
  const baseTopics = new Set(base.topicIds);
  return applications
    .filter((a) => a.id !== id)
    .map((a) => {
      const shared = a.topicIds.filter((t) => baseTopics.has(t)).length;
      const score = shared * 4 + (a.category === base.category ? 2 : 0) + (a.element === base.element ? 1 : 0);
      return { a, score };
    })
    .sort((x, y) => y.score - x.score || x.a.title.localeCompare(y.a.title, 'id'))
    .slice(0, limit)
    .map((entry) => entry.a);
}

import type { Application, ApplicationCategory, ElementId } from '@/types/content';
import { ELEMENT_COLOR } from '../display.ts';
import { keuanganApplications } from './keuangan.ts';
import { dataApplications } from './data.ts';
import { pertumbuhanApplications } from './pertumbuhan.ts';
import { pengukuranApplications } from './pengukuran.ts';
import { lanjutApplications } from './lanjut.ts';

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
/** Metadata kategori tanpa aksen; aksen diturunkan dari `element`. */
type ApplicationCategoryBase = Omit<ApplicationCategoryMeta, 'accent'>;

const APPLICATION_CATEGORY_BASE: Record<ApplicationCategory, ApplicationCategoryBase> = {
  keuangan: {
    name: 'Keuangan',
    description: 'Bunga, anuitas, investasi, dan pinjaman dalam keputusan finansial.',
    element: 'bilangan',
  },
  data: {
    name: 'Data',
    description: 'Survei, statistik di media, regresi, dan keputusan berbasis data.',
    element: 'data-peluang',
  },
  pertumbuhan: {
    name: 'Pertumbuhan & Peluruhan',
    description: 'Populasi, investasi, dan peluruhan zat yang mengikuti pola eksponensial.',
    element: 'aljabar-fungsi',
  },
  pengukuran: {
    name: 'Pengukuran',
    description: 'Jarak, tinggi, sudut, luas, dan volume yang diukur secara tidak langsung.',
    element: 'geometri',
  },
  kalkulus: {
    name: 'Perubahan & Akumulasi',
    description: 'Laju perubahan, optimasi, dan akumulasi; inti Matematika Tingkat Lanjut.',
    element: 'kalkulus',
  },
};

export const applicationCategories: Record<ApplicationCategory, ApplicationCategoryMeta> =
  Object.fromEntries(
    Object.entries(APPLICATION_CATEGORY_BASE).map(([id, meta]) => [
      id,
      { ...meta, accent: ELEMENT_COLOR[meta.element] },
    ]),
  ) as Record<ApplicationCategory, ApplicationCategoryMeta>;

export const applicationCategoryOrder: ApplicationCategory[] = Object.keys(
  applicationCategories,
) as ApplicationCategory[];

export const applications: Application[] = [
  ...keuanganApplications,
  ...dataApplications,
  ...pertumbuhanApplications,
  ...pengukuranApplications,
  ...lanjutApplications,
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

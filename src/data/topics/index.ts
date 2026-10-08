import type { ElementId, Grade, Topic } from '@/types/content';
import { eksponen } from './eksponen';
import { barisanDeret } from './barisan-deret';
import { spltv } from './spltv';
import { fungsiKuadrat } from './fungsi-kuadrat';
import { fungsiEksponensial } from './fungsi-eksponensial';
import { trigonometri } from './trigonometri';
import { analisisDistribusiData } from './analisis-distribusi-data';
import { bungaMajemuk } from './bunga-majemuk';
import { anuitas } from './anuitas';
import { matriks } from './matriks';
import { fungsiInvers } from './fungsi-invers';
import { komposisiFungsi } from './komposisi-fungsi';
import { transformasiFungsi } from './transformasi-fungsi';
import { lingkaran } from './lingkaran';
import { dataBivariat } from './data-bivariat';
import { regresi } from './regresi';
import { peluang } from './peluang';
import { asosiasiKausalitas } from './asosiasi-kausalitas';
import { peluangBersyarat } from './peluang-bersyarat';
import { persamaanEksponenLogaritma } from './persamaan-eksponen-logaritma';
import { sistemPertidaksamaan } from './sistem-pertidaksamaan';
import { statistikDalamKehidupan } from './statistik-dalam-kehidupan';
import { pemodelanFungsi } from './pemodelan-fungsi';
import { pinjamanInvestasi } from './pinjaman-investasi';
import { permutasiKombinasi } from './permutasi-kombinasi';
import { plannedTopics } from './planned';
import { enhanceTopic, sectionSearchText } from './enhance';

export { plannedTopics, sectionSearchText };

/** Daftar seluruh topik yang materinya sudah lengkap. */
const rawTopics: Topic[] = [
  persamaanEksponenLogaritma,
  eksponen,
  barisanDeret,
  spltv,
  sistemPertidaksamaan,
  fungsiKuadrat,
  fungsiEksponensial,
  trigonometri,
  statistikDalamKehidupan,
  analisisDistribusiData,
  bungaMajemuk,
  anuitas,
  matriks,
  fungsiInvers,
  pemodelanFungsi,
  komposisiFungsi,
  transformasiFungsi,
  lingkaran,
  dataBivariat,
  regresi,
  peluang,
  asosiasiKausalitas,
  peluangBersyarat,
  permutasiKombinasi,
  pinjamanInvestasi,
];

/** Topik lengkap setelah peningkatan interaktivitas (lihat enhance.ts). */
export const topics: Topic[] = rawTopics.map(enhanceTopic);

const byId = new Map<string, Topic>(topics.map((t) => [t.id, t]));

export function getTopic(id: string): Topic | undefined {
  return byId.get(id);
}

export function topicsByGrade(grade: Grade): Topic[] {
  return topics.filter((t) => t.grade === grade);
}

export function topicsByElement(element: ElementId): Topic[] {
  return topics.filter((t) => t.element === element);
}

export function topicsByGradeElement(grade: Grade, element: ElementId): Topic[] {
  return topics.filter((t) => t.grade === grade && t.element === element);
}

export function featuredTopics(): Topic[] {
  return topics.filter((t) => t.featured);
}

export function resolveTopics(ids: string[] | undefined): Topic[] {
  if (!ids) return [];
  return ids.map((id) => byId.get(id)).filter((t): t is Topic => Boolean(t));
}

/** Semua topik (lengkap + rencana) untuk peta pembelajaran. */
export function allTopicEntries(): Array<
  Pick<Topic, 'id' | 'slug' | 'title' | 'grade' | 'element' | 'status' | 'summary'>
> {
  const complete = topics.map((t) => ({
    id: t.id,
    slug: t.slug,
    title: t.title,
    grade: t.grade,
    element: t.element,
    status: t.status ?? ('lengkap' as const),
    summary: t.summary,
  }));
  return [...complete, ...plannedTopics];
}

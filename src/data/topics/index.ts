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
import { plannedTopics } from './planned';

export { plannedTopics };

/** Daftar seluruh topik yang materinya sudah lengkap. */
export const topics: Topic[] = [
  eksponen,
  barisanDeret,
  spltv,
  fungsiKuadrat,
  fungsiEksponensial,
  trigonometri,
  analisisDistribusiData,
  bungaMajemuk,
  anuitas,
  matriks,
  fungsiInvers,
  komposisiFungsi,
  transformasiFungsi,
  lingkaran,
  dataBivariat,
  regresi,
  peluang,
  asosiasiKausalitas,
  peluangBersyarat,
];

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

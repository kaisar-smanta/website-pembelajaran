import type { ElementId, Grade, SubjectId, Topic } from '@/types/content';
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
import { polinomial } from './polinomial';
import { matriksTransformasi } from './matriks-transformasi';
import { trigonometriLanjut } from './trigonometri-lanjut';
import { vektor } from './vektor';
import { irisanKerucut } from './irisan-kerucut';
import { turunan } from './turunan';
import { aplikasiTurunan } from './aplikasi-turunan';
import { integral } from './integral';
import { variabelAcakDiskret } from './variabel-acak-diskret';
import { limitFungsi } from './limit-fungsi';
import { distribusiBinomial } from './distribusi-binomial';
import { transformasiGeometri } from './transformasi-geometri';
import { induksiMatematika } from './induksi-matematika';
import { teoriBilangan } from './teori-bilangan';
import { ketaksamaan } from './ketaksamaan';
import { kombinatorikaLanjut } from './kombinatorika-lanjut';
import { plannedTopics } from './planned';
import { sectionSearchText } from '@/lib/content-text';

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
  transformasiGeometri,
  lingkaran,
  dataBivariat,
  regresi,
  peluang,
  asosiasiKausalitas,
  peluangBersyarat,
  permutasiKombinasi,
  pinjamanInvestasi,
  // Matematika Tingkat Lanjut (Fase F)
  polinomial,
  matriksTransformasi,
  trigonometriLanjut,
  vektor,
  irisanKerucut,
  turunan,
  aplikasiTurunan,
  integral,
  variabelAcakDiskret,
  // Pengayaan di luar CP resmi
  limitFungsi,
  distribusiBinomial,
  induksiMatematika,
  teoriBilangan,
  ketaksamaan,
  kombinatorikaLanjut,
];

/** Seluruh topik; blok interaktif sudah ditulis langsung pada tiap berkas. */
export const topics: Topic[] = rawTopics;

const byId = new Map<string, Topic>(topics.map((t) => [t.id, t]));

export function getTopic(id: string): Topic | undefined {
  return byId.get(id);
}

/** Mata pelajaran sebuah topik; topik lama tanpa penanda dianggap Matematika. */
export function topicSubject(topic: Topic): SubjectId {
  return topic.subject ?? 'matematika';
}

export function topicsBySubject(subject: SubjectId): Topic[] {
  return topics.filter((t) => topicSubject(t) === subject);
}

export function topicsBySubjectGrade(subject: SubjectId, grade: Grade): Topic[] {
  return topics.filter((t) => topicSubject(t) === subject && t.grade === grade);
}

export function topicsBySubjectElement(subject: SubjectId, element: ElementId): Topic[] {
  return topics.filter((t) => topicSubject(t) === subject && t.element === element);
}

export function topicsBySubjectGradeElement(
  subject: SubjectId,
  grade: Grade,
  element: ElementId,
): Topic[] {
  return topics.filter(
    (t) => topicSubject(t) === subject && t.grade === grade && t.element === element,
  );
}

export function resolveTopics(ids: string[] | undefined): Topic[] {
  if (!ids) return [];
  return ids.map((id) => byId.get(id)).filter((t): t is Topic => Boolean(t));
}

import type { Difficulty, Question } from '@/types/content';
import { eksponenQuestions } from './eksponen';
import { barisanDeretQuestions } from './barisan-deret';
import { spltvQuestions } from './spltv';
import { fungsiKuadratQuestions } from './fungsi-kuadrat';
import { fungsiEksponensialQuestions } from './fungsi-eksponensial';
import { trigonometriQuestions } from './trigonometri';
import { analisisDistribusiDataQuestions } from './analisis-distribusi-data';
import { bungaMajemukQuestions } from './bunga-majemuk';
import { anuitasQuestions } from './anuitas';
import { matriksQuestions } from './matriks';
import { fungsiInversQuestions } from './fungsi-invers';
import { komposisiFungsiQuestions } from './komposisi-fungsi';
import { transformasiFungsiQuestions } from './transformasi-fungsi';
import { lingkaranQuestions } from './lingkaran';
import { dataBivariatQuestions } from './data-bivariat';
import { regresiQuestions } from './regresi';
import { peluangQuestions } from './peluang';
import { peluangBersyaratQuestions } from './peluang-bersyarat';
import { asosiasiKausalitasQuestions } from './asosiasi-kausalitas';
import { persamaanEksponenLogaritmaQuestions } from './persamaan-eksponen-logaritma';
import { sistemPertidaksamaanQuestions } from './sistem-pertidaksamaan';
import { statistikDalamKehidupanQuestions } from './statistik-dalam-kehidupan';
import { pemodelanFungsiQuestions } from './pemodelan-fungsi';
import { pinjamanInvestasiQuestions } from './pinjaman-investasi';
import { permutasiKombinasiQuestions } from './permutasi-kombinasi';
import { polinomialQuestions } from './polinomial';
import { matriksTransformasiQuestions } from './matriks-transformasi';
import { trigonometriLanjutQuestions } from './trigonometri-lanjut';
import { vektorQuestions } from './vektor';
import { irisanKerucutQuestions } from './irisan-kerucut';
import { turunanQuestions } from './turunan';
import { aplikasiTurunanQuestions } from './aplikasi-turunan';
import { integralQuestions } from './integral';
import { variabelAcakDiskretQuestions } from './variabel-acak-diskret';
import { limitFungsiQuestions } from './limit-fungsi';
import { distribusiBinomialQuestions } from './distribusi-binomial';
import { transformasiGeometriQuestions } from './transformasi-geometri';
import { induksiMatematikaQuestions } from './induksi-matematika';
import { teoriBilanganQuestions } from './teori-bilangan';
import { ketaksamaanQuestions } from './ketaksamaan';
import { kombinatorikaLanjutQuestions } from './kombinatorika-lanjut';

/** Seluruh bank soal. Tambahkan berkas per topik lalu impor di sini. */
export const questions: Question[] = [
  eksponenQuestions,
  barisanDeretQuestions,
  spltvQuestions,
  sistemPertidaksamaanQuestions,
  fungsiKuadratQuestions,
  fungsiEksponensialQuestions,
  persamaanEksponenLogaritmaQuestions,
  trigonometriQuestions,
  statistikDalamKehidupanQuestions,
  analisisDistribusiDataQuestions,
  bungaMajemukQuestions,
  anuitasQuestions,
  matriksQuestions,
  fungsiInversQuestions,
  komposisiFungsiQuestions,
  pemodelanFungsiQuestions,
  transformasiFungsiQuestions,
  transformasiGeometriQuestions,
  lingkaranQuestions,
  dataBivariatQuestions,
  regresiQuestions,
  peluangQuestions,
  peluangBersyaratQuestions,
  asosiasiKausalitasQuestions,
  permutasiKombinasiQuestions,
  pinjamanInvestasiQuestions,
  // Matematika Tingkat Lanjut (Fase F)
  polinomialQuestions,
  matriksTransformasiQuestions,
  trigonometriLanjutQuestions,
  vektorQuestions,
  irisanKerucutQuestions,
  turunanQuestions,
  aplikasiTurunanQuestions,
  integralQuestions,
  variabelAcakDiskretQuestions,
  // Pengayaan di luar CP resmi
  limitFungsiQuestions,
  distribusiBinomialQuestions,
  induksiMatematikaQuestions,
  teoriBilanganQuestions,
  ketaksamaanQuestions,
  kombinatorikaLanjutQuestions,
].flat();

const byId = new Map<string, Question>(questions.map((q) => [q.id, q]));

export function getQuestion(id: string): Question | undefined {
  return byId.get(id);
}

export function questionsByTopic(topicId: string): Question[] {
  return questions.filter((q) => q.topicId === topicId);
}

export function questionsByDifficulty(difficulty: Difficulty): Question[] {
  return questions.filter((q) => q.difficulty === difficulty);
}

export function questionsByTopicAndDifficulty(topicId: string, difficulty: Difficulty): Question[] {
  return questions.filter((q) => q.topicId === topicId && q.difficulty === difficulty);
}

/** Id topik yang memiliki setidaknya satu soal pada bank. */
export function topicIdsWithQuestions(): string[] {
  return Array.from(new Set(questions.map((q) => q.topicId)));
}

/** Jumlah soal per tingkat kesulitan untuk satu topik. */
export function practiceCounts(topicId: string): { dasar: number; cakap: number; mahir: number } {
  const items = questionsByTopic(topicId);
  return {
    dasar: items.filter((q) => q.difficulty === 'dasar').length,
    cakap: items.filter((q) => q.difficulty === 'cakap').length,
    mahir: items.filter((q) => q.difficulty === 'mahir').length,
  };
}

export function questionsByCategory(category: Question['category']): Question[] {
  return questions.filter((q) => q.category === category);
}

export const assessmentCategories: { id: NonNullable<Question['category']>; name: string; description: string }[] = [
  { id: 'cepat', name: 'Latihan Cepat', description: 'Soal singkat untuk memanaskan pemahaman.' },
  { id: 'konsep', name: 'Pemahaman Konsep', description: 'Memeriksa pengertian, bukan sekadar hitungan.' },
  { id: 'penerapan', name: 'Penerapan', description: 'Menggunakan konsep pada masalah terstruktur.' },
  { id: 'pemodelan', name: 'Pemodelan', description: 'Membentuk model matematika dari situasi.' },
  { id: 'penalaran', name: 'Penalaran', description: 'Membuktikan, menilai, dan menyusun argumen.' },
  { id: 'kontekstual', name: 'Soal Kontekstual', description: 'Masalah nyata dengan interpretasi.' },
  { id: 'evaluasi', name: 'Evaluasi Bab', description: 'Campuran soal untuk mengukur capaian.' },
];

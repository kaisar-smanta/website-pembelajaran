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

/** Seluruh bank soal. Tambahkan berkas per topik lalu impor di sini. */
export const questions: Question[] = [
  eksponenQuestions,
  barisanDeretQuestions,
  spltvQuestions,
  fungsiKuadratQuestions,
  fungsiEksponensialQuestions,
  trigonometriQuestions,
  analisisDistribusiDataQuestions,
  bungaMajemukQuestions,
  anuitasQuestions,
  matriksQuestions,
  fungsiInversQuestions,
  komposisiFungsiQuestions,
  transformasiFungsiQuestions,
  lingkaranQuestions,
  dataBivariatQuestions,
  regresiQuestions,
  peluangQuestions,
  peluangBersyaratQuestions,
  asosiasiKausalitasQuestions,
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

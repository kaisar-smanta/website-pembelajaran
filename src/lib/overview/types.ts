/**
 * Tipe dan konstanta bersama untuk ringkasan kemajuan lintas situs.
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi, sehingga dapat
 * dipanggil dari skrip peramban maupun diuji terpisah.
 */

import type { ElementId, Grade, SubjectId } from '@/types/content';

/** Satu topik yang ditampilkan di dasbor, sudah lengkap untuk dirender. */
export interface TopicEntry {
  id: string;
  slug: string;
  title: string;
  grade: Grade;
  gradeName: string;
  element: ElementId;
  elementName: string;
  subject: SubjectId;
  subjectName: string;
  /** Seluruh id soal topik ini di bank soal. */
  questionIds: string[];
  /** Jumlah blok dugaan (prediksi) di seluruh bagian topik. */
  predictions: number;
  /** Jumlah blok refleksi di seluruh bagian topik. */
  reflections: number;
  /** Tautan halaman latihan topik. */
  practiceHref: string;
  /** Tautan halaman materi topik. */
  materialHref: string;
  /** Id topik prasyarat, dipakai untuk mengurutkan saran awal. */
  prerequisites?: string[];
  /**
   * Id penyimpanan blok aktivitas interaktif topik (`topik:bagian:indeks`),
   * dipakai untuk menaksir kemajuan aktivitas (flip-cards, tabs, dsb.).
   */
  activityIds?: string[];
  /**
   * Topik pengayaan yang melampaui tuntutan CP. Dipakai agar dasbor dapat
   * memisahkan kemajuan materi pengayaan dari materi wajib.
   */
  supplementary?: boolean;
}

/** Rekaman berstempel waktu; `at` dipakai di sini dan `confidence` untuk refleksi. */
export interface StampedRecord {
  at?: number;
  confidence?: number;
  text?: string;
}

/** Kemajuan satu topik, hasil gabungan soal, dugaan, dan refleksi. */
export interface TopicOverview extends TopicEntry {
  answered: number;
  correct: number;
  gradedAnswered: number;
  total: number;
  /** 0..1, hanya dari soal yang dinilai otomatis. */
  accuracy: number;
  predictionCount: number;
  reflectionCount: number;
  /** Aktivitas interaktif yang sudah tuntas (match, step-reveal, flip-cards, tabs, ...). */
  activityDone: number;
  /** Seluruh aktivitas interaktif topik ini. */
  activityTotal: number;
  activityCount: number;
  /** Waktu aktivitas terakhir (epoch ms); 0 bila belum ada. */
  lastAt: number;
  started: boolean;
  completed: boolean;
}

export type MasteryBand = 'belum' | 'berlatih' | 'cukup' | 'mahir';

export interface MasteryTopicInput {
  id: string;
  slug: string;
  title: string;
  gradeName: string;
  elementName: string;
  element?: string;
  practiceHref: string;
  materialHref: string;
  answered: number;
  correct: number;
  gradedAnswered: number;
  total: number;
  lastAt?: number;
  supplementary?: boolean;
}

export interface TopicMastery {
  id: string;
  slug: string;
  title: string;
  gradeName: string;
  elementName: string;
  element?: string;
  practiceHref: string;
  materialHref: string;
  answered: number;
  correct: number;
  gradedAnswered: number;
  total: number;
  accuracy: number;
  completion: number;
  band: MasteryBand;
  lastAt: number;
  supplementary?: boolean;
}

export interface MasterySummary {
  bands: Record<MasteryBand, number>;
  topics: TopicMastery[];
  focus: TopicMastery[];
  thresholdCukup: number;
  thresholdMahir: number;
}

export const MASTERY_THRESHOLD_CUKUP = 0.7;
export const MASTERY_THRESHOLD_MAHIR = 0.85;

export interface ConfidenceTopicInput {
  id: string;
  title: string;
  practiceHref: string;
}

export interface LowConfidenceEntry {
  key: string;
  topicId: string;
  topicTitle: string;
  practiceHref: string;
  confidence: number;
  at: number;
  text: string;
}

export interface ConfidenceSummary {
  total: number;
  rated: number;
  average: number | null;
  low: LowConfidenceEntry[];
  lowLimit: number;
}

/** Ringkasan kemajuan khusus topik pengayaan, dipisahkan dari materi wajib. */
export interface EnrichmentSummary {
  /** Seluruh topik pengayaan yang terdaftar. */
  total: number;
  /** Topik pengayaan yang sudah disentuh. */
  started: number;
  /** Topik pengayaan yang seluruh soalnya sudah dikerjakan. */
  completed: number;
  /** Topik pengayaan yang sudah dimulai, diurutkan aktivitas terbaru. */
  topics: TopicOverview[];
  /** Soal pengayaan yang dikerjakan dan seluruh soal pengayaan. */
  answered: number;
  totalQuestions: number;
  /** 0..1, ketepatan soal pengayaan yang dinilai otomatis. */
  accuracy: number;
}

export interface SiteOverview {
  topics: TopicOverview[];
  totalQuestions: number;
  answered: number;
  correct: number;
  gradedAnswered: number;
  accuracy: number;
  topicsStarted: number;
  topicsCompleted: number;
  predictions: number;
  reflections: number;
  /** Jumlah aktivitas interaktif tuntas di seluruh topik. */
  activities: number;
  lastAt: number;
  hasData: boolean;
  mastery: MasterySummary;
  confidence: ConfidenceSummary;
  /** Kemajuan materi pengayaan, terhitung dari penanda `supplementary`. */
  enrichment: EnrichmentSummary;
}

export interface ElementGroup {
  element: ElementId;
  elementName: string;
  topics: TopicOverview[];
  answered: number;
  total: number;
  correct: number;
  gradedAnswered: number;
  accuracy: number;
}

export interface GradeGroup {
  grade: Grade;
  gradeName: string;
  elements: ElementGroup[];
  answered: number;
  total: number;
}

export interface SubjectGroup {
  subject: SubjectId;
  subjectName: string;
  grades: GradeGroup[];
  answered: number;
  total: number;
  correct: number;
  gradedAnswered: number;
  accuracy: number;
}

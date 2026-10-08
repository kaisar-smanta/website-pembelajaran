/**
 * Ringkasan kemajuan lintas situs untuk halaman `/kemajuan`.
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi, sehingga dapat
 * dipanggil dari skrip peramban maupun diuji terpisah. Daftar topik (beserta
 * id soal dan tautannya) disiapkan saat build lalu diserahkan ke fungsi di
 * sini bersama peta yang dibaca dari `localStorage`.
 */

import type { ElementId, Grade, SubjectId } from '@/types/content';
import { summarize, type ProgressMap } from './progress.ts';

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
}

/** Rekaman berstempel waktu; hanya `at` yang dipakai di sini. */
export interface StampedRecord {
  at?: number;
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
  activityCount: number;
  /** Waktu aktivitas terakhir (epoch ms); 0 bila belum ada. */
  lastAt: number;
  started: boolean;
  completed: boolean;
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
  lastAt: number;
  hasData: boolean;
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

/** Id topik pemilik sebuah kunci penyimpanan interaksi (`topik:bagian:indeks`). */
export function topicOfStorageKey(key: string): string {
  const i = key.indexOf(':');
  return i === -1 ? key : key.slice(0, i);
}

function maxStamp(...times: (number | undefined)[]): number {
  let max = 0;
  for (const t of times) if (typeof t === 'number' && t > max) max = t;
  return max;
}

function tally(
  records: Record<string, StampedRecord>,
): Map<string, { count: number; at: number }> {
  const out = new Map<string, { count: number; at: number }>();
  for (const [key, record] of Object.entries(records)) {
    const topicId = topicOfStorageKey(key);
    const current = out.get(topicId) ?? { count: 0, at: 0 };
    current.count += 1;
    if (record && typeof record.at === 'number' && record.at > current.at) {
      current.at = record.at;
    }
    out.set(topicId, current);
  }
  return out;
}

/** Menghitung kemajuan seluruh topik dari peta penyimpanan. */
export function buildOverview(
  entries: TopicEntry[],
  progress: ProgressMap,
  predictions: Record<string, StampedRecord>,
  reflections: Record<string, StampedRecord>,
): SiteOverview {
  const predictionIndex = tally(predictions);
  const reflectionIndex = tally(reflections);

  const topics: TopicOverview[] = entries.map((entry) => {
    const summary = summarize(progress, entry.questionIds);
    let gradedAnswered = 0;
    let lastQuestionAt = 0;
    for (const id of entry.questionIds) {
      const attempt = progress[id];
      if (!attempt) continue;
      if (attempt.graded !== false) gradedAnswered += 1;
      if (typeof attempt.at === 'number' && attempt.at > lastQuestionAt) {
        lastQuestionAt = attempt.at;
      }
    }

    const prediction = predictionIndex.get(entry.id);
    const reflection = reflectionIndex.get(entry.id);
    const predictionCount = prediction?.count ?? 0;
    const reflectionCount = reflection?.count ?? 0;
    const activityCount = summary.answered + predictionCount + reflectionCount;
    const completed = summary.total > 0 && summary.answered >= summary.total;

    return {
      ...entry,
      answered: summary.answered,
      correct: summary.correct,
      gradedAnswered,
      total: summary.total,
      accuracy: summary.accuracy,
      predictionCount,
      reflectionCount,
      activityCount,
      lastAt: maxStamp(lastQuestionAt, prediction?.at, reflection?.at),
      started: activityCount > 0,
      completed,
    };
  });

  let totalQuestions = 0;
  let answered = 0;
  let correct = 0;
  let gradedAnswered = 0;
  let topicsStarted = 0;
  let topicsCompleted = 0;
  let predictionsTotal = 0;
  let reflectionsTotal = 0;
  let lastAt = 0;

  for (const topic of topics) {
    totalQuestions += topic.total;
    answered += topic.answered;
    correct += topic.correct;
    gradedAnswered += topic.gradedAnswered;
    if (topic.started) topicsStarted += 1;
    if (topic.completed) topicsCompleted += 1;
    predictionsTotal += topic.predictionCount;
    reflectionsTotal += topic.reflectionCount;
    if (topic.lastAt > lastAt) lastAt = topic.lastAt;
  }

  return {
    topics,
    totalQuestions,
    answered,
    correct,
    gradedAnswered,
    accuracy: gradedAnswered ? correct / gradedAnswered : 0,
    topicsStarted,
    topicsCompleted,
    predictions: predictionsTotal,
    reflections: reflectionsTotal,
    lastAt,
    hasData: answered > 0 || predictionsTotal > 0 || reflectionsTotal > 0,
  };
}

/**
 * Topik yang paling layak dilanjutkan: sudah dimulai, belum tuntas, diurutkan
 * menurut kunjungan terakhir, lalu menurut yang paling sedikit dikerjakan.
 */
export function continueLearning(overview: SiteOverview, limit = 6): TopicOverview[] {
  return overview.topics
    .filter((topic) => topic.started && topic.total > 0 && !topic.completed)
    .sort((a, b) => {
      if (b.lastAt !== a.lastAt) return b.lastAt - a.lastAt;
      const ratioA = a.total ? a.answered / a.total : 0;
      const ratioB = b.total ? b.answered / b.total : 0;
      return ratioA - ratioB;
    })
    .slice(0, limit);
}

const GRADE_RANK: Partial<Record<Grade, number>> = { X: 0, XI: 1, XII: 2 };

/**
 * Topik yang belum pernah disentuh, sebagai titik awal ketika masih kosong.
 *
 * Saran diurutkan sadar kelas dan prasyarat: kelas paling awal lebih dulu, dan
 * sebuah topik tidak pernah didahulukan atas prasyaratnya yang juga belum
 * disentuh. Urutan asli `overview.topics` dipakai sebagai pemecah seri agar
 * hasilnya deterministik meski tanpa metadata kelas.
 */
export function suggestedStart(overview: SiteOverview, limit = 4): TopicOverview[] {
  if (limit <= 0) return [];
  const candidates = overview.topics.filter((topic) => !topic.started && topic.total > 0);
  if (candidates.length === 0) return [];

  const position = new Map<string, number>(
    overview.topics.map((topic, index) => [topic.id, index]),
  );
  const candidateIds = new Set<string>(candidates.map((topic) => topic.id));
  const ordered = candidates.slice().sort((a, b) => {
    const rankA = GRADE_RANK[a.grade] ?? Number.MAX_SAFE_INTEGER;
    const rankB = GRADE_RANK[b.grade] ?? Number.MAX_SAFE_INTEGER;
    if (rankA !== rankB) return rankA - rankB;
    return (position.get(a.id) ?? 0) - (position.get(b.id) ?? 0);
  });

  const chosen = new Set<string>();
  const result: TopicOverview[] = [];

  while (result.length < limit) {
    let advanced = false;
    for (const topic of ordered) {
      if (chosen.has(topic.id)) continue;
      const blocked = (topic.prerequisites ?? []).some(
        (id) => candidateIds.has(id) && !chosen.has(id),
      );
      if (blocked) continue;
      chosen.add(topic.id);
      result.push(topic);
      advanced = true;
      if (result.length >= limit) break;
    }
    if (!advanced) break;
  }

  return result;
}

/** Mengelompokkan kemajuan per mata pelajaran, kelas, lalu elemen. */
export function groupOverview(overview: SiteOverview): SubjectGroup[] {
  const subjects = new Map<string, SubjectGroup>();

  for (const topic of overview.topics) {
    let subject = subjects.get(topic.subject);
    if (!subject) {
      subject = {
        subject: topic.subject,
        subjectName: topic.subjectName,
        grades: [],
        answered: 0,
        total: 0,
        correct: 0,
        gradedAnswered: 0,
        accuracy: 0,
      };
      subjects.set(topic.subject, subject);
    }

    let grade = subject.grades.find((g) => g.grade === topic.grade);
    if (!grade) {
      grade = { grade: topic.grade, gradeName: topic.gradeName, elements: [], answered: 0, total: 0 };
      subject.grades.push(grade);
    }

    let element = grade.elements.find((e) => e.element === topic.element);
    if (!element) {
      element = {
        element: topic.element,
        elementName: topic.elementName,
        topics: [],
        answered: 0,
        total: 0,
        correct: 0,
        gradedAnswered: 0,
        accuracy: 0,
      };
      grade.elements.push(element);
    }

    element.topics.push(topic);
    element.answered += topic.answered;
    element.total += topic.total;
    element.correct += topic.correct;
    element.gradedAnswered += topic.gradedAnswered;
    grade.answered += topic.answered;
    grade.total += topic.total;
    subject.answered += topic.answered;
    subject.total += topic.total;
    subject.correct += topic.correct;
    subject.gradedAnswered += topic.gradedAnswered;
  }

  const groups = Array.from(subjects.values());
  for (const subject of groups) {
    subject.accuracy = subject.gradedAnswered ? subject.correct / subject.gradedAnswered : 0;
    for (const grade of subject.grades) {
      for (const element of grade.elements) {
        element.accuracy = element.gradedAnswered ? element.correct / element.gradedAnswered : 0;
      }
    }
  }
  return groups;
}

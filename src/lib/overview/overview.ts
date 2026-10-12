/**
 * Perhitungan ringkasan kemajuan seluruh topik dari peta penyimpanan.
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi, sehingga dapat
 * dipanggil dari skrip peramban maupun diuji terpisah. Daftar topik (beserta
 * id soal dan tautannya) disiapkan saat build lalu diserahkan ke fungsi di
 * sini bersama peta yang dibaca dari `localStorage`.
 */

import { summarize, type ProgressMap } from '../progress.ts';
import type { SiteOverview, StampedRecord, TopicEntry, TopicOverview } from './types.ts';
import { maxStamp, tally } from './tally.ts';
import { buildMasterySummary } from './mastery.ts';
import { buildConfidenceSummary } from './confidence.ts';

/** Menghitung kemajuan seluruh topik dari peta penyimpanan. */
export function buildOverview(
  entries: TopicEntry[],
  progress: ProgressMap,
  predictions: Record<string, StampedRecord>,
  reflections: Record<string, StampedRecord>,
  completions: Record<string, StampedRecord> = {},
): SiteOverview {
  const predictionIndex = tally(predictions);
  const reflectionIndex = tally(reflections);

  const topics: TopicOverview[] = entries.map((entry) => {
    const summary = summarize(progress, entry.questionIds);
    const prediction = predictionIndex.get(entry.id);
    const reflection = reflectionIndex.get(entry.id);
    const predictionCount = prediction?.count ?? 0;
    const reflectionCount = reflection?.count ?? 0;

    // Aktivitas interaktif (flip-cards, tabs, match, step-reveal, spot-mistake)
    // disimpan per kunci; hitung yang tuntas agar kemajuan di halaman materi ikut
    // tercermin di dasbor, bukan hanya soal dan refleksi.
    const activityIds = entry.activityIds ?? [];
    let activityDone = 0;
    let activityLastAt = 0;
    for (const id of activityIds) {
      const record = completions[id];
      if (!record) continue;
      activityDone += 1;
      if (typeof record.at === 'number' && record.at > activityLastAt) activityLastAt = record.at;
    }

    const activityCount = summary.answered + predictionCount + reflectionCount + activityDone;
    const completed = summary.total > 0 && summary.answered >= summary.total;

    return {
      ...entry,
      answered: summary.answered,
      correct: summary.correct,
      gradedAnswered: summary.gradedAnswered,
      total: summary.total,
      accuracy: summary.accuracy,
      predictionCount,
      reflectionCount,
      activityDone,
      activityTotal: activityIds.length,
      activityCount,
      lastAt: maxStamp(summary.lastAt, prediction?.at, reflection?.at, activityLastAt),
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
  let activitiesTotal = 0;
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
    activitiesTotal += topic.activityDone;
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
    activities: activitiesTotal,
    lastAt,
    hasData: answered > 0 || predictionsTotal > 0 || reflectionsTotal > 0 || activitiesTotal > 0,
    mastery: buildMasterySummary(topics),
    confidence: buildConfidenceSummary(
      topics.map((topic) => ({
        id: topic.id,
        title: topic.title,
        practiceHref: topic.practiceHref,
      })),
      reflections,
    ),
  };
}

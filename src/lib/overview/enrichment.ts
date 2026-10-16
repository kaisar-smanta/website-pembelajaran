/**
 * Ringkasan kemajuan materi pengayaan (topik ber-`supplementary`).
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi. Ringkasan dihitung
 * dari `TopicOverview` yang sudah tersedia sehingga dasbor dapat menampilkan
 * kemajuan pengayaan terpisah dari materi wajib tanpa kunci penyimpanan baru.
 */

import type { EnrichmentSummary, TopicOverview } from './types.ts';

/** Menghitung ringkasan kemajuan topik pengayaan dari daftar topik terhitung. */
export function buildEnrichmentSummary(topics: TopicOverview[]): EnrichmentSummary {
  const supplementary = topics.filter((topic) => topic.supplementary);

  let started = 0;
  let completed = 0;
  let answered = 0;
  let totalQuestions = 0;
  let correct = 0;
  let gradedAnswered = 0;
  const startedTopics: TopicOverview[] = [];

  for (const topic of supplementary) {
    totalQuestions += topic.total;
    answered += topic.answered;
    correct += topic.correct;
    gradedAnswered += topic.gradedAnswered;
    if (topic.completed) completed += 1;
    if (topic.started) {
      started += 1;
      startedTopics.push(topic);
    }
  }

  startedTopics.sort((a, b) => b.lastAt - a.lastAt);

  return {
    total: supplementary.length,
    started,
    completed,
    topics: startedTopics,
    answered,
    totalQuestions,
    accuracy: gradedAnswered ? correct / gradedAnswered : 0,
  };
}

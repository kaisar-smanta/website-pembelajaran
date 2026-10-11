/**
 * Klasifikasi dan ringkasan penguasaan topik.
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi.
 */

import {
  MASTERY_THRESHOLD_CUKUP,
  MASTERY_THRESHOLD_MAHIR,
  type MasteryBand,
  type MasterySummary,
  type MasteryTopicInput,
  type TopicMastery,
} from './types.ts';

export function classifyMastery(
  answered: number,
  accuracy: number,
  completion: number,
  thresholds: { cukup?: number; mahir?: number } = {},
): MasteryBand {
  if (answered <= 0) return 'belum';
  const cukup = thresholds.cukup ?? MASTERY_THRESHOLD_CUKUP;
  const mahir = thresholds.mahir ?? MASTERY_THRESHOLD_MAHIR;
  if (accuracy >= mahir && completion >= 1) return 'mahir';
  if (accuracy < cukup || completion < 1) return 'berlatih';
  return 'cukup';
}

const MASTERY_FOCUS_WEIGHT: Record<MasteryBand, number> = {
  berlatih: 0,
  belum: 1,
  cukup: 2,
  mahir: 3,
};

export function buildMasterySummary(
  topics: MasteryTopicInput[],
  focusLimit = 8,
): MasterySummary {
  const list: TopicMastery[] = topics
    .filter((topic) => topic.total > 0)
    .map((topic) => {
      const completion = topic.total > 0 ? topic.answered / topic.total : 0;
      const accuracy = topic.gradedAnswered > 0 ? topic.correct / topic.gradedAnswered : 0;
      return {
        id: topic.id,
        slug: topic.slug,
        title: topic.title,
        gradeName: topic.gradeName,
        elementName: topic.elementName,
        element: topic.element,
        practiceHref: topic.practiceHref,
        materialHref: topic.materialHref,
        answered: topic.answered,
        correct: topic.correct,
        gradedAnswered: topic.gradedAnswered,
        total: topic.total,
        accuracy,
        completion,
        band: classifyMastery(topic.answered, accuracy, completion),
        lastAt: topic.lastAt ?? 0,
      };
    });

  const bands: Record<MasteryBand, number> = { belum: 0, berlatih: 0, cukup: 0, mahir: 0 };
  for (const topic of list) bands[topic.band] += 1;

  const focus = list
    .filter((topic) => topic.band === 'berlatih' || topic.band === 'belum')
    .sort((a, b) => {
      if (MASTERY_FOCUS_WEIGHT[a.band] !== MASTERY_FOCUS_WEIGHT[b.band]) {
        return MASTERY_FOCUS_WEIGHT[a.band] - MASTERY_FOCUS_WEIGHT[b.band];
      }
      if (a.completion !== b.completion) return a.completion - b.completion;
      if (a.accuracy !== b.accuracy) return a.accuracy - b.accuracy;
      return b.lastAt - a.lastAt;
    })
    .slice(0, Math.max(0, focusLimit));

  return {
    bands,
    topics: list,
    focus,
    thresholdCukup: MASTERY_THRESHOLD_CUKUP,
    thresholdMahir: MASTERY_THRESHOLD_MAHIR,
  };
}

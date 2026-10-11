/**
 * Ringkasan keyakinan diri dari rekaman refleksi.
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi.
 */

import type {
  ConfidenceSummary,
  ConfidenceTopicInput,
  LowConfidenceEntry,
  StampedRecord,
} from './types.ts';
import { topicOfStorageKey } from './tally.ts';

export function buildConfidenceSummary(
  topics: ConfidenceTopicInput[],
  records: Record<string, StampedRecord>,
  lowLimit = 6,
): ConfidenceSummary {
  const byId = new Map(topics.map((topic) => [topic.id, topic]));
  const entries = Object.entries(records);
  let rated = 0;
  let sum = 0;
  const low: LowConfidenceEntry[] = [];

  for (const [key, record] of entries) {
    const confidence = record?.confidence;
    if (typeof confidence !== 'number' || confidence <= 0) continue;
    rated += 1;
    sum += confidence;
    if (confidence <= 2) {
      const topicId = topicOfStorageKey(key);
      const topic = byId.get(topicId);
      low.push({
        key,
        topicId,
        topicTitle: topic?.title ?? topicId,
        practiceHref: topic?.practiceHref ?? '',
        confidence,
        at: typeof record.at === 'number' ? record.at : 0,
        text: typeof record.text === 'string' ? record.text : '',
      });
    }
  }

  low.sort((a, b) => a.confidence - b.confidence || b.at - a.at);

  return {
    total: entries.length,
    rated,
    average: rated ? sum / rated : null,
    low: low.slice(0, Math.max(0, lowLimit)),
    lowLimit,
  };
}

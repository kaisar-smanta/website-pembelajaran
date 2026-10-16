/**
 * Saran lanjutan dan titik awal belajar dari ringkasan kemajuan.
 *
 * Modul ini murni: tanpa DOM dan tanpa impor data materi.
 */

import type { Grade } from '@/types/content';
import type { SiteOverview, TopicOverview } from './types.ts';

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

// Sengaja disalin dari `src/data/curriculum.ts` (bukan diimpor): modul ini murni
// dan boleh dipakai di sisi klien, sehingga tidak boleh menarik data materi.
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

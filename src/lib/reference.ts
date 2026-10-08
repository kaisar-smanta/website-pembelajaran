import type { ElementId, Grade, SubjectId, Topic } from '@/types/content';
import { normalizeText } from './filter';
import { stripMarkdown } from '@/utils/markdown';

/**
 * Pengumpul data halaman rujukan lintas topik: glosarium istilah dan kumpulan
 * rumus. Fungsi di sini murni (tidak menyentuh DOM) sehingga dapat dipakai
 * halaman mana pun dan tidak menggandakan logika di dalam komponen.
 */

/** Rujukan ringkas ke sebuah topik, cukup untuk membangun tautan. */
export interface ReferenceTopic {
  id: string;
  title: string;
  subject: SubjectId;
  grade: Grade;
  element: ElementId;
  slug: string;
}

/** Membentuk rujukan topik; topik lama tanpa mata pelajaran dianggap Matematika. */
export function referenceTopic(topic: Topic): ReferenceTopic {
  return {
    id: topic.id,
    title: topic.title,
    subject: topic.subject ?? 'matematika',
    grade: topic.grade,
    element: topic.element,
    slug: topic.slug,
  };
}

/** Satu istilah glosarium beserta makna dan topik asalnya. */
export interface GlossaryEntry {
  /** Teks istilah asli (dapat memuat markdown/LaTeX). */
  term: string;
  /** Makna istilah (dapat memuat markdown/LaTeX). */
  meaning: string;
  /** Istilah tanpa markdown, untuk pengurutan, huruf awal, dan pencarian. */
  termText: string;
  /** Topik tempat istilah muncul (satu atau lebih bila istilah dipakai ulang). */
  topics: ReferenceTopic[];
  /** Elemen unik dari seluruh topik, untuk penyaringan. */
  elements: ElementId[];
}

export interface GlossaryOptions {
  /**
   * Sertakan pasangan blok `match` yang bersisi istilah teks (tanpa rumus).
   * Berguna untuk menambah istilah yang tidak ditulis sebagai kartu bolak-balik.
   */
  includeMatch?: boolean;
}

/**
 * Menghimpun istilah dari seluruh blok `flip-cards` (dan opsional `match`) di
 * semua topik. Istilah yang sama digabung: makna pertama dipertahankan, tetapi
 * seluruh topik asal tetap dicatat agar setiap istilah dapat ditelusuri.
 */
export function collectGlossaryEntries(
  topics: Topic[],
  options: GlossaryOptions = {},
): GlossaryEntry[] {
  const includeMatch = options.includeMatch ?? true;
  const byKey = new Map<string, GlossaryEntry>();

  const add = (term: string, meaning: string, topic: Topic): void => {
    const termText = stripMarkdown(term).replace(/\s+/g, ' ').trim();
    const meaningText = stripMarkdown(meaning).replace(/\s+/g, ' ').trim();
    if (!termText || !meaningText) return;

    const key = normalizeText(termText);
    const ref = referenceTopic(topic);
    const existing = byKey.get(key);
    if (existing) {
      if (!existing.topics.some((item) => item.id === ref.id)) existing.topics.push(ref);
      if (!existing.elements.includes(topic.element)) existing.elements.push(topic.element);
      return;
    }
    byKey.set(key, {
      term,
      meaning,
      termText,
      topics: [ref],
      elements: [topic.element],
    });
  };

  for (const topic of topics) {
    for (const section of topic.sections) {
      for (const block of section.blocks ?? []) {
        if (block.kind === 'flip-cards') {
          for (const card of block.cards) add(card.front, card.back, topic);
        } else if (includeMatch && block.kind === 'match') {
          for (const pair of block.pairs) {
            // Lewati sisi yang berupa rumus (memuat math) agar glosarium tetap
            // berisi istilah, bukan kumpulan formula.
            if (/\$|\\/.test(pair.left)) continue;
            add(pair.left, pair.right, topic);
          }
        }
      }
    }
  }

  return Array.from(byKey.values()).sort((a, b) =>
    a.termText.localeCompare(b.termText, 'id', { sensitivity: 'base' }),
  );
}

/** Huruf awal untuk pengelompokan; non-alfabet masuk ke grup '#'. */
export function glossaryLetter(entry: GlossaryEntry): string {
  const first = entry.termText.replace(/^[^0-9A-Za-z]+/, '').charAt(0).toUpperCase();
  return /^[A-Z]$/.test(first) ? first : '#';
}

/** Satu bagian rumus dari sebuah topik. */
export interface FormulaEntry {
  topic: ReferenceTopic;
  sectionId: string;
  title: string;
  body: string;
  kind: 'rumus' | 'generalisasi';
}

const DEFAULT_RUMUS_TITLE = 'Rumus dan Prosedur';
const DEFAULT_GENERALISASI_TITLE = 'Generalisasi';

/**
 * Menghimpun bagian bertipe `rumus`, ditambah `generalisasi` yang benar-benar
 * memuat rumus tampil (`$$...$$`). Urutan mengikuti urutan topik dan bagian.
 */
export function collectFormulaEntries(topics: Topic[]): FormulaEntry[] {
  const entries: FormulaEntry[] = [];
  for (const topic of topics) {
    for (const section of topic.sections) {
      const body = section.body ?? '';
      if (!body.trim()) continue;

      const isRumus = section.kind === 'rumus';
      const isGeneralisasi = section.kind === 'generalisasi' && body.includes('$$');
      if (!isRumus && !isGeneralisasi) continue;

      entries.push({
        topic: referenceTopic(topic),
        sectionId: section.id,
        title: section.title ?? (isRumus ? DEFAULT_RUMUS_TITLE : DEFAULT_GENERALISASI_TITLE),
        body,
        kind: isRumus ? 'rumus' : 'generalisasi',
      });
    }
  }
  return entries;
}

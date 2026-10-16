import type {
  Block,
  ElementId,
  Grade,
  Section,
  SectionKind,
  SubjectId,
  Topic,
} from '@/types/content';
import { normalizeText } from './filter.ts';
import { stripMarkdown } from '../utils/markdown.ts';
import { sectionKindTitles } from './content-text.ts';

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
  /** Topik pengayaan (melampaui CP), ditandai pada halaman rujukan. */
  supplementary?: boolean;
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
    supplementary: topic.supplementary ?? false,
  };
}

/**
 * Sisi istilah sebuah pasangan `match` masih bermakna sebagai istilah bila
 * memuat kata (≥3 huruf) di luar bagian matematika. Pasangan yang seluruhnya
 * berupa rumus (mis. `$AB$` atau `$\sin(A+B)$`) dilewati agar glosarium tetap
 * berisi istilah, bukan kumpulan formula.
 */
function hasGlossaryTerm(term: string): boolean {
  const outsideMath = term
    .replace(/\$\$[\s\S]+?\$\$/g, ' ')
    .replace(/\$[^\n$]+?\$/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}]/g, ' ');
  return /[A-Za-z]{3,}/.test(outsideMath);
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
  /** Benar bila istilah berasal dari topik pengayaan mana pun. */
  supplementary: boolean;
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
      if (ref.supplementary) existing.supplementary = true;
      return;
    }
    byKey.set(key, {
      term,
      meaning,
      termText,
      topics: [ref],
      elements: [topic.element],
      supplementary: ref.supplementary ?? false,
    });
  };

  for (const topic of topics) {
    for (const section of topic.sections) {
      for (const block of section.blocks ?? []) {
        if (block.kind === 'flip-cards') {
          for (const card of block.cards) add(card.front, card.back, topic);
        } else if (includeMatch && block.kind === 'match') {
          for (const pair of block.pairs) {
            // Lewati hanya sisi yang seluruhnya berupa rumus; istilah yang
            // memuat math di dalamnya (mis. "Gradien $b$") tetap dihimpun.
            if (!hasGlossaryTerm(pair.left)) continue;
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
  /** Jenis bagian asal, agar label pada halaman rujukan tetap jujur. */
  kind: SectionKind;
}

/** Membungkus sel matematika tabel menjadi markdown inline yang dapat dirender. */
function mathTableMarkdown(block: Extract<Block, { kind: 'table' }>): string {
  const esc = (cell: string): string => cell.replace(/\|/g, '\\vert ').replace(/\s*\n\s*/g, ' ');
  const header = `| ${block.headers.map(esc).join(' | ')} |`;
  const separator = `| ${block.headers.map(() => '---').join(' | ')} |`;
  const rows = block.rows.map((row) => {
    const cells = row.map((cell) => (cell.trim() ? `$${esc(cell)}$` : ''));
    return `| ${cells.join(' | ')} |`;
  });
  const table = [header, separator, ...rows].join('\n');
  return block.caption ? `**${esc(block.caption)}**\n\n${table}` : table;
}

/**
 * Menghimpun rumus tampil yang tersembunyi di dalam blok: panel `tabs` yang
 * memuat `$$`, sel tabel matematika (`math: true`), dan `callout` yang memuat
 * `$$`. Matematika inline biasa sengaja dilewati agar halaman rujukan tidak
 * dipenuhi derau. Urutan blok dipertahankan.
 */
function blockFormulaMarkdown(section: Section): string[] {
  const out: string[] = [];
  for (const block of section.blocks ?? []) {
    if (block.kind === 'tabs') {
      for (const item of block.items) {
        if (item.body.includes('$$')) out.push(item.body);
      }
    } else if (block.kind === 'table') {
      if (block.math) out.push(mathTableMarkdown(block));
    } else if (block.kind === 'callout') {
      if (block.text.includes('$$')) out.push(block.text);
    }
  }
  return out;
}

/**
 * Menghimpun bagian bertipe `rumus` (selalu), `generalisasi` yang benar-benar
 * memuat rumus tampil (`$$...$$`), serta bagian jenis lain yang menyimpan rumus
 * tampil di dalam blok (`tabs`, tabel matematika `math: true`, atau `callout`
 * ber-`$$`). Rumus dari blok digabungkan setelah badan bagian. Urutan mengikuti
 * urutan topik dan bagian, lalu urutan blok.
 */
export function collectFormulaEntries(topics: Topic[]): FormulaEntry[] {
  const entries: FormulaEntry[] = [];
  for (const topic of topics) {
    for (const section of topic.sections) {
      const isRumus = section.kind === 'rumus';
      const isGeneralisasi = section.kind === 'generalisasi';
      const body = section.body ?? '';
      const blockParts = blockFormulaMarkdown(section);
      const hasBlockMath = blockParts.length > 0;
      const hasDisplayMath = body.includes('$$') || hasBlockMath;

      if (!isRumus && !isGeneralisasi && !hasBlockMath) continue;
      if (isGeneralisasi && !hasDisplayMath) continue;

      const pieces: string[] = [];
      // Badan bagian penuh untuk bagian rumus/generalisasi; untuk jenis lain
      // cukup sertakan badan yang memang memuat rumus tampil agar halaman
      // rujukan tetap ringkas.
      if (body.trim() && (isRumus || isGeneralisasi || body.includes('$$'))) {
        pieces.push(body);
      }
      pieces.push(...blockParts);
      const combined = pieces.join('\n\n').trim();
      if (!combined) continue;

      entries.push({
        topic: referenceTopic(topic),
        sectionId: section.id,
        title: section.title ?? sectionKindTitles[section.kind],
        body: combined,
        kind: section.kind,
      });
    }
  }
  return entries;
}

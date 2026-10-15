import type { Section, SectionKind } from '@/types/content';

/** Penjaga kelengkapan: blok baru wajib ditangani di `sectionSearchText`. */
function assertNever(value: never): never {
  throw new Error(`Jenis blok belum ditangani pada indeks pencarian: ${JSON.stringify(value)}`);
}

/**
 * Pencari teks eksplorasi berdasarkan id. Disuntikkan oleh pemanggil (mis.
 * `search.json.ts`) agar modul ini tidak bergantung pada data materi: data
 * eksplorasi tetap ikut terindeks tanpa menyeretnya ke bundel mana pun.
 */
export type ExplorationTextLookup = (id: string) => string | undefined;

/** Judul bawaan tiap jenis bagian, dipakai seragam oleh konten dan daftar isi. */
export const sectionKindTitles: Record<SectionKind, string> = {
  tujuan: 'Tujuan Pembelajaran',
  pemantik: 'Pertanyaan Pemantik',
  prasyarat: 'Prasyarat',
  konteks: 'Situasi dan Konteks',
  konsep: 'Konsep Inti',
  representasi: 'Representasi',
  eksplorasi: 'Eksplorasi',
  generalisasi: 'Generalisasi',
  rumus: 'Rumus dan Prosedur',
  contoh: 'Contoh Terbimbing',
  'latihan-dasar': 'Latihan Dasar',
  'latihan-cakap': 'Latihan Cakap',
  'latihan-mahir': 'Latihan Mahir',
  'dunia-nyata': 'Masalah Dunia Nyata',
  'kesalahan-umum': 'Kesalahan Umum',
  refleksi: 'Refleksi',
  rangkuman: 'Rangkuman',
  evaluasi: 'Evaluasi',
  sejarah: 'Jejak Sejarah',
  tantangan: 'Tantangan',
};

/**
 * Judul tampil sebuah bagian. Satu-satunya tempat aturan fallback berada,
 * sehingga daftar isi dan badan konten tidak pernah menampilkan judul berbeda.
 */
export function sectionTitle(section: Section): string {
  return section.title ?? sectionKindTitles[section.kind];
}

/**
 * Teks untuk indeks pencarian, termasuk isi blok interaktif. Dipakai
 * `src/pages/search.json.ts`; sebelumnya tinggal di `enhance.ts` yang kini
 * dihapus karena blok interaktif sudah ditulis langsung pada data topik.
 */
export function sectionSearchText(
  section: Section,
  explorationText?: ExplorationTextLookup,
): string {
  const parts: string[] = [section.title ?? '', section.body ?? ''];
  for (const block of section.blocks ?? []) {
    switch (block.kind) {
      case 'callout':
        parts.push(block.title ?? '', block.text);
        break;
      case 'table':
        parts.push(block.caption ?? '', ...block.headers, ...block.rows.flat());
        break;
      case 'figure':
        parts.push(block.alt, block.caption ?? '');
        break;
      case 'exploration':
        parts.push(block.explorationId, explorationText?.(block.explorationId) ?? '');
        break;
      case 'details':
        parts.push(block.summary, block.text);
        break;
      case 'prediction':
        parts.push(block.prompt, ...(block.options ?? []), block.reveal);
        break;
      case 'reflection':
        parts.push(...block.prompts, block.confidenceLabel ?? '');
        break;
      case 'step-reveal':
        parts.push(block.intro ?? '', ...block.steps.map((s) => `${s.title ?? ''} ${s.text}`));
        break;
      case 'spot-mistake':
        parts.push(block.intro ?? '', ...block.steps, block.explanation);
        break;
      case 'match':
        parts.push(block.intro ?? '', ...block.pairs.flatMap((p) => [p.left, p.right]));
        break;
      case 'flip-cards':
        parts.push(block.intro ?? '', ...block.cards.flatMap((c) => [c.front, c.back]));
        break;
      case 'tabs':
        parts.push(...block.items.map((i) => `${i.label} ${i.body}`));
        break;
      default:
        assertNever(block);
    }
  }
  return parts.filter(Boolean).join(' ');
}

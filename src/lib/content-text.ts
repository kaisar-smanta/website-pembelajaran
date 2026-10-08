import type { Section } from '@/types/content';

/**
 * Teks untuk indeks pencarian, termasuk isi blok interaktif. Dipakai
 * `src/pages/search.json.ts`; sebelumnya tinggal di `enhance.ts` yang kini
 * dihapus karena blok interaktif sudah ditulis langsung pada data topik.
 */
export function sectionSearchText(section: Section): string {
  const parts: string[] = [section.title ?? '', section.body ?? ''];
  for (const block of section.blocks ?? []) {
    switch (block.kind) {
      case 'callout':
        parts.push(block.text);
        break;
      case 'details':
        parts.push(block.summary, block.text);
        break;
      case 'prediction':
        parts.push(block.prompt, ...(block.options ?? []), block.reveal);
        break;
      case 'reflection':
        parts.push(...block.prompts);
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
        break;
    }
  }
  return parts.filter(Boolean).join(' ');
}

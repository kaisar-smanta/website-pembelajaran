/**
 * Pengendali peta pembelajaran `/peta-pembelajaran` di sisi peramban.
 *
 * `setupLearningMap` merangkai saringan topik (mapel/kelas/elemen/pencarian),
 * menyembunyikan blok yang kosong setelah disaring, dan menghias tautan topik
 * dengan kemajuan latihan dari `localStorage`. Modul ini hanya boleh dipanggil
 * di peramban karena mengakses DOM dan penyimpanan lokal; perhitungan murni
 * tetap tinggal di `./progress-overview.ts`.
 */

import { normalizeText } from './filter.ts';
import { setupFilterPage, type FilterPageGroup, type FilterPageHandle } from './filter-dom.ts';
import { loadProgress } from './progress.ts';
import { loadCompletions, loadPredictions, loadReflections } from './learner.ts';
import { safeStorage } from './storage.ts';
import {
  buildOverview,
  continueLearning,
  suggestedStart,
  type TopicEntry,
} from './progress-overview.ts';

/** Memasang seluruh perilaku peta. Berhenti dengan tenang bila toolbar tidak ada. */
export function setupLearningMap(): void {
  const toolbar = document.querySelector<HTMLElement>('[data-map-toolbar]');

  if (toolbar) {
    const subjectGroup = toolbar.querySelector<HTMLElement>('[data-map-subject-chips]');
    const gradeGroup = toolbar.querySelector<HTMLElement>('[data-map-grade-chips]');
    const chipGroup = toolbar.querySelector<HTMLElement>('.map-chips');
    const searchInput = toolbar.querySelector<HTMLInputElement>('[data-map-search]');
    const toggle = document.querySelector<HTMLButtonElement>('[data-map-toggle]');
    const status = document.querySelector<HTMLElement>('[data-map-status]');
    const cols = Array.from(document.querySelectorAll<HTMLElement>('.elem-col'));
    const items = Array.from(document.querySelectorAll<HTMLElement>('.topic-item'));
    const gradeBlocks = Array.from(document.querySelectorAll<HTMLElement>('.grade-block'));
    const subjectBlocks = Array.from(document.querySelectorAll<HTMLElement>('.subject-coverage'));
    const pendings = Array.from(document.querySelectorAll<HTMLElement>('[data-pending]'));
    const strips = Array.from(document.querySelectorAll<HTMLElement>('[data-pending-strip]'));

    let hidePlanned = false;
    let page: FilterPageHandle | null = null;

    // Label chip dibaca dari DOM agar skrip tidak perlu mengimpor data kurikulum.
    function chipLabels(group: HTMLElement | null, attr: string): Record<string, string> {
      const labels: Record<string, string> = {};
      group?.querySelectorAll<HTMLElement>(`[${attr}]`).forEach((chip) => {
        const value = chip.getAttribute(attr);
        if (value) labels[value] = (chip.textContent ?? '').trim();
      });
      return labels;
    }

    const subjectLabels = chipLabels(subjectGroup, 'data-map-subject');
    const gradeLabels = chipLabels(gradeGroup, 'data-map-grade');
    const elementLabels = chipLabels(chipGroup, 'data-map-filter');

    const blockOf = (el: HTMLElement): HTMLElement | null =>
      el.closest<HTMLElement>('.grade-block');

    function itemVisible(
      item: HTMLElement,
      element: string,
      subject: string,
      grade: string,
      q: string,
    ): boolean {
      if (element !== 'all' && item.getAttribute('data-element') !== element) return false;
      const block = blockOf(item);
      if (subject !== 'all' && block?.getAttribute('data-subject') !== subject) return false;
      if (grade !== 'all' && block?.getAttribute('data-grade') !== grade) return false;
      if (item.getAttribute('data-status') === 'rencana' && hidePlanned) return false;
      if (q && !(item.getAttribute('data-search') ?? '').includes(q)) return false;
      return true;
    }

    function render(values: Record<string, string>, query: string): void {
      const element = values.elemen || 'all';
      const subject = values.mapel || 'all';
      const grade = values.kelas || 'all';
      const q = normalizeText(query);

      let visibleTopics = 0;
      for (const item of items) {
        const show = itemVisible(item, element, subject, grade, q);
        item.classList.toggle('is-hidden', !show);
        if (show) visibleTopics += 1;
      }

      for (const col of cols) {
        const own = Array.from(col.querySelectorAll<HTMLElement>('.topic-item'));
        const anyVisible = own.some((item) => !item.classList.contains('is-hidden'));
        col.classList.toggle('is-hidden', !anyVisible);
      }

      // Chip "segera disusun" mengikuti saringan elemen/kelas/mapel, tetapi
      // disembunyikan saat ada kata kunci karena tidak punya judul untuk dicari.
      for (const pending of pendings) {
        const block = blockOf(pending);
        const show =
          !q &&
          (element === 'all' || pending.getAttribute('data-element') === element) &&
          (subject === 'all' || block?.getAttribute('data-subject') === subject) &&
          (grade === 'all' || block?.getAttribute('data-grade') === grade);
        pending.classList.toggle('is-hidden', !show);
      }
      for (const strip of strips) {
        const own = Array.from(strip.querySelectorAll<HTMLElement>('[data-pending]'));
        const anyVisible = own.some((pending) => !pending.classList.contains('is-hidden'));
        strip.classList.toggle('is-hidden', own.length > 0 && !anyVisible);
      }

      // Sembunyikan blok yang tidak punya isi tampak agar judul kelas/mapel
      // yatim tidak tertinggal.
      for (const block of gradeBlocks) {
        const hasTopic = block.querySelector<HTMLElement>('.topic-item:not(.is-hidden)') !== null;
        const hasPending =
          block.querySelector<HTMLElement>('[data-pending]:not(.is-hidden)') !== null;
        block.classList.toggle('is-hidden', !hasTopic && !hasPending);
      }
      for (const block of subjectBlocks) {
        const anyGrade = block.querySelector<HTMLElement>('.grade-block:not(.is-hidden)') !== null;
        block.classList.toggle('is-hidden', !anyGrade);
      }

      if (status) {
        if (visibleTopics === 0) {
          status.textContent = 'Tidak ada topik yang cocok dengan saringan ini. Coba kata kunci lain.';
          return;
        }
        const parts: string[] = [];
        if (subject !== 'all') parts.push(subjectLabels[subject] ?? subject);
        if (grade !== 'all') parts.push(gradeLabels[grade] ?? `Kelas ${grade}`);
        if (element !== 'all') parts.push(elementLabels[element] ?? element);
        const suffix = parts.length ? ` · ${parts.join(', ')}` : '';
        const qText = query.trim() ? ` untuk "${query.trim()}"` : '';
        status.textContent = `Menampilkan ${visibleTopics} topik${qText}${suffix}.`;
      }
    }

    function updateToggleLabel(): void {
      if (!toggle) return;
      toggle.textContent = hidePlanned ? 'Tampilkan "Segera hadir"' : 'Sembunyikan "Segera hadir"';
      toggle.setAttribute('aria-pressed', hidePlanned ? 'true' : 'false');
    }

    try {
      toolbar.classList.add('is-ready');

      const groups: FilterPageGroup[] = [];
      if (subjectGroup) {
        groups.push({
          key: 'mapel',
          group: subjectGroup,
          chipSelector: '[data-map-subject]',
          valueAttr: 'data-map-subject',
          activeClass: 'is-active',
          allValue: 'all',
        });
      }
      if (gradeGroup) {
        groups.push({
          key: 'kelas',
          group: gradeGroup,
          chipSelector: '[data-map-grade]',
          valueAttr: 'data-map-grade',
          activeClass: 'is-active',
          allValue: 'all',
        });
      }
      if (chipGroup) {
        groups.push({
          key: 'elemen',
          group: chipGroup,
          chipSelector: '[data-map-filter]',
          valueAttr: 'data-map-filter',
          activeClass: 'is-active',
          allValue: 'all',
        });
      }

      page = setupFilterPage({
        groups,
        searchInput,
        queryKey: 'q',
        syncUrl: true,
        apply: render,
      });

      updateToggleLabel();
      if (toggle) {
        toggle.addEventListener('click', () => {
          hidePlanned = !hidePlanned;
          updateToggleLabel();
          page?.refresh();
        });
      }
    } catch {
      /* tanpa JS seluruh peta tetap tampil */
    }
  }

  // ---- Kemajuan latihan per topik -------------------------------------------
  const continueBox = document.querySelector<HTMLElement>('[data-map-continue]');
  const continueLink = document.querySelector<HTMLElement>('[data-map-continue-link]');
  const continueLabel = document.querySelector<HTMLElement>('[data-map-continue-label]');
  const continueTitle = document.querySelector<HTMLElement>('[data-map-continue-title]');
  const continueMeta = document.querySelector<HTMLElement>('[data-map-continue-meta]');
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-topic-id]'));

  let entries: TopicEntry[] = [];
  const dataEl = document.querySelector<HTMLScriptElement>('[data-map-data]');
  if (dataEl) {
    try {
      const parsed: unknown = JSON.parse(dataEl.textContent ?? '[]');
      if (Array.isArray(parsed)) entries = parsed as TopicEntry[];
    } catch {
      entries = [];
    }
  }

  function updateProgress(): void {
    const storage = safeStorage();
    const overview = buildOverview(
      entries,
      loadProgress(storage),
      loadPredictions(storage),
      loadReflections(storage),
      loadCompletions(storage),
    );
    const byId = new Map(overview.topics.map((topic) => [topic.id, topic]));

    for (const link of links) {
      const id = link.getAttribute('data-topic-id');
      const topic = id ? byId.get(id) : undefined;
      if (!topic) continue;
      link.classList.toggle('is-started', topic.started && !topic.completed);
      link.classList.toggle('is-completed', topic.completed);
      if (topic.completed) link.title = 'Latihan sudah tuntas';
      else if (topic.started) link.title = 'Sudah dimulai, belum tuntas';
      else link.removeAttribute('title');
    }

    if (!continueBox || !continueLink || !continueTitle || !continueMeta) return;
    // Utamakan melanjutkan topik yang sudah dimulai; bila belum ada, tawarkan
    // titik awal yang sadar prasyarat.
    const resume = continueLearning(overview, 1)[0];
    const next = resume ?? suggestedStart(overview, 1)[0];
    if (!next) {
      continueBox.hidden = true;
      return;
    }
    continueLink.setAttribute('href', next.practiceHref);
    continueTitle.textContent = next.title;
    continueMeta.textContent = `${next.gradeName} · ${next.elementName}`;
    if (continueLabel) continueLabel.textContent = resume ? 'Lanjutkan dari sini' : 'Mulai dari sini';
    continueBox.hidden = false;
  }

  if (links.length) {
    updateProgress();
    window.addEventListener('mtk:progress', updateProgress);
    window.addEventListener('pageshow', updateProgress);
    window.addEventListener('storage', updateProgress);
  }
}

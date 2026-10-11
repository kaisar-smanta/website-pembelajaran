/**
 * Perilaku peramban halaman latihan per topik `/latihan/[topic]`.
 *
 * Logika dipindahkan apa adanya dari `<script>` halaman: ringkasan kemajuan,
 * daftar tinjauan, saringan tingkat/kategori/tinjau, paginasi, dan status URL.
 * Tidak ada perilaku yang diubah — hanya dijadikan modul agar halaman cukup
 * memanggil `setupPracticePage()`.
 */

import {
  loadProgress,
  summarize,
  missedQuestionIds,
  type ProgressMap,
} from '@/lib/progress';
import { matchesAny } from '@/lib/filter';
import { setupFilterPage } from '@/lib/filter-dom';
import { reviewQuestionIds, type ReviewMode } from '@/lib/practice';

const PAGE_SIZE = 6;

function setupProgress() {
  const root = document.querySelector<HTMLElement>('[data-question-ids]');
  if (!root) return;

  let ids: string[] = [];
  try {
    const raw = root.getAttribute('data-question-ids');
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) {
      ids = parsed.filter((id): id is string => typeof id === 'string');
    }
  } catch {
    ids = [];
  }
  if (!ids.length) return;

  const answeredEl = root.querySelector<HTMLElement>('[data-stat-answered]');
  const correctEl = root.querySelector<HTMLElement>('[data-stat-correct]');
  const accuracyEl = root.querySelector<HTMLElement>('[data-stat-accuracy]');
  const barEl = root.querySelector<HTMLElement>('[data-progress-bar]');
  const trackEl = root.querySelector<HTMLElement>('[data-progress-track]');
  const noteEl = root.querySelector<HTMLElement>('[data-progress-note]');
  const reviewWrap = root.querySelector<HTMLElement>('[data-review]');
  const reviewLink = root.querySelector<HTMLAnchorElement>('[data-review-link]');
  const reviewList = root.querySelector<HTMLElement>('[data-review-list]');

  let storage: Storage | undefined;
  try {
    storage = window.localStorage;
  } catch {
    storage = undefined;
  }

  const render = () => {
    let attempts: ProgressMap = {};
    try {
      attempts = loadProgress(storage);
    } catch {
      attempts = {};
    }

    const summary = summarize(attempts, ids);
    const answeredPct = summary.total
      ? Math.round((summary.answered / summary.total) * 100)
      : 0;
    const accuracyPct = Math.round(summary.accuracy * 100);

    if (answeredEl) answeredEl.textContent = `${summary.answered}/${summary.total}`;
    if (correctEl) correctEl.textContent = String(summary.correct);
    if (accuracyEl) accuracyEl.textContent = `${accuracyPct}%`;
    if (barEl) barEl.style.width = `${answeredPct}%`;
    if (trackEl) {
      trackEl.setAttribute('aria-valuenow', String(summary.answered));
      trackEl.setAttribute(
        'aria-valuetext',
        `${summary.answered} dari ${summary.total} soal dijawab`,
      );
    }
    if (noteEl) {
      if (summary.answered === 0) {
        noteEl.textContent = 'Belum ada soal yang dijawab. Mulai dari tingkat Dasar.';
      } else if (summary.answered === summary.total) {
        noteEl.textContent = `Semua soal sudah dicoba. Ketepatanmu ${accuracyPct}%.`;
      } else {
        noteEl.textContent = `${summary.answered} dari ${summary.total} soal dijawab (${answeredPct}%).`;
      }
    }

    const missed = missedQuestionIds(attempts, ids);
    if (reviewWrap && reviewLink) {
      const reviewItems = reviewList
        ? Array.from(reviewList.querySelectorAll<HTMLElement>('[data-review-item]'))
        : [];
      if (missed.length > 0) {
        reviewWrap.hidden = false;
        reviewLink.href = `#q-${missed[0]}`;
        reviewLink.textContent =
          missed.length === 1
            ? 'Tinjau 1 soal yang belum tepat'
            : `Tinjau ${missed.length} soal yang belum tepat`;

        // Daftar seluruh soal yang belum tepat; hanya ditampilkan bila lebih
        // dari satu agar perilaku lama (satu tautan) tetap terjaga.
        const missedSet = new Set(missed);
        let visible = 0;
        for (const item of reviewItems) {
          const id = item.getAttribute('data-review-item');
          const show = id !== null && missedSet.has(id);
          item.hidden = !show;
          if (show) visible += 1;
        }
        if (reviewList) reviewList.hidden = visible <= 1;
      } else {
        reviewWrap.hidden = true;
        if (reviewList) reviewList.hidden = true;
        for (const item of reviewItems) item.hidden = true;
      }
    }
  };

  render();
  window.addEventListener('mtk:progress', render);

  // ---- Saringan tingkat/kategori/tinjau + paginasi soal ----
  const rows = Array.from(document.querySelectorAll<HTMLElement>('[data-question-row]'));
  const filterBar = document.querySelector<HTMLElement>('[data-practice-filter]');
  if (!rows.length || !filterBar) return;

  const countEl = filterBar.querySelector<HTMLElement>('[data-filter-count]');
  const pagination = document.querySelector<HTMLElement>('[data-pagination]');
  const pageStatus = pagination?.querySelector<HTMLElement>('[data-page-status]');
  const pagePrev = pagination?.querySelector<HTMLButtonElement>('[data-page-prev]');
  const pageNext = pagination?.querySelector<HTMLButtonElement>('[data-page-next]');
  const levelSections = Array.from(document.querySelectorAll<HTMLElement>('.level-section'));

  let page = 0;
  let values: Record<string, string> = {};

  function readAttempts(): ProgressMap {
    try {
      return loadProgress(storage);
    } catch {
      return {};
    }
  }

  function reviewSet(mode: string): Set<string> | null {
    if (!mode) return null;
    const normalized: ReviewMode =
      mode === 'missed' ? 'missed' : mode === 'unanswered' ? 'unanswered' : 'both';
    return new Set(reviewQuestionIds(readAttempts(), ids, normalized));
  }

  function applyFilters(): void {
    const selected = (value: string | undefined): Set<string> =>
      value ? new Set([value]) : new Set<string>();
    const tingkat = selected(values.tingkat);
    const kategori = selected(values.kategori);
    const review = reviewSet(values.tinjau ?? '');

    const matched: HTMLElement[] = [];
    for (const row of rows) {
      const difficulty = row.getAttribute('data-difficulty') ?? '';
      const category = row.getAttribute('data-category') ?? '';
      const id = row.getAttribute('data-question-row') ?? '';
      const show =
        matchesAny(tingkat, [difficulty]) &&
        matchesAny(kategori, [category]) &&
        (!review || review.has(id));
      if (show) matched.push(row);
    }

    // Sesi tinjau menampilkan seluruh soal yang cocok sekaligus agar tautan
    // "belum tepat" dapat melompat ke soal mana pun tanpa terpotong halaman.
    const pageSize = values.tinjau ? Math.max(1, matched.length) : PAGE_SIZE;
    const totalPages = Math.max(1, Math.ceil(matched.length / pageSize));
    if (page >= totalPages) page = totalPages - 1;
    if (page < 0) page = 0;

    const visible = new Set(matched.slice(page * pageSize, page * pageSize + pageSize));
    for (const row of rows) row.hidden = !visible.has(row);
    for (const section of levelSections) {
      section.hidden =
        section.querySelector<HTMLElement>('[data-question-row]:not([hidden])') === null;
    }

    if (countEl) {
      countEl.textContent =
        matched.length === 0
          ? 'Tidak ada soal yang cocok dengan saringan ini.'
          : `Menampilkan ${visible.size} dari ${matched.length} soal yang cocok (total ${rows.length} soal).`;
    }

    if (pagination) {
      pagination.hidden = Boolean(values.tinjau) || totalPages <= 1;
      if (pageStatus) pageStatus.textContent = `Halaman ${page + 1} dari ${totalPages}`;
      if (pagePrev) pagePrev.disabled = page <= 0;
      if (pageNext) pageNext.disabled = page >= totalPages - 1;
    }
  }

  const groups = Array.from(filterBar.querySelectorAll<HTMLElement>('.filter-group'))
    .map((group) => ({
      key: group.querySelector<HTMLElement>('[data-filter]')?.getAttribute('data-filter') ?? '',
      group,
      chipSelector: '[data-filter]',
      valueAttr: 'data-value',
      allValue: '',
    }))
    .filter((spec) => ['tingkat', 'kategori', 'tinjau'].includes(spec.key));

  const filter = setupFilterPage({
    groups,
    apply: (next) => {
      values = next;
      page = 0;
      applyFilters();
    },
    syncUrl: true,
  });

  pagePrev?.addEventListener('click', () => {
    page -= 1;
    applyFilters();
  });
  pageNext?.addEventListener('click', () => {
    page += 1;
    applyFilters();
  });

  // Tautan "belum tepat" pada ringkasan kemajuan membuka sesi tinjau.
  reviewLink?.addEventListener('click', (event) => {
    event.preventDefault();
    filter.setValue('tinjau', 'missed');
    document.getElementById('saring-soal')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Sesi tinjau sengaja tidak diperbarui setiap jawaban agar soal yang baru
  // dijawab beserta jawaban modelnya tidak langsung hilang dari layar;
  // saringan disegarkan saat halaman ditampilkan kembali.
  window.addEventListener('pageshow', applyFilters);
}

export function setupPracticePage(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupProgress);
  } else {
    setupProgress();
  }
}

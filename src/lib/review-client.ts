/**
 * Pengendali halaman tinjauan lintas topik `/review` di sisi peramban.
 *
 * `bootReview` membaca daftar id soal dari elemen JSON di halaman dan seluruh
 * kemajuan dari `localStorage`, lalu membangun antrean tinjauan, menampilkan
 * kartu yang relevan, dan memperbarui bilah ringkasan. Modul ini hanya boleh
 * dipanggil di peramban karena mengakses DOM dan penyimpanan lokal. Perhitungan
 * antrean yang murni tetap tinggal di `review.ts`.
 */

import { loadProgress, type ProgressMap } from './progress.ts';
import { safeStorage } from './storage.ts';
import {
  buildReviewQueue,
  summarizeReviewQueue,
  reviewDueHint,
  formatDueIn,
  REVIEW_CORRECT_INTERVAL_MS,
  type ReviewItem,
} from './review.ts';

export function bootReview(): void {
  function boot() {
    const root = document.querySelector<HTMLElement>('[data-review-root]');
    if (!root) return;

    const idsEl = document.getElementById('review-ids');
    let ids: string[] = [];
    try {
      const parsed: unknown = idsEl ? JSON.parse(idsEl.textContent ?? '[]') : [];
      if (Array.isArray(parsed)) {
        ids = parsed.filter((id): id is string => typeof id === 'string');
      }
    } catch {
      ids = [];
    }

    const storage = safeStorage();
    const emptyEl = root.querySelector<HTMLElement>('[data-review-empty]');
    const mascotSleep = root.querySelector<HTMLElement>('[data-review-mascot-sleep]');
    const mascotCelebrate = root.querySelector<HTMLElement>('[data-review-mascot-celebrate]');
    const emptyTitle = root.querySelector<HTMLElement>('[data-empty-title]');
    const emptyText = root.querySelector<HTMLElement>('[data-empty-text]');
    const bodyEl = root.querySelector<HTMLElement>('[data-review-body]');
    const groupsEl = root.querySelector<HTMLElement>('[data-review-groups]');
    const totalEl = root.querySelector<HTMLElement>('[data-review-total]');
    const doneEl = root.querySelector<HTMLElement>('[data-review-done]');
    const accuracyEl = root.querySelector<HTMLElement>('[data-review-accuracy]');
    const barEl = root.querySelector<HTMLElement>('[data-review-bar]');
    const trackEl = root.querySelector<HTMLElement>('[data-review-track]');
    const noteEl = root.querySelector<HTMLElement>('[data-review-note]');

    const itemEls = new Map<string, HTMLElement>();
    for (const el of root.querySelectorAll<HTMLElement>('[data-review-item]')) {
      const id = el.getAttribute('data-review-item');
      if (id) itemEls.set(id, el);
    }
    const topicEls = Array.from(root.querySelectorAll<HTMLElement>('[data-review-topic]'));

    let queue: ReviewItem[] = [];
    /** Soal yang sudah dijawab tepat selama sesi ini (untuk penanda "sudah tepat"). */
    const sessionResolved = new Set<string>();

    function readAttempts(): ProgressMap {
      try {
        return loadProgress(storage);
      } catch {
        return {};
      }
    }

    function setVisible(el: HTMLElement | null, visible: boolean) {
      if (el) el.hidden = !visible;
    }

    function percent(ratio: number): string {
      return `${Math.round(ratio * 100)}%`;
    }

    function applyQueue() {
      const position = new Map(queue.map((item, index) => [item.questionId, index]));

      for (const el of itemEls.values()) {
        el.hidden = true;
        el.classList.remove('is-resolved');
      }
      for (const item of queue) {
        const el = itemEls.get(item.questionId);
        if (!el) continue;
        el.hidden = false;
        const badge = el.querySelector<HTMLElement>('.q-number');
        const rank = (position.get(item.questionId) ?? 0) + 1;
        if (badge) badge.textContent = String(rank);
      }

      const order = new Map<HTMLElement, number>();
      for (const group of topicEls) {
        let min = Number.POSITIVE_INFINITY;
        let count = 0;
        for (const el of group.querySelectorAll<HTMLElement>('[data-review-item]')) {
          const id = el.getAttribute('data-review-item');
          if (!id) continue;
          const index = position.get(id);
          if (index === undefined) continue;
          count += 1;
          if (index < min) min = index;
        }
        group.hidden = count === 0;
        const countEl = group.querySelector<HTMLElement>('[data-topic-count]');
        if (countEl) countEl.textContent = count === 1 ? '1 soal' : `${count} soal`;
        if (count > 0) order.set(group, min);
      }

      const visible = topicEls.filter((group) => !group.hidden);
      visible.sort((a, b) => (order.get(a) ?? 0) - (order.get(b) ?? 0));
      for (const group of visible) groupsEl?.appendChild(group);
    }

    function refreshStatus() {
      const attempts = readAttempts();
      const now = Date.now();
      let resolved = 0;
      let graded = 0;

      for (const item of queue) {
        const attempt = attempts[item.questionId];
        const isResolved =
          sessionResolved.has(item.questionId) ||
          Boolean(attempt && attempt.graded !== false && attempt.correct && now < item.dueAt);
        if (isResolved) resolved += 1;
        if (attempt && attempt.graded !== false) graded += 1;

        const el = itemEls.get(item.questionId);
        if (!el) continue;
        el.classList.toggle('is-resolved', isResolved);
        const dueEl = el.querySelector<HTMLElement>('[data-review-due]');
        if (!dueEl) continue;
        if (isResolved) {
          dueEl.textContent = `Sudah tepat · ${formatDueIn(REVIEW_CORRECT_INTERVAL_MS)}`;
        } else if (attempt && attempt.graded === false) {
          dueEl.textContent = 'Sudah dikerjakan';
        } else {
          dueEl.textContent = reviewDueHint(item, now);
        }
      }

      const total = queue.length;
      const accuracy = graded ? resolved / graded : 0;
      if (totalEl) totalEl.textContent = String(total);
      if (doneEl) doneEl.textContent = `${resolved}/${total}`;
      if (accuracyEl) accuracyEl.textContent = percent(accuracy);
      if (barEl) barEl.style.width = `${total ? Math.round((resolved / total) * 100) : 0}%`;
      if (trackEl) {
        trackEl.setAttribute('aria-valuemax', String(total));
        trackEl.setAttribute('aria-valuenow', String(resolved));
        trackEl.setAttribute(
          'aria-valuetext',
          `${resolved} dari ${total} soal sudah tepat`,
        );
      }
      if (noteEl) {
        const summary = summarizeReviewQueue(queue);
        const parts = [
          `${summary.missed} soal belum tepat`,
          `${summary.unanswered} soal belum dicoba`,
        ];
        if (summary.scheduled > 0) parts.push(`${summary.scheduled} soal siap diulang`);
        noteEl.textContent = `${parts.join(', ')}. Urutan di bawah memprioritaskan yang paling mendesak.`;
      }
    }

    function rebuild() {
      sessionResolved.clear();
      const attempts = readAttempts();
      queue = buildReviewQueue(ids, attempts, Date.now());

      if (queue.length === 0) {
        const hasAttempts = Object.keys(attempts).length > 0;
        /* Numi tidur bila belum ada yang dicoba, dan merayakan bila semua soal
           yang pernah dicoba sudah tepat. */
        if (mascotSleep) mascotSleep.hidden = hasAttempts;
        if (mascotCelebrate) mascotCelebrate.hidden = !hasAttempts;
        if (emptyTitle) {
          emptyTitle.textContent = hasAttempts
            ? 'Tidak ada soal yang perlu ditinjau'
            : 'Belum ada soal untuk ditinjau';
        }
        if (emptyText) {
          emptyText.textContent = hasAttempts
            ? 'Semua soal yang pernah kamu kerjakan sudah tepat. Pertahankan dengan berlatih soal baru atau soal tingkat mahir.'
            : 'Kerjakan beberapa latihan dulu, lalu kembali ke sini untuk meninjau soal yang belum tepat atau belum dicoba secara lintas topik.';
        }
        setVisible(emptyEl, true);
        setVisible(bodyEl, false);
        return;
      }

      setVisible(emptyEl, false);
      setVisible(bodyEl, true);
      applyQueue();
      refreshStatus();
    }

    rebuild();

    window.addEventListener('mtk:progress', (event) => {
      const detail = (event as CustomEvent<{ questionId?: string; correct?: boolean }>).detail;
      if (detail?.correct === true && detail.questionId) {
        sessionResolved.add(detail.questionId);
      }
      refreshStatus();
    });
    window.addEventListener('pageshow', rebuild);
    window.addEventListener('storage', rebuild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
}

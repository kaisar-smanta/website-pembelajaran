/**
 * Pengendali halaman topik di sisi peramban.
 *
 * `setupTopicPage` mengumpulkan perilaku yang sebelumnya ditulis langsung di
 * `[topic].astro`: mode cetak halaman/lembar kerja beserta sakelar kunci
 * jawaban, sinkronisasi buka/tutup daftar isi `<details>`, navigasi bagian yang
 * menyorot tautan aktif lewat `IntersectionObserver`, dan daftar "Ulas
 * kesalahan". Modul ini hanya boleh dipanggil di peramban karena mengakses DOM
 * dan penyimpanan lokal.
 */

import { loadProgress, missedQuestionIds, type ProgressMap } from './progress.ts';
import { safeStorage } from './storage.ts';

export function setupTopicPage(): void {
  const body = document.body;
  const keyToggle = document.querySelector<HTMLInputElement>('[data-print-key]');

  function clearPrintMode() {
    body.classList.remove('print-worksheet', 'print-with-key');
  }

  document.querySelector('[data-print]')?.addEventListener('click', () => {
    clearPrintMode();
    window.print();
  });

  document.querySelector('[data-print-worksheet]')?.addEventListener('click', () => {
    clearPrintMode();
    body.classList.add('print-worksheet');
    if (keyToggle?.checked) body.classList.add('print-with-key');
    window.addEventListener('afterprint', clearPrintMode, { once: true });
    window.print();
  });

  const disclosure = document.querySelector<HTMLDetailsElement>('[data-outline-disclosure]');
  if (disclosure) {
    const desktop = window.matchMedia('(min-width: 62rem)');
    const syncDisclosure = () => {
      disclosure.open = desktop.matches;
    };
    desktop.addEventListener('change', syncDisclosure);
    disclosure.addEventListener('toggle', () => {
      if (desktop.matches && !disclosure.open) disclosure.open = true;
    });
  }

  const navRoots = Array.from(document.querySelectorAll<HTMLElement>('[data-section-nav]'));
  if (navRoots.length && 'IntersectionObserver' in window) {
    const links = navRoots.flatMap((root) =>
      Array.from(root.querySelectorAll<HTMLAnchorElement>('a')),
    );
    const byElement = new Map<HTMLElement, HTMLAnchorElement[]>();
    for (const link of links) {
      const id = link.getAttribute('href')?.slice(1) ?? '';
      const el = id ? document.getElementById(id) : null;
      if (!el) continue;
      const group = byElement.get(el);
      if (group) group.push(link);
      else byElement.set(el, [link]);
    }

    const sections = Array.from(byElement.keys());
    if (sections.length) {
      const jumpList = document.querySelector<HTMLElement>('.section-jump-list');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const setActive = (el: HTMLElement) => {
        byElement.forEach((group, target) => {
          const active = target === el;
          group.forEach((link) => {
            link.classList.toggle('is-active', active);
            if (active) link.setAttribute('aria-current', 'true');
            else link.removeAttribute('aria-current');
          });
        });

        const activeChip = jumpList?.querySelector<HTMLAnchorElement>('a.is-active');
        if (jumpList && activeChip) {
          const chipRect = activeChip.getBoundingClientRect();
          const listRect = jumpList.getBoundingClientRect();
          const left =
            jumpList.scrollLeft +
            (chipRect.left - listRect.left) -
            (listRect.width - chipRect.width) / 2;
          jumpList.scrollTo({
            left: Math.max(0, left),
            behavior: reduceMotion ? 'auto' : 'smooth',
          });
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visible[0]) setActive(visible[0].target as HTMLElement);
        },
        { rootMargin: '-18% 0px -68% 0px', threshold: 0 },
      );
      sections.forEach((el) => observer.observe(el));
    }
  }

  // Daftar "Ulas kesalahan": menautkan langsung ke setiap soal yang belum tepat
  // di halaman ini, bukan hanya yang pertama.
  function setupTopicReview() {
    const wrap = document.querySelector<HTMLElement>('[data-topic-review]');
    const list = wrap?.querySelector<HTMLElement>('[data-review-list]');
    const lead = wrap?.querySelector<HTMLElement>('[data-review-lead]');
    if (!wrap || !list) return;

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>('.topic-main [data-question]'),
    );
    const byId = new Map<string, HTMLElement>();
    for (const card of cards) {
      const id = card.getAttribute('data-question-id');
      if (!id) continue;
      card.style.scrollMarginTop = 'calc(var(--header-h) + 1rem)';
      if (byId.has(id)) continue;
      if (!card.id) card.id = `q-${id}`;
      byId.set(id, card);
    }
    const ids = Array.from(byId.keys());
    if (!ids.length) return;

    const storage = safeStorage();

    let reduceMotion = false;
    try {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      reduceMotion = false;
    }

    const labelFor = (id: string): string => {
      const card = byId.get(id);
      const prompt = card?.querySelector('.q-prompt');
      const text = (prompt?.textContent ?? '').replace(/\s+/g, ' ').trim();
      if (!text) return `Soal ${id}`;
      return text.length > 68 ? `${text.slice(0, 68)}…` : text;
    };

    const render = () => {
      let attempts: ProgressMap = {};
      try {
        attempts = loadProgress(storage);
      } catch {
        attempts = {};
      }
      const missed = missedQuestionIds(attempts, ids);
      list.innerHTML = '';
      if (!missed.length) {
        wrap.hidden = true;
        return;
      }
      wrap.hidden = false;
      if (lead) {
        lead.textContent =
          missed.length === 1
            ? 'Satu soal belum tepat. Tinjau lagi langkahmu.'
            : `${missed.length} soal belum tepat. Tinjau lagi langkahmu.`;
      }
      for (const id of missed) {
        const card = byId.get(id);
        if (!card) continue;
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${card.id}`;
        link.textContent = labelFor(id);
        link.addEventListener('click', (event) => {
          event.preventDefault();
          card.scrollIntoView({
            behavior: reduceMotion ? 'auto' : 'smooth',
            block: 'start',
          });
          if (window.history.replaceState) {
            window.history.replaceState(null, '', `#${card.id}`);
          }
        });
        item.appendChild(link);
        list.appendChild(item);
      }
    };

    render();
    window.addEventListener('mtk:progress', render);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTopicReview);
  } else {
    setupTopicReview();
  }
}

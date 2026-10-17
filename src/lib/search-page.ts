/**
 * Perekat halaman pencarian `/cari` di sisi peramban.
 *
 * `setupSearchPage` memasang seluruh perilaku pada tiap elemen
 * `[data-search-root]`: mengambil indeks `search.json`, membaca kueri +
 * saringan dari URL, merender hasil (judul tersorot dan cuplikan), serta
 * menyelaraskan kembali ke URL saat berubah. Logika skor yang murni tetap
 * tinggal di `search.ts`; modul ini hanya menyentuh DOM sehingga hanya boleh
 * dipanggil di peramban.
 */

import {
  searchItems,
  filterItems,
  highlight,
  buildSnippet,
  type SearchItem,
} from './search.ts';
import { elementColor } from '@/data/display';
import { readQuery, writeQuery } from './filter-dom.ts';
import type { ElementId } from '@/types/content';

function setupSearch(root: Element) {
  const base = root.getAttribute('data-base') || '/';
  const form = root.querySelector('[data-search-form]') as HTMLFormElement;
  const input = root.querySelector('[data-search-input]') as HTMLInputElement;
  const gradeFilter = root.querySelector('[data-filter-grade]') as HTMLSelectElement;
  const elementFilter = root.querySelector('[data-filter-element]') as HTMLSelectElement;
  const typeFilter = root.querySelector('[data-filter-type]') as HTMLSelectElement;
  const pengayaanFilter = root.querySelector('[data-filter-pengayaan]') as HTMLSelectElement | null;
  const results = root.querySelector('[data-search-results]') as HTMLElement;
  const status = root.querySelector('[data-search-status]') as HTMLElement;
  const thinking = root.querySelector('[data-search-thinking]') as HTMLElement | null;
  const hint = root.querySelector('[data-search-hint]') as HTMLElement;
  const more = root.querySelector('[data-search-more]') as HTMLElement | null;
  const moreBtn = root.querySelector('[data-search-more-btn]') as HTMLButtonElement | null;
  const emptyItem = results.querySelector('[data-search-empty]') as HTMLElement | null;
  const emptyText = results.querySelector('[data-search-empty-text]') as HTMLElement | null;

  /* Batas hasil yang dirender sekaligus; "tampilkan semua" melepas batas ini
     hanya atas permintaan pengguna agar DOM tetap ringan. */
  const RESULT_LIMIT = 40;
  let items: SearchItem[] = [];
  let showAll = false;

  /* Menyelaraskan kueri + saringan ke URL lewat pembantu bersama
     (`src/lib/filter-dom.ts`) agar tautan yang dibagikan memulihkan hasil. */
  function syncUrl() {
    writeQuery({
      q: input.value.trim(),
      grade: gradeFilter.value,
      element: elementFilter.value,
      type: typeFilter.value,
      pengayaan: pengayaanFilter?.value ?? '',
    });
  }

  /* Membaca kueri + saringan dari URL; mengembalikan true bila `?q=` ada. */
  function readUrl() {
    const values = readQuery(['q', 'grade', 'element', 'type', 'pengayaan']);
    if (values.q) input.value = values.q;
    if (values.grade) gradeFilter.value = values.grade;
    if (values.element) elementFilter.value = values.element;
    if (values.type) typeFilter.value = values.type;
    if (values.pengayaan && pengayaanFilter) pengayaanFilter.value = values.pengayaan;
    return Boolean(values.q);
  }

  /* Numi berpikir selama hasil belum siap: saat indeks masih dimuat, dan
     selama jeda singkat setelah pengetikan sebelum hasil dirender. Status kosong
     yang selesai memakai Numi `oops` pada kartu hasil kosong. */
  function setThinking(active: boolean) {
    if (thinking) thinking.hidden = !active;
  }

  function update() {
    showAll = false;
    render();
    syncUrl();
    setThinking(false);
  }

  let renderTimer: number | null = null;

  /**
   * Menahan render sejenak setelah pengetikan agar Numi sempat menampilkan
   * keadaan berpikir; memakai kembali `update()` saat tuntas.
   */
  function scheduleUpdate() {
    const raw = input.value.trim();
    setThinking(raw.length > 0);
    if (renderTimer !== null) {
      window.clearTimeout(renderTimer);
      renderTimer = null;
    }
    if (raw.length === 0) {
      update();
      return;
    }
    renderTimer = window.setTimeout(() => {
      renderTimer = null;
      update();
    }, 140);
  }

  function renderSuggestion(suggestion: string | null): void {
    hint.innerHTML = '';
    if (!suggestion) {
      hint.hidden = true;
      return;
    }
    hint.hidden = false;
    hint.append(document.createTextNode('Mungkin maksud: '));
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'search-hint-btn';
    button.textContent = suggestion;
    button.addEventListener('click', () => {
      input.value = suggestion;
      update();
      input.focus();
    });
    hint.append(button);
  }

  function render() {
    const raw = input.value.trim();
    const filtered = filterItems(items, {
      grade: gradeFilter.value,
      element: elementFilter.value,
      type: typeFilter.value,
      pengayaan: pengayaanFilter?.value === 'pengayaan',
    });

    let out: (SearchItem & { score: number })[];
    let suggestion: string | null = null;
    let total = 0;
    if (raw.length === 0) {
      out = filtered.map((it) => ({ ...it, score: 0 })).slice(0, 12);
      total = out.length;
    } else {
      const outcome = searchItems(filtered, raw, showAll ? Infinity : RESULT_LIMIT);
      out = outcome.results;
      suggestion = outcome.suggestion;
      total = outcome.total;
    }

    results.innerHTML = '';
    const capped = raw.length > 0 && out.length < total;
    if (raw.length === 0) {
      status.textContent = `Menampilkan ${out.length} entri. Ketik untuk menyaring.`;
    } else if (out.length === 0) {
      status.textContent = `Tidak ada hasil untuk "${raw}".`;
    } else if (capped) {
      status.textContent = `Menampilkan ${out.length} dari ${total} hasil untuk "${raw}".`;
    } else {
      status.textContent = `${out.length} hasil untuk "${raw}".`;
    }
    renderSuggestion(suggestion);
    if (more) more.hidden = !capped;

    if (out.length === 0) {
      if (emptyItem) {
        if (emptyText) {
          emptyText.textContent =
            raw.length === 0
              ? 'Belum ada entri untuk filter ini.'
              : 'Tidak ada hasil. Coba kata kunci lain atau ubah filter.';
        }
        emptyItem.hidden = false;
        results.appendChild(emptyItem);
      }
      return;
    }

    for (const item of out) {
      const li = document.createElement('li');
      li.className = 'result-item card hover-lift';
      const accent = elementColor(item.element as ElementId | undefined);
      li.setAttribute('style', `--accent:${accent};border-left:4px solid var(--accent)`);
      const gradeLabel = item.grade ? `Kelas ${item.grade}` : '';
      li.innerHTML = `
        <a href="${base.replace(/\/$/, '')}${item.url}" style="display:block;color:inherit;text-decoration:none">
          <div class="result-meta" style="display:flex;flex-wrap:wrap;align-items:center;gap:0.4rem;margin-bottom:0.4rem">
            <span class="badge">${item.type}</span>
            ${gradeLabel ? `<span class="badge badge-grade" style="background:var(--color-primary-soft);color:var(--color-primary);border-color:transparent">${gradeLabel}</span>` : ''}
          </div>
          <h2 style="margin:0 0 0.25rem;font-size:1.1rem">${highlight(item.title, raw)}</h2>
          <p class="text-muted" style="margin:0;font-size:0.92rem">${buildSnippet(item, raw)}</p>
        </a>`;
      results.appendChild(li);
    }
  }

  results.setAttribute('aria-busy', 'true');
  readUrl();
  setThinking(input.value.trim().length > 0);
  fetch(`${base}search.json`)
    .then((r) => r.json())
    .then((data) => {
      items = data;
      render();
      results.setAttribute('aria-busy', 'false');
      setThinking(false);
      /* Fokus selalu, termasuk tanpa `?q=`; `preventScroll` menghindari
         lompatan gulir di layar kecil. */
      input.focus({ preventScroll: true });
    })
    .catch(() => {
      results.setAttribute('aria-busy', 'false');
      setThinking(false);
      status.textContent = 'Indeks pencarian gagal dimuat.';
    });

  input.addEventListener('input', scheduleUpdate);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    update();
  });
  gradeFilter.addEventListener('change', update);
  elementFilter.addEventListener('change', update);
  typeFilter.addEventListener('change', update);
  pengayaanFilter?.addEventListener('change', update);
  moreBtn?.addEventListener('click', () => {
    showAll = true;
    render();
  });
}

/** Memasang perilaku pencarian pada setiap elemen `[data-search-root]`. */
export function setupSearchPage(): void {
  document.querySelectorAll('[data-search-root]').forEach(setupSearch);
}

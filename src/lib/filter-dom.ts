/**
 * Perekat saringan ke DOM (tanpa kerangka) untuk menggantikan mesin saringan
 * yang sebelumnya disalin di tiap halaman.
 *
 * `setupFilterGroup` mengurus satu kelompok chip: status `aria-pressed`, kelas
 * aktif opsional, dan klik. `setupFilterPage` merangkai beberapa kelompok chip,
 * memasang pencarian opsional, menjalankan callback `apply`, dan menyelaraskan
 * kueri URL bila diminta.
 */

/** Opsi satu kelompok chip. */
export interface FilterGroupOptions {
  /** Selektor chip di dalam kelompok, mis. `[data-ex-filter]`. */
  chipSelector: string;
  /** Atribut pembawa nilai chip; default `data-value`. */
  valueAttr?: string;
  /** Atribut status terpilih; default `aria-pressed`. */
  pressedAttr?: string;
  /** Kelas yang ditambahkan pada chip aktif (opsional). */
  activeClass?: string;
  /** Nilai yang berarti "tanpa saringan"; default string kosong. */
  allValue?: string;
  /** Dipanggil setiap chip diklik dengan nilai terpilih. */
  onToggle?: (value: string, group: HTMLElement) => void;
}

/** Pegangan yang dikembalikan `setupFilterGroup`. */
export interface FilterGroupHandle {
  readonly group: HTMLElement;
  /** Nilai chip yang sedang aktif. */
  value(): string;
  /** Seluruh nilai chip yang tersedia. */
  values(): string[];
  /** Apakah `value` tersedia sebagai chip (atau nilai "semua"). */
  hasValue(value: string): boolean;
  /** Menetapkan chip aktif tanpa memicu `onToggle`. */
  setValue(value: string): void;
}

/**
 * Memasang satu kelompok chip di dalam `group`.
 *
 * Klik ditangani lewat delegasi, sehingga chip yang ditambahkan belakangan
 * tetap berfungsi.
 */
export function setupFilterGroup(
  group: HTMLElement,
  options: FilterGroupOptions,
): FilterGroupHandle {
  const { chipSelector } = options;
  const valueAttr = options.valueAttr ?? 'data-value';
  const pressedAttr = options.pressedAttr ?? 'aria-pressed';
  const activeClass = options.activeClass ?? '';
  const allValue = options.allValue ?? '';

  const chips = (): HTMLElement[] =>
    Array.from(group.querySelectorAll<HTMLElement>(chipSelector));
  const chipValue = (chip: HTMLElement): string => chip.getAttribute(valueAttr) ?? '';

  const value = (): string => {
    const active = chips().find((chip) => chip.getAttribute(pressedAttr) === 'true');
    return active ? chipValue(active) : allValue;
  };

  const values = (): string[] => chips().map(chipValue);

  const hasValue = (candidate: string): boolean =>
    candidate === allValue || values().includes(candidate);

  const setValue = (next: string): void => {
    for (const chip of chips()) {
      const active = chipValue(chip) === next;
      chip.setAttribute(pressedAttr, active ? 'true' : 'false');
      if (activeClass) chip.classList.toggle(activeClass, active);
    }
  };

  group.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const chip = target.closest<HTMLElement>(chipSelector);
    if (!chip || !group.contains(chip)) return;
    const next = chipValue(chip);
    setValue(next);
    options.onToggle?.(next, group);
  });

  return { group, value, values, hasValue, setValue };
}

/** Definisi satu kelompok chip pada tingkat halaman. */
export interface FilterPageGroup extends FilterGroupOptions {
  /** Kunci unik kelompok, dipakai untuk state `apply` dan kueri URL. */
  key: string;
  /** Elemen pembungkus chip. */
  group: HTMLElement;
}

/** Opsi `setupFilterPage`. */
export interface FilterPageOptions {
  groups: FilterPageGroup[];
  /** Dipanggil setiap state berubah; `values` memetakan kunci ke nilai chip. */
  apply: (values: Record<string, string>, query: string) => void;
  /** Kolom pencarian opsional; perubahan memicu `apply`. */
  searchInput?: HTMLInputElement | null;
  /** Menyelaraskan nilai kelompok ke kueri URL (baca saat mulai, tulis saat berubah). */
  syncUrl?: boolean;
  /** Nama parameter URL untuk isi `searchInput` (mis. `'q'`); kosong = tidak disinkronkan. */
  queryKey?: string;
}

/**
 * Menulis pasangan kunci-nilai ke query string URL (via `replaceState`);
 * nilai kosong menghapus parameternya. Dipakai bersama oleh halaman saring.
 */
export function writeQuery(values: Record<string, string | null | undefined>): void {
  try {
    const params = new URLSearchParams(location.search);
    for (const [key, value] of Object.entries(values)) {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    const search = params.toString();
    history.replaceState(null, '', `${location.pathname}${search ? `?${search}` : ''}${location.hash}`);
  } catch {
    /* abaikan bila riwayat/URL tidak dapat diubah */
  }
}

/** Membaca nilai seluruh `keys` dari query string URL (pasangan yang ada saja). */
export function readQuery(keys: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    const params = new URLSearchParams(location.search);
    for (const key of keys) {
      const value = params.get(key);
      if (value !== null) out[key] = value;
    }
  } catch {
    /* abaikan URL yang tidak dapat dibaca */
  }
  return out;
}

/** Atribut pembawa nilai chip, dicoba berurutan hingga yang pertama ada. */
const CHIP_VALUE_ATTRS = [
  'data-value',
  'data-glos-filter',
  'data-rumus-filter',
  'data-app-filter',
  'data-ex-filter',
  'data-map-subject',
  'data-map-grade',
  'data-map-filter',
  'data-map-pengayaan',
];

/** Opsi `collapseFiltersOnMobile`. */
export interface CollapseFiltersOptions {
  /** Media query ponsel; default `(max-width: 40rem)`. */
  query?: string;
}

/**
 * Membuat panel saringan (`details.filter-panel`) dapat dilipat di ponsel.
 *
 * Menutup panel saat media query ponsel cocok, membukanya kembali di layar
 * lebar, dan memperbarui lencana jumlah saringan aktif pada ringkasan
 * (`[data-filter-summary-count]`). Jumlah dihitung dari chip ber-`aria-pressed`
 * bernilai nyata (bukan "semua") ditambah kolom pencarian yang terisi.
 *
 * Mengembalikan fungsi pembongkaran agar pendengar media/observer dapat
 * dilepas (mis. di uji).
 */
export function collapseFiltersOnMobile(
  root: ParentNode = document,
  options: CollapseFiltersOptions = {},
): () => void {
  const panel = root.querySelector<HTMLDetailsElement>('[data-filter-panel]');
  if (!panel) return () => {};
  const countEl = panel.querySelector<HTMLElement>('[data-filter-summary-count]');
  const media = window.matchMedia(options.query ?? '(max-width: 40rem)');

  const chipValue = (chip: HTMLElement): string => {
    for (const attr of CHIP_VALUE_ATTRS) {
      const value = chip.getAttribute(attr);
      if (value !== null) return value;
    }
    return '';
  };

  const updateCount = (): void => {
    if (!countEl) return;
    let count = 0;
    for (const chip of panel.querySelectorAll<HTMLElement>('[aria-pressed="true"]')) {
      const value = chipValue(chip);
      if (value && value !== 'all') count += 1;
    }
    for (const input of panel.querySelectorAll<HTMLInputElement>('input[type="search"]')) {
      if (input.value.trim() !== '') count += 1;
    }
    countEl.textContent = String(count);
    countEl.hidden = count === 0;
  };

  const applyCollapse = (): void => {
    if (media.matches) panel.removeAttribute('open');
    else panel.setAttribute('open', '');
  };

  applyCollapse();
  updateCount();

  media.addEventListener('change', applyCollapse);
  panel.addEventListener('input', updateCount);
  const observer = new MutationObserver(updateCount);
  observer.observe(panel, {
    subtree: true,
    attributes: true,
    attributeFilter: ['aria-pressed'],
  });

  return () => {
    media.removeEventListener('change', applyCollapse);
    panel.removeEventListener('input', updateCount);
    observer.disconnect();
  };
}

/** Pegangan yang dikembalikan `setupFilterPage`. */
export interface FilterPageHandle {
  /** Salinan state nilai per kelompok. */
  values(): Record<string, string>;
  /** Menetapkan nilai satu kelompok bila tersedia, lalu `apply`. */
  setValue(key: string, value: string): void;
  /**
   * Mengembalikan seluruh kelompok ke nilai "semua", mengosongkan pencarian,
   * dan menghapus kueri URL.
   */
  reset(): void;
  /** Menjalankan ulang `apply` dengan state saat ini. */
  refresh(): void;
}

/**
 * Merangkai beberapa kelompok chip menjadi satu halaman saring.
 *
 * `apply` sengaja tetap milik halaman karena logika tampil/sembunyi dan teks
 * hasil berbeda-beda; helper ini hanya menyatukan bagian yang berulang.
 */
export function setupFilterPage(options: FilterPageOptions): FilterPageHandle {
  const handles = new Map<string, FilterGroupHandle>();
  const allValues = new Map<string, string>();
  const state: Record<string, string> = {};

  const query = (): string => (options.searchInput ? options.searchInput.value : '');

  const run = (): void => {
    options.apply({ ...state }, query());
  };

  const writeUrl = (): void => {
    if (!options.syncUrl) return;
    const values: Record<string, string> = { ...state };
    if (options.queryKey) values[options.queryKey] = query().trim();
    writeQuery(values);
  };

  const readUrl = (): void => {
    if (!options.syncUrl) return;
    const keys = [...handles.keys()];
    if (options.queryKey) keys.push(options.queryKey);
    const read = readQuery(keys);
    for (const [key, handle] of handles) {
      const value = read[key];
      if (value && handle.hasValue(value)) {
        handle.setValue(value);
        state[key] = value;
      }
    }
    if (options.queryKey && options.searchInput && read[options.queryKey]) {
      options.searchInput.value = read[options.queryKey];
    }
  };

  for (const spec of options.groups) {
    const handle = setupFilterGroup(spec.group, {
      chipSelector: spec.chipSelector,
      valueAttr: spec.valueAttr,
      pressedAttr: spec.pressedAttr,
      activeClass: spec.activeClass,
      allValue: spec.allValue,
      onToggle: (value) => {
        state[spec.key] = value;
        run();
        writeUrl();
      },
    });
    handles.set(spec.key, handle);
    state[spec.key] = handle.value();
    allValues.set(spec.key, spec.allValue ?? '');
  }

  readUrl();

  if (options.searchInput) {
    const onSearch = (): void => {
      run();
      writeUrl();
    };
    options.searchInput.addEventListener('input', onSearch);
    options.searchInput.addEventListener('search', onSearch);
  }

  // Tulis ulang URL setelah membaca agar parameter tak sah ikut dibersihkan,
  // sama seperti perilaku mesin saringan sebelumnya.
  writeUrl();
  run();

  return {
    values: () => ({ ...state }),
    setValue: (key, value) => {
      const handle = handles.get(key);
      if (!handle || !handle.hasValue(value)) return;
      handle.setValue(value);
      state[key] = value;
      run();
      writeUrl();
    },
    reset: () => {
      const cleared: Record<string, string | null> = {};
      for (const [key, handle] of handles) {
        const all = allValues.get(key) ?? '';
        handle.setValue(all);
        state[key] = all;
        cleared[key] = null;
      }
      if (options.searchInput) options.searchInput.value = '';
      if (options.queryKey) cleared[options.queryKey] = null;
      run();
      if (options.syncUrl) writeQuery(cleared);
    },
    refresh: run,
  };
}

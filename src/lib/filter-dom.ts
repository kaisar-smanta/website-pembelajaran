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
}

/** Pegangan yang dikembalikan `setupFilterPage`. */
export interface FilterPageHandle {
  /** Salinan state nilai per kelompok. */
  values(): Record<string, string>;
  /** Menetapkan nilai satu kelompok bila tersedia, lalu `apply`. */
  setValue(key: string, value: string): void;
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
  const state: Record<string, string> = {};

  const query = (): string => (options.searchInput ? options.searchInput.value : '');

  const run = (): void => {
    options.apply({ ...state }, query());
  };

  const writeUrl = (): void => {
    if (!options.syncUrl) return;
    try {
      const params = new URLSearchParams(location.search);
      for (const [key, value] of Object.entries(state)) {
        if (value) params.set(key, value);
        else params.delete(key);
      }
      const search = params.toString();
      const next = `${location.pathname}${search ? `?${search}` : ''}${location.hash}`;
      history.replaceState(null, '', next);
    } catch {
      /* abaikan bila riwayat/URL tidak dapat diubah */
    }
  };

  const readUrl = (): void => {
    if (!options.syncUrl) return;
    try {
      const params = new URLSearchParams(location.search);
      for (const [key, handle] of handles) {
        const value = params.get(key);
        if (value && handle.hasValue(value)) {
          handle.setValue(value);
          state[key] = value;
        }
      }
    } catch {
      /* abaikan parameter yang tidak valid */
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
  }

  readUrl();

  if (options.searchInput) {
    options.searchInput.addEventListener('input', run);
    options.searchInput.addEventListener('search', run);
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
    refresh: run,
  };
}

/**
 * Perkakas penyaringan daftar di sisi peramban.
 *
 * Menyatukan tiga langkah yang sebelumnya disalin di tiap halaman daftar:
 * mencocokkan elemen dengan nilai chip dan kueri, menyembunyikan grup leluhur
 * yang seluruh isinya tersembunyi, dan menyusun teks status hasil. Logika
 * murni tetap tinggal di `./filter.ts`; modul ini hanya membungkusnya untuk
 * DOM sehingga tetap mudah diuji lewat perilaku halaman.
 */

import { matchesAny, normalizeText } from './filter.ts';

/** Mengubah nilai chip tunggal menjadi himpunan pilihan. */
export function selectedSet(value: string | undefined, allValue = ''): Set<string> {
  return value && value !== allValue ? new Set([value]) : new Set();
}

/** Spesifikasi satu atribut nilai yang diuji terhadap nilai chip. */
export interface MatchField {
  /** Kunci pada `values` yang memasok nilai terpilih. */
  key: string;
  /** Nama atribut elemen pembawa nilai. */
  attr: string;
  /** Pisahkan nilai atribut dengan spasi menjadi banyak nilai. */
  multi?: boolean;
}

/** Opsi tambahan `dataMatches`. */
export interface MatchOptions {
  /** Nilai chip yang berarti "tanpa saringan"; default string kosong. */
  allValue?: string;
  /** Atribut teks yang diuji terhadap kueri pencarian. */
  searchAttr?: string;
}

/**
 * Menentukan apakah `el` lolos seluruh field nilai dan kueri pencarian.
 *
 * `query` boleh mentah; nilainya dinormalkan seperti teks atribut sehingga
 * pencarian mengabaikan besar-kecil huruf, diakritik, dan spasi berlebih.
 */
export function dataMatches(
  el: Element,
  fields: MatchField[],
  values: Record<string, string>,
  query = '',
  options: MatchOptions = {},
): boolean {
  const allValue = options.allValue ?? '';
  for (const field of fields) {
    const selected = selectedSet(values[field.key], allValue);
    if (selected.size === 0) continue;
    const raw = el.getAttribute(field.attr) ?? '';
    const candidates = field.multi ? raw.split(/\s+/).filter(Boolean) : [raw];
    if (!matchesAny(selected, candidates)) return false;
  }
  const q = normalizeText(query);
  if (q && options.searchAttr) {
    const haystack = normalizeText(el.getAttribute(options.searchAttr) ?? '');
    if (!haystack.includes(q)) return false;
  }
  return true;
}

/** Cara menyembunyikan elemen: properti `hidden` atau kelas CSS. */
export interface HideMode {
  hide(el: HTMLElement, hidden: boolean): void;
  isHidden(el: HTMLElement): boolean;
}

/** Mode sembunyi lewat properti `hidden`. */
export const hiddenProperty: HideMode = {
  hide: (el, hidden) => {
    el.hidden = hidden;
  },
  isHidden: (el) => el.hidden !== false,
};

/** Mode sembunyi lewat kelas CSS, default `is-hidden`. */
export function classHideMode(className = 'is-hidden'): HideMode {
  return {
    hide: (el, hidden) => el.classList.toggle(className, hidden),
    isHidden: (el) => el.classList.contains(className),
  };
}

/** Satu tingkat grup yang disembunyikan ketika seluruh isinya tersembunyi. */
export interface AncestorLevel {
  /** Grup pada tingkat ini, diurutkan dari lapisan dalam ke luar. */
  groups: HTMLElement[];
  /** Selektor keturunan yang dihitung sebagai isi grup. */
  childSelector: string;
  /** Jangan sembunyikan grup yang sejak awal memang tak punya keturunan. */
  keepEmpty?: boolean;
}

/**
 * Menyembunyikan setiap grup pada `levels` yang seluruh keturunannya
 * tersembunyi. Level diproses berurutan sehingga hasil level dalam sudah
 * terlihat ketika level luar dinilai.
 */
export function hideEmptyAncestors(
  levels: AncestorLevel[],
  mode: HideMode = hiddenProperty,
): void {
  for (const level of levels) {
    for (const group of level.groups) {
      const children = group.querySelectorAll<HTMLElement>(level.childSelector);
      const anyVisible = Array.from(children).some((child) => !mode.isHidden(child));
      const hidden = children.length === 0 ? !level.keepEmpty : !anyVisible;
      mode.hide(group, hidden);
    }
  }
}

/** Opsi `resultStatus`. */
export interface StatusOptions {
  /** Kata benda yang dihitung, mis. "topik latihan". */
  noun: string;
  /** Kueri pencarian mentah; bila ada, disisipkan sebagai `untuk "..."`. */
  query?: string;
  /** Total item sebelum penyaringan; memunculkan bentuk "x dari y". */
  total?: number;
  /** Tampilkan frasa "Tidak ada ..." saat nol hasil. */
  empty?: boolean;
  /** Kata benda khusus saat nol hasil; default `noun`. */
  emptyNoun?: string;
  /** Konteks saringan saat nol hasil tanpa kueri; default "saringan ini". */
  filterNoun?: string;
}

/** Menyusun teks status hasil yang konsisten untuk daftar saring. */
export function resultStatus(count: number, options: StatusOptions): string {
  const {
    noun,
    query = '',
    total,
    empty = false,
    emptyNoun,
    filterNoun = 'saringan ini',
  } = options;
  const q = query.trim();
  if (count === 0 && empty) {
    return q
      ? `Tidak ada ${noun} yang cocok dengan "${q}".`
      : `Tidak ada ${emptyNoun ?? noun} yang cocok dengan ${filterNoun}.`;
  }
  if (q) return `Menampilkan ${count} ${noun} untuk "${q}".`;
  if (total !== undefined) return `Menampilkan ${count} dari ${total} ${noun}.`;
  return `Menampilkan ${count} ${noun}.`;
}

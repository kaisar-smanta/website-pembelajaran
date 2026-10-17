/**
 * Pintasan DOM/SVG yang dipakai bersama oleh komponen interaktif.
 *
 * Berisi helper tanpa kerangka (framework-free) untuk membuat elemen SVG,
 * membersihkan kontainer, menjepit nilai, memetakan koordinat domain ke kotak
 * gambar, dan menyusun atribut `d` sebuah jalur `<path>`. Semua fungsi hanya
 * menyentuh DOM saat dipanggil, sehingga aman diimpor di `<script>` klien.
 */

/** Namespace resmi SVG. */
export const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Membuat elemen SVG dan memasang atributnya sekaligus.
 *
 * Nilai atribut diubah menjadi string agar angka cukup ditulis apa adanya.
 */
export function el(name: string, attrs: Record<string, string | number> = {}): SVGElement {
  const node = document.createElementNS(SVG_NS, name);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, String(value));
  return node;
}

/** Menghapus seluruh anak sebuah elemen. */
export function clear(node: Element): void {
  while (node.firstChild) node.removeChild(node.firstChild);
}

/**
 * Menunda `setup` tiap elemen sampai mendekati viewport.
 *
 * Dipakai simulasi interaktif agar halaman dengan banyak simulasi (mis.
 * `/eksplorasi`) tidak menyiapkan semuanya sekaligus. Bila
 * `IntersectionObserver` tidak tersedia, elemen langsung disiapkan.
 */
export function initWhenVisible(
  nodes: Iterable<Element>,
  setup: (node: Element) => void,
  rootMargin = '200px 0px',
): void {
  const list = Array.from(nodes);
  if (list.length === 0) return;
  const reveal = (node: Element): void => {
    const shell = node.closest('[data-sim-shell]');
    shell?.querySelector('[data-sim-skeleton]')?.remove();
  };
  if (typeof IntersectionObserver === 'undefined') {
    list.forEach((node) => {
      setup(node);
      reveal(node);
    });
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        setup(entry.target);
        reveal(entry.target);
      }
    },
    { rootMargin },
  );
  list.forEach((node) => observer.observe(node));
}

/**
 * `querySelector` berbertipe pada sebuah akar. Mengembalikan `null` bila tidak
 * ada, sehingga pemanggil tidak perlu menulis `as HTMLInputElement` mentah.
 */
export function query<T extends Element = Element>(
  root: ParentNode,
  selector: string,
): T | null {
  return root.querySelector<T>(selector);
}

/**
 * Seperti `query`, tetapi melempar bila elemen tidak ditemukan. Dipakai saat
 * kontrak markup (mis. kontrol simulasi) wajib ada, sehingga kegagalan muncul
 * sebagai galat jelas alih-alih `null` yang menjalar.
 */
export function requireEl<T extends Element = Element>(
  root: ParentNode,
  selector: string,
): T {
  const node = root.querySelector<T>(selector);
  if (!node) throw new Error(`Elemen wajib tidak ditemukan: ${selector}`);
  return node;
}

/**
 * Membaca larik JSON dari elemen `<script type="application/json">` lalu
 * menyaring setiap item dengan `isItem`. Aman terhadap JSON rusak dan isi
 * bukan-larik, sehingga pembacaan data tersemat tidak perlu menyalin guard.
 */
export function readJsonArray<T>(
  el: Element | null,
  isItem: (value: unknown) => value is T,
): T[] {
  if (!el) return [];
  try {
    const parsed: unknown = JSON.parse(el.textContent ?? '[]');
    return Array.isArray(parsed) ? parsed.filter(isItem) : [];
  } catch {
    return [];
  }
}

/** Menjepit `value` ke rentang `[lo, hi]`. */
export function clamp(value: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, value));
}

/** Domain nilai yang dipetakan ke kotak gambar. */
export interface LinearScaleDomain {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

/** Ukuran kotak gambar beserta padding seragam di tiap sisi. */
export interface LinearScaleBox {
  width: number;
  height: number;
  pad: number;
}

/**
 * Memetakan koordinat matematika ke koordinat piksel SVG secara linear.
 *
 * `invertY` (default `true`) membalik sumbu y karena SVG tumbuh ke bawah
 * sedangkan grafik matematika tumbuh ke atas.
 */
export function linearScale(
  domain: LinearScaleDomain,
  box: LinearScaleBox,
  invertY = true,
): { sx: (x: number) => number; sy: (y: number) => number } {
  const { xMin, xMax, yMin, yMax } = domain;
  const { width, height, pad } = box;
  const spanX = xMax - xMin;
  const spanY = yMax - yMin;
  const sx = (x: number): number => pad + ((x - xMin) / spanX) * (width - 2 * pad);
  const sy = (y: number): number =>
    invertY
      ? height - pad - ((y - yMin) / spanY) * (height - 2 * pad)
      : pad + ((y - yMin) / spanY) * (height - 2 * pad);
  return { sx, sy };
}

/**
 * Menyusun teks `d` sebuah `<path>` dari daftar titik.
 *
 * Titik pertama (dan titik pertama setelah `null`) memakai perintah `M`,
 * sisanya `L`. `null` menandai jeda garis. Koordinat dibulatkan ke 1 desimal.
 */
export function polyline(points: Array<[number, number] | null>): string {
  let d = '';
  let move = true;
  for (const point of points) {
    if (point === null) {
      move = true;
      continue;
    }
    d += `${move ? 'M' : 'L'}${point[0].toFixed(1)} ${point[1].toFixed(1)}`;
    move = false;
  }
  return d;
}

/**
 * Perayaan kecil sisi klien yang dipakai bersama kartu soal dan blok
 * interaktif. Tanpa dependensi: hanya membuat lapisan dekoratif sementara,
 * membersihkan dirinya sendiri, dan tidak berbuat apa pun saat pengguna memilih
 * gerak minimal. Gaya visualnya tinggal di `src/styles/partials/motion.css`.
 */

const LAYER_CLASS = 'celebrate-layer';
const MAX_COUNT = 24;
const COLORS = [
  'var(--color-primary)',
  'var(--color-success)',
  'var(--color-geometry)',
  'var(--color-data)',
  'var(--color-algebra)',
];

export interface CelebrateOptions {
  /** Jumlah butir konfeti; dibatasi agar tetap ringan. */
  count?: number;
  /** Umur lapisan dalam milidetik sebelum dibersihkan. */
  duration?: number;
  /** Matikan cincin gelombang bila hanya butir konfeti yang diinginkan. */
  ring?: boolean;
}

interface CelebrateState {
  timer: number;
  restorePosition: string;
  changedPosition: boolean;
}

const states = new WeakMap<HTMLElement, CelebrateState>();

/** Apakah pengguna meminta gerak minimal. Aman di lingkungan tanpa DOM. */
export function prefersReducedMotion(): boolean {
  try {
    return (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  } catch {
    return false;
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Memunculkan ledakan kecil di dalam `root`. Panggilan berulang pada elemen yang
 * sama mengganti lapisan sebelumnya, bukan menumpuknya. Lapisan dibersihkan
 * otomatis setelah animasi selesai dan ditiadakan saat gerak minimal aktif.
 */
export function celebrate(root: HTMLElement, options: CelebrateOptions = {}): void {
  if (!root || typeof document === 'undefined' || prefersReducedMotion()) return;

  const count = clamp(Math.round(options.count ?? 9), 1, MAX_COUNT);
  const duration = clamp(Math.round(options.duration ?? 760), 300, 2000);

  const previous = states.get(root);
  if (previous) window.clearTimeout(previous.timer);

  let restorePosition = previous?.restorePosition ?? root.style.position;
  let changedPosition = previous?.changedPosition ?? false;
  if (!previous && window.getComputedStyle(root).position === 'static') {
    root.style.position = 'relative';
    changedPosition = true;
  }

  for (const child of Array.from(root.children)) {
    if (child.classList.contains(LAYER_CLASS)) child.remove();
  }

  const layer = document.createElement('span');
  layer.className = LAYER_CLASS;
  layer.setAttribute('aria-hidden', 'true');

  if (options.ring !== false) {
    const ring = document.createElement('span');
    ring.className = 'celebrate-ring';
    layer.appendChild(ring);
  }

  for (let index = 0; index < count; index += 1) {
    const dot = document.createElement('span');
    dot.className = 'celebrate-dot';
    const angle = (Math.PI * 2 * index) / count + Math.random() * 0.35;
    const distance = 34 + Math.random() * 58;
    dot.style.setProperty('--celebrate-x', `${Math.round(Math.cos(angle) * distance)}px`);
    dot.style.setProperty('--celebrate-y', `${Math.round(Math.sin(angle) * distance - 14)}px`);
    dot.style.setProperty('--celebrate-delay', `${Math.round(Math.random() * 90)}ms`);
    dot.style.setProperty('--celebrate-color', COLORS[index % COLORS.length]);
    layer.appendChild(dot);
  }

  root.appendChild(layer);

  const timer = window.setTimeout(() => {
    layer.remove();
    if (changedPosition) root.style.position = restorePosition;
    states.delete(root);
  }, duration + 280);

  states.set(root, { timer, restorePosition, changedPosition });
}

/**
 * Animasi angka pada strip statistik beranda: menghitung naik saat mendekati
 * viewport, dimatikan bila pengguna meminta gerak minimal. Dipanggil dari
 * `HeroStats.astro`; sebelumnya ditulis sebagai skrip `is:inline` ES5.
 */

export function setupHeroStats(): void {
  const root = document.querySelector<HTMLElement>('[data-hero-stats]');
  if (!root) return;
  const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
  if (!nodes.length) return;

  let reduce = false;
  try {
    reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    reduce = false;
  }
  if (reduce) return;

  const format = (value: number): string => {
    try {
      return value.toLocaleString('id-ID');
    } catch {
      return String(value);
    }
  };

  const animate = (node: HTMLElement) => {
    const target = Number.parseInt(node.getAttribute('data-count') || '', 10);
    if (!Number.isFinite(target) || target <= 0) return;
    let started: number | null = null;
    const duration = 900;
    node.textContent = format(0);

    const frame = (now: number) => {
      if (started === null) started = now;
      const progress = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = format(Math.round(target * eased));
      if (progress < 1) {
        window.requestAnimationFrame(frame);
      } else {
        node.textContent = format(target);
        node.classList.add('is-counted');
      }
    };

    window.requestAnimationFrame(frame);
  };

  const start = () => {
    for (const node of nodes) animate(node);
  };

  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(root);
  } else {
    start();
  }
}

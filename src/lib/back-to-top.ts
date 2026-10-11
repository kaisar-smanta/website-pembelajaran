/**
 * Tombol "Kembali ke atas": menampilkannya setelah menggulir jauh dan
 * mengembalikan fokus ke konten setelah diklik. Dipanggil dari
 * `BackToTop.astro`; sebelumnya ditulis sebagai skrip `is:inline` ES5.
 */

export function setupBackToTop(): void {
  const button = document.querySelector<HTMLElement>('[data-back-to-top]');
  if (!button) return;

  let threshold = 0;
  const measure = () => {
    threshold = window.innerHeight * 1.5;
  };

  const update = () => {
    const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    button.classList.toggle('is-visible', y > threshold);
  };

  const scrollToTop = () => {
    let reduce = false;
    try {
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      reduce = false;
    }
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    const main = document.getElementById('konten');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    }
  };

  measure();
  update();
  button.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', () => {
    measure();
    update();
  });
  window.addEventListener('pageshow', () => {
    measure();
    update();
  });
}

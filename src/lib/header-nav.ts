/**
 * Perilaku klien header situs: drawer navigasi seluler, dropdown submenu,
 * bayangan saat menggulir, dan pintasan papan ketik menuju halaman pencarian.
 *
 * Modul ini hanya menyentuh DOM saat `setupHeaderNav()` dipanggil sehingga aman
 * diimpor di `<script>` klien. Bila elemen header tidak ditemukan, pemanggilan
 * berhenti tanpa efek samping.
 */

import { url } from '../utils/url.ts';

/** Mengenali fokus yang berada di kolom isian agar pintasan `/` tidak mengganggu. */
export function isTyping(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
}

/** Memasang seluruh perilaku header. Berhenti dengan tenang bila header tidak ada. */
export function setupHeaderNav(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  if (!header) return;

  const toggle = document.querySelector<HTMLButtonElement>('[data-mobile-toggle]');
  const nav = document.querySelector('[data-primary-nav]');
  const desktopQuery = window.matchMedia('(min-width: 70rem)');

  function isOpen(): boolean {
    return nav?.getAttribute('data-open') === 'true';
  }

  function setOpen(open: boolean): void {
    const wasOpen = isOpen();
    nav?.setAttribute('data-open', String(open));
    document.body.classList.toggle('nav-open', open);
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');

    if (open && !wasOpen) {
      window.requestAnimationFrame(() => {
        nav?.querySelector<HTMLElement>('a, button')?.focus();
      });
    } else if (!open && wasOpen && nav?.contains(document.activeElement)) {
      toggle.focus();
    }
  }

  toggle?.addEventListener('click', () => {
    setOpen(!isOpen());
  });

  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
    closeDropdowns();
  });

  const dropdownItems = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-item]'));

  function setDropdown(item: HTMLElement, open: boolean): void {
    item.setAttribute('data-open', String(open));
    item
      .querySelector<HTMLButtonElement>('[data-nav-trigger]')
      ?.setAttribute('aria-expanded', String(open));
  }

  function closeDropdowns(except?: Element | null): void {
    dropdownItems.forEach((item) => {
      if (item !== except && item.getAttribute('data-open') === 'true') setDropdown(item, false);
    });
  }

  dropdownItems.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('[data-nav-trigger]');
    if (!trigger) return;

    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = item.getAttribute('data-open') === 'true';
      closeDropdowns(item);
      setDropdown(item, !open);
    });

    item.addEventListener('mouseenter', () => {
      if (!desktopQuery.matches) return;
      closeDropdowns(item);
      setDropdown(item, true);
    });

    item.addEventListener('mouseleave', () => {
      if (!desktopQuery.matches) return;
      if (!item.contains(document.activeElement)) setDropdown(item, false);
    });

    item.addEventListener('focusin', () => {
      closeDropdowns(item);
      setDropdown(item, true);
    });

    item.addEventListener('focusout', () => {
      window.requestAnimationFrame(() => {
        if (!item.contains(document.activeElement)) setDropdown(item, false);
      });
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    const openItem = dropdownItems.find((item) => item.getAttribute('data-open') === 'true');
    if (openItem) {
      setDropdown(openItem, false);
      openItem.querySelector<HTMLButtonElement>('[data-nav-trigger]')?.focus();
      return;
    }

    if (!isOpen()) return;
    setOpen(false);
    toggle?.focus();
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    dropdownItems.forEach((item) => {
      if (item.getAttribute('data-open') === 'true' && !item.contains(target)) {
        setDropdown(item, false);
      }
    });

    if (desktopQuery.matches || !isOpen()) return;
    if (header.contains(target)) return;
    setOpen(false);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  const onScroll = (): void => {
    header.classList.toggle('is-scrolled', window.scrollY > 4);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Pintasan papan ketik: `/` (saat tidak mengetik) atau Ctrl/Cmd+K menuju
     halaman pencarian. Pembantu `url()` menjaga base path tetap benar. */
  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      window.location.href = url('/cari');
      return;
    }
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
    if (isTyping(event.target)) return;
    event.preventDefault();
    window.location.href = url('/cari');
  });
}

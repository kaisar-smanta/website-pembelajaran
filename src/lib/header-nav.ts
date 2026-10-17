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

  /**
   * Menandai apakah drawer saat ini menyisipkan satu entri riwayat. Sengaja
   * disimpan lokal, bukan dibaca dari `history.state`, agar siklus kembali lalu
   * maju (yang meninggalkan state lama) tidak membuat drawer menutup dengan
   * `history.back()` ke halaman sebelumnya.
   */
  let historyPushed = false;

  /**
   * Menyembunyikan isi di belakang drawer dari pembaca layar dan menjadikan
   * elemen tetap (footer, navigasi bawah, tombol ke atas) inert. Konten utama
   * hanya `aria-hidden` (bukan inert) agar klik di luar tetap menutup drawer.
   */
  function setBackgroundHidden(on: boolean): void {
    const main = document.getElementById('konten');
    if (main) {
      if (on) main.setAttribute('aria-hidden', 'true');
      else main.removeAttribute('aria-hidden');
    }
    document
      .querySelectorAll<HTMLElement>('footer, [data-back-to-top], .bottom-nav')
      .forEach((node) => {
        if (on) {
          node.setAttribute('inert', '');
          node.setAttribute('aria-hidden', 'true');
        } else {
          node.removeAttribute('inert');
          node.removeAttribute('aria-hidden');
        }
      });
  }

  interface SetOpenOptions {
    /** Perubahan berasal dari tombol kembali peramban; jangan mengubah riwayat. */
    fromHistory?: boolean;
    /** Jangan sisihkan riwayat (mis. saat tautan menavigasi ke halaman lain). */
    keepHistory?: boolean;
  }

  function setOpen(open: boolean, options: SetOpenOptions = {}): void {
    const wasOpen = isOpen();
    if (open === wasOpen) return;

    nav?.setAttribute('data-open', String(open));
    document.body.classList.toggle('nav-open', open);
    setBackgroundHidden(open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    }

    if (open) {
      // Dorong satu entri riwayat agar tombol kembali menutup drawer, bukan
      // meninggalkan halaman.
      if (!options.fromHistory && !historyPushed) {
        window.history.pushState({ drawerOpen: true }, '');
        historyPushed = true;
      }
      window.requestAnimationFrame(() => {
        nav?.querySelector<HTMLElement>('a, button')?.focus();
      });
    } else {
      if (!options.fromHistory && historyPushed) {
        if (options.keepHistory) {
          // Tautan sedang menavigasi; ganti entri agar tidak ada sisa di riwayat.
          window.history.replaceState(null, '');
          historyPushed = false;
        } else {
          // `popstate` akan membersihkan penanda begitu navigasi selesai.
          window.history.back();
        }
      }
      if (wasOpen && nav?.contains(document.activeElement)) toggle?.focus();
    }
  }

  toggle?.addEventListener('click', () => {
    setOpen(!isOpen());
  });

  // Tombol kembali peramban (Android/iOS) menutup drawer tanpa mengunci pengguna.
  window.addEventListener('popstate', () => {
    historyPushed = false;
    if (isOpen()) setOpen(false, { fromHistory: true });
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

  // Perangkap fokus: selama drawer terbuka, Tab berputar di dalamnya saja.
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab' || !isOpen() || !nav) return;
    const focusables = Array.from(
      nav.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
    ).filter((el) => el.offsetParent !== null);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (!nav.contains(active)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    } else if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
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
    // Tutup tanpa menyisihkan riwayat: tautan sedang menavigasi ke halaman lain.
    link.addEventListener('click', () => setOpen(false, { keepHistory: true }));
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

/**
 * Pemberitahuan bahwa penyimpanan peramban tidak tersedia.
 *
 * Ketika `localStorage` diblokir (mode privat, kebijakan peramban), seluruh
 * kemajuan belajar hilang tanpa tanda apa pun. Pemberitahuan yang dapat
 * ditutup ini memberi tahu siswa secara jujur. Penutupan disimpan di
 * `sessionStorage` bila tersedia; bila tidak, cukup disembunyikan sampai
 * halaman dimuat ulang. Modul ini murni soal penyimpanan, tanpa DOM.
 */

import { safeSessionStorage } from './storage.ts';

/** Penanda sesi bahwa pemberitahuan sudah ditutup. */
export const STORAGE_NOTICE_KEY = 'mtk-storage-notice-dismissed';

/** Apakah siswa sudah menutup pemberitahuan pada sesi peramban ini. */
export function wasStorageNoticeDismissed(): boolean {
  const storage = safeSessionStorage();
  if (!storage) return false;
  try {
    return storage.getItem(STORAGE_NOTICE_KEY) === '1';
  } catch {
    return false;
  }
}

/** Menandai pemberitahuan sudah ditutup untuk sesi peramban berjalan. */
export function dismissStorageNotice(): void {
  const storage = safeSessionStorage();
  if (!storage) return;
  try {
    storage.setItem(STORAGE_NOTICE_KEY, '1');
  } catch {
    /* penyimpanan sesi ikut diblokir: cukup sembunyikan untuk halaman ini */
  }
}

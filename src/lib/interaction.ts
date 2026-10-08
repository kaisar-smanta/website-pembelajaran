/**
 * Jembatan interaksi antarkomponen.
 *
 * Komponen blok tidak memanggil satu sama lain; mereka memancarkan peristiwa
 * `mtk:interaction` di `window` yang didengar pelacak kemajuan halaman.
 * Pembungkusan di sini memusatkan nama peristiwa dan penanganan galat.
 */

/**
 * Memancarkan peristiwa `mtk:interaction` beserta `id`, `kind`, dan detail
 * tambahan. Aman dipanggil meski `CustomEvent` tidak tersedia.
 */
export function emitInteraction(
  id: string,
  kind: string,
  detail: Record<string, unknown> = {},
): void {
  try {
    window.dispatchEvent(
      new CustomEvent('mtk:interaction', { detail: { id, kind, ...detail } }),
    );
  } catch {
    /* lingkungan tanpa DOM/CustomEvent: abaikan */
  }
}

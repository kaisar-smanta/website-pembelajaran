/**
 * Inti penyimpanan JSON pada `localStorage` yang dipakai bersama oleh
 * `learner.ts` (dugaan & refleksi) dan `progress.ts` (kemajuan latihan).
 *
 * Logika murni dan tanpa DOM: seluruh akses `localStorage` dibungkus dan
 * ditelan bila diblokir (mode privat, kuota penuh) sehingga pemanggil tidak
 * perlu mengulang penanganan galat. Dipisahkan agar kerangka baca/tulis peta
 * hanya ada di satu tempat.
 */

/** Mengembalikan `localStorage` bila tersedia, selain itu `undefined`. */
export function safeStorage(): Storage | undefined {
  try {
    return typeof window !== 'undefined' ? window.localStorage : undefined;
  } catch {
    return undefined;
  }
}

function readRaw(storage: Storage | undefined, key: string): string | null {
  if (!storage) return null;
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Membaca peta objek dari `localStorage`, membuang entri yang tidak lolos
 * `validate`. Nilai yang rusak atau bukan objek diabaikan tanpa melempar.
 */
export function readMap<T>(
  key: string,
  validate: (value: Record<string, unknown>, id: string) => T | undefined,
  storage: Storage | undefined = safeStorage(),
): Record<string, T> {
  const raw = readRaw(storage, key);
  if (!raw) return {};
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return {};
  }
  if (!parsed || typeof parsed !== 'object') return {};
  const out: Record<string, T> = {};
  for (const [id, value] of Object.entries(parsed as Record<string, unknown>)) {
    if (!value || typeof value !== 'object') continue;
    const valid = validate(value as Record<string, unknown>, id);
    if (valid) out[id] = valid;
  }
  return out;
}

/** Menulis peta objek ke `localStorage`, menelan galat kuota/izin. */
export function writeMap(
  key: string,
  map: Record<string, unknown>,
  storage: Storage | undefined = safeStorage(),
): void {
  if (!storage) return;
  try {
    storage.setItem(key, JSON.stringify(map));
  } catch {
    /* penyimpanan penuh atau diblokir: abaikan */
  }
}

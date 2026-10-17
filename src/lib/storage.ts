/**
 * Inti penyimpanan JSON pada `localStorage` yang dipakai bersama oleh
 * `learner.ts` (dugaan & refleksi) dan `progress.ts` (kemajuan latihan).
 *
 * Logika murni dan tanpa DOM: seluruh akses `localStorage` dibungkus dan
 * ditelan bila diblokir (mode privat, kuota penuh) sehingga pemanggil tidak
 * perlu mengulang penanganan galat. Dipisahkan agar kerangka baca/tulis peta
 * hanya ada di satu tempat.
 */

import { SCHEMA_VERSION, STORAGE_KEYS } from './storage-keys.ts';

/** Mengembalikan `localStorage` bila tersedia, selain itu `undefined`. */
export function safeStorage(): Storage | undefined {
  try {
    return typeof window !== 'undefined' ? window.localStorage : undefined;
  } catch {
    return undefined;
  }
}

/** Mengembalikan `sessionStorage` bila tersedia, selain itu `undefined`. */
export function safeSessionStorage(): Storage | undefined {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Menaksir apakah `localStorage` benar-benar dapat dipakai: bukan hanya
 * tersedia, tetapi juga dapat ditulisi. Mode privat sebagian peramban
 * mengembalikan objek `localStorage` yang gagal saat `setItem`, jadi penulisan
 * uji di sini menangkap kasus tersebut (penyimpanan tidak akan pernah tersimpan).
 * Selalu membersihkan kunci uji agar tidak menumpuk di penyimpanan.
 */
export function hasLocalStorage(): boolean {
  const storage = safeStorage();
  if (!storage) return false;
  const probe = '__mtk_storage_probe__';
  try {
    storage.setItem(probe, '1');
    storage.removeItem(probe);
    return true;
  } catch {
    return false;
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
 * Migrasi bentuk data per versi asal. Kosong sampai ada perubahan tak-kompatibel;
 * saat menambah migrasi `n + 1`, petakan `MIGRATIONS[n + 1]` dan naikkan
 * `SCHEMA_VERSION`. Migrasi menerima `storage` untuk memperbaiki kunci terkait.
 */
const MIGRATIONS: Record<number, (storage: Storage) => void> = {};

/** Versi skema data tersimpan (0 bila belum pernah ditulis). */
export function readSchemaVersion(storage: Storage | undefined = safeStorage()): number {
  const raw = readRaw(storage, STORAGE_KEYS.meta);
  if (!raw) return 0;
  try {
    const parsed = JSON.parse(raw) as { version?: unknown };
    return typeof parsed.version === 'number' ? parsed.version : 0;
  } catch {
    return 0;
  }
}

function writeVersion(storage: Storage | undefined, version: number): void {
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEYS.meta, JSON.stringify({ version }));
  } catch {
    /* penyimpanan penuh atau diblokir: abaikan */
  }
}

/** Menjalankan migrasi yang tertunda sampai versi skema saat ini tercapai. */
function migrate(storage: Storage | undefined, from: number): void {
  for (let version = from + 1; version <= SCHEMA_VERSION; version += 1) {
    MIGRATIONS[version]?.(storage as Storage);
  }
  writeVersion(storage, SCHEMA_VERSION);
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
  const version = readSchemaVersion(storage);
  // Data dari versi yang lebih baru tidak boleh dibaca dengan skema lama.
  if (version > SCHEMA_VERSION) return {};
  // Data lama (belum bertanda, versi 0) hingga versi sebelumnya ikut dimigrasi.
  if (version < SCHEMA_VERSION) migrate(storage, version);

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
    return;
  }
  // Menandai data yang tersimpan dengan versi skema saat ini.
  if (readSchemaVersion(storage) !== SCHEMA_VERSION) writeVersion(storage, SCHEMA_VERSION);
}

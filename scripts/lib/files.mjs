// Utilitas berkas bersama untuk skrip pemeriksaan (bukan bagian build situs).
//
// Fungsi penelusuran rekursif sebelumnya disalin di beberapa skrip; kini hanya
// ada di satu tempat agar perilakunya seragam.

import fs from 'node:fs';
import path from 'node:path';

/**
 * Mengumpulkan berkas di `dir` secara rekursif yang lolos `predicate(nama)`.
 * Mengembalikan array kosong bila `dir` tidak ada.
 */
export function collectFiles(dir, predicate = () => true) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectFiles(full, predicate));
    else if (predicate(entry.name)) out.push(full);
  }
  return out;
}

/** Predikat ekstensi, mis. `byExtension('.html')`. */
export function byExtension(...exts) {
  return (name) => exts.some((ext) => name.endsWith(ext));
}

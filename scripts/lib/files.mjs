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

/**
 * Menyelesaikan URL menjadi berkas nyata di `distDir`. Query dan hash
 * diabaikan, `%XX` didekode, rute tanpa ekstensi diarahkan ke `index.html`,
 * dan direktori diakhiri `index.html`. Dipakai bersama oleh server pratinjau
 * (scripts/lib/browser.mjs) dan pemeriksa tautan (scripts/check-links.mjs)
 * agar keduanya sepakat soal berkas tujuan.
 */
export function resolveDistFile(distDir, base, urlPath) {
  let p = decodeURIComponent(String(urlPath).split(/[?#]/)[0]);
  if (base !== '/' && p.startsWith(base)) p = p.slice(base.length);
  if (!p.startsWith('/')) p = `/${p}`;
  let file = path.join(distDir, p);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, 'index.html');
  } else if (!path.extname(file)) {
    file = path.join(distDir, p, 'index.html');
  }
  return file;
}

/**
 * Menulis `data` ke `<target>.tmp` lalu mengembalikan jalur sementara itu.
 * Pemanggil memakai `replaceFile` setelah penulisan berhasil, sehingga berkas
 * hasil (mis. PNG) tidak pernah setengah tertulis bila proses berhenti.
 */
export function writeTempFile(target, data) {
  const tmp = `${target}.tmp`;
  fs.writeFileSync(tmp, data);
  return tmp;
}

/** Mengganti `target` dengan berkas sementara hasil `writeTempFile`. */
export function replaceFile(tmp, target) {
  fs.renameSync(tmp, target);
}

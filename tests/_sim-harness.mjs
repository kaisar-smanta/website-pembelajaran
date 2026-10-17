// Harness bersama untuk uji logika murni simulasi (`tests/sim-*.mjs`).
//
// Berkas ini BUKAN berkas uji: `tests/run-all.mjs` melewati setiap berkas yang
// berawalan garis bawah. Setiap berkas `sim-<tipe>.mjs` cukup menyusun tabel
// kasus berlabel lalu menyerahkannya ke `runSimSuite`, sehingga tidak lagi
// menyalin loop `try`/`catch` dan ringkasan yang sama.
//
// Bentuk pemakaian:
//   runSimSuite({
//     name: 'sim-circle',
//     cases: [
//       ['r = 4 => K ≈ 25,1327', () => close(circumference(4), 25.1327, 'K', 1e-3)],
//     ],
//   });
//
// Pencatatan memakai primitif `runCase`/`report` di `_util.mjs` agar keluaran
// `PASS`/`FAIL` dan ringkasannya seragam dengan berkas uji lain: setiap kasus
// dijalankan, kegagalan dicatat tanpa menghentikan kasus berikutnya, dan proses
// keluar dengan kode 1 bila ada yang gagal.

import { runCase, report } from './_util.mjs';

/**
 * Menjalankan seluruh kasus simulasi. `cases` adalah larik pasangan
 * `[label, fn]`; `fn` berisi asersi dan boleh melempar galat. `name` hanya
 * dicetak sebagai penanda agar keluaran mudah diikuti.
 */
export function runSimSuite({ name, cases }) {
  if (!Array.isArray(cases) || cases.length === 0) {
    throw new Error(`runSimSuite(${name ?? 'anonym'}) tanpa kasus`);
  }
  if (name) console.log(`${name}:`);
  for (const [label, run] of cases) runCase(label, run);
  report();
}

// Menjalankan seluruh pemeriksaan matematika: verifikasi nilai contoh pada materi
// plus uji logika murni setiap simulasi interaktif.
//
// Pemakaian: node tests/run-all.mjs (dipanggil oleh `npm test`).

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
// Berkas dengan awalan "_" adalah pembantu bersama (mis. `_util.mjs`), bukan uji.
const files = fs
  .readdirSync(here)
  .filter((name) => name.endsWith('.mjs') && name !== 'run-all.mjs' && !name.startsWith('_'))
  .sort();

// Batas waktu per berkas agar satu uji yang menggantung tidak memblokir
// seluruh rangkaian tanpa batas.
const TIMEOUT_MS = 120_000;
let failed = 0;
for (const file of files) {
  const result = spawnSync(process.execPath, [path.join(here, file)], {
    stdio: 'inherit',
    timeout: TIMEOUT_MS,
  });
  if (result.error && result.error.code === 'ETIMEDOUT') {
    failed += 1;
    console.error(`\nGAGAL (batas waktu ${TIMEOUT_MS} ms): ${file}`);
  } else if (result.status !== 0) {
    failed += 1;
    console.error(`\nGAGAL: ${file}`);
  }
}

if (failed > 0) {
  console.error(`\n${failed} berkas uji gagal.`);
  process.exit(1);
}

console.log(`\nSeluruh ${files.length} berkas uji lulus.`);

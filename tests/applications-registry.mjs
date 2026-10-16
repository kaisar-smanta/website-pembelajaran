// Penjaga registri studi kasus "Matematika dalam Kehidupan".
//
// Berbeda dari topik/soal yang memakai `import.meta.glob`, registri studi kasus
// masih memakai impor manual di `src/data/applications/index.ts` (perlu agar
// dapat dimuat Node). Uji ini memastikan setiap berkas kategori benar-benar
// diimpor, sehingga berkas baru yang lupa didaftarkan akan ketahuan.

import fs from 'node:fs';
import path from 'node:path';
import { check, load, root } from './_util.mjs';

const dir = 'src/data/applications';
const { applications } = await load(`${dir}/index.ts`);
const registered = new Set(applications.map((application) => application.id));

const files = fs
  .readdirSync(path.join(root, dir))
  .filter((name) => name.endsWith('.ts') && name !== 'index.ts')
  .sort();

const perFile = [];
for (const file of files) {
  const mod = await load(`${dir}/${file}`);
  const items = Object.values(mod).flatMap((value) => (Array.isArray(value) ? value : []));
  perFile.push({ file, items });
}

check('setiap entri studi kasus terdaftar di index.ts', () => {
  for (const { file, items } of perFile) {
    for (const item of items) {
      if (item && typeof item.id === 'string' && !registered.has(item.id)) {
        throw new Error(`${file}: "${item.id}" tidak diimpor oleh index.ts`);
      }
    }
  }
});

console.log(`Registri studi kasus diperiksa: ${files.length} berkas, ${applications.length} entri`);

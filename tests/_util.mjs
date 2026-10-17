// Utilitas bersama untuk berkas uji.
//
// Berkas ini BUKAN berkas uji: `tests/run-all.mjs` melewati setiap berkas yang
// berawalan garis bawah. Semua pembantu yang dulu disalin ke banyak berkas uji
// (memuat TypeScript sumber, mengumpulkan topik/soal, asersi, penyimpanan palsu)
// dikumpulkan di sini agar perubahan kontrak data cukup diubah satu tempat.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import { registerHooks } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { sectionSearchText } from '../src/lib/content-text.ts';

/** Akar repositori. */
export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Node ESM tidak mengenal alias `@/*` dari `tsconfig.json`, padahal modul
 * sumber banyak yang memakainya. Tanpa ini, setiap berkas yang dimuat uji
 * terpaksa memakai impor relatif dan mudah lupa. Hook ini menyelesaikan `@/x`
 * ke `src/x.ts` (atau `src/x/index.ts`) agar sumber yang dimuat uji setara
 * dengan yang dibangun Astro.
 */
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith('@/')) {
      const base = path.join(root, 'src', specifier.slice(2));
      const candidates = [base, `${base}.ts`, path.join(base, 'index.ts')];
      for (const candidate of candidates) {
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
          return { url: pathToFileURL(candidate).href, shortCircuit: true };
        }
      }
    }
    return nextResolve(specifier, context);
  },
});

/**
 * Memuat berkas TypeScript sumber lewat type stripping bawaan Node.
 * `file` relatif terhadap akar repositori.
 */
export async function load(file) {
  return import(pathToFileURL(path.join(root, file)).href);
}

/** Penghitung asersi bersama untuk berkas uji yang mengimpornya. */
export const checks = { count: 0 };

/** Asersi dengan pesan; menambah penghitung. */
export function ok(condition, message) {
  assert.ok(condition, message);
  checks.count++;
}

/** Menjalankan `fn` dan mencatat satu pemeriksaan berlabel. */
export function check(label, fn) {
  fn();
  checks.count++;
  console.log(`  ok - ${label}`);
}

/**
 * Menyatakan `actual` dekat dengan `expected` dalam toleransi `tol`; melempar
 * galat berlabel bila selisih melebihi toleransi. Urutan argumen kanonik:
 * `(actual, expected, label, tol)`.
 */
export function close(actual, expected, label, tol = 1e-9) {
  const diff = Math.abs(actual - expected);
  if (!(diff <= tol)) {
    throw new Error(`${label}: diharapkan ≈ ${expected}, diperoleh ${actual}`);
  }
  checks.count++;
}

/**
 * Seperti `close`, tetapi untuk larik bilangan (atau vektor `{ x, y }`); tiap
 * komponen dibandingkan dan dihitung sebagai satu pemeriksaan.
 */
export function closeVec(actual, expected, label, tol = 1e-9) {
  if (!actual || !expected) {
    throw new Error(`${label}: nilai kosong`);
  }
  if (Array.isArray(actual) && actual.length !== expected.length) {
    throw new Error(`${label}: panjang larik ${actual.length} ≠ ${expected.length}`);
  }
  const keys = Array.isArray(actual) ? actual.map((_, index) => index) : Object.keys(actual);
  for (const key of keys) {
    const suffix = Array.isArray(actual) ? `[${key}]` : `.${key}`;
    close(actual[key], expected[key], `${label}${suffix}`, tol);
  }
}

/** Penghitung kegagalan `runCase` (lokal modul). */
let failures = 0;

/**
 * Menjalankan `fn` sebagai satu kasus berlabel: cetak `PASS <label>` bila lulus
 * atau `FAIL <label>` beserta galatnya bila gagal, tanpa menghentikan berkas.
 */
export function runCase(label, fn) {
  try {
    fn();
    checks.count++;
    console.log(`PASS ${label}`);
  } catch (error) {
    failures += 1;
    console.error(`FAIL ${label}`);
    console.error(`  ${error && error.message ? error.message : error}`);
  }
}

/** Mencetak ringkasan jumlah pemeriksaan dan keluar 1 bila ada kasus gagal. */
export function report() {
  if (failures > 0) {
    console.error(`\n${failures} pemeriksaan gagal, ${checks.count} lulus.`);
    process.exit(1);
  }
  console.log(`\n${checks.count} pemeriksaan lulus.`);
}

const SKIP_TOPIC_FILES = new Set(['index.ts', 'planned.ts', 'enhance.ts']);

// `index.ts` memakai impor tanpa ekstensi; `categories.ts` adalah metadata
// kategori asesmen (bukan bank soal) yang tinggal di direktori yang sama agar
// bebas impor ber-glob sehingga dapat dimuat uji Node.
const SKIP_QUESTION_FILES = new Set(['index.ts', 'categories.ts']);

function isTopic(value) {
  return Boolean(value) && typeof value === 'object' && typeof value.id === 'string' && Array.isArray(value.sections);
}

function isQuestion(value) {
  return Boolean(value) && typeof value === 'object' && typeof value.id === 'string' && typeof value.topicId === 'string';
}

/**
 * Membaca berkas topik per berkas beserta label berkasnya. Dipakai pengujian
 * yang memastikan setiap berkas benar-benar menghasilkan topik (menggantikan
 * deteksi "berkas tidak terdaftar" yang dulu dimungkinkan registrasi manual).
 *
 * Berkas `index.ts` memakai impor tanpa ekstensi sehingga tidak dapat dimuat
 * Node ESM; `planned.ts` dan peninggalan `.migrate-*`/`enhance.ts` dilewati.
 */
export async function collectTopicFiles(dir = 'src/data/topics') {
  const out = [];
  for (const file of fs.readdirSync(path.join(root, dir)).sort()) {
    if (!file.endsWith('.ts') || file.startsWith('.migrate-') || SKIP_TOPIC_FILES.has(file)) continue;
    const mod = await load(path.join(dir, file));
    out.push({ file, topics: Object.values(mod).filter(isTopic) });
  }
  return out;
}

/** Membaca seluruh topik dari `src/data/topics/*.ts`. */
export async function collectTopics(dir = 'src/data/topics') {
  const files = await collectTopicFiles(dir);
  return files.flatMap((entry) => entry.topics);
}

/** Id seluruh topik (dari berkas data, bukan `index.ts`). */
export async function collectTopicIds(dir = 'src/data/topics') {
  return new Set((await collectTopics(dir)).map((topic) => topic.id));
}

/**
 * Membaca berkas soal per berkas beserta label berkasnya. Dipakai pengujian yang
 * melaporkan jumlah soal tiap berkas atau melacak asal id yang bertabrakan.
 */
export async function collectQuestionFiles(dir = 'src/data/questions') {
  const files = fs
    .readdirSync(path.join(root, dir))
    .filter((name) => name.endsWith('.ts') && !SKIP_QUESTION_FILES.has(name))
    .sort();
  const out = [];
  for (const file of files) {
    const mod = await load(path.join(dir, file));
    const questions = [];
    for (const value of Object.values(mod)) {
      if (!Array.isArray(value)) continue;
      for (const item of value) if (isQuestion(item)) questions.push(item);
    }
    out.push({ file, questions });
  }
  return out;
}

/** Seluruh objek soal (gabungan seluruh berkas). */
export async function collectQuestions(dir = 'src/data/questions') {
  const files = await collectQuestionFiles(dir);
  return files.flatMap((entry) => entry.questions);
}

/**
 * Memuat satu berkas soal dan mengembalikan soal ber-`id` yang dicari. Melempar
 * galat bila berkas tidak mengekspor larik soal atau id tidak ditemukan, sehingga
 * uji yang memeriksa nilai konten gagal keras ketika soal dipindah atau dihapus,
 * alih-alih menghitung ulang aritmetika lepas dari berkas.
 */
export async function loadQuestion(file, id) {
  const mod = await load(file);
  const list = Object.values(mod).find(Array.isArray);
  const question = (list ?? []).find((item) => isQuestion(item) && item.id === id);
  if (!question) throw new Error(`soal ${id} tidak ditemukan di ${file}`);
  return question;
}

/**
 * Teks lengkap sebuah bagian (judul + body + seluruh isi blok) memakai index
 * pencarian kanonik, sehingga uji kedalaman/duplikasi tidak menyalin logika blok.
 */
export function sectionText(section) {
  return sectionSearchText(section);
}

/** Himpunan kata bermakna (panjang > 2) untuk mengukur kemiripan teks. */
export function wordSet(text) {
  return new Set(
    String(text)
      .toLowerCase()
      .replace(/[^a-z0-9\u00c0-\u024f]+/g, ' ')
      .split(' ')
      .filter((word) => word.length > 2),
  );
}

/** Kemiripan Jaccard antara dua teks (0 bila salah satu kosong). */
export function jaccard(a, b) {
  const left = wordSet(a);
  const right = wordSet(b);
  if (left.size === 0 || right.size === 0) return 0;
  let intersection = 0;
  for (const word of left) if (right.has(word)) intersection += 1;
  return intersection / (left.size + right.size - intersection);
}

/** Penyimpanan in-memory yang meniru antarmuka `Storage`. */
export function mockStorage() {
  const data = new Map();
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => {
      data.set(key, String(value));
    },
    removeItem: (key) => {
      data.delete(key);
    },
    clear: () => data.clear(),
    key: (index) => [...data.keys()][index] ?? null,
    get length() {
      return data.size;
    },
  };
}

/**
 * Memastikan berkas relatif terhadap akar repositori benar-benar ada.
 * Menggantikan pembantu lokal yang dahulu disalin ke beberapa berkas uji.
 */
export function checkFileExists(label, relativePath) {
  ok(fs.existsSync(path.join(root, relativePath)), `${label}: berkas ${relativePath} tidak ditemukan`);
}

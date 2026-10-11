// Utilitas bersama untuk berkas uji.
//
// Berkas ini BUKAN berkas uji: `tests/run-all.mjs` melewati setiap berkas yang
// berawalan garis bawah. Semua pembantu yang dulu disalin ke banyak berkas uji
// (memuat TypeScript sumber, mengumpulkan topik/soal, asersi, penyimpanan palsu)
// dikumpulkan di sini agar perubahan kontrak data cukup diubah satu tempat.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/** Akar repositori. */
export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

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

const SKIP_TOPIC_FILES = new Set(['index.ts', 'planned.ts', 'enhance.ts']);

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
    .filter((name) => name.endsWith('.ts') && name !== 'index.ts')
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

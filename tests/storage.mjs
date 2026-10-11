// Uji inti penyimpanan bersama + versi skema: node tests/storage.mjs
import assert from 'node:assert/strict';
import { load, check, checks, mockStorage } from './_util.mjs';

const { readMap, writeMap, readSchemaVersion } = await load('src/lib/storage.ts');
const { SCHEMA_VERSION, STORAGE_KEYS } = await load('src/lib/storage-keys.ts');

const validator = (value) => (typeof value.n === 'number' ? { n: value.n } : undefined);

check('writeMap lalu readMap bertukar peta', () => {
  const storage = mockStorage();
  writeMap('k', { a: { n: 1 }, b: { n: 2 } }, storage);
  assert.deepEqual(readMap('k', validator, storage), { a: { n: 1 }, b: { n: 2 } });
});

check('writeMap menandai versi skema saat ini', () => {
  const storage = mockStorage();
  assert.equal(readSchemaVersion(storage), 0);
  writeMap('k', { a: { n: 1 } }, storage);
  assert.equal(readSchemaVersion(storage), SCHEMA_VERSION);
});

check('readMap membuang entri yang gagal validasi', () => {
  const storage = mockStorage();
  storage.setItem('k', JSON.stringify({ ok: { n: 3 }, bad: { n: 'x' }, worse: 7 }));
  assert.deepEqual(readMap('k', validator, storage), { ok: { n: 3 } });
});

check('readMap aman pada JSON rusak', () => {
  const storage = mockStorage();
  storage.setItem('k', '{bukan json');
  assert.deepEqual(readMap('k', validator, storage), {});
});

check('readMap menolak data dari versi lebih baru', () => {
  const storage = mockStorage();
  storage.setItem(STORAGE_KEYS.meta, JSON.stringify({ version: SCHEMA_VERSION + 1 }));
  storage.setItem('k', JSON.stringify({ a: { n: 1 } }));
  assert.deepEqual(readMap('k', validator, storage), {});
});

check('readMap aman tanpa storage', () => {
  assert.deepEqual(readMap('k', validator, undefined), {});
});

console.log(`PASS storage (${checks.count} pemeriksaan)`);

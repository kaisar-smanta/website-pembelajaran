// Integritas registri Capaian Pembelajaran (src/data/curriculum/cp.ts).
//
// Memuat registri CP dan metadata seluruh topik, lalu memeriksa bahwa:
//   - regulasi konsisten (unik, satu "berlaku", rujukan penggantian valid);
//   - setiap pernyataan CP punya kode unik, fase/elemen/kelas yang sah, dan
//     memetakan ke topik yang benar-benar ada dengan fase/elemen yang cocok;
//   - setiap topik lengkap terpetakan ke minimal satu pernyataan CP, kecuali
//     topik yang memang ditandai sebagai pengayaan (supplementary).
//
// Pemakaian: node tests/cp-coverage.mjs (dipanggil oleh `npm test`).

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

async function load(file) {
  return import(pathToFileURL(path.join(root, file)).href);
}

const { regulations, cpStatements, activeRegulation, cpCoveredTopicIds } = await load(
  'src/data/curriculum/cp.ts',
);

const ELEMENTS = new Set(['bilangan', 'aljabar-fungsi', 'geometri', 'kalkulus', 'data-peluang']);
const GRADES = new Set(['X', 'XI', 'XII']);
const PHASES = new Set(['E', 'F']);
const SUBJECTS = new Set(['matematika', 'matematika-lanjut']);

let checks = 0;
function ok(condition, message) {
  assert.ok(condition, message);
  checks++;
}

// ---- Metadata topik dari berkas data ----
const topicDir = path.join(root, 'src/data/topics');
const topicMeta = new Map();
for (const file of fs.readdirSync(topicDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts' || file === 'planned.ts') continue;
  const mod = await load(path.join('src/data/topics', file));
  for (const value of Object.values(mod)) {
    if (
      value &&
      typeof value === 'object' &&
      typeof value.id === 'string' &&
      Array.isArray(value.sections)
    ) {
      topicMeta.set(value.id, {
        grade: value.grade,
        element: value.element,
        phase: value.phase,
        subject: value.subject ?? 'matematika',
        supplementary: value.supplementary === true,
        cpNote: typeof value.cpNote === 'string' ? value.cpNote : '',
        status: value.status ?? 'lengkap',
      });
    }
  }
}

// ---- Regulasi ----
const regIds = new Set();
const regNumbers = new Set();
let activeCount = 0;
for (const reg of regulations) {
  ok(typeof reg.id === 'string' && reg.id.length > 0, 'regulasi tanpa id');
  ok(!regIds.has(reg.id), `id regulasi duplikat: ${reg.id}`);
  regIds.add(reg.id);
  ok(typeof reg.number === 'string' && reg.number.length > 0, `${reg.id}: nomor kosong`);
  ok(!regNumbers.has(reg.number), `nomor regulasi duplikat: ${reg.number}`);
  regNumbers.add(reg.number);
  ok(typeof reg.issuer === 'string' && reg.issuer.length > 0, `${reg.id}: penerbit kosong`);
  ok(typeof reg.title === 'string' && reg.title.length > 0, `${reg.id}: judul kosong`);
  if (reg.effectiveDate !== undefined) {
    ok(/^\d{4}-\d{2}-\d{2}$/.test(reg.effectiveDate), `${reg.id}: tanggal berlaku tidak valid`);
  }
  ok(!reg.supersedes.includes(reg.id), `${reg.id}: menggantikan dirinya sendiri`);
  if (reg.status === 'berlaku') activeCount += 1;
}
ok(activeCount === 1, `harus ada tepat satu regulasi berstatus "berlaku", ditemukan ${activeCount}`);
const active = activeRegulation();
ok(
  typeof active.effectiveDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(active.effectiveDate),
  `regulasi aktif (${active.id}) wajib punya effectiveDate yang valid`,
);
for (const reg of regulations) {
  for (const oldId of reg.supersedes) {
    ok(regIds.has(oldId), `${reg.id}: supersedes tidak ditemukan -> ${oldId}`);
  }
}

// ---- Pernyataan CP ----
const ELEMENT_CODE = {
  BIL: 'bilangan',
  ALJ: 'aljabar-fungsi',
  GEO: 'geometri',
  KAL: 'kalkulus',
  DAT: 'data-peluang',
};
const stmtIds = new Set();
for (const stmt of cpStatements) {
  ok(typeof stmt.id === 'string' && stmt.id.length > 0, 'pernyataan CP tanpa id');
  ok(!stmtIds.has(stmt.id), `id pernyataan CP duplikat: ${stmt.id}`);
  stmtIds.add(stmt.id);

  const stmtSubject = stmt.subject ?? 'matematika';
  ok(SUBJECTS.has(stmtSubject), `${stmt.id}: mata pelajaran tidak dikenal (${stmtSubject})`);

  const codeMatch =
    typeof stmt.id === 'string' ? stmt.id.match(/^(E|F|FL)-([A-Z]{3})-(\d+)$/) : null;
  ok(codeMatch, `${stmt.id}: format kode tidak valid (harus FASE-ELEM-N, mis. E-BIL-1/FL-ALJ-1)`);
  if (codeMatch) {
    const codePhase = codeMatch[1] === 'FL' ? 'F' : codeMatch[1];
    ok(codePhase === stmt.phase, `${stmt.id}: prefiks fase tidak cocok dengan phase ${stmt.phase}`);
    ok(
      ELEMENT_CODE[codeMatch[2]] === stmt.element,
      `${stmt.id}: prefiks elemen tidak cocok dengan ${stmt.element}`,
    );
    ok(
      codeMatch[1] !== 'FL' || stmtSubject === 'matematika-lanjut',
      `${stmt.id}: prefiks FL hanya untuk Matematika Tingkat Lanjut`,
    );
    ok(
      codeMatch[1] === 'FL' || stmtSubject === 'matematika',
      `${stmt.id}: prefiks non-FL harus bermatapelajaran Matematika`,
    );
  }

  ok(regIds.has(stmt.regulation), `${stmt.id}: regulasi tidak ditemukan -> ${stmt.regulation}`);
  ok(PHASES.has(stmt.phase), `${stmt.id}: fase tidak dikenal (${stmt.phase})`);
  ok(ELEMENTS.has(stmt.element), `${stmt.id}: elemen tidak dikenal (${stmt.element})`);
  ok(Array.isArray(stmt.grades) && stmt.grades.length > 0, `${stmt.id}: grades kosong`);
  for (const g of stmt.grades) ok(GRADES.has(g), `${stmt.id}: kelas tidak dikenal (${g})`);
  ok(Array.isArray(stmt.topicIds) && stmt.topicIds.length > 0, `${stmt.id}: topicIds kosong`);
  ok(typeof stmt.text === 'string' && stmt.text.length > 0, `${stmt.id}: teks kosong`);

  for (const tid of stmt.topicIds) {
    const meta = topicMeta.get(tid);
    ok(meta, `${stmt.id}: topik tidak ditemukan -> ${tid}`);
    if (!meta) continue;
    ok(
      meta.element === stmt.element,
      `${stmt.id}: elemen (${stmt.element}) tidak cocok dengan topik ${tid} (${meta.element})`,
    );
    ok(
      stmt.grades.includes(meta.grade),
      `${stmt.id}: kelas ${meta.grade} topik ${tid} tidak termasuk grades [${stmt.grades.join(', ')}]`,
    );
    ok(
      meta.phase === stmt.phase,
      `${stmt.id}: fase ${stmt.phase} tidak cocok dengan topik ${tid} (fase ${meta.phase})`,
    );
    ok(
      meta.subject === stmtSubject,
      `${stmt.id}: mata pelajaran (${stmtSubject}) tidak cocok dengan topik ${tid} (${meta.subject})`,
    );
  }
}

// ---- Cakupan topik ----
const covered = cpCoveredTopicIds();
const uncovered = [];
const supplementary = [];
for (const [id, meta] of topicMeta) {
  if (meta.status === 'rencana') continue;
  if (covered.has(id)) continue;
  if (meta.supplementary) {
    supplementary.push(id);
    ok(meta.cpNote.length > 0, `topik pengayaan ${id} wajib punya cpNote penjelas`);
  } else {
    uncovered.push(id);
  }
}
ok(
  uncovered.length === 0,
  `topik lengkap tanpa pemetaan CP dan tidak ditandai supplementary: ${uncovered.join(', ')}`,
);

// ---- Cakupan fase ----
for (const phase of PHASES) {
  const count = cpStatements.filter((s) => s.phase === phase).length;
  ok(count > 0, `fase ${phase} tidak memiliki pernyataan CP`);
}

// ---- Cakupan mata pelajaran ----
for (const subject of SUBJECTS) {
  const count = cpStatements.filter((s) => (s.subject ?? 'matematika') === subject).length;
  ok(count > 0, `mata pelajaran ${subject} tidak memiliki pernyataan CP`);
  for (const stmt of cpStatements.filter((s) => (s.subject ?? 'matematika') === subject)) {
    if (subject === 'matematika-lanjut') {
      ok(stmt.phase === 'F', `${stmt.id}: Matematika Tingkat Lanjut hanya Fase F`);
    }
  }
}

const byPhase = (p) => cpStatements.filter((s) => s.phase === p).length;
const bySubject = (s) => cpStatements.filter((stmt) => (stmt.subject ?? 'matematika') === s).length;
console.log(`Regulasi aktif: ${active.number} (berlaku sejak ${active.effectiveDate})`);
console.log(`Pernyataan CP: ${cpStatements.length} (Fase E: ${byPhase('E')}, Fase F: ${byPhase('F')})`);
console.log(`  - Matematika: ${bySubject('matematika')}, Matematika Lanjut: ${bySubject('matematika-lanjut')}`);
console.log(`Topik terpetakan: ${covered.size}/${topicMeta.size}`);
console.log(`Topik pengayaan (supplementary): ${supplementary.length}${supplementary.length ? ` (${supplementary.join(', ')})` : ''}`);
console.log(`CP diperiksa: ${checks} asersi`);

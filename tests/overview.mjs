// Uji modul ringkasan kemajuan yang murni (`src/lib/overview/*`): penghitung
// rekaman, klasifikasi penguasaan, ringkasan pengayaan, dan saran lanjutan.
// Sebelumnya modul-modul ini hanya teruji tak langsung lewat `buildOverview`.
// node tests/overview.mjs
import assert from 'node:assert/strict';
import { check, checks } from './_util.mjs';
import { topicOfStorageKey, maxStamp, tally } from '../src/lib/overview/tally.ts';
import { classifyMastery, buildMasterySummary } from '../src/lib/overview/mastery.ts';
import { buildEnrichmentSummary } from '../src/lib/overview/enrichment.ts';
import { continueLearning, suggestedStart } from '../src/lib/overview/suggestion.ts';

check('topicOfStorageKey mengambil segmen sebelum titik dua', () => {
  assert.equal(topicOfStorageKey('eksponen:pemantik:0'), 'eksponen');
  assert.equal(topicOfStorageKey('tanpa-titik-dua'), 'tanpa-titik-dua');
  assert.equal(topicOfStorageKey(':awalan'), '');
});

check('maxStamp mengabaikan nilai kosong dan memilih terbesar', () => {
  assert.equal(maxStamp(undefined, 5, 3, undefined, 9), 9);
  assert.equal(maxStamp(), 0);
  assert.equal(maxStamp(undefined, undefined), 0);
});

check('tally menghitung per topik dan mengambil stempel terbaru', () => {
  const counts = tally({
    'eksponen:pemantik:0': { at: 10 },
    'eksponen:refleksi:1': { at: 30 },
    'logaritma:pemantik:0': { at: 5 },
  });
  assert.equal(counts.get('eksponen').count, 2);
  assert.equal(counts.get('eksponen').at, 30);
  assert.equal(counts.get('logaritma').count, 1);
  assert.equal(counts.get('logaritma').at, 5);
});

check('classifyMastery memberi pita sesuai ketuntasan dan ketepatan', () => {
  assert.equal(classifyMastery(0, 0, 0), 'belum');
  assert.equal(classifyMastery(5, 0.9, 1), 'mahir');
  assert.equal(classifyMastery(5, 0.75, 1), 'cukup');
  assert.equal(classifyMastery(5, 0.9, 0.5), 'berlatih');
  assert.equal(classifyMastery(5, 0.5, 1), 'berlatih');
});

const topicInput = (over) => ({
  id: over.id,
  slug: over.id,
  title: over.id,
  gradeName: 'Kelas X',
  elementName: 'Aljabar',
  practiceHref: `/latihan/${over.id}`,
  materialHref: `/materi/${over.id}`,
  answered: 0,
  correct: 0,
  gradedAnswered: 0,
  total: 0,
  ...over,
});

check('buildMasterySummary menghitung pita dan fokus berurutan', () => {
  const summary = buildMasterySummary([
    topicInput({ id: 'a', answered: 0, total: 4 }),
    topicInput({ id: 'b', answered: 4, correct: 4, gradedAnswered: 4, total: 4, lastAt: 1 }),
    topicInput({ id: 'c', answered: 2, correct: 1, gradedAnswered: 2, total: 4, lastAt: 2 }),
  ]);
  assert.equal(summary.topics.length, 3);
  assert.equal(summary.bands.belum, 1);
  assert.equal(summary.bands.mahir, 1);
  assert.equal(summary.bands.berlatih, 1);
  assert.equal(summary.focus.length, 2);
  // Fokus mendahulukan 'berlatih' (sudah mulai tetapi belum tuntas).
  assert.equal(summary.focus[0].id, 'c');
});

check('buildEnrichmentSummary menyaring topik pengayaan', () => {
  const summary = buildEnrichmentSummary([
    {
      id: 'wajib',
      total: 10,
      answered: 10,
      correct: 8,
      gradedAnswered: 10,
      started: true,
      completed: true,
      lastAt: 5,
      supplementary: false,
    },
    {
      id: 'kaya',
      total: 4,
      answered: 2,
      correct: 1,
      gradedAnswered: 2,
      started: true,
      completed: false,
      lastAt: 9,
      supplementary: true,
    },
  ]);
  assert.equal(summary.total, 1);
  assert.equal(summary.started, 1);
  assert.equal(summary.completed, 0);
  assert.equal(summary.answered, 2);
  assert.equal(summary.totalQuestions, 4);
  assert.equal(summary.accuracy, 0.5);
  assert.equal(summary.topics[0].id, 'kaya');
});

check('continueLearning memilih topik dimulai belum tuntas', () => {
  const topics = [
    { id: 'a', started: true, total: 4, answered: 1, completed: false, lastAt: 1 },
    { id: 'b', started: true, total: 4, answered: 4, completed: true, lastAt: 9 },
    { id: 'c', started: false, total: 4, answered: 0, completed: false, lastAt: 0 },
    { id: 'd', started: true, total: 4, answered: 2, completed: false, lastAt: 3 },
  ];
  const picked = continueLearning({ topics }, 5).map((t) => t.id);
  assert.deepEqual(picked, ['d', 'a']);
});

check('suggestedStart tidak mendahulukan topik atas prasyaratnya', () => {
  const overview = {
    topics: [
      { id: 'lanjut', grade: 'XI', started: false, total: 3, prerequisites: ['dasar'] },
      { id: 'dasar', grade: 'X', started: false, total: 3, prerequisites: [] },
      { id: 'lain', grade: 'X', started: false, total: 3, prerequisites: [] },
    ],
  };
  const picked = suggestedStart(overview, 3).map((t) => t.id);
  assert.equal(picked.length, 3);
  assert.ok(picked.includes('dasar') && picked.includes('lanjut') && picked.includes('lain'));
  assert.ok(picked.indexOf('dasar') < picked.indexOf('lanjut'));
});

console.log(`PASS overview (${checks.count} pemeriksaan)`);

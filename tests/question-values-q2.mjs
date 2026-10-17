// Verifikasi nilai matematika soal auto-graded `mahir` yang baru ditambahkan
// pada grup Q2: fungsi-rasional-akar, irisan-kerucut, komposisi-fungsi,
// lingkaran, matriks-transformasi, matriks, dan peluang.
// Dipanggil otomatis oleh tests/run-all.mjs.
//
// Pemakaian: node tests/question-values-q2.mjs
import assert from 'node:assert/strict';
import { check, close, ok, report } from './_util.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

function checkFileExists(label, relativePath) {
  ok(fs.existsSync(path.join(root, relativePath)), `${label}: berkas ${relativePath} tidak ditemukan`);
}

// ---------- Berkas soal grup Q2 ----------
checkFileExists('soal fungsi rasional akar', 'src/data/questions/fungsi-rasional-akar.ts');
checkFileExists('soal irisan kerucut', 'src/data/questions/irisan-kerucut.ts');
checkFileExists('soal komposisi fungsi', 'src/data/questions/komposisi-fungsi.ts');
checkFileExists('soal lingkaran', 'src/data/questions/lingkaran.ts');
checkFileExists('soal matriks transformasi', 'src/data/questions/matriks-transformasi.ts');
checkFileExists('soal matriks', 'src/data/questions/matriks.ts');
checkFileExists('soal peluang', 'src/data/questions/peluang.ts');

// ---------- fra-16: ordinat lubang (x^2+x-6)/(x^2-4) ----------
// (x+3)(x-2)/((x-2)(x+2)) -> (x+3)/(x+2) di x=2.
close((2 + 3) / (2 + 2), 1.25, 'fra-16 ordinat lubang (2+3)/(2+2)', 0);
close(5 / 4, 1.25, 'fra-16 bentuk pecahan 5/4', 0);

// ---------- ik-16: eksentrisitas elips dari titik puncak (4,0) dan (0,3) ----------
const a2 = 4 * 4;
const b2 = 3 * 3;
close(a2, 16, 'ik-16 a^2', 0);
close(b2, 9, 'ik-16 b^2', 0);
const focus = Math.sqrt(a2 - b2);
close(focus, Math.sqrt(7), 'ik-16 jarak fokus c=sqrt(16-9)', 0);
close(focus / 4, Math.sqrt(7) / 4, 'ik-16 eksentrisitas e=c/a', 0);

// ---------- kf-16: g(3) bila f(x)=x-2 dan (f o g)(x)=2x^2-3 ----------
const gOf = (x) => 2 * x * x - 1;
const fOf = (x) => x - 2;
close(gOf(3), 17, 'kf-16 rumus g memberi g(3)=2*3^2-1', 0);
close(fOf(gOf(3)), 15, 'kf-16 (f o g)(3)=f(g(3))', 0);
close(2 * 3 * 3 - 3, 15, 'kf-16 nilai (f o g)(3) langsung', 0);

// ---------- lk-16: sudut pusat dan sudut keliling ----------
// 3x-20 = 2(x+15) -> x=50; sudut pusat 130, sudut keliling 65.
close((2 * 15 + 20) / (3 - 2), 50, 'lk-16 solusi x dari 3x-20=2(x+15)', 0);
const central = 3 * 50 - 20;
const inscribed = 50 + 15;
close(central, 130, 'lk-16 sudut pusat 3(50)-20', 0);
close(inscribed, 65, 'lk-16 sudut keliling 50+15', 0);
check('lk-16 sudut pusat dua kali sudut keliling', () => assert.equal(central, 2 * inscribed));

// ---------- mtf-18: luas akhir setelah transformasi dan dilatasi ----------
close(3 * Math.abs(-4), 12, 'mtf-18 luas setelah transformasi 3*|det(A)|', 0);
close(12 * 3 * 3, 108, 'mtf-18 luas akhir setelah dilatasi faktor 3', 0);

// ---------- mt-18: entri (1,1) dari M^2 ----------
const M = [
  [2, 1],
  [3, 2],
];
const m2 = [
  [M[0][0] * M[0][0] + M[0][1] * M[1][0], M[0][0] * M[0][1] + M[0][1] * M[1][1]],
  [M[1][0] * M[0][0] + M[1][1] * M[1][0], M[1][0] * M[0][1] + M[1][1] * M[1][1]],
];
close(m2[0][0], 7, 'mt-18 entri (1,1) M^2=2*2+1*3', 0);
close(m2[0][1], 4, 'mt-18 entri (1,2) M^2', 0);
close(m2[1][0], 12, 'mt-18 entri (2,1) M^2', 0);
close(m2[1][1], 7, 'mt-18 entri (2,2) M^2', 0);

// ---------- pl-17: peluang paling sedikit satu merah ----------
const noRed = (6 / 10) * (5 / 9);
close(noRed, 1 / 3, 'pl-17 peluang kedua bola putih', 1e-12);
close(1 - noRed, 2 / 3, 'pl-17 peluang paling sedikit satu merah', 1e-12);
close((4 / 10) * (6 / 9) + (6 / 10) * (4 / 9), 8 / 15, 'pl-17 peluang tepat satu merah', 1e-12);
close((4 / 10) * (3 / 9), 2 / 15, 'pl-17 peluang kedua bola merah', 1e-12);

report();

// Verifikasi nilai jawaban soal mahir Wave 2 grup Q4: transformasi fungsi,
// transformasi geometri, trigonometri lanjut, trigonometri, vektor,
// asosiasi-kausalitas, dan data-bivariat.
// Dipanggil otomatis oleh tests/run-all.mjs.
//
// Pemakaian: node tests/question-values-q4.mjs
import assert from 'node:assert/strict';
import { check, close, report } from './_util.mjs';

// ---------- transformasi-fungsi (tf-17) ----------
// f(x) = 2x + 1; refleksi sumbu-y memberi f(-x); geser kiri 3 memberi f(-(x+3)).
const fTf = (x) => 2 * x + 1;
const hTf = (x) => fTf(-(x + 3));
close(hTf(0), -5, 'tf-17 nilai grafik pada x = 0', 0);
close(fTf(-3), -5, 'tf-17 substitusi langsung f(-3)', 0);

// ---------- transformasi-geometri (tgeo-17) ----------
// (-3,5) dicerminkan terhadap y = x, lalu ditranslasi oleh (-2,4).
const reflectYX = ([x, y]) => [y, x];
const translate = ([x, y], [dx, dy]) => [x + dx, y + dy];
check('tgeo-17 bayangan akhir (3,1)', () =>
  assert.equal(translate(reflectYX([-3, 5]), [-2, 4]).join(','), '3,1'));
check('tgeo-17 opsi B hanya pencerminan (5,-3)', () =>
  assert.equal(reflectYX([-3, 5]).join(','), '5,-3'));
check('tgeo-17 opsi C translasi lebih dahulu (9,-5)', () =>
  assert.equal(reflectYX(translate([-3, 5], [-2, 4])).join(','), '9,-5'));
check('tgeo-17 opsi D refleksi sumbu-y lalu translasi (1,9)', () =>
  assert.equal(translate([3, 5], [-2, 4]).join(','), '1,9'));

// ---------- trigonometri-lanjut (tl-17) ----------
// Grafik y = 2cos(2x) + 3: maksimum 5, minimum 1, periode 180 derajat.
const ampTl = (5 - 1) / 2;
const midTl = (5 + 1) / 2;
const bTl = 360 / 180;
close(ampTl, 2, 'tl-17 amplitudo dari maksimum dan minimum', 0);
close(midTl, 3, 'tl-17 nilai tengah grafik', 0);
close(bTl, 2, 'tl-17 koefisien x dari periode 180 derajat', 0);
close(2 * Math.cos((2 * 0 * Math.PI) / 180) + 3, 5, 'tl-17 nilai pada x = 0 (maksimum)', 1e-9);
close(2 * Math.cos((2 * 90 * Math.PI) / 180) + 3, 1, 'tl-17 nilai pada x = 90 (minimum)', 1e-9);
close(2 * Math.cos((2 * 180 * Math.PI) / 180) + 3, 5, 'tl-17 nilai pada x = 180 (satu periode)', 1e-9);

// ---------- trigonometri (tr-16) ----------
// sin beta = 8/17, beta tumpul -> kosinus negatif -> tan beta = -8/15.
const cosTr = -Math.sqrt(1 - (8 / 17) ** 2);
close(cosTr, -15 / 17, 'tr-16 kosinus beta (tumpul, negatif)', 1e-12);
close((8 / 17) / cosTr, -8 / 15, 'tr-16 nilai tan beta', 1e-12);

// ---------- vektor (vk-18) ----------
// a = (3,-1), b = (1,3): 2a - b = (5,-5), panjangnya akar(50) = 5 akar 2.
const aVk = [3, -1];
const bVk = [1, 3];
const comboVk = [2 * aVk[0] - bVk[0], 2 * aVk[1] - bVk[1]];
check('vk-18 vektor 2a - b = (5,-5)', () => assert.equal(comboVk.join(','), '5,-5'));
const squaredVk = comboVk[0] ** 2 + comboVk[1] ** 2;
close(squaredVk, 50, 'vk-18 jumlah kuadrat komponen', 0);
close(Math.sqrt(squaredVk), 5 * Math.SQRT2, 'vk-18 panjang = 5 akar 2', 1e-12);
const diffVk = [aVk[0] - bVk[0], aVk[1] - bVk[1]];
close(Math.sqrt(diffVk[0] ** 2 + diffVk[1] ** 2), Math.sqrt(20), 'vk-18 opsi B: panjang a - b = akar 20', 1e-12);

// ---------- asosiasi-kausalitas (ak-16) ----------
const ratePerlakuan = 56 / 80;
const rateKontrol = 40 / 80;
close(ratePerlakuan, 0.7, 'ak-16 persentase ketuntasan perlakuan', 1e-12);
close(rateKontrol, 0.5, 'ak-16 persentase ketuntasan kontrol', 1e-12);
close(ratePerlakuan / rateKontrol, 1.4, 'ak-16 rasio persentase ketuntasan', 1e-12);
close(70 / 50, 1.4, 'ak-16 rasio 70 banding 50', 1e-12);

// ---------- data-bivariat (db-17) ----------
// Data (1,4), (2,3), (3,7) terhadap garis y = x + 2 -> SSE = 6.
const dataDb = [
  [1, 4],
  [2, 3],
  [3, 7],
];
const predDb = dataDb.map(([x]) => x + 2);
const residDb = dataDb.map(([, y], i) => y - predDb[i]);
check('db-17 prediksi y = x + 2 untuk x = 1,2,3', () => assert.equal(predDb.join(','), '3,4,5'));
check('db-17 residual 1,-1,2', () => assert.equal(residDb.join(','), '1,-1,2'));
const sseDb = residDb.reduce((sum, r) => sum + r * r, 0);
close(sseDb, 6, 'db-17 jumlah kuadrat residual', 0);

report();

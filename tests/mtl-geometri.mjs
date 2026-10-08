// Verifikasi nilai matematika kunci topik Matematika Tingkat Lanjut:
// Vektor (src/data/topics/vektor.ts) dan Irisan Kerucut
// (src/data/topics/irisan-kerucut.ts) beserta bank soalnya.
//
// Pemakaian: node tests/mtl-geometri.mjs (dipanggil oleh tests/run-all.mjs).

import assert from 'node:assert/strict';

let failed = 0;
let passed = 0;

function close(actual, expected, label, eps = 1e-9) {
  assert.ok(
    Math.abs(actual - expected) < eps,
    `${label}: diharapkan ≈ ${expected}, diperoleh ${actual}`,
  );
  passed += 1;
}

function run(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${name}`);
    console.error(`  ${error && error.message ? error.message : error}`);
  }
}

const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const mag = (a) => Math.sqrt(dot(a, a));
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const scale = (k, a) => [k * a[0], k * a[1]];
const angleDeg = (a, b) => (Math.acos(dot(a, b) / (mag(a) * mag(b))) * 180) / Math.PI;

// ---------- Vektor: panjang dan vektor satuan ----------
run('panjang vektor (6,8) = 10 dan (5,12) = 13', () => {
  close(mag([6, 8]), 10, '|(6,8)|');
  close(mag([5, 12]), 13, '|(5,12)|');
});

run('panjang vektor (3,4) = 5 dan vektor satuan bernorma 1', () => {
  close(mag([3, 4]), 5, '|(3,4)|');
  const unit = scale(1 / 5, [3, 4]);
  close(unit[0], 0.6, 'komponen-x vektor satuan');
  close(unit[1], 0.8, 'komponen-y vektor satuan');
  close(mag(unit), 1, 'norma vektor satuan');
});

run('panjang vektor (1,2) = akar 5', () => {
  close(mag([1, 2]), Math.sqrt(5), '|(1,2)|');
});

// ---------- Vektor: vektor dari dua titik dan operasi ----------
run('vektor AB dari A(1,2) ke B(4,6) = (3,4) dengan panjang 5', () => {
  const ab = sub([4, 6], [1, 2]);
  close(ab[0], 3, 'komponen-x AB');
  close(ab[1], 4, 'komponen-y AB');
  close(mag(ab), 5, '|AB|');
});

run('operasi a+b, 2a-b, dan 3a-2b', () => {
  const a = [3, 4];
  const b = [1, 2];
  const s = add(a, b);
  close(s[0], 4, 'a+b komponen-x');
  close(s[1], 6, 'a+b komponen-y');
  const d = sub(scale(2, a), b);
  close(d[0], 5, '2a-b komponen-x');
  close(d[1], 6, '2a-b komponen-y');
  const e = sub(scale(3, a), scale(2, b));
  close(e[0], 7, '3a-2b komponen-x');
  close(e[1], 8, '3a-2b komponen-y');
});

// ---------- Vektor: perkalian titik, sudut, ketegaklurusan ----------
run('perkalian titik (3,4) dengan (1,2) = 11', () => {
  close(dot([3, 4], [1, 2]), 11, 'a·b');
});

run('vektor (3,4) tegak lurus (4,-3)', () => {
  close(dot([3, 4], [4, -3]), 0, 'perkalian titik tegak lurus');
});

run('sudut antara (1,2) dan (3,1) = 45 derajat', () => {
  close(dot([1, 2], [3, 1]), 5, 'u·v');
  close(angleDeg([1, 2], [3, 1]), 45, 'sudut', 1e-6);
});

run('sudut antara (1,0) dan (0,1) = 90 derajat', () => {
  close(angleDeg([1, 0], [0, 1]), 90, 'sudut siku-siku', 1e-6);
});

// ---------- Vektor: proyeksi ----------
run('proyeksi skalar (3,4) pada (1,0) = 3', () => {
  close(dot([3, 4], [1, 0]) / mag([1, 0]), 3, 'proyeksi skalar');
});

run('proyeksi vektor (3,4) pada (1,2) = (11/5, 22/5)', () => {
  const a = [3, 4];
  const b = [1, 2];
  const p = scale(dot(a, b) / dot(b, b), b);
  close(p[0], 11 / 5, 'proyeksi komponen-x');
  close(p[1], 22 / 5, 'proyeksi komponen-y');
  close(mag(p), 11 / Math.sqrt(5), 'panjang proyeksi');
});

// ---------- Vektor: pembuktian geometris ----------
run('kolinear A(1,1), B(3,3), C(5,5): AC = 2 AB', () => {
  const ab = sub([3, 3], [1, 1]);
  const ac = sub([5, 5], [1, 1]);
  close(ac[0] / ab[0], 2, 'rasio komponen-x');
  close(ac[1] / ab[1], 2, 'rasio komponen-y');
});

run('kolinear dengan C(5,k): k = 5', () => {
  const ab = sub([3, 3], [1, 1]);
  const t = sub([5, 5], [1, 1])[0] / ab[0];
  const k = 1 + t * ab[1];
  close(k, 5, 'nilai k');
});

run('teorema titik tengah: |MN| = akar 13, |BC| = 2 akar 13', () => {
  const A = [0, 0];
  const B = [4, 0];
  const C = [0, 6];
  const M = [A[0] / 2 + B[0] / 2, A[1] / 2 + B[1] / 2];
  const N = [A[0] / 2 + C[0] / 2, A[1] / 2 + C[1] / 2];
  const mn = sub(N, M);
  const bc = sub(C, B);
  close(mag(mn), Math.sqrt(13), '|MN|');
  close(mag(bc), 2 * Math.sqrt(13), '|BC|');
  close(mag(bc) / mag(mn), 2, 'rasio BC terhadap MN');
});

run('tegak lurus: u=(x,3) dan v=(2,-4) memberi x = 6', () => {
  const x = 12 / 2;
  close(2 * x + 3 * -4, 0, 'syarat tegak lurus');
  close(x, 6, 'nilai x');
});

// ---------- Irisan kerucut: lingkaran ----------
run('lingkaran (x-2)^2+(y+3)^2=16: pusat (2,-3), r = 4', () => {
  const a = 2;
  const b = -3;
  close(a, 2, 'pusat x');
  close(b, -3, 'pusat y');
  close(Math.sqrt(16), 4, 'jari-jari');
});

run('lingkaran umum x^2+y^2-6x+4y-12=0: pusat (3,-2), r = 5', () => {
  const D = -6;
  const E = 4;
  const F = -12;
  close(-D / 2, 3, 'pusat x');
  close(-E / 2, -2, 'pusat y');
  close(Math.sqrt((D / 2) ** 2 + (E / 2) ** 2 - F), 5, 'jari-jari');
});

run('lingkaran umum x^2+y^2-4x+6y-3=0: r = 4', () => {
  const D = -4;
  const E = 6;
  const F = -3;
  close(Math.sqrt((D / 2) ** 2 + (E / 2) ** 2 - F), 4, 'jari-jari');
});

run('lingkaran 2x^2+2y^2-8x+12y-6=0 setelah dibagi 2: r = 4', () => {
  const D = -4;
  const E = 6;
  const F = -3;
  close(Math.sqrt((D / 2) ** 2 + (E / 2) ** 2 - F), 4, 'jari-jari');
});

// ---------- Irisan kerucut: garis singgung lingkaran ----------
run('garis singgung x^2+y^2=25 di (3,4): 3x+4y=25', () => {
  close(3 * 3 + 4 * 4, 25, 'memenuhi titik singgung');
  close(3 * 0 + 4 * 0, 0, 'melalui titik asal tidak termasuk');
});

run('garis singgung (x-2)^2+(y-1)^2=25 di (5,5): 3x+4y=35', () => {
  close((5 - 2) ** 2 + (5 - 1) ** 2, 25, 'titik pada lingkaran');
  close(3 * 5 + 4 * 5, 35, 'konstanta garis singgung');
});

// ---------- Irisan kerucut: elips ----------
run('elips x^2/25+y^2/9=1: a=5, b=3, c=4, e=0,8', () => {
  const a = 5;
  const b = 3;
  const c = Math.sqrt(a ** 2 - b ** 2);
  close(c, 4, 'jarak fokus');
  close(2 * a, 10, 'sumbu mayor');
  close(2 * b, 6, 'sumbu minor');
  close(c / a, 0.8, 'eksentrisitas');
});

run('elips (x-2)^2/25+(y-1)^2/16=1: pusat (2,1), c=3, e=0,6', () => {
  const a = 5;
  const b = 4;
  const c = Math.sqrt(a ** 2 - b ** 2);
  close(c, 3, 'jarak fokus');
  close(c / a, 0.6, 'eksentrisitas');
  close(2 - c, -1, 'fokus kiri x');
  close(2 + c, 5, 'fokus kanan x');
});

run('garis singgung elips x^2/25+y^2/9=1 di (4,9/5): 4x+5y=25', () => {
  close((4 / 5) ** 2 + (9 / 5 / 3) ** 2, 1, 'titik pada elips');
  close(4 * 4 + 5 * (9 / 5), 25, 'konstanta garis singgung');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal, ${passed} lulus.`);
  process.exit(1);
}
console.log(`\nSemua ${passed} pemeriksaan Matematika Tingkat Lanjut (geometri) lulus.`);

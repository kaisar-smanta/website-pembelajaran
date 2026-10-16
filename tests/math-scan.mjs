// Uji pemindai matematika bersama (`src/lib/math-scan.ts`).
//
// Pemindai ini dipakai renderer markdown dan skrip lint, jadi semantiknya harus
// stabil: pemisahan inline/display, dolar ter-escape, interpolasi, dan indeks.

import { replaceMath, scanMath } from '../src/lib/math-scan.ts';
import { check } from './_util.mjs';

function eq(actual, expected, label) {
  if (actual !== expected) throw new Error(`${label}: diharapkan ${expected}, diperoleh ${actual}`);
}

check('memisahkan inline dan display', () => {
  const scan = scanMath('a $x$ dan $$y$$ akhir');
  eq(scan.segments.length, 2, 'jumlah segmen');
  eq(scan.segments[0].body, 'x', 'body inline');
  eq(scan.segments[0].display, false, 'inline bukan display');
  eq(scan.segments[1].body, 'y', 'body display');
  eq(scan.segments[1].display, true, 'display');
});

check('dolar ter-escape dan interpolasi diabaikan', () => {
  const scan = scanMath('harga \\$5 dan ${var} tetap');
  eq(scan.segments.length, 0, 'tidak ada segmen');
  eq(scan.dollars, 0, 'tidak ada dolar dihitung');
});

check('menghitung dolar tak berpasangan', () => {
  eq(scanMath('$x').dollars, 1, 'satu dolar');
  eq(scanMath('$x$').dollars, 2, 'dua dolar');
});

check('cleaned menjaga panjang dan baris baru', () => {
  const input = '$x$\n$$y$$';
  const scan = scanMath(input);
  eq(scan.cleaned.length, input.length, 'panjang sama');
  eq((scan.cleaned.match(/\n/g) || []).length, 1, 'baris baru dipertahankan');
});

check('replaceMath mengganti tanpa mengubah sisa teks', () => {
  eq(
    replaceMath('a $x$ b', (body) => `(${body})`),
    'a (x) b',
    'ganti inline',
  );
  eq(replaceMath('p $$y$$ q', () => 'Z'), 'p Z q', 'ganti display');
  eq(replaceMath('tanpa math', () => 'Z'), 'tanpa math', 'tanpa math tidak berubah');
});

console.log('Pemindai matematika diperiksa.');

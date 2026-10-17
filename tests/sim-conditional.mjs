// Verifikasi perhitungan peluang bersyarat (src/lib/sim/conditional.ts).
// Pemakaian: node tests/sim-conditional.mjs
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import assert from 'node:assert/strict';
import { computeConditional } from '../src/lib/sim/conditional.ts';

runSimSuite({
  name: 'sim-conditional',
  cases: [
    [
      'kasus diketahui P(B) dan P(A|B)',
      () => {
        const r = computeConditional(0.5, 0.8, 0.2);
        close(r.pAB, 0.4, 'nilai', 1e-9);
        close(r.pAcB, 0.1, 'nilai', 1e-9);
        close(r.pB, 0.5, 'nilai', 1e-9);
        close(r.pAGivenB, 0.8, 'nilai', 1e-9);
        close(r.pBGivenA, 0.8, 'nilai', 1e-9);
        assert.equal(r.verdict, 'similar');
      },
    ],
    [
      'tabel dua arah konsisten',
      () => {
        const r = computeConditional(0.3, 0.6, 0.1);
        close(r.pABc, r.pA - r.pAB, 'nilai', 1e-9);
        close(r.pAcBc, r.pAc - r.pAcB, 'nilai', 1e-9);
        close(r.pAB + r.pABc + r.pAcB + r.pAcBc, 1, 'nilai', 1e-9);
        close(r.pB + r.pBc, 1, 'nilai', 1e-9);
      },
    ],
    [
      'P(B) = 0 membuat P(A|B) tidak terdefinisi',
      () => {
        const r = computeConditional(0.5, 0, 0);
        assert.equal(r.pB, 0);
        assert.equal(r.pAGivenB, undefined);
        assert.equal(r.verdict, 'undefined');
      },
    ],
    [
      'kasus bebas menghasilkan P(A|B) = P(A)',
      () => {
        const r = computeConditional(0.3, 0.4, 0.4);
        close(r.pB, 0.4, 'nilai', 1e-9);
        close(r.pAGivenB, 0.3, 'nilai', 1e-9);
        close(r.pAGivenB, r.pA, 'nilai', 1e-9);
      },
    ],
    [
      'arah syarat dapat berbeda',
      () => {
        const r = computeConditional(0.2, 0.9, 0.1);
        close(r.pB, 0.26, 'nilai', 1e-9);
        close(r.pAGivenB, 0.18 / 0.26, 'nilai', 1e-9);
        assert.equal(r.verdict, 'different');
      },
    ],
  ],
});

// Verifikasi matematika src/lib/sim/conic.ts
// Pemakaian: node tests/sim-conic.mjs
import assert from 'node:assert/strict';
import {
  conicFoci,
  conicVertices,
  conicEccentricity,
  parabolaDirectrix,
  sampleConic,
} from '../src/lib/sim/conic.ts';

let failed = 0;

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

function close(actual, expected, label, eps = 1e-3) {
  assert.ok(
    Math.abs(actual - expected) < eps,
    `${label}: diharapkan ≈ ${expected}, diperoleh ${actual}`,
  );
}

run('elips a=5, b=3 punya fokus di ±4 dan e = 0,8', () => {
  const p = { a: 5, b: 3, h: 0, k: 0 };
  const foci = conicFoci('ellipse', p);
  close(foci[0].x, -4, 'fokus kiri');
  close(foci[1].x, 4, 'fokus kanan');
  close(conicEccentricity('ellipse', p), 0.8, 'eksentrisitas');
  assert.equal(conicVertices('ellipse', p).length, 4, 'empat titik puncak');
});

run('hiperbola a=3, b=4 punya fokus di ±5 dan e = 5/3', () => {
  const p = { a: 3, b: 4, h: 0, k: 0 };
  const foci = conicFoci('hyperbola', p);
  close(foci[0].x, -5, 'fokus kiri');
  close(foci[1].x, 5, 'fokus kanan');
  close(conicEccentricity('hyperbola', p), 5 / 3, 'eksentrisitas');
});

run('parabola a=1 fokus (0,1) dan direktris y = -1', () => {
  const p = { a: 1, b: 1, h: 0, k: 0 };
  close(conicFoci('parabola', p)[0].y, 1, 'fokus');
  close(parabolaDirectrix(p), -1, 'direktris');
  close(conicEccentricity('parabola', p), 1, 'eksentrisitas');
});

run('sampleConic menghasilkan titik berhingga', () => {
  for (const kind of ['ellipse', 'parabola', 'hyperbola']) {
    const pts = sampleConic(kind, { a: 4, b: 2, h: 0, k: 0 }, 40);
    assert.ok(pts.length > 20, `${kind}: terlalu sedikit titik`);
    const finite = pts.filter((q) => q !== null && Number.isFinite(q[0]) && Number.isFinite(q[1]));
    assert.equal(finite.length, pts.filter((q) => q !== null).length, `${kind}: titik tak berhingga`);
  }
});

run('hiperbola dipisah oleh null antar cabang', () => {
  const pts = sampleConic('hyperbola', { a: 3, b: 4, h: 0, k: 0 }, 20);
  assert.ok(pts.some((q) => q === null), 'tidak ada pemisah null');
});

if (failed > 0) {
  console.error(`\n${failed} pemeriksaan gagal.`);
  process.exit(1);
}
console.log('\nSemua pemeriksaan irisan kerucut lulus.');

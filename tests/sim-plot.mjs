// Uji pembantu kurva bersama: node tests/sim-plot.mjs
//
// Hanya `paramValue` yang murni (tanpa DOM); `drawGrid`/`drawAxes` menyentuh
// SVG sehingga diuji lewat audit berbasis peramban.
import { close, load } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';

// `plot.ts` memakai alias `@/lib/dom`, jadi dimuat lewat `load()` agar hook
// resolusi alias di `_util.mjs` sudah terpasang.
const { paramValue } = await load('src/lib/sim/plot.ts');

runSimSuite({
  name: 'sim-plot',
  cases: [
    [
      'paramValue mengambil nilai parameter yang ada',
      () => close(paramValue([{ name: 'a', value: 2.5 }], 'a', 1), 2.5, 'paramValue'),
    ],
    [
      'paramValue memakai cadangan bila parameter tidak ada',
      () => close(paramValue([{ name: 'a', value: 2.5 }], 'b', 7), 7, 'paramValue b'),
    ],
    [
      'paramValue memakai cadangan untuk nilai tak berhingga',
      () => close(paramValue([{ name: 'a', value: Number.NaN }], 'a', 3), 3, 'paramValue NaN'),
    ],
    [
      'paramValue aman pada daftar kosong/undefined',
      () => {
        close(paramValue([], 'a', 4), 4, 'paramValue []');
        close(paramValue(undefined, 'a', 4), 4, 'paramValue undefined');
      },
    ],
  ],
});

// Uji logika murni eksplorasi teori bilangan: node tests/sim-number-theory.mjs
import assert from 'node:assert/strict';
import { runSimSuite } from './_sim-harness.mjs';
import {
  euclidSteps,
  gcd,
  lcm,
  primeSieve,
  isPrime,
  mod,
  modularPowers,
  modularPowerCycle,
} from '../src/lib/sim/number-theory.ts';

runSimSuite({
  name: 'sim-number-theory',
  cases: [
    [
      'algoritma Euklides gcd(1071, 462) = 21',
      () => {
        const result = euclidSteps(1071, 462);
        assert.equal(result.gcd, 21);
        assert.equal(result.steps.length, 3);
        assert.deepEqual(result.steps[0], { a: 1071, b: 462, q: 2, r: 147 });
        assert.deepEqual(result.steps[2], { a: 147, b: 21, q: 7, r: 0 });
      },
    ],
    [
      'gcd dan lcm dasar serta kasus nol',
      () => {
        assert.equal(gcd(48, 18), 6);
        assert.equal(gcd(0, 0), 0);
        assert.equal(gcd(-12, 18), 6);
        assert.equal(lcm(4, 6), 12);
        assert.equal(lcm(0, 5), 0);
      },
    ],
    [
      'saringan Eratosthenes sampai 30',
      () => {
        assert.deepEqual(primeSieve(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        assert.deepEqual(primeSieve(1), []);
        assert.deepEqual(primeSieve(2), [2]);
      },
    ],
    [
      'uji keprimaan',
      () => {
        assert.equal(isPrime(2), true);
        assert.equal(isPrime(97), true);
        assert.equal(isPrime(1), false);
        assert.equal(isPrime(100), false);
        assert.equal(isPrime(2.5), false);
      },
    ],
    [
      'mod selalu non-negatif',
      () => {
        assert.equal(mod(7, 5), 2);
        assert.equal(mod(-1, 5), 4);
        assert.equal(mod(-7, 5), 3);
      },
    ],
    [
      'deret pangkat modulo membentuk jam',
      () => {
        assert.deepEqual(modularPowers(2, 5, 4), [2, 4, 3, 1]);
        assert.deepEqual(modularPowers(3, 4, 4), [3, 1, 3, 1]);
      },
    ],
    [
      'siklus pangkat modulo',
      () => {
        assert.deepEqual(modularPowerCycle(2, 5), [2, 4, 3, 1]);
        assert.deepEqual(modularPowerCycle(2, 4), [0]);
        assert.deepEqual(modularPowerCycle(5, 1), [0]);
      },
    ],
  ],
});

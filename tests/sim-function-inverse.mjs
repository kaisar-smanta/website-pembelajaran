// Uji fungsi matematika murni untuk komponen FunctionInverseSim.
// Pemakaian: node tests/sim-function-inverse.mjs
import { runCase, report } from './_util.mjs';
import assert from 'node:assert/strict';
import { computeInverse, verifyInverse } from '../src/lib/sim/function-inverse.ts';


runCase('invers f(x) = 2x + 1', () => assert.deepEqual(computeInverse(2, 1), { a: 0.5, b: -0.5 }));
runCase('f(f⁻¹(5)) = 5 untuk f(x) = 2x + 1', () => assert.deepEqual(verifyInverse(2, 1, 5), 5));
runCase('a = 0 tidak memiliki invers', () => assert.deepEqual(computeInverse(0, 1), null));

report();

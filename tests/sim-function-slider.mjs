// Uji fungsi matematika murni untuk komponen FunctionSlider.
// Pemakaian: node tests/sim-function-slider.mjs
import { close, runCase, report } from './_util.mjs';
import assert from 'node:assert/strict';
import { evalFormula, describe } from '../src/lib/sim/function-slider.ts';


runCase('quadratic f(0) = -4', () => close(evalFormula('quadratic', { a: 1, b: 0, c: -4 }, 0), -4, 'quadratic f(0) = -4', 0));
runCase('quadratic f(2) = 0', () => close(evalFormula('quadratic', { a: 1, b: 0, c: -4 }, 2), 0, 'quadratic f(2) = 0', 0));
runCase('exponential f(3) = 8', () => close(evalFormula('exponential', { a: 1, b: 2 }, 3), 8, 'exponential f(3) = 8', 0));
runCase('sine f(PI/2) = 1', () => close(evalFormula('sine', { a: 1, k: 1 }, Math.PI / 2), 1, 'sine f(PI/2) = 1', 0));
runCase('transform f(2) = -3', () => close(evalFormula('transform', { a: 1, h: 2, k: -3 }, 2), -3, 'transform f(2) = -3', 0));
runCase('discriminant a=1,b=-6,c=9 = 0', () => close(describe('quadratic', { a: 1, b: -6, c: 9 }).discriminant, 0, 'discriminant a=1,b=-6,c=9 = 0', 0));

report();

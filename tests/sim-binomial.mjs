// Verifikasi matematika src/lib/sim/binomial.ts
// Pemakaian: node tests/sim-binomial.mjs
import { close } from './_util.mjs';
import { runSimSuite } from './_sim-harness.mjs';
import assert from 'node:assert/strict';
import {
  binomialCoefficient,
  binomialPmf,
  binomialDistribution,
  binomialMean,
  binomialVariance,
  binomialStdDev,
  cumulativeBinomial,
} from '../src/lib/sim/binomial.ts';

runSimSuite({
  name: 'sim-binomial',
  cases: [
    [
      'koefisien binomial C(5,2)=10, C(3,1)=3, C(10,5)=252',
      () => {
        assert.equal(binomialCoefficient(5, 2), 10);
        assert.equal(binomialCoefficient(3, 1), 3);
        assert.equal(binomialCoefficient(10, 5), 252);
        assert.equal(binomialCoefficient(0, 0), 1);
        assert.equal(binomialCoefficient(4, 5), 0);
      },
    ],
    [
      'P(X=1) untuk n=3, p=1/2 sama dengan 3/8',
      () => {
        close(binomialPmf(3, 1, 0.5), 0.375, 'P(X=1)', 1e-9);
      },
    ],
    [
      'P(X=5) untuk n=10, p=1/2 sama dengan 252/1024',
      () => {
        close(binomialPmf(10, 5, 0.5), 252 / 1024, 'P(X=5)', 1e-9);
      },
    ],
    [
      'seluruh peluang k=0..n berjumlah 1',
      () => {
        for (const [n, p] of [
          [10, 0.3],
          [20, 0.7],
          [5, 0.5],
        ]) {
          const sum = binomialDistribution(n, p).reduce((acc, point) => acc + point.p, 0);
          close(sum, 1, `jumlah n=${n}, p=${p}`, 1e-9);
        }
      },
    ],
    [
      'nilai harapan np dan varians np(1-p)',
      () => {
        close(binomialMean(10, 0.5), 5, 'mean n=10 p=0.5', 1e-9);
        close(binomialVariance(10, 0.5), 2.5, 'varians n=10 p=0.5', 1e-9);
        close(binomialMean(20, 0.25), 5, 'mean n=20 p=0.25', 1e-9);
        close(binomialVariance(20, 0.25), 3.75, 'varians n=20 p=0.25', 1e-9);
        close(binomialStdDev(10, 0.5), Math.sqrt(2.5), 'sigma', 1e-9);
      },
    ],
    [
      'distribusi simetris saat p = 1/2',
      () => {
        const dist = binomialDistribution(10, 0.5);
        for (const point of dist) {
          close(point.p, dist[10 - point.k].p, `simetri k=${point.k}`, 1e-9);
        }
      },
    ],
    [
      'peluang kumulatif P(X<=n) = 1 dan P(X<=0) = (1-p)^n',
      () => {
        close(cumulativeBinomial(10, 0.5, 10), 1, 'P(X<=n)', 1e-9);
        close(cumulativeBinomial(10, 0.5, 0), Math.pow(0.5, 10), 'P(X<=0)', 1e-9);
      },
    ],
    [
      'kasus tepi p = 0 dan p = 1',
      () => {
        const zero = binomialDistribution(4, 0);
        close(zero[0].p, 1, 'p=0 di k=0', 1e-9);
        close(zero.reduce((acc, point) => acc + point.p, 0), 1, 'jumlah p=0', 1e-9);
        const one = binomialDistribution(4, 1);
        close(one[4].p, 1, 'p=1 di k=n', 1e-9);
        close(one.reduce((acc, point) => acc + point.p, 0), 1, 'jumlah p=1', 1e-9);
      },
    ],
  ],
});

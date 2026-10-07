export type ConditionalVerdict = 'undefined' | 'similar' | 'different';

export interface ConditionalResult {
  pA: number;
  pBA: number;
  pBAc: number;
  pAc: number;
  pAB: number;
  pAcB: number;
  pB: number;
  pBc: number;
  pABc: number;
  pAcBc: number;
  pAGivenB: number | undefined;
  pBGivenA: number;
  verdict: ConditionalVerdict;
}

export function computeConditional(pA: number, pBA: number, pBAc: number): ConditionalResult {
  const pAc = 1 - pA;
  const pAB = pA * pBA;
  const pAcB = pAc * pBAc;
  const pB = pAB + pAcB;
  const pBc = 1 - pB;
  const pABc = pA - pAB;
  const pAcBc = pAc - pAcB;
  const pAGivenB = pB > 0 ? pAB / pB : undefined;
  const pBGivenA = pBA;
  const verdict: ConditionalVerdict =
    pAGivenB === undefined
      ? 'undefined'
      : Math.abs(pAGivenB - pBGivenA) < 0.005
        ? 'similar'
        : 'different';

  return {
    pA,
    pBA,
    pBAc,
    pAc,
    pAB,
    pAcB,
    pB,
    pBc,
    pABc,
    pAcBc,
    pAGivenB,
    pBGivenA,
    verdict,
  };
}

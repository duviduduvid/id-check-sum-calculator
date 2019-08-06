import calculateIsrCheckSum from './calculator-utils';

describe('calculator-utils', () => {
  it('calculates the check sum of Isr ID', () => {
    const idDigits1 = [0, 0, 8, 4, 5, 0, 6, 7];
    const idDigits2 = [0, 0, 0, 0, 0, 0, 0, 0];
    expect(calculateIsrCheckSum(idDigits1)).toBe(8);
    expect(calculateIsrCheckSum(idDigits2)).toBe(0);
  });
});

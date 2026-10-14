import { describe, expect, it } from 'vitest';
import { calculateSimpleInterest } from '../src/simple-interest';

describe('calculateSimpleInterest', () => {
  it('обчислює відсотки за один рік', () => {
    // Arrange
    const principal = 1000;
    const rate = 10;
    const years = 1;

    // Act
    const result = calculateSimpleInterest(principal, rate, years);

    // Assert
    expect(result).toBe(100);
  });

  it('обчислює відсотки за кілька років пропорційно до терміну', () => {
    expect(calculateSimpleInterest(5000, 7.5, 4)).toBe(1500);
  });

  it('округлює результат до копійок', () => {
    expect(calculateSimpleInterest(100, 3.333, 1)).toBe(3.33);
  });

  it('повертає 0 для нульової ставки', () => {
    expect(calculateSimpleInterest(1000, 0, 5)).toBe(0);
  });

  it('повертає 0 для нульової суми', () => {
    expect(calculateSimpleInterest(0, 10, 5)).toBe(0);
  });

  it('повертає 0 для нульового терміну', () => {
    expect(calculateSimpleInterest(1000, 10, 0)).toBe(0);
  });

  it('відхиляє від’ємну ставку', () => {
    expect(() => calculateSimpleInterest(1000, -1, 1)).toThrow('INVALID_RATE');
  });

  it('відхиляє нечислову ставку', () => {
    expect(() => calculateSimpleInterest(1000, NaN, 1)).toThrow('INVALID_RATE');
  });

  it('відхиляє від’ємну суму', () => {
    expect(() => calculateSimpleInterest(-1, 10, 1)).toThrow(
      'INVALID_PRINCIPAL',
    );
  });

  it('відхиляє від’ємну кількість років', () => {
    expect(() => calculateSimpleInterest(1000, 10, -2)).toThrow(
      'INVALID_YEARS',
    );
  });
});

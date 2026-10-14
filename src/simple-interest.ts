export function calculateSimpleInterest(
  principal: number,
  ratePercent: number,
  years: number,
): number {
  if (!Number.isFinite(principal) || principal < 0) {
    throw new Error('INVALID_PRINCIPAL');
  }
  if (!Number.isFinite(ratePercent) || ratePercent < 0) {
    throw new Error('INVALID_RATE');
  }
  if (!Number.isFinite(years) || years < 0) {
    throw new Error('INVALID_YEARS');
  }

  const interest = (principal * ratePercent * years) / 100;
  return Math.round(interest * 100) / 100;
}

export function percentageFormat(value: number, total: number) {
  const percentage = (value / total) * 100;
  const formattedPercentage = percentage.toFixed(2).replace('.', ',');
  return `${formattedPercentage}%`;
}
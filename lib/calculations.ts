export function calculateTpAmount(
  tp: number,
  limit: number,
  qty: number,
  accountSize: number,
  leverage: number
): string {
  const difference = tp - limit;
  const amount = (difference * qty * accountSize * leverage) / limit;
  return amount.toFixed(2);
}

export function calculateTpPercentage(
  tp: number,
  limit: number,
  qty: number,
  accountSize: number,
  leverage: number
): string {
  const amount = parseFloat(calculateTpAmount(tp, limit, qty, accountSize, leverage));
  return ((amount / accountSize) * 100).toFixed(2);
}

export function calculateNewTp(price: number): string {
  return (price + 1.1927).toFixed(4);
}

export function calculateAddonTpAmount(
  price: number,
  quantity: number,
  accountSize: number,
  leverage: number
): string {
  const newTp = parseFloat(calculateNewTp(price));
  const difference = newTp - price;
  const amount = (difference * quantity * accountSize * leverage) / price;
  return amount.toFixed(2);
}

export function calculateAddonTpPercentage(amount: string, accountSize: number): string {
  return ((parseFloat(amount) / accountSize) * 100).toFixed(2);
}

export function checkMarginStatus(
  accountSize: number,
  leverage: number,
  limit: number,
  qty: number
): boolean {
  // Formula: (accountSize * leverage) / (limit * qty * 0.6) > 100%
  const marginRatio = (accountSize * leverage) / (limit * qty * 0.6);
  return marginRatio > 1; // Returns true if margin is good (ratio > 100%)
}
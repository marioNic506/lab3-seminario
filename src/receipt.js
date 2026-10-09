import { calculateTotal } from './pricing.js';
import { formatPrice } from './format.js';

export function buildReceipt(items) {
  const receiptLines = ['=== MINI TIENDA ==='];

  for (const item of items) {
    const label = `${item.name} x${item.quantity}`.padEnd(28);
    const amount = formatPrice(item.price * item.quantity, { width: 12 });

    receiptLines.push(`${label}${amount}`);
  }

  const total = calculateTotal(items);

  receiptLines.push('-'.repeat(40));
  receiptLines.push(`${'TOTAL'.padEnd(28)}${formatPrice(total, { width: 12 })}`);

  return receiptLines.join('\n');
}
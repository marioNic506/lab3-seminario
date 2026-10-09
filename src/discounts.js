
import { round2 } from './money.js';

export const DISCOUNT_CODES = {
  SAVE10: 0.1,
  SAVE20: 0.2,
  BLACKFRIDAY: 0.3
};

export function applyDiscount(amount, code) {
  if (!code) {
    return round2(amount);
  }
// Acepta códigos escritos en mayúsculas o minúsculas.

  const codigo = String(code).toUpperCase();
  const descuento = DISCOUNT_CODES[codigo];

  if (descuento === undefined) {
    return round2(amount);
  }

  return round2(amount * (1 - descuento));
}

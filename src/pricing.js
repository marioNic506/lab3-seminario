import { round2 } from './money.js';
import { calculateTax } from './tax.js';

/**
 * Calcula el total de un carrito de compras.
 *
 * Reglas actuales:
 *  - El total es la suma de precio * cantidad de cada ítem.
 *  - El resultado se redondea a 2 decimales.
 *  - Un carrito vacío vale 0.
 *
 * @param {Array<{price: number, quantity: number}>} items Ítems del carrito.
 * @param {boolean} [options.includeTax=false] Si es true, agrega el IVA del 13%.
 * @returns {number} Total del carrito, con IVA si includeTax es true. 
 *
 * @example
 * calculateTotal([])                                   // 0
 * calculateTotal([{ price: 10, quantity: 2 }])         // 20
 * calculateTotal([
 *   { price: 25.5, quantity: 2 },
 *   { price: 40, quantity: 1 },
 * ])                                                   // 91
 */
export function calculateTotal(items, { includeTax = false } = {}) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  if (includeTax) {
    return round2(subtotal + calculateTax(subtotal));
  }
  return round2(subtotal);
}


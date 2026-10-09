import { applyDiscount } from './discounts.js';

/**
 * Calcula el total de los productos de un carrito.
 * Aplica un descuento al subtotal si se proporciona
 * un código de descuento válido.
 *
 * @param {Array<{price: number, quantity: number}>} items
 * Productos del carrito.
 * @param {{discountCode?: string}} [options={}]
 * Opciones para aplicar descuentos.
 * @returns {number} Total redondeado a dos decimales.
 *
 * @example
 * calculateTotal([{ price: 100, quantity: 1 }],
 *   { discountCode: 'SAVE10' }); // 90
 */
export function calculateTotal(items, { discountCode } = {}) {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return applyDiscount(subtotal, discountCode);
}

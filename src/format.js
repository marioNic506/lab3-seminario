import { convert, getCurrency } from './currency.js';

/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * Reglas actuales:
 *  - Por defecto se muestra en bolivianos (Bs).
 *  - El monto se recibe en bolivianos y se convierte a la moneda pedida.
 *  - Siempre con dos decimales.
 *
 * @param {number} amount Monto en bolivianos (BOB).
 * @param {string} [currency='BOB'] Código de moneda: 'BOB', 'USD' o 'EUR'.
 * @returns {string} Precio formateado.
 * @throws {Error} Si la moneda no está soportada.
 *
 * @example
 * formatPrice(10)           // 'Bs 10.00'
 * formatPrice(100, 'USD')   // '$ 14.50'
 * formatPrice(100, 'EUR')   // '€ 13.30'
 */
export function formatPrice(amount, currency = 'BOB') {
  const { symbol } = getCurrency(currency);
  return `${symbol} ${convert(amount, currency).toFixed(2)}`;
}
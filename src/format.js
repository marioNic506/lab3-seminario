/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * Reglas actuales:
 *  - Siempre se muestra en bolivianos (Bs).
 *  - Siempre con dos decimales.
 *  - Puede alinear el resultado a la derecha usando width.
 *
 * @param {number} amount Monto a formatear.
 * @param {{width?: number}} options Opciones de formato.
 * @returns {string} Precio formateado.
 *
 * @example
 * formatPrice(10)                  // 'Bs 10.00'
 * formatPrice(25.5)                // 'Bs 25.50'
 * formatPrice(5, { width: 12 })    // '     Bs 5.00'
 */
export function formatPrice(amount, { width = 0 } = {}) {
  const formatted = `Bs ${amount.toFixed(2)}`;

  return formatted.padStart(width);
}
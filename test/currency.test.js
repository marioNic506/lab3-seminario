import test from 'node:test';
import assert from 'node:assert/strict';
import { CURRENCIES, getCurrency, convert } from '../src/currency.js';
import { formatPrice } from '../src/format.js';

test('getCurrency devuelve los datos de la moneda', () => {
  assert.deepEqual(getCurrency('USD'), { symbol: '$', rate: 0.145 });
  assert.equal(getCurrency('BOB'), CURRENCIES.BOB);
});

test('getCurrency lanza error con moneda desconocida', () => {
  assert.throws(() => getCurrency('XXX'), /Moneda no soportada: XXX/);
});

test('convert convierte y redondea a 2 decimales', () => {
  assert.equal(convert(100, 'USD'), 14.5);
  assert.equal(convert(100, 'EUR'), 13.3);
  assert.equal(convert(100), 100);
});

test('formatPrice usa la moneda pedida', () => {
  assert.equal(formatPrice(100, 'USD'), '$ 14.50');
  assert.equal(formatPrice(100, 'EUR'), '€ 13.30');
});

test('formatPrice sin moneda sigue en bolivianos', () => {
  assert.equal(formatPrice(10), 'Bs 10.00');
});

test('formatPrice lanza error con moneda desconocida', () => {
  assert.throws(() => formatPrice(10, 'XXX'), /Moneda no soportada/);
});
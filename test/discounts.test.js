
import test from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount } from '../src/discounts.js';

test('SAVE10 descuenta 10 por ciento', () => {
  assert.equal(applyDiscount(100, 'SAVE10'), 90);
});

test('SAVE20 descuenta 20 por ciento', () => {
  assert.equal(applyDiscount(100, 'SAVE20'), 80);
});

test('BLACKFRIDAY descuenta 30 por ciento', () => {
  assert.equal(applyDiscount(100, 'BLACKFRIDAY'), 70);
});

test('acepta códigos en minúsculas', () => {
  assert.equal(applyDiscount(100, 'save10'), 90);
});

test('ignora códigos desconocidos', () => {
  assert.equal(applyDiscount(100, 'DESCONOCIDO'), 100);
});

test('funciona sin código de descuento', () => {
  assert.equal(applyDiscount(100, undefined), 100);
});

test('redondea los resultados', () => {
  assert.equal(applyDiscount(19.99, 'SAVE10'), 17.99);
});

test('rechaza montos negativos', () => {
    assert.throws(
      () => applyDiscount(-100, 'SAVE10'),
      RangeError
    );
  });

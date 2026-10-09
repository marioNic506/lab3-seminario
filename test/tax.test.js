import test from 'node:test';
import assert from 'node:assert/strict';

import { calculateTax, addTax } from '../src/tax.js';

test('calculateTax calcula el IVA del 13%', () => {
assert.equal(calculateTax(100), 13);
});

test('addTax agrega el IVA del 13%', () => {
assert.equal(addTax(100), 113);
});

test('calculateTax redondea a 2 decimales', () => {
assert.equal(calculateTax(25.55), 3.32);
});

test('addTax redondea a 2 decimales', () => {
assert.equal(addTax(25.55), 28.87);
});

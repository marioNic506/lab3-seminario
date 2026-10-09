import test from 'node:test';
import assert from 'node:assert/strict';

import { buildReceipt } from '../src/receipt.js';

test('genera un recibo con un producto', () => {
  const items = [
    {
      name: 'Mouse Inalambrico',
      price: 25.5,
      quantity: 2,
    },
  ];

  const receipt = buildReceipt(items);

  assert.ok(receipt.includes('=== MINI TIENDA ==='));
  assert.ok(receipt.includes('Mouse Inalambrico x2'));
  assert.ok(receipt.includes('Bs 51.00'));
  assert.ok(receipt.includes('TOTAL'));
});

test('calcula correctamente varios productos', () => {
  const items = [
    {
      name: 'Mouse',
      price: 25.5,
      quantity: 2,
    },
    {
      name: 'Libro',
      price: 40,
      quantity: 1,
    },
  ];

  const receipt = buildReceipt(items);

  assert.ok(receipt.includes('Bs 91.00'));
});
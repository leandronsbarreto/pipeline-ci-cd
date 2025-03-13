import { assert } from 'chai';

describe('Calculation Tests', () => {
  it('should add numbers correctly', () => {
    const result = 2 + 2;
    assert.strictEqual(result, 4); // Passes
  });

  it('should multiply numbers correctly', () => {
    const result = 2 * 3;
    assert.strictEqual(result, 6); // Passes
  });

  it('should fail on incorrect calculation', () => {
    const result = 2 + 3;
    assert.strictEqual(result, 6); // Fails
  });
});

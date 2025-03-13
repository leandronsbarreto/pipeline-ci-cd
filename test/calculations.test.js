const assert = require('chai').assert;

describe('Calculation Tests', () => {
  it('should add numbers correctly', () => {
    const result = 2 + 2;
    assert.strictEqual(result, 4); // Esse teste vai passar
  });

  it('should multiply numbers correctly', () => {
    const result = 2 * 3;
    assert.strictEqual(result, 6); // Esse teste vai passar
  });

  it('should fail on incorrect calculation', () => {
    const result = 2 + 3;
    assert.strictEqual(result, 6); // Esse teste vai falhar
  });
});

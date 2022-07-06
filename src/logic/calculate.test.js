import calculate from '../__mocks__/calculate';

describe('test for calculate.js', () => {
  test('calculates properly', () => {
    expect(calculate('0', 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});

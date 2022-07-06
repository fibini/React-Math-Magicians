import calculate from './calculate';

describe('test for calculate.js', () => {
  test('tests the AC button', () => {
    expect(calculate({ total: '10', next: null, operation: null }, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  });
  test('tests the = button', () => {
    expect(calculate({ total: '10', next: '4', operation: 'x' }, '=')).toStrictEqual({ total: '40', next: null, operation: null });
  });
  test('tests "."', () => {
    expect(calculate({ total: '10', next: null, operation: null }, '.')).toStrictEqual({ total: '10', next: '10.', operation: null });
  });
  test('tests the +/- button', () => {
    expect(calculate({ total: '8', next: null, operation: null }, '+/-')).toStrictEqual({ total: '-8', next: null, operation: null });
  });
});

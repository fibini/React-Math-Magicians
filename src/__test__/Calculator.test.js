import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Calculator from '../Calculator';
import '@testing-library/jest-dom/extend-expect';

test('Calculator correct click functionality', () => {
  const { getByTestId } = render(<Calculator />);
  const number = getByTestId('eight');
  const slot = getByTestId('answer-slot');
  fireEvent.click(number);
  expect(slot.childNodes[0].data).toBe('8');
});

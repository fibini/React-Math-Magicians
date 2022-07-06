// test with react
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('test Navbar', () => {
  test('renders learn react link', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Home/));
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Calculator/));
    expect(screen.getByText(/some/i)).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Quote/));
    expect(screen.getByText(/William/i)).toBeInTheDocument();
  });
});

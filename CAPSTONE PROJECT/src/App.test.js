import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders the App component without crashing', () => {
  render(<App />);
  expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
  expect(screen.getByText(/Chicago/i)).toBeInTheDocument();
  expect(screen.getByText(/Reserve Table/i)).toBeInTheDocument();
});

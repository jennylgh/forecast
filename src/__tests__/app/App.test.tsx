import React from 'react';
import { render } from '@testing-library/react';
import App from '../../app/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});

test('tests', () => {
  expect(1 + 1).toBe(2);
});
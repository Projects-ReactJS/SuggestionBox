import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Suggestion Box App title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Suggestion Box/i);
  expect(linkElement).toBeInTheDocument();
});

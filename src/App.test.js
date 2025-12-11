import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo List title', () => {
  render(<App />);
  const linkElement = screen.getByText(/todo list/i);
  expect(linkElement).toBeInTheDocument();
});

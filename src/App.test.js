import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleText = screen.getByText(/Welcome to MovieMania/i);
  expect(titleText).toBeInTheDocument();
});

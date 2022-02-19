import { render, screen } from '@testing-library/react';
import Login from './pages/Login';
import App from './App';

test('renders login page, and elements', () => {
  render(<Login />);
  const headerElement = screen.getByText(/Thrive in Chaos Fitness/i);
  expect(headerElement).toBeInTheDocument();
  const formEmailLabel = screen.getByLabelText(/E-mail/i)
  expect(formEmailLabel).toBeInTheDocument(); 
});

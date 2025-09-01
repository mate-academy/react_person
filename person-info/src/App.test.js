import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('імена всіх користувачів', () => {
    render(<App />);

    expect(screen.getByText(/My name is Misha/i)).toBeInTheDocument();
    expect(screen.getByText(/My name is Olya/i)).toBeInTheDocument();
    expect(screen.getByText(/My name is Alex/i)).toBeInTheDocument();
  });

  test('вік, якщо він вказаний', () => {
    render(<App />);

    expect(screen.getByText(/I am 30/i)).toBeInTheDocument();
    expect(screen.getByText(/I am 25/i)).toBeInTheDocument();
    expect(screen.queryByText(/I am 40/i)).not.toBeInTheDocument();
  });

  test('інформація про партнера', () => {
    render(<App />);

    expect(screen.getByText(/Olya is my wife/i)).toBeInTheDocument();
    expect(screen.getByText(/Misha is my husband/i)).toBeInTheDocument();
    expect(screen.getByText(/I am not married/i)).toBeInTheDocument();
  });
});

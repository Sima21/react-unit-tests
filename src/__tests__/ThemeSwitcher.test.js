import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeSwitcher from '../components/ThemeSwitcher';

test('toggles theme between light and dark', () => {
  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );

  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Switch to dark theme');

  fireEvent.click(button);
  expect(button).toHaveTextContent('Switch to light theme');

  fireEvent.click(button);
  expect(button).toHaveTextContent('Switch to dark theme');
});

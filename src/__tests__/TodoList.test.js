import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ title: 'Test Todo', completed: false }])
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

test('renders TodoList component and fetches todos', async () => {
  render(<TodoList />);
  expect(await screen.findByText(/Test Todo/i)).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /Add Todo/i });

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

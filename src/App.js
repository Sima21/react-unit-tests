import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>React Unit Tests</h1>
        <ThemeSwitcher />
        <TodoList />
      </div>
    </ThemeProvider>
  );
};

export default App;

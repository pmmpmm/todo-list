import React, { useState } from 'react';
import Header from './component/Header/Header';
import TodoList from './component/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setfilter] = useState('all');
  const handleFilter = (filter) => {
    setfilter(filter);
  };
  return (
    <DarkModeProvider>
      <Header filters={filters} onFilter={handleFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;

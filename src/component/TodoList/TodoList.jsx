import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodoItems);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleDelete = (deletTodo) => {
    setTodos(todos.filter((todo) => todo.id !== deletTodo.id));
  };
  const handleUpdate = (updateTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
    );
  };

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todos));
  }, [todos]);

  const filterItem = getFilterItem(todos, filter);
  return (
    <section>
      <ul>
        {filterItem.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddTodo onAddTodo={handleAddTodo} />
    </section>
  );
}

function getFilterItem(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((item) => item.status === filter);
}

function readTodoItems() {
  const todos = JSON.parse(localStorage.getItem('todoItems'));
  return todos ? todos : [];
}

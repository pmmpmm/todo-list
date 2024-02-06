import React, { useState, createContext, useEffect } from 'react';

export const ItemContext = createContext();

export function ItemContextProvider({ children }) {
  useEffect(() => {
    if (localStorage.todoList === undefined) {
      localStorage.setItem('todoList', JSON.stringify([]));
    }
  }, []);

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList')) || []);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(items);
    localStorage.setItem('todoList', JSON.stringify(items));
    return () => {};
  }, [items]);

  return <ItemContext.Provider value={{ items, setItems, lists, setLists }}>{children}</ItemContext.Provider>;
}

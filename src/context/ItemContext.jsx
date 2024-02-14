import React, {
  useState,
  createContext,
  useEffect,
  useRef,
  useContext,
} from 'react';

export const ItemContext = createContext();
export const useItemContext = () => useContext(ItemContext);

const filters = ['all', 'active', 'completed'];

export function ItemContextProvider({ children }) {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );
  const [filter, setFilter] = useState(filters[0]);
  const filtered = getFilteredItems(items, filter);
  const listRef = useRef();

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(items));
    return () => {};
  }, [items]);

  return (
    <ItemContext.Provider
      value={{ setItems, filters, filter, setFilter, filtered, listRef }}
    >
      {children}
    </ItemContext.Provider>
  );
}

function getFilteredItems(items, filter) {
  switch (filter) {
    case filters[0]:
      return items;
    case filters[1]:
      return items.filter((item) => item.value === false);
    case filters[2]:
      return items.filter((item) => item.value === true);
    default:
      return;
  }
}

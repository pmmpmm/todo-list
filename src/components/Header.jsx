import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

export default function Header() {
  const { items, setLists } = useContext(ItemContext);

  const filterAll = () => {
    setLists(items);
  };
  const filterActive = () => {
    setLists(items.filter((item) => item.value === true));
  };
  const filterCompleted = () => {
    setLists(items.filter((item) => item.value === false));
  };

  return (
    <header>
      <button>
        <span>다크모드</span>
      </button>
      <div>
        <button onClick={filterAll}>All</button>
        <button onClick={filterActive}>Active</button>
        <button onClick={filterCompleted}>Completed</button>
      </div>
    </header>
  );
}

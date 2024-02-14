import React from 'react';
import { useItemContext } from '../../context/ItemContext';
import ListItem from './ListItem';

export default function List() {
  const { setItems, filtered, listRef } = useItemContext();

  const delItem = (delId) => {
    setItems((prev) => prev.filter((item) => item.id !== delId));
  };

  const inpChangeHandler = (e) => {
    setItems((prev) =>
      prev.map((item) => {
        return item.id === e.target.id ? { ...item, value: !item.value } : item;
      })
    );
  };

  return (
    <ul className="list" ref={listRef}>
      {filtered.map((list) => (
        <ListItem
          text={list.name}
          value={list.value}
          key={list.key}
          id={list.id}
          onClick={delItem}
          onChange={inpChangeHandler}
        />
      ))}
    </ul>
  );
}

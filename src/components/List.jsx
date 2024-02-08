import React, { useContext, useRef, useLayoutEffect } from 'react';
import { ItemContext } from '../context/ItemContext';
import ListItem from './ListItem';

export default function List() {
  const { setItems, lists } = useContext(ItemContext);
  const listRef = useRef();

  useLayoutEffect(() => {
    const listItems = listRef.current;
    const listItemsNum = listItems.children.length;
    const listItem = listItems.firstElementChild;
    listItems.scrollTo({
      top: listItemsNum && listItemsNum * listItem.offsetHeight,
      behavior: 'smooth',
    });
    return () => {};
  }, [lists]);

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
      {lists.map((list) => (
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

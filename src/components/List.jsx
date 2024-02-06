import React, { useContext } from 'react';
import ListItem from './ListItem';
import { ItemContext } from '../context/ItemContext';

export default function List() {
  const { lists } = useContext(ItemContext);

  return (
    <ul>
      {lists.map((list) => (
        <ListItem text={list.name} value={list.value} key={list.key} id={list.id} />
      ))}
    </ul>
  );
}

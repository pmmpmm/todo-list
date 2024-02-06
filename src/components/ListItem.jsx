import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

export default function ListItem({ text, value, id }) {
  const { setItems } = useContext(ItemContext);

  const delListItem = (delName) => {
    setItems((prev) => prev.filter((item) => item.name !== delName));
  };
  const changeHandler = (e) => {
    setItems((prev) =>
      prev.map((item) => {
        return item.id === e.target.id ? { ...item, value: !value } : item;
      })
    );
  };
  return (
    <li>
      <input type='checkbox' id={id} defaultChecked={value} onChange={changeHandler} />
      <label htmlFor={id}>{text}</label>
      <button onClick={() => delListItem(text)}>삭제</button>
    </li>
  );
}

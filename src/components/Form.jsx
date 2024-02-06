import React, { useState, useContext, useRef, useLayoutEffect } from 'react';
import { ItemContext } from '../context/ItemContext';
import Input from './Input';
import ButtonPrimaryBg from './ButtonPrimaryBg';
import uuid from 'react-uuid';

export default function Form() {
  const { setItems } = useContext(ItemContext);
  const [text, setText] = useState('');
  const inpRef = useRef();

  useLayoutEffect(() => inpRef.current.focus());

  const getItemValue = (e) => {
    setText(e.target.value);
  };
  const addListItem = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, { name: text, value: false, key: uuid(), id: uuid() }]);
    inpRef.current.value = '';
    inpRef.current.focus();
  };

  return (
    <form onSubmit={addListItem}>
      <Input type='text' onChange={getItemValue} inpRef={inpRef} />
      <ButtonPrimaryBg type='submit' text='Add' />
    </form>
  );
}

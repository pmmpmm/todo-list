import React, { useState, useContext, useRef, useLayoutEffect } from 'react';
import { ItemContext } from '../context/ItemContext';
import uuid from 'react-uuid';
import styles from './Form.module.css';
import Input from './Input';
import Button from './Button';

export default function Form() {
  const { setItems } = useContext(ItemContext);
  const [text, setText] = useState('');
  const inpRef = useRef();

  useLayoutEffect(() => inpRef.current.focus());

  const getInputText = (e) => {
    setText(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!!text === true) {
      setItems((prev) => [
        ...prev,
        { name: text, value: false, key: uuid(), id: uuid() },
      ]);
      setText('');
      inpRef.current.value = '';
      inpRef.current.focus();
    }
  };

  return (
    <form className={`form ${styles.form}`} onSubmit={addItem}>
      <Input
        type="text"
        placeholder="할 일을 작성해주세요."
        onChange={getInputText}
        inpRef={inpRef}
      />
      <Button
        type="submit"
        label="할 일 추가"
        variant="contained"
        size="medium"
      >
        Add
      </Button>
    </form>
  );
}

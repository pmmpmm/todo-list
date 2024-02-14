import React, { useState, useRef, useLayoutEffect } from 'react';
import { useItemContext } from '../../context/ItemContext';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default function Form() {
  const { setItems, listRef } = useItemContext();
  const [text, setText] = useState('');
  const inpRef = useRef();

  const getInputText = (e) => setText(e.target.value);
  const addItem = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      inpRef.current.value = '';
      inpRef.current.focus();
      return;
    }

    setItems((prev) => [
      ...prev,
      { name: text, value: false, key: uuidv4(), id: uuidv4() },
    ]);
    setText('');
    inpRef.current.value = '';
    inpRef.current.focus();

    setTimeout(() => {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 0);
  };

  useLayoutEffect(() => inpRef.current.focus(), []);

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

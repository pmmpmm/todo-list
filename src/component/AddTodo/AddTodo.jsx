import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAddTodo }) {
  /**
   * input에서 받은 텍스트와
   * 랜덤 id
   * status:active
   * 가 들어있는 오브젝트를 만들어서
   * <TodoList>로 전달하여 컴포넌트를 리렌더링한다.
   */
  const [text, setText] = useState('');
  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <form className={styles.form} onSubmit={handleAddTodo}>
      <input className={styles.input} type="text" placeholder="Add To Do" onChange={onChangeText} value={text} />
      <button className={styles.button}>Add</button>
    </form>
  );
}

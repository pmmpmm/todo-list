import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onDelete, onUpdate }) {
  /**
   * 상태를 업데이트 하는 함수
   * 1. 체크박스를 클릭하면 status를 토글하여 오브젝트를 TodoList로 보낸다
   */
  const { id, text, status } = todo;

  const handleUpdate = () => {
    onUpdate({
      ...todo,
      status: status === 'active' ? 'completed' : 'active',
    });
  };
  return (
    <li className={styles.listItem}>
      <div className={styles.itemName}>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={id}
          onChange={handleUpdate}
          checked={status === 'completed' ? true : false}
        />
        <label className={styles.label} htmlFor={id}>
          {text}
        </label>
      </div>
      <button className={styles.button} onClick={() => onDelete(todo)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

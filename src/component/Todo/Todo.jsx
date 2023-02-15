import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

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
    <li>
      <input
        type="checkbox"
        id={id}
        onChange={handleUpdate}
        checked={status === 'completed' ? true : false}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={() => onDelete(todo)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

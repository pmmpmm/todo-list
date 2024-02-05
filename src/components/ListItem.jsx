import React from 'react';
import Form from './form';

export default function ListItem() {
  return (
    <li>
      <input type='checkbox' id='checkID' />
      <label htmlFor='checkID'>리스트</label>
      <button>삭제</button>
    </li>
  );
}

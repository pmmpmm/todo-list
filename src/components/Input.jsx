import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.css';

export default function Input({ type, placeholder, onChange, inpRef }) {
  const cx = classNames.bind(styles);
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cx(['inp'])}
      onChange={onChange}
      ref={inpRef}
    />
  );
}

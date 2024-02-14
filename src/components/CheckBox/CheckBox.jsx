import React from 'react';
import classNames from 'classnames/bind';
import styles from './CheckBox.module.css';

export default function CheckBox({ id, variant, checked, onChange }) {
  const cx = classNames.bind(styles);
  return (
    <input
      id={id}
      type="checkbox"
      className={cx(['chk', `${variant ? variant : ''}`])}
      defaultChecked={checked}
      onChange={onChange ? onChange : null}
    />
  );
}

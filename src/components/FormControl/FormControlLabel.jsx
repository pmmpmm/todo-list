import React from 'react';
import classNames from 'classnames/bind';
import styles from './FormControlLabel.module.css';

export default function FormControlLabel({ control, label }) {
  // console.log(label, control.props.checked);
  const cx = classNames.bind(styles);
  return (
    <label
      className={cx(['label', `${control.props.checked ? 'active' : ''}`])}
    >
      {control}
      <span className={styles['label-tx']}>{label}</span>
    </label>
  );
}

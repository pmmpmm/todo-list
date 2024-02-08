import React from 'react';
import styles from './FormControlLabel.module.css';

export default function FormControlLabel({ control, label }) {
  return (
    <label className={styles.label}>
      {control}
      <span className={styles['label-tx']}>{label}</span>
    </label>
  );
}

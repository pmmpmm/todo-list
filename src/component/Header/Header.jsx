import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilter }) {
  const { darkMode, toggleDatkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.themeToggleBtn} onClick={toggleDatkMode}>
        {darkMode === false ? <HiMoon /> : ''}
        {darkMode === true ? <HiSun /> : ''}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li className={`${styles.filter} ${filter === value && styles.selected}`} key={index}>
            <button className={styles.button} onClick={() => onFilter(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

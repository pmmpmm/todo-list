import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi';
import styles from './Header.module.css';

export default function Header({ filters, onFilter }) {
  const { darkMode, toggleDatkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDatkMode}>
        {darkMode === false ? <HiMoon /> : ''}
        {darkMode === true ? <HiSun /> : ''}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilter(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

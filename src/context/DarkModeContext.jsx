import React, { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

/**
 * darkMode: flase remove('dark'), 달
 * darkMode: true add('dark'), 해
 */

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDatkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      setDarkMode(isDark);
      updateDarkMode(isDark);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDatkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
export const useDarkMode = () => useContext(DarkModeContext);

function updateDarkMode(darkMode) {
  if (darkMode === true) {
    document.documentElement.classList.add('dark');
    // localStorage.setItem('theme', 'dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    // localStorage.setItem('theme', 'light');
    localStorage.theme = 'light';
  }
}

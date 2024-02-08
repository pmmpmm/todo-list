import React, { createContext, useState, useLayoutEffect } from 'react';

export const DarkModeContext = createContext();

export function DarkModeContextProvider({ children }) {
  const [dark, setDark] = useState(localStorage.getItem('darkMode') || 'light');
  const toggleDarkMode = () => {
    setDark((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useLayoutEffect(() => {
    localStorage.setItem('darkMode', dark);
  });

  useLayoutEffect(() => {
    const html = document.querySelector('html');
    html.className = '';
    html.classList.add(dark);
  });

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

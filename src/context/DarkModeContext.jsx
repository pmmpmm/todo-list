import React, {
  createContext,
  useState,
  useLayoutEffect,
  useContext,
} from 'react';

export const DarkModeContext = createContext();
export const useDaekModeContext = () => useContext(DarkModeContext);

export function DarkModeContextProvider({ children }) {
  const [dark, setDark] = useState(localStorage.getItem('theme') || 'light');

  const toggleDarkMode = () => {
    setDark((prev) => (prev === 'dark' ? 'light' : 'dark'));
    updateDarkMode(dark);
  };

  useLayoutEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setDark(isDark ? 'light' : 'dark');
    updateDarkMode(isDark ? 'dark' : 'light');
  }, []);

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(mode) {
  if (mode === 'dark') {
    // console.log('dark');
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    // console.log('light');
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

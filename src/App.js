import './App.css';
import List from './components/List';
import Form from './components/Form';
import { ItemContextProvider } from './context/ItemContext';
import React from 'react';
import Header from './components/Header';
import { DarkModeContextProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeContextProvider>
      <ItemContextProvider>
        <div className="wrapper">
          <div className="container">
            <Header />
            <List />
            <Form />
          </div>
        </div>
      </ItemContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import { ItemContextProvider } from './context/ItemContext';
import { DarkModeContextProvider } from './context/DarkModeContext';
import Header from './components/Header/Header';
import List from './components/List/List';
import Form from './components/ItemForm/Form';

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

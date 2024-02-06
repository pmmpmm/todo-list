import './App.css';
import List from './components/List';
import Form from './components/Form';
import { ItemContextProvider } from './context/ItemContext';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div>
      <ItemContextProvider>
        <Header />
        <List />
        <Form />
      </ItemContextProvider>
    </div>
  );
}

export default App;

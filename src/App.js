import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './mycompontent/header';
import Todolist from './mycompontent/todolist';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        <Todolist/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
      </header>
    </div>
  );
}

export default App;

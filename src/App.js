import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DangerButton } from './components/Button.js';
import { Example } from './components/TooltipExample.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <DangerButton />
          <Example />
        </header>
      </div>
    );
  }
}

export default App;

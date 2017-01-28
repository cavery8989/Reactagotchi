import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import { Display } from './Components/Display/Display';

const logger = createLogger();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Display/>
        </p>
      </div>
    );
  }
}

export default App;

import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import LoginButton from "./container/LoginButton";

const AppComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <LoginButton />
      </header>
    </div>
  );
};

const App = connect()(AppComponent);

export default App;

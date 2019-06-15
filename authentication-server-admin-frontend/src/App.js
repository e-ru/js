import React from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';

import { doTest } from "./actions";

const AppComponent = ({quota, error, clickFn}) => {
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
        <button onClick={clickFn}>
        </button>
        {error !== null ? <div>{quota}</div> : null}
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  quota: state.test.result,
  error: state.test.error,
});

const mapDispatchToProps = dispatch => ({
  clickFn: () => {
    console.log("doTest: ", doTest())
    dispatch(doTest());
  },
});


const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;

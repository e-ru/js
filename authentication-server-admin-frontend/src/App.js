import React from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';

import NewWindow from 'react-new-window'

import { doTest, setWindowClose,setNewWindow, retrieveToken} from "./actions";

const AppComponent = ({quota, error, clickFn, openLoginWindow2, newWindow, getToken}) => {
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
        {/* <button onClick={clickFn}> */}
        <button onClick={openLoginWindow2}>
        </button>
        {/* {error !== null ? <div>{quota}</div> : null} */}
        {newWindow ? <NewWindow url='http://localhost:9191/oauth/authorize?response_type=code&client_id=mobile_2&redirect_uri=http://localhost:8889/redirect.html'
          onUnload={getToken}
          >
    <h1>Hi 👋</h1>
  </NewWindow> : null }
        
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  quota: state.test.result,
  error: state.test.error,
  newWindow: state.test.newWindow,
});

const mapDispatchToProps = dispatch => ({
  clickFn: () => {
    console.log("doTest: ", doTest())
    dispatch(doTest());
  },
  openLoginWindow: () => {
    const url = 'http://localhost:9191/oauth/authorize?response_type=code&client_id=mobile_2&redirect_uri=http://localhost:8889/redirect.html';
    const win = window.open(url, "login", 'width=600,height=400');
    console.log("win", win)
    win.onbeforeunload = e => {
      dispatch(setWindowClose(e))
      console.log("onClose: ", e)
    }
  },
  openLoginWindow2: () => {
    dispatch(setNewWindow(true))
  },
  getToken: () => {
    let code = window.localStorage.getItem("code");
    code = code.substring(code.indexOf("=") + 1);
    console.log("drin: ", code)
    dispatch(retrieveToken(code))
  },
});


const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;

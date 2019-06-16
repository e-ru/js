import React from "react";
import { connect } from "react-redux";
import NewWindow from "react-new-window";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";

import { setNewWindow, retrieveToken } from "./actions";

const AppComponent = ({ newWindow, openLoginWindow, getToken }) => {
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
        {/* <button onClick={clickFn}> */}
        <button type="button" onClick={openLoginWindow} />
        {/* {error !== null ? <div>{quota}</div> : null} */}
        {newWindow ? (
          <NewWindow
            url="http://localhost:9191/oauth/authorize?response_type=code&client_id=mobile_3&redirect_uri=http://localhost:8889/redirect.html"
            onUnload={getToken}
          >
            {/* <h1>Hi 👋</h1> */}
          </NewWindow>
        ) : null}
      </header>
    </div>
  );
};

AppComponent.propTypes = {
  newWindow: PropTypes.bool.isRequired,
  openLoginWindow: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  quota: state.test.result,
  error: state.test.error,
  newWindow: state.test.newWindow,
});

const mapDispatchToProps = dispatch => ({
  openLoginWindow: () => {
    dispatch(setNewWindow(true));
  },
  getToken: () => {
    let code = window.localStorage.getItem("code");
    code = code.substring(code.indexOf("=") + 1);
    console.log("drin: ", code);
    dispatch(retrieveToken(code));
  },
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;

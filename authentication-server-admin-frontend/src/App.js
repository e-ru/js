import React from "react";
import { connect } from "react-redux";
import NewWindow from "react-new-window";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";

import { OAUTH_SERVER, RESPONSE_TYPE, CLIENT_ID, REDIRECT_URL } from "./constants";
import { showOAuthLoginWindow, retrieveToken } from "./actions";

const AppComponent = ({ showOAuthWindow, showLoginWindow, getToken }) => {
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
        <button type="button" onClick={showLoginWindow} />
        {showOAuthWindow ? (
          <NewWindow
            url={`${OAUTH_SERVER}/authorize?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`}
            onUnload={getToken}
          />
        ) : null}
      </header>
    </div>
  );
};

AppComponent.propTypes = {
  showOAuthWindow: PropTypes.bool.isRequired,
  showLoginWindow: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  showOAuthWindow: state.oauth.showOAuthWindow,
});

const mapDispatchToProps = dispatch => ({
  showLoginWindow: () => {
    dispatch(showOAuthLoginWindow(true));
  },
  getToken: () => {
    let code = window.localStorage.getItem("code");
    code = code.substring(code.indexOf("=") + 1);
    dispatch(retrieveToken(code));
  },
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;

import React from "react";
import { connect } from "react-redux";
import NewWindow from "react-new-window";
import PropTypes from "prop-types";

import { AUTHORIZATION_URL } from "../constants";
import { showOAuthLoginWindow, retrieveToken } from "../actions";

import "./LoginButton.scss";

const LoginButtonComponent = ({ showOAuthWindow, showLoginWindow, getToken }) => (
  <div>
    <button type="button" className="login-button" onClick={showLoginWindow}>
      Login
    </button>
    {showOAuthWindow ? <NewWindow url={AUTHORIZATION_URL} onUnload={getToken} /> : null}
  </div>
);

LoginButtonComponent.propTypes = {
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
    if (code !== null && code !== undefined) {
      code = code.substring(code.indexOf("=") + 1);
      dispatch(retrieveToken(code));
      dispatch(showOAuthLoginWindow(false));
    }
  },
});

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonComponent);

export default LoginButton;

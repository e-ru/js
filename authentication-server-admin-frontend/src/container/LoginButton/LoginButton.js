import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NewWindow from "react-new-window";
import { withRouter, Redirect } from "react-router-dom";

import { AUTHORIZATION_URL } from "../../constants";
import { retrieveToken, setRandomState } from "../../actions";
import {
  parseHrefForCode,
  parseHrefForState,
  generateRandomOAuthState,
  compareGeneratedWithReceivedState,
} from "../../utils/oauth";

import "./LoginButton.css";

const LoginButtonComponent = ({ loggedIn, location, setAuthState, getToken }) => {
  const [showOAuthWindow, setShowOAuthWindow] = useState(false);
  const [randomAuthState, setRandomAuthState] = useState(false);
  const { from } = location.state || { from: { pathname: "/" } };

  return loggedIn ? (
    <Redirect to={from} />
  ) : (
    <div>
      <button
        type="button"
        className="login-button"
        onClick={() => {
          setRandomAuthState(generateRandomOAuthState());
          setShowOAuthWindow(true);
        }}
      >
        Login
      </button>
      {showOAuthWindow ? (
        <NewWindow
          url={`${AUTHORIZATION_URL}&state=${randomAuthState}`}
          onUnload={() => {
            setAuthState(randomAuthState);
            setShowOAuthWindow(false); // maybe useless, see redirect.html
            getToken();
          }}
        />
      ) : null}
    </div>
  );
};

LoginButtonComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  setAuthState: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location,
    loggedIn: state.oauth.loggedIn,
  };
};

const mapDispatchToProps = {
  getToken: () => (dispatch, getState) => {
    const href = window.localStorage.getItem("code");
    const code = parseHrefForCode(href);
    const receivedState = parseHrefForState(href);

    if (compareGeneratedWithReceivedState(getState().oauth.authState, receivedState) && code !== null)
      dispatch(retrieveToken(code));
  },
  setAuthState: authState => dispatch => {
    dispatch(setRandomState(authState));
  },
};

const LoginButton = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginButtonComponent)
);

export default LoginButton;

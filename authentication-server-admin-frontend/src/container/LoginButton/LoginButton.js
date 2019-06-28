import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NewWindow from "react-new-window";
import { withRouter, Redirect } from "react-router-dom";

import { AUTHORIZATION_URL } from "../../constants";
import { retrieveToken, setRandomState } from "../../actions";

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
          setRandomAuthState(
            Math.random()
              .toString(36)
              .substring(2, 15)
          );
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

const parseHrefForCode = href => (href !== null && href !== undefined ? href.substring(href.indexOf("=") + 1) : null);

const mapDispatchToProps = dispatch => ({
  getToken: () => {
    const code = parseHrefForCode(window.localStorage.getItem("code"));
    console.log("code: ", code);
    if (code !== null) dispatch(retrieveToken(code));
  },
  setAuthState: authState => {
    dispatch(setRandomState(authState));
  },
});

const LoginButton = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginButtonComponent)
);

export default LoginButton;

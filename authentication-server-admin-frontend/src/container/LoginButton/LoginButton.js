import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NewWindow from "react-new-window";
import { withRouter, Redirect } from "react-router-dom";

import { AUTHORIZATION_URL } from "../../constants";
import { retrieveToken } from "../../actions";

import "./LoginButton.css";

const LoginButtonComponent = ({ loggedIn, location, getToken }) => {
  const [showOAuthWindow, setShowOAuthWindow] = useState(false);
  const { from } = location.state || { from: { pathname: "/" } };

  return loggedIn ? (
    <Redirect to={from} />
  ) : (
    <div>
      <button type="button" className="login-button" onClick={() => setShowOAuthWindow(true)}>
        Login
      </button>
      {showOAuthWindow ? (
        <NewWindow
          url={AUTHORIZATION_URL}
          onUnload={() => {
            setShowOAuthWindow(false);
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
  getToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.oauth.loggedIn,
    location: ownProps.location,
  };
};

const parseHrefForCode = href => (href !== null && href !== undefined ? href.substring(href.indexOf("=") + 1) : null);

const mapDispatchToProps = dispatch => ({
  getToken: () => {
    const code = parseHrefForCode(window.localStorage.getItem("code"));
    if (code !== null) dispatch(retrieveToken(code));
  },
});

const LoginButton = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginButtonComponent)
);

export default LoginButton;

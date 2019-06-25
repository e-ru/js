import React, { useState } from "react";
import { connect } from "react-redux";
import NewWindow from "react-new-window";
import PropTypes from "prop-types";

import { AUTHORIZATION_URL } from "../../constants";
import { retrieveToken } from "../../actions";

import "./LoginButton.css";

const LoginButtonComponent = ({ getToken }) => {
  const [title, setTitle] = useState("Login");
  const [showOAuthWindow, setShowOAuthWindow] = useState(false);

  return (
    <div>
      <button type="button" className="login-button" onClick={() => setShowOAuthWindow(true)}>
        {title}
      </button>
      {showOAuthWindow ? (
        <NewWindow
          url={AUTHORIZATION_URL}
          onUnload={() => {
            setTitle("Logged In");
            setShowOAuthWindow(false);
            getToken();
          }}
        />
      ) : null}
    </div>
  );
};

LoginButtonComponent.propTypes = {
  getToken: PropTypes.func.isRequired,
};

const parseHrefForCode = href => (href !== null && href !== undefined ? href.substring(href.indexOf("=") + 1) : null);

const mapDispatchToProps = dispatch => ({
  getToken: () => {
    const code = parseHrefForCode(window.localStorage.getItem("code"));
    if (code !== null) dispatch(retrieveToken(code));
  },
});

const LoginButton = connect(
  null,
  mapDispatchToProps
)(LoginButtonComponent);

export default LoginButton;

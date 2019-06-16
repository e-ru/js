import React from "react";
import { connect } from "react-redux";
import NewWindow from "react-new-window";
import PropTypes from "prop-types";

import { OAUTH_SERVER, RESPONSE_TYPE, CLIENT_ID, REDIRECT_URL } from "../constants";
import { showOAuthLoginWindow, retrieveToken } from "../actions";

const LoginButtonComponent = ({ showOAuthWindow, showLoginWindow, getToken }) => (
  <div>
    <button type="button" onClick={showLoginWindow} />
    {showOAuthWindow ? (
      <NewWindow
        url={`${OAUTH_SERVER}/authorize?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`}
        onUnload={getToken}
      />
    ) : null}
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
    code = code.substring(code.indexOf("=") + 1);
    dispatch(retrieveToken(code));
  },
});

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonComponent);

export default LoginButton;

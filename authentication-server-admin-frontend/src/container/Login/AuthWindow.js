import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NewWindow from "react-new-window";

import { retrieveToken, setRandomState, showAuthWindow } from "../../actions";

import {
  parseHrefForCode,
  parseHrefForState,
  generateRandomOAuthState,
  compareGeneratedWithReceivedState,
} from "../../utils/oauth";

const AuthWindowComponent = ({ showOAuthWindow, authorizationUrl, setAuthState, showAuthWindowHandler, getToken }) => {
  const [randomAuthState] = useState(generateRandomOAuthState());
  return (
    showOAuthWindow && (
      <NewWindow
        url={`${authorizationUrl}&state=${randomAuthState}`}
        onUnload={() => {
          setAuthState(randomAuthState);
          showAuthWindowHandler(false); // maybe useless, see redirect.html
          getToken();
        }}
      />
    )
  );
};

AuthWindowComponent.propTypes = {
  showOAuthWindow: PropTypes.bool.isRequired,
  setAuthState: PropTypes.func.isRequired,
  authorizationUrl: PropTypes.string.isRequired,
  showAuthWindowHandler: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  showOAuthWindow: state.ui.showOAuthWindow,
  authorizationUrl: ownProps.authorizationUrl,
});

const mapDispatchToProps = {
  getToken: () => (dispatch, getState) => {
    const href = window.localStorage.code;
    window.localStorage.removeItem("code");
    const code = parseHrefForCode(href);
    const receivedState = parseHrefForState(href);

    if (compareGeneratedWithReceivedState(getState().oauth.authState, receivedState) && code !== null)
      dispatch(retrieveToken(code));
  },
  setAuthState: authState => dispatch => dispatch(setRandomState(authState)),
  showAuthWindowHandler: show => dispatch => dispatch(showAuthWindow(show)),
};

const AuthWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthWindowComponent);

export default AuthWindow;

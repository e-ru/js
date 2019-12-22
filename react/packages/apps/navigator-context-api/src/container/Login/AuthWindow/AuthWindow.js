import React, { useState } from "react";
import PropTypes from "prop-types";
import NewWindow from "react-new-window";

import { useStore } from "../../../store";

import { retrieveToken } from "../../../actions/oauth";
import { showAuthWindow } from "../../../actions/ui";

import {
  parseHrefForCode,
  parseHrefForState,
  generateRandomOAuthState,
  compareGeneratedWithReceivedState,
} from "../../../utils/oauth";

export const AuthWindowComponent = ({
  showOAuthWindow,
  authorizationUrl,
  randomAuthState,
  showAuthWindowHandler,
  getToken,
}) => {
  return (
    showOAuthWindow && (
      <NewWindow
        url={`${authorizationUrl}&state=${randomAuthState}`}
        onUnload={() => {
          showAuthWindowHandler(false);
          getToken(randomAuthState);
        }}
      />
    )
  );
};

AuthWindowComponent.propTypes = {
  showOAuthWindow: PropTypes.bool.isRequired,
  authorizationUrl: PropTypes.string.isRequired,
  randomAuthState: PropTypes.string.isRequired,
  showAuthWindowHandler: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

const AuthWindow = ({ authorizationUrl }) => {
  const [{ ui }, dispatch] = useStore();
  const [randomAuthState] = useState(generateRandomOAuthState());

  return (
    <AuthWindowComponent
      showOAuthWindow={ui.showOAuthWindow}
      authorizationUrl={authorizationUrl}
      randomAuthState={randomAuthState}
      showAuthWindowHandler={() => dispatch(showAuthWindow(false))}
      getToken={authState => {
        const href = window.localStorage.code;
        console.log("getToken href: ", href);
        window.localStorage.removeItem("code");
        const code = parseHrefForCode(href);
        const receivedState = parseHrefForState(href);

        console.log("receivedState: ", receivedState);
        console.log("authState: ", authState);

        if (compareGeneratedWithReceivedState(authState, receivedState) && code !== null) {
          console.log("retreive drin");
          dispatch(retrieveToken(code, dispatch));
        }
      }}
    />
  );
};

AuthWindow.propTypes = {
  authorizationUrl: PropTypes.string.isRequired,
};

export default AuthWindow;

import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NewWindow from "react-new-window";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { AUTHORIZATION_URL } from "../../constants";
import { retrieveToken, setRandomState } from "../../actions";
import {
  parseHrefForCode,
  parseHrefForState,
  generateRandomOAuthState,
  compareGeneratedWithReceivedState,
} from "../../utils/oauth";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginButtonComponent = ({ oAuthError, setAuthState, getToken }) => {
  const classes = useStyles();
  const [showOAuthWindow, setShowOAuthWindow] = useState(false);
  const [randomAuthState, setRandomAuthState] = useState(false);

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={oAuthError !== null && oAuthError !== undefined}
        onClick={() => {
          setRandomAuthState(generateRandomOAuthState());
          setShowOAuthWindow(true);
        }}
      >
        Login
      </Button>
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

LoginButtonComponent.defaultProps = {
  oAuthError: null,
};

LoginButtonComponent.propTypes = {
  oAuthError: PropTypes.string,
  setAuthState: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  oAuthError: state.oauth.error,
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
  setAuthState: authState => dispatch => {
    dispatch(setRandomState(authState));
  },
};

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonComponent);

export default LoginButton;

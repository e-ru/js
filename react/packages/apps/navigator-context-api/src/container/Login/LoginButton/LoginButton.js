import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { useStore } from "../../../store";
import { showAuthWindow } from "../../../actions/ui";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3, 0, 2),
    maxWidth: "100px",
  },
}));

export const LoginButtonComponent = ({ oAuthError, onClick }) => {
  const classes = useStyles();

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      className={classes.button}
      disabled={oAuthError !== null && oAuthError !== undefined}
      onClick={onClick}
    >
      Login
    </Button>
  );
};

const LoginButton = () => {
  const [{ oauth }, dispatch] = useStore();

  const onClick = () => {
    dispatch(showAuthWindow(true));
  };

  return <LoginButtonComponent oAuthError={oauth.error} showAuthWindow={showAuthWindow} onClick={onClick} />;
};

LoginButtonComponent.defaultProps = {
  oAuthError: null,
};

LoginButtonComponent.propTypes = {
  oAuthError: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   oAuthError: state.oauth.error,
//   showOAuthWindow: state.ui.showOAuthWindow,
// });

// const mapDispatchToProps = {
//   showAuthWindowHandler: show => dispatch => dispatch(showAuthWindow(show)),
// };

// const LoginButton = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginButtonComponent);

export default LoginButton;

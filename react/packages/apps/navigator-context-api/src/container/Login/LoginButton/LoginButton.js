import React from "react";
// import PropTypes from "prop-types";

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

export const LoginButtonComponent = () => {
  const [{ oAuthError }, dispatch] = useStore();
  const classes = useStyles();

  console.log("lb dispatch:", dispatch);

  const onClick = () => {
    dispatch(showAuthWindow(true));
  };

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

// LoginButtonComponent.defaultProps = {
//   oAuthError: null,
// };

// LoginButtonComponent.propTypes = {
//   oAuthError: PropTypes.string,
//   showAuthWindowHandler: PropTypes.func.isRequired,
// };

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

export default LoginButtonComponent;

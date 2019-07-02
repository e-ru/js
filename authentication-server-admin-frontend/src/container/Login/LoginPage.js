import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import loginPicture from "../../images/login.jpg";

import LoginButton from "./LoginButton";

import { retrieveOAuthTokenKey, setOAuthData } from "../../actions";
import { checkCookies } from "../../utils/oauth";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${loginPicture})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(4, 0, 28),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100% - 256px)",
  },
}));

const LoginPageComponent = ({ loggedIn, location, oAuthError, retrieveOAuthTokenKeyHandler, setOAuthDataHandler }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!loggedIn) retrieveOAuthTokenKeyHandler();
  });

  const { from } = location.state || { from: { pathname: "/" } };

  return loggedIn || checkCookies(setOAuthDataHandler) ? (
    <Redirect to={from} />
  ) : (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <LoginButton />
          {oAuthError !== null && oAuthError !== undefined ? (
            <Typography variant="body1">{oAuthError}</Typography>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

LoginPageComponent.defaultProps = {
  oAuthError: null,
};

LoginPageComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  oAuthError: PropTypes.string,
  retrieveOAuthTokenKeyHandler: PropTypes.func.isRequired,
  setOAuthDataHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  // console.log("login page state: ", state);
  return {
    location: ownProps.location,
    loggedIn: state.oauth.loggedIn,
    oAuthError: state.oauth.error,
  };
};

const mapDispatchToProps = dispatch => ({
  retrieveOAuthTokenKeyHandler: () => dispatch(retrieveOAuthTokenKey()),
  setOAuthDataHandler: (oAauthData, username, clientId) => dispatch(setOAuthData(oAauthData, username, clientId)),
  // concise method notation
  // retrieveOAuthTokenKeyHandler() {
  //   dispatch(retrieveOAuthTokenKey());
  // },
});

const LoginPage = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPageComponent)
);

export default LoginPage;

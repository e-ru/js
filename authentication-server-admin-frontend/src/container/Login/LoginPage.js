import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import loginPicture from "../../images/login.jpg";

import LoginButton from "./LoginButton";

import { retrieveOAuthTokenKey } from "../../actions";

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

const SideLoginComponent = ({ loggedIn, oAuthError, retrieveOAuthTokenKeyHandler }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!loggedIn) retrieveOAuthTokenKeyHandler();
  });

  return (
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
          {/* TODO: grey out if server is not reeachable, see token key resp failure in oauth reducer */}
          <LoginButton />
          {oAuthError !== null && oAuthError !== undefined ? (
            <Typography variant="body1">{oAuthError}</Typography>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

SideLoginComponent.defaultProps = {
  oAuthError: null,
};

SideLoginComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  oAuthError: PropTypes.string,
  retrieveOAuthTokenKeyHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.oauth.loggedIn,
  oAuthError: state.oauth.error,
});

const mapDispatchToProps = dispatch => ({
  retrieveOAuthTokenKeyHandler: () => dispatch(retrieveOAuthTokenKey()),
});

const SideLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideLoginComponent);

export default SideLogin;

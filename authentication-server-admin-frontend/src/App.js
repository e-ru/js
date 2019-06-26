import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter, Route, Redirect, Switch } from "react-router-dom";

import "normalize.css";
import "./App.css";

import LoginButton from "./container/LoginButton/LoginButton";

import Main from "./container/Main/Main";

function PrivateRoute({ loggedIn, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              // eslint-disable-next-line react/prop-types
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.any.isRequired,
};

const AppComponent = ({ loggedIn, oAuthError }) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginButton} />
        <PrivateRoute path="/" component={Main} loggedIn={loggedIn} />
      </Switch>
    </div>
  );
};

AppComponent.defaultProps = {
  oAuthError: null,
};

AppComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  oAuthError: PropTypes.string,
};

const mapStateToProps = state => ({
  loggedIn: state.oauth.loggedIn,
  sideDrawerOpen: state.ui.sideDrawerOpen,
  oAuthError: state.oauth.error,
});

const App = withRouter(connect(mapStateToProps)(AppComponent));

export default App;

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import Main from "../Main/Main";

const ProtectedMainRouteComponent = ({ loggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn ? (
          <Main {...props} />
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
};

ProtectedMainRouteComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.oauth.loggedIn,
});

const ProtectedMainRoute = connect(mapStateToProps)(ProtectedMainRouteComponent);

export default ProtectedMainRoute;

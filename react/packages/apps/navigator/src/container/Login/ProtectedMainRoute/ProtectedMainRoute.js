import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import Main from "../../Main";

export const PrivateRouteContent = ({ loggedIn, props }) => {
  const { location } = props;
  return loggedIn ? (
    <Main {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        routerState: { from: location },
      }}
    />
  );
};

PrivateRouteContent.defaultProps = {
  props: {},
  location: "",
};

PrivateRouteContent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  props: PropTypes.object,
  location: PropTypes.string,
};

export const ProtectedMainRouteComponent = ({ loggedIn, ...rest }) => {
  return <Route {...rest} render={props => PrivateRouteContent({ loggedIn, props })} />;
};

ProtectedMainRouteComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.oauth.loggedIn,
});

const ProtectedMainRoute = connect(mapStateToProps)(ProtectedMainRouteComponent);

export default ProtectedMainRoute;

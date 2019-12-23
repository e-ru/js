import React from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { useStore } from "@e-ru/store/src";
// import Main from "../../Main";

export const PrivateRouteContent = ({ loggedIn, props }) => {
  console.log("props: ", props);
  const { location } = props;
  return loggedIn ? (
    // <Main {...props} />
    <div>drin</div>
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
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={props => PrivateRouteContent({ loggedIn, props })} />;
};

ProtectedMainRouteComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const ProtectedMainRoute = () => {
  const [{ oauth }] = useStore();
  console.log("loggedIn: ", oauth.loggedIn);
  return <ProtectedMainRouteComponent loggedIn={oauth.loggedIn} />;
};

// const mapStateToProps = state => ({
//   loggedIn: state.oauth.loggedIn,
// });

// const ProtectedMainRoute = connect(mapStateToProps)(ProtectedMainRouteComponent);

export default ProtectedMainRoute;

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Usermenu from "@e-ru/components/src/components/Appbar/Usermenu";

import { revokeRefreshToken } from "../../../actions/oauth";

const usermenuEntries = revokeRefreshTokenHandler => {
  return [{ title: "Logout", func: revokeRefreshTokenHandler }];
};

export const AppbarUsermenuComponent = ({ revokeRefreshTokenHandler }) => {
  return <Usermenu entries={usermenuEntries(revokeRefreshTokenHandler)} />;
};

AppbarUsermenuComponent.propTypes = {
  revokeRefreshTokenHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  revokeRefreshTokenHandler: () => (dispatch, getState) =>
    dispatch(
      revokeRefreshToken(getState().oauth.username, getState().oauth.clientId, getState().oauth.authData.access_token)
    ),
};

const AppbarUsermenu = connect(
  null,
  mapDispatchToProps
)(AppbarUsermenuComponent);

export default AppbarUsermenu;

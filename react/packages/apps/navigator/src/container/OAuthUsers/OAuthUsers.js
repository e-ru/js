import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import EnhancedTable from "@e-ru/components/src/components/Table/EnhancedTable";

import OAuthUserTableRow, { prepareRowData, headRows } from "../OAuthUserTableRow";

import { requestOAuthUsers } from "../../actions/oauthadmin";

const OAuthUsersComponent = ({ getOAuthUsersInProgress, oAuthUsers, getUsersHanlder }) => {
  useEffect(() => {
    if (oAuthUsers.length === 0) getUsersHanlder();
  }, [getUsersHanlder, oAuthUsers.length]);

  return (
    <EnhancedTable
      title="OAuth Users"
      rows={prepareRowData(oAuthUsers)}
      headRows={headRows}
      tableRowComponent={OAuthUserTableRow}
      inProgress={getOAuthUsersInProgress}
    />
  );
};

OAuthUsersComponent.defaultProps = {
  oAuthUsers: [],
};

OAuthUsersComponent.propTypes = {
  getOAuthUsersInProgress: PropTypes.bool.isRequired,
  getUsersHanlder: PropTypes.func.isRequired,
  oAuthUsers: PropTypes.array,
};

const mapStateToProps = state => ({
  getOAuthUsersInProgress: state.oauthadmin.getOAuthUsersInProgress,
  oAuthUsers: state.oauthadmin.oAuthUsers,
});

const mapDispatchToProps = {
  getUsersHanlder: () => (dispatch, getState) => dispatch(requestOAuthUsers(getState().oauth.authData.access_token)),
};

const OAuthUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(OAuthUsersComponent);

export default OAuthUsers;

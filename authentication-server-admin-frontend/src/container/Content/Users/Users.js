import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import EnhancedTable from "../../table/EnhancedTable";
import UserTableRow from "./UserTableRow";

import { getUsers } from "../../../actions";

const UsersComponent = ({ users, getUsersHandler }) => {
  useEffect(() => {
    if (users.length === 0) getUsersHandler();
  });

  const headRows = [
    { id: "name", numeric: false, disablePadding: true, label: "Username" },
    { id: "email", numeric: false, disablePadding: false, label: "E-Mail" },
    { id: "enabled", numeric: true, disablePadding: false, label: "Enabled" },
    { id: "locked", numeric: true, disablePadding: false, label: "Locked" },
    { id: "expired", numeric: true, disablePadding: false, label: "Expired" },
  ];

  const prepareRowData = () => {
    return users.map(user => {
      const row = {
        ...user,
        name: user.username,
      };
      delete row.username;
      return row;
    });
  };

  return <EnhancedTable title="Users" rows={prepareRowData()} headRows={headRows} tableRowComponent={UserTableRow} />;
};

UsersComponent.propTypes = {
  users: PropTypes.array.isRequired,
  getUsersHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = {
  getUsersHandler: () => (dispatch, getState) => dispatch(getUsers(getState().oauth.authData.access_token)),
};

const Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersComponent);

export default Users;

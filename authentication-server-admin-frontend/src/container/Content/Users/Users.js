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
  console.log("users: ", users);
  const headRows = [
    { id: "name", numeric: false, disablePadding: true, label: "Username" },
    { id: "email", numeric: false, disablePadding: false, label: "E-Mail" },
    // { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    // { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    // { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
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

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import EnhancedTable from "../../Table/EnhancedTable";
import UserTableRow from "./UserTableRow";

import { setUsersRefreshedAfterUserUpdate } from "../../../actions";

const UsersComponent = ({ users, refreshResetHandler }) => {
  const headRows = [
    { id: "name", numeric: false, disablePadding: true, label: "Username" },
    { id: "email", numeric: false, disablePadding: false, label: "E-Mail" },
    { id: "enabled", numeric: true, disablePadding: false, label: "Enabled" },
    { id: "locked", numeric: true, disablePadding: false, label: "Locked" },
    { id: "expired", numeric: true, disablePadding: false, label: "Expired" },
  ];

  const prepareRowData = () => {
    return users
      ? users.map(user => {
          const row = {
            ...user,
            name: user.username,
          };
          delete row.username;
          return row;
        })
      : [];
  };

  return (
    <EnhancedTable
      title="Users"
      rows={prepareRowData()}
      headRows={headRows}
      tableRowComponent={UserTableRow}
      refreshResetHandler={refreshResetHandler}
    />
  );
};

UsersComponent.defaultProps = {
  users: null,
};

UsersComponent.propTypes = {
  users: PropTypes.array,
  refreshResetHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.oauth.users,
});

const mapDispatchToProps = dispatch => ({
  refreshResetHandler: () => dispatch(setUsersRefreshedAfterUserUpdate(false)),
});

const Users = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersComponent);

export default Users;

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import EnhancedTable from "../../Table/EnhancedTable";
import UserTableRow from "./UserTableRow";

const UsersComponent = ({ users }) => {
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
};

const mapStateToProps = state => ({
  users: state.oauth.users,
});

const Users = connect(mapStateToProps)(UsersComponent);

export default Users;

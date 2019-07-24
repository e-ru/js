import React from "react";
import PropTypes from "prop-types";

import EnhancedTable from "../../common/Table/EnhancedTable";
import UserTableRow from "./UserTableRow";

const headRows = [
  { id: "name", numeric: false, disablePadding: true, label: "Username" },
  { id: "email", numeric: false, disablePadding: false, label: "E-Mail" },
  { id: "enabled", numeric: true, disablePadding: false, label: "Enabled" },
  { id: "locked", numeric: true, disablePadding: false, label: "Locked" },
  { id: "expired", numeric: true, disablePadding: false, label: "Expired" },
];

const prepareRowData = users => {
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

const UsersComponent = ({ users, refreshResetHandler }) => (
  <EnhancedTable
    title="Users"
    rows={prepareRowData(users)}
    headRows={headRows}
    tableRowComponent={UserTableRow}
    refreshResetHandler={refreshResetHandler}
  />
);

UsersComponent.defaultProps = {
  users: null,
};

UsersComponent.propTypes = {
  users: PropTypes.array,
  refreshResetHandler: PropTypes.func.isRequired,
};

export default UsersComponent;

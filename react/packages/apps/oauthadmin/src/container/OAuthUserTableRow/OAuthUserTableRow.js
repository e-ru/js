import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";

import { OAUTH_USERS_PATH } from "../../../constants/router";

export const headRows = [
  { id: "name", numeric: false, disablePadding: true, label: "Username" },
  { id: "email", numeric: false, disablePadding: false, label: "E-Mail" },
  { id: "enabled", numeric: true, disablePadding: false, label: "Enabled" },
  { id: "locked", numeric: true, disablePadding: false, label: "Locked" },
  { id: "expired", numeric: true, disablePadding: false, label: "Expired" },
];

export const prepareRowData = oAuthUsers => {
  return oAuthUsers
    ? oAuthUsers.map(user => {
        const row = {
          ...user,
          name: user.username,
        };
        delete row.username;
        return row;
      })
    : [];
};

const useStyles = makeStyles(theme => ({
  actions: {
    minWidth: "110px",
  },
  edit: {
    margin: theme.spacing(0, 1),
    maxHeight: "48px",
  },
}));

const OAuthUserTableRow = ({ row, isItemSelected, labelId, handleClick }) => {
  const classes = useStyles();
  return (
    <TableRow hover role="checkbox" aria-checked={isItemSelected} tabIndex={-1} selected={isItemSelected}>
      <TableCell className={classes.actions} padding="checkbox">
        <Checkbox
          onClick={event => handleClick(event, row.name)}
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
        />
        <NavLink style={{ color: "inherit", textDecoration: "none" }} to={`${OAUTH_USERS_PATH}/${row.id}`}>
          <IconButton className={classes.edit}>
            <EditIcon />
          </IconButton>
        </NavLink>
      </TableCell>
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.name}
      </TableCell>
      <TableCell align="left">{row.email}</TableCell>
      <TableCell align="right">{row.enabled ? <CheckIcon /> : <CloseIcon />}</TableCell>
      <TableCell align="right">{row.accountLocked ? <CheckIcon /> : <CloseIcon />}</TableCell>
      <TableCell align="right">{row.accountExpired ? <CheckIcon /> : <CloseIcon />}</TableCell>
    </TableRow>
  );
};

OAuthUserTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  labelId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default OAuthUserTableRow;

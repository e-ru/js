import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";

const UserTableRow = ({ row, isItemSelected, labelId, handleClick }) => {
  const useStyles = makeStyles(theme => ({
    actions: {
      width: "110px",
    },
    edit: {
      margin: theme.spacing(0, 1),
    },
  }));

  const classes = useStyles();
  return (
    <TableRow
      hover
      //   onClick={event => handleClick(event, row.name)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      selected={isItemSelected}
    >
      <TableCell className={classes.actions} padding="checkbox">
        <Checkbox
          onClick={event => handleClick(event, row.name)}
          checked={isItemSelected}
          inputProps={{ "aria-labelledby": labelId }}
        />
        <IconButton className={classes.edit}>
          <EditIcon />
        </IconButton>
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

UserTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  labelId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default UserTableRow;

import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const useStyles = makeStyles(() => ({
  sticky: {
    position: "sticky",
    top: "0px",
    background: "#fff",
    zIndex: "10",
  },
}));

const EnhancedTableHead = props => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headRows } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  // TODO: <TableCell padding="checkbox" style={{ minWidth: "125px", maxWidth: "125px" }}>
  // width range is needed because next to the checkbox is a edit icon located
  // some kind of a hack...

  const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.sticky} padding="checkbox" style={{ minWidth: "125px", maxWidth: "125px" }}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "Select all desserts" }}
          />
        </TableCell>
        {headRows.map(row => (
          <TableCell
            className={classes.sticky}
            key={row.id}
            align={row.numeric ? "right" : "left"}
            padding={row.disablePadding ? "none" : "default"}
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel active={orderBy === row.id} direction={order} onClick={createSortHandler(row.id)}>
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
      <TableRow style={{ height: "1px", borderBottom: "1px solid rgba(224, 224, 224, 1)" }} />
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headRows: PropTypes.array.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
};

export default EnhancedTableHead;

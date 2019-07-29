import React from "react";
import PropTypes from "prop-types";

import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const EnhancedTableHead = props => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headRows } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  // TODO: <TableCell padding="checkbox" style={{ minWidth: "125px", maxWidth: "125px" }}>
  // width range is needed because next to the checkbox is a edit icon located
  // some kind of a hack...

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" style={{ minWidth: "125px", maxWidth: "125px" }}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "Select all desserts" }}
          />
        </TableCell>
        {headRows.map(row => (
          <TableCell
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

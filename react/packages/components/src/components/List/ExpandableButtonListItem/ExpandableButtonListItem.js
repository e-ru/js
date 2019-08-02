import React from "react";
import PropTypes from "prop-types";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { EXPANDABLE_LIST_ITEM_CLASS } from "../../../constants/ui";

const ExpandableButtonListItem = ({ title, open, icon, handleClick }) => {
  return (
    <ListItem className={EXPANDABLE_LIST_ITEM_CLASS} button onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  );
};

ExpandableButtonListItem.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  icon: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ExpandableButtonListItem;

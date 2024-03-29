import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ButtonListItem = ({ subItem, title, icon, onClickHandler }) => {
  const classes = useStyles();
  return (
    <ListItem button className={subItem ? classes.nested : ""} key={title} onClick={onClickHandler && onClickHandler}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

ButtonListItem.defaultProps = {
  onClickHandler: null,
  subItem: false,
};

ButtonListItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  subItem: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

export default ButtonListItem;

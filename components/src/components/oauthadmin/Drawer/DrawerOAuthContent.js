import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink, BrowserRouter  } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
// import Divider from "@material-ui/core/Divider";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import HomeIcon from "@material-ui/icons/Home";
import OAuthIcon from "@material-ui/icons/VpnKey";
import UsersIcon from "@material-ui/icons/People";
import DetailsIcon from "@material-ui/icons/Notes";
import RolesIcon from "@material-ui/icons/Wc";
import PermissionsIcon from "@material-ui/icons/CheckCircleOutline";

import { EXPANDABLE_LIST_ITEM_CLASS } from "../../../constants/ui";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const oauthLink = (classname, path, title, icon, onClickHanlder) => (
  <NavLink style={{ color: "inherit", textDecoration: "none" }} to={path} onClick={onClickHanlder && onClickHanlder}>
    <ListItem button className={classname} key={title} /* onClick={onClickHanlder && onClickHanlder} */>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  </NavLink>
);

const DrawerOAuthContentComponent = ({ getUsersHanlder }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }
  return (
    // <List>
    // [
      <BrowserRouter >
      <ListItem className={EXPANDABLE_LIST_ITEM_CLASS} button onClick={handleClick}>
        <ListItemIcon>
          <OAuthIcon />
        </ListItemIcon>
        <ListItemText primary="OAuth" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {oauthLink(classes.nested, "/client-details", "Client Details", <DetailsIcon />)}
          {oauthLink(classes.nested, "/users", "Users", <UsersIcon />, getUsersHanlder)}
          {oauthLink(classes.nested, "/permissions", "Permissions", <PermissionsIcon />, handleClick)}
          {oauthLink(classes.nested, "/roles", "Roles", <RolesIcon />)}
        </List>
      </Collapse>
      </ BrowserRouter >
    // ]
    // </List>
  );
};

DrawerOAuthContentComponent.propTypes = {
  getUsersHanlder: PropTypes.func.isRequired,
};

export default DrawerOAuthContentComponent;

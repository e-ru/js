import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import OAuthIcon from "@material-ui/icons/VpnKey";
import UsersIcon from "@material-ui/icons/People";
import DetailsIcon from "@material-ui/icons/Notes";
import RolesIcon from "@material-ui/icons/Wc";
import PermissionsIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const oauthLink = (classname, path, title, icon) => (
  <NavLink style={{ color: "inherit", textDecoration: "none" }} to={path}>
    <ListItem button className={classname} key={title}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  </NavLink>
);

const DrawerOAuthContent = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List>
      <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/">
        <ListItem button key="Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </NavLink>
      <Divider />
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <OAuthIcon />
        </ListItemIcon>
        <ListItemText primary="OAuth" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {oauthLink(classes.nested, "/client-details", "Client Details", <DetailsIcon />)}
          {oauthLink(classes.nested, "/users", "Users", <UsersIcon />)}
          {oauthLink(classes.nested, "/", "Permissions", <PermissionsIcon />)}
          {oauthLink(classes.nested, "/", "Roles", <RolesIcon />)}
        </List>
      </Collapse>
    </List>
  );
};

export default DrawerOAuthContent;

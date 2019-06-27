import React from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const DrawerOAuthContent = () => {
  return (
    <List>
      <Link to="/">
        <ListItem button key="Home">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to="/client-details">
        <ListItem button key="Client Details">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Client Details" />
        </ListItem>
      </Link>
      <Link to="/users">
        <ListItem button key="Users">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </Link>
      <Link to="/">
        <ListItem button key="Roles">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Roles" />
        </ListItem>
      </Link>
      <Link to="/">
        <ListItem button key="Permissions">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Permissions" />
        </ListItem>
      </Link>
    </List>
  );
};

export default DrawerOAuthContent;

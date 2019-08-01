import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";

import ButtonListItem from "@e-ru/components/src/components/List/ButtonListItem";
import ExpandableButtonListItem from "@e-ru/components/src/components/List/ExpandableButtonListItem";

import OAuthIcon from "@material-ui/icons/VpnKey";
import UsersIcon from "@material-ui/icons/People";
import DetailsIcon from "@material-ui/icons/Notes";
import RolesIcon from "@material-ui/icons/Wc";
import PermissionsIcon from "@material-ui/icons/CheckCircleOutline";

const DrawerOAuthContent = () => {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }
  return [
    <ExpandableButtonListItem
      key="drawer-oauth-ebli"
      title="OAuth"
      icon={<OAuthIcon />}
      open={open}
      handleClick={handleClick}
    />,
    <Collapse key="drawer-oauth-c" in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/client-details">
          <ButtonListItem subItem title="Client Details" icon={<DetailsIcon />} />
        </NavLink>
        <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/users">
          <ButtonListItem subItem title="Users" icon={<UsersIcon />} />
        </NavLink>
        <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/permissions">
          <ButtonListItem subItem title="Permissions" icon={<PermissionsIcon />} />
        </NavLink>
        <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/roles">
          <ButtonListItem subItem title="Roles" icon={<RolesIcon />} />
        </NavLink>
      </List>
    </Collapse>,
  ];
};

export default DrawerOAuthContent;

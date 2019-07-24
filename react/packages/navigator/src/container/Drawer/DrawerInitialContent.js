import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import HomeIcon from "@material-ui/icons/Home";

import ButtonListItem from "@e-ru/components/src/components/common/List/ButtonListItem"; // "components/src/components/common/List/ButtonListItem";
import ExpandableButtonListItem from "@e-ru/components/src/components/common/List/ExpandableButtonListItem";

import OAuthIcon from "@material-ui/icons/VpnKey";
import UsersIcon from "@material-ui/icons/People";
import DetailsIcon from "@material-ui/icons/Notes";
import RolesIcon from "@material-ui/icons/Wc";
import PermissionsIcon from "@material-ui/icons/CheckCircleOutline";

import { getUsers } from "../../actions/oauthusers";

export const DrawerInitialContentComponent = ({ getUsersHanlder }) => {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }
  return (
    <List>
      <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/">
        <ButtonListItem title="Home" icon={<HomeIcon />} />
      </NavLink>
      <Divider />
      <ExpandableButtonListItem title="OAuth" icon={<OAuthIcon />} open={open} handleClick={handleClick} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/client-details">
            <ButtonListItem subItem title="Client Details" icon={<DetailsIcon />} />
          </NavLink>
          <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/users">
            <ButtonListItem subItem title="Users" icon={<UsersIcon />} onClickHanlder={getUsersHanlder} />
          </NavLink>
          <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/permissions">
            <ButtonListItem subItem title="Permissions" icon={<PermissionsIcon />} />
          </NavLink>
          <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/roles">
            <ButtonListItem subItem title="Roles" icon={<RolesIcon />} />
          </NavLink>
        </List>
      </Collapse>
    </List>
  );
};

DrawerInitialContentComponent.propTypes = {
  getUsersHanlder: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getUsersHanlder: () => dispatch(getUsers()),
});

const DrawerInitialContent = connect(
  null,
  mapDispatchToProps
)(DrawerInitialContentComponent);

export default DrawerInitialContent;

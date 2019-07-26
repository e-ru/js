import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";

import ButtonListItem from "@e-ru/components/src/components/common/List/ButtonListItem"; // "components/src/components/common/List/ButtonListItem";
import ExpandableButtonListItem from "@e-ru/components/src/components/common/List/ExpandableButtonListItem";

import OAuthIcon from "@material-ui/icons/VpnKey";
import UsersIcon from "@material-ui/icons/People";
import DetailsIcon from "@material-ui/icons/Notes";
import RolesIcon from "@material-ui/icons/Wc";
import PermissionsIcon from "@material-ui/icons/CheckCircleOutline";

import { getUsers } from "../../actions/oauthusers";

export const DrawerOAuthContentComponent = ({ getUsersHanlder }) => {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }
  return [
    <ExpandableButtonListItem title="OAuth" icon={<OAuthIcon />} open={open} handleClick={handleClick} />,
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
    </Collapse>,
  ];
};

DrawerOAuthContentComponent.propTypes = {
  getUsersHanlder: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getUsersHanlder: () => dispatch(getUsers()),
});

const DrawerOAuthContent = connect(
  null,
  mapDispatchToProps
)(DrawerOAuthContentComponent);

export default DrawerOAuthContent;

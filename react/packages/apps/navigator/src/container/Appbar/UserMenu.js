import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { revokeRefreshToken } from "../../actions/oauth";

const UserMenuComponent = ({ revokeRefreshTokenHandler }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        aria-label="Account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            revokeRefreshTokenHandler();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

UserMenuComponent.propTypes = {
  revokeRefreshTokenHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  revokeRefreshTokenHandler: () => (dispatch, getState) =>
    dispatch(
      revokeRefreshToken(getState().oauth.username, getState().oauth.clientId, getState().oauth.authData.access_token)
    ),
};

const UserMenu = connect(
  null,
  mapDispatchToProps
)(UserMenuComponent);

export default UserMenu;

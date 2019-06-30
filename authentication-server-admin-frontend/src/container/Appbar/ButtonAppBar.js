import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { setShowSideDrawer } from "../../actions";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBarComponent = ({ drawerToggleClickHandler }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.appBar)}>
      <Toolbar>
        <IconButton
          onClick={drawerToggleClickHandler}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

ButtonAppBarComponent.propTypes = {
  drawerToggleClickHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  drawerToggleClickHandler: () => (dispatch, getState) => dispatch(setShowSideDrawer(!getState().ui.sideDrawerOpen)),
};

const ButtonAppBar = connect(
  null,
  mapDispatchToProps
)(ButtonAppBarComponent);

export default ButtonAppBar;

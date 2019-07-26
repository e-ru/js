import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

const ButtonAppBar = ({ title, handleDrawerOpen, usermenu }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.appBar)}>
      <Toolbar>
        <IconButton
          onClick={handleDrawerOpen}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {usermenu}
      </Toolbar>
    </AppBar>
  );
};

ButtonAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  usermenu: PropTypes.object.isRequired,
};

export default ButtonAppBar;

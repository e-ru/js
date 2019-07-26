import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    // top: "56px",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
}));

const MiniDrawer = props => {
  const classes = useStyles();
  const theme = useTheme();

  const { sideDrawerOpen, sideDrawerOpenHandler, children } = props;

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: sideDrawerOpen,
        [classes.drawerClose]: !sideDrawerOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: sideDrawerOpen,
          [classes.drawerClose]: !sideDrawerOpen,
        }),
      }}
      open={sideDrawerOpen}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={sideDrawerOpenHandler}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>{children}</List>
    </Drawer>
  );
};

MiniDrawer.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  sideDrawerOpenHandler: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default MiniDrawer;

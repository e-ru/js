import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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

const MiniDrawer = (props /* { sideDrawerOpen, sideDrawerOpenHandler, drawerContent } */) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log("props: ", props);
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.sideDrawerOpen,
        [classes.drawerClose]: !props.sideDrawerOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.sideDrawerOpen,
          [classes.drawerClose]: !props.sideDrawerOpen,
        }),
      }}
      open={props.sideDrawerOpen}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={props.sideDrawerOpenHandler}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      {props.drawerContent}
      {/* <DrawerInitialContent /> */}
    </Drawer>
  );
};

MiniDrawer.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  sideDrawerOpenHandler: PropTypes.func.isRequired,
  drawerContent: PropTypes.array.isRequired,
};

export default MiniDrawer;

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import DrawerOAuthContent from "./DrawerOAuthContent";

import { setShowSideDrawer } from "../../actions";

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
    top: "56px",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    top: "56px",
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
}));

const MiniDrawerComponent = ({ sideDrawerOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  console.log("sideDrawerOpen: ", sideDrawerOpen);
  return (
    // <div className={classes.root}>
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
      {/* <div className={classes.toolbar}>
          <IconButton onClick={drawerToggleClickHandler}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider /> */}
      <DrawerOAuthContent />
    </Drawer>
    // </div>
  );
};

MiniDrawerComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sideDrawerOpen: state.ui.sideDrawerOpen,
});

const MiniDrawer = connect(mapStateToProps)(MiniDrawerComponent);

export default MiniDrawer;

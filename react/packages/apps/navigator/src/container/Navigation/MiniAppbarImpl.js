import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import MiniAppbar from "@e-ru/components/src/components/Appbar/MiniAppbar";
import MiniDrawer from "@e-ru/components/src/components/Drawer/MiniDrawer";

import DrawerInitialContent from "./DrawerInitialContent";

import { setShowSideDrawer } from "../../actions/ui";

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

const MiniAppbarImplComponent = ({ title, drawerOpen, handleDrawerOpen, usermenu }) => {
  const classes = useStyles();
  const theme = useTheme();
  return <MiniAppbar title={title} drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} usermenu={usermenu} />;
  // <div>
  //   {appbar}
  //   {drawer}
  //   <</div>
  // <Drawer
  //   variant="permanent"
  //   className={clsx(classes.drawer, {
  //     [classes.drawerOpen]: sideDrawerOpen,
  //     [classes.drawerClose]: !sideDrawerOpen,
  //   })}
  //   classes={{
  //     paper: clsx({
  //       [classes.drawerOpen]: sideDrawerOpen,
  //       [classes.drawerClose]: !sideDrawerOpen,
  //     }),
  //   }}
  //   open={sideDrawerOpen}
  // >
  //   <div className={classes.toolbar}>
  //     <IconButton onClick={sideDrawerOpenHandler}>
  //       {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
  //     </IconButton>
  //   </div>
  //   <Divider />
  //   <DrawerInitialContent />
  // </Drawer>
};

MiniAppbarImplComponent.propTypes = {
  title: PropTypes.string.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  usermenu: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  title: "appbar title",
  drawerOpen: state.ui.sideDrawerOpen,
});

const mapDispatchToProps = {
  handleDrawerOpen: () => (dispatch, getState) => dispatch(setShowSideDrawer(!getState().ui.sideDrawerOpen)),
  usermenu: {},
};

const MiniAppbarImpl = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniAppbarImplComponent);

export default MiniAppbarImpl;

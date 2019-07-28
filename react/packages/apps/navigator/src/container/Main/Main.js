import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import clsx from "clsx";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  MIN_DESKTOP_WIDTH,
  CONTENT_MARGIN_TOP_DESKTOP,
  CONTENT_MARGIN_TOP_MOBILE,
  // USERS_PATH,
} from "../../constants/ui";

import { USERS_PATH } from "../../constants/router";

import Appbar from "../Navigation/Appbar";
import Drawer from "../Navigation/Drawer";
import Users from "../Users";

// import Content from "../Content/Content";

const drawerWidth = 240;
const drawerShrinkWidth = 73;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentDesktop: {
    marginTop: CONTENT_MARGIN_TOP_DESKTOP,
    marginLeft: drawerShrinkWidth,
  },
  contentMobile: {
    marginTop: CONTENT_MARGIN_TOP_MOBILE,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}));

const MainComponent = ({ sideDrawerOpen }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${MIN_DESKTOP_WIDTH})`);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar />
      <Drawer />
      {/* <Content /> */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: sideDrawerOpen && isDesktop,
          [classes.contentDesktop]: isDesktop,
          [classes.contentMobile]: !isDesktop,
        })}
      >
        <Route path={USERS_PATH} exact component={Users} />
        {/* <Route path={`${USERS_PATH}/:id`} component={User} /> */}
      </main>
    </div>
  );
};

MainComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  // console.log("content state: ", state);
  return {
    sideDrawerOpen: state.ui.sideDrawerOpen,
  };
};

const Main = connect(mapStateToProps)(MainComponent);

export default Main;

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import MiniDrawer from "@e-ru/components/src/components/Drawer/MiniDrawer";
import MobileDrawer from "@e-ru/components/src/components/Drawer/MobileDrawer";

import { MIN_DESKTOP_WIDTH } from "../../../constants/ui";

import DrawerHomeContent from "../DrawerHomeContent";
import DrawerOAuthContent from "../DrawerOAuthContent";

import { setShowSideDrawer } from "../../../actions/ui";

const drawerContent = () => [<DrawerHomeContent key="drawer-home" />, <DrawerOAuthContent key="drawer-oauth" />];

export const DrawerComponent = ({ sideDrawerOpen, sideDrawerOpenHandler }) => {
  const isDesktop = useMediaQuery(`(min-width:${MIN_DESKTOP_WIDTH})`);
  return isDesktop ? (
    <MiniDrawer sideDrawerOpen={sideDrawerOpen} sideDrawerOpenHandler={sideDrawerOpenHandler}>
      {drawerContent()}
    </MiniDrawer>
  ) : (
    <MobileDrawer sideDrawerOpen={sideDrawerOpen} sideDrawerOpenHandler={sideDrawerOpenHandler}>
      {drawerContent()}
    </MobileDrawer>
  );
};

DrawerComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  sideDrawerOpenHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    sideDrawerOpen: state.ui.sideDrawerOpen,
  };
};

const mapDispatchToProps = {
  sideDrawerOpenHandler: () => (dispatch, getState) => dispatch(setShowSideDrawer(!getState().ui.sideDrawerOpen)),
};

const Drawer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);

export default Drawer;

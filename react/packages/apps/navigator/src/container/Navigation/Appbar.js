import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import MiniAppbar from "@e-ru/components/src/components/Appbar/MiniAppbar";
import ButtonAppbar from "@e-ru/components/src/components/Appbar/ButtonAppbar";

import { MIN_DESKTOP_WIDTH } from "../../constants/ui";

import AppbarUsermenu from "./AppbarUsermenu";

import { setShowSideDrawer } from "../../actions/ui";

const MiniAppbarImplComponent = ({ title, drawerOpen, handleDrawerOpen }) => {
  const isDesktop = useMediaQuery(`(min-width:${MIN_DESKTOP_WIDTH})`);
  return isDesktop ? (
    <MiniAppbar title={title} drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen}>
      <AppbarUsermenu />
    </MiniAppbar>
  ) : (
    <ButtonAppbar title={title} handleDrawerOpen={handleDrawerOpen}>
      <AppbarUsermenu />
    </ButtonAppbar>
  );
};

MiniAppbarImplComponent.propTypes = {
  title: PropTypes.string.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  title: "appbar title",
  drawerOpen: state.ui.sideDrawerOpen,
});

const mapDispatchToProps = {
  handleDrawerOpen: () => (dispatch, getState) => dispatch(setShowSideDrawer(!getState().ui.sideDrawerOpen)),
};

const MiniAppbarImpl = connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniAppbarImplComponent);

export default MiniAppbarImpl;

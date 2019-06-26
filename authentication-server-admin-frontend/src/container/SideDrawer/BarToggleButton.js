import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setShowSideDrawer } from "../../actions";

import "./BarToggleButton.css";

const DrawerToggleButtonComponent = ({ drawerToggleClickHandler }) => (
  <button type="button" className="toggle-button" onClick={() => drawerToggleClickHandler()}>
    {/* &#9776; */}
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

DrawerToggleButtonComponent.propTypes = {
  drawerToggleClickHandler: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  drawerToggleClickHandler: () => (dispatch, getState) => dispatch(setShowSideDrawer(!getState().ui.sideDrawerOpen)),
};

const DrawerToggleButton = connect(
  null,
  mapDispatchToProps
)(DrawerToggleButtonComponent);

export default DrawerToggleButton;

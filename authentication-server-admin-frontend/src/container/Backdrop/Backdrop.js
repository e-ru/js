import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setShowSideDrawer } from "../../actions";

import "./Backdrop.css";

const BackdropComponent = ({ sideDrawerOpen, closeSideDrawer }) =>
  sideDrawerOpen ? <div className="backdrop" role="presentation" onClick={closeSideDrawer} /> : null;

BackdropComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
  closeSideDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sideDrawerOpen: state.ui.sideDrawerOpen,
});

const mapDispatchToProps = dispatch => ({
  closeSideDrawer: () => dispatch(setShowSideDrawer(false)),
});

const Backdrop = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackdropComponent);

export default Backdrop;

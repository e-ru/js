import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./SideDrawer.css";

const SideDrawerComponent = ({ sideDrawerOpen }) => (
  <nav className={sideDrawerOpen ? "side-drawer open" : "side-drawer"}>
    <ul>
      <li>
        <a href="/">
          <span>XX </span>
          <span className="hide-title">Client Details</span>
        </a>
      </li>
      <li>
        <a href="/">Users</a>
      </li>
      <li>
        <a href="/">Roles</a>
      </li>
      <li>
        <a href="/">Permissions</a>
      </li>
    </ul>
  </nav>
);

SideDrawerComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sideDrawerOpen: state.ui.sideDrawerOpen,
});

const SideDrawer = connect(mapStateToProps)(SideDrawerComponent);

export default SideDrawer;

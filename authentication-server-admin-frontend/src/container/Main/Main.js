import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Main.css";

const MainComponent = ({ sideDrawerOpen }) => (
  <main className={sideDrawerOpen ? "main" : "main open"}>
    <p>
      This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a
      paragraph. This is a paragraph
    </p>
  </main>
);

MainComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sideDrawerOpen: !state.ui.sideDrawerOpen,
});

const Main = connect(mapStateToProps)(MainComponent);

export default Main;

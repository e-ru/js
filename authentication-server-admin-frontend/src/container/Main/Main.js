import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useMedia } from "use-media";

import Toolbar from "../Toolbar/Toolbar";
import SideBar from "../SideDrawer/SideBar";
import Backdrop from "../Backdrop/Backdrop";
import Content from "../Content/Content";

import "./Main.css";

const MainComponent = ({ sideDrawerOpen }) => {
  const isMobile = useMedia({ maxWidth: 768 });
  return (
    <div className={`page${isMobile ? " page--mobile" : ""}`}>
      <Toolbar />
      <main
        className={`main${sideDrawerOpen ? " main--sidebar-open" : ""}${
          sideDrawerOpen && !isMobile ? " main--break-content" : ""
        }`}
      >
        <SideBar />
        <Content />
      </main>
      <Backdrop />
    </div>
  );
};

MainComponent.propTypes = {
  sideDrawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sideDrawerOpen: state.ui.sideDrawerOpen,
});

const App = connect(mapStateToProps)(MainComponent);

export default App;

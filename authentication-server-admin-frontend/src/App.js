import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useMedia } from "use-media";
// import logo from "./logo.svg";
import "normalize.css";
import "./App.css";

import LoginButton from "./container/LoginButton/LoginButton";
import Toolbar from "./container/Toolbar/Toolbar";
import SideBar from "./container/SideDrawer/SideBar";
import Backdrop from "./container/Backdrop/Backdrop";
import Main from "./container/Main/Main";

const AppComponent = ({ loggedIn, sideDrawerOpen, oAuthError }) => {
  const isMobile = useMedia({ maxWidth: 768 });
  return (
    <div className="App">
      {loggedIn ? (
        <div className={`page${isMobile ? " page--mobile" : ""}`}>
          <Toolbar />
          <main
            className={`main${sideDrawerOpen ? " main--sidebar-open" : ""}${
              sideDrawerOpen && !isMobile ? " main--break-content" : ""
            }`}
          >
            <SideBar />
            <Main />
          </main>
          <Backdrop />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

AppComponent.defaultProps = {
  oAuthError: null,
};

AppComponent.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  sideDrawerOpen: PropTypes.bool.isRequired,
  oAuthError: PropTypes.string,
};

const mapStateToProps = state => ({
  loggedIn: true, // state.oauth.loggedIn,
  sideDrawerOpen: state.ui.sideDrawerOpen,
  oAuthError: state.oauth.error,
});

const App = connect(mapStateToProps)(AppComponent);

export default App;

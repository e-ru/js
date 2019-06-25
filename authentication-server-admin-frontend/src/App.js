import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import logo from "./logo.svg";
import "./App.css";

import LoginButton from "./container/LoginButton/LoginButton";
import Toolbar from "./container/Toolbar/Toolbar";
import SideDrawer from "./container/SideDrawer/SideDrawer";
import Backdrop from "./container/Backdrop/Backdrop";
import Main from "./container/Main/Main";

const AppComponent = ({ loggedIn, oAuthError }) => {
  return (
    <div className="App">
      {loggedIn ? (
        <div style={{ height: "100%" }}>
          <Toolbar />
          <Backdrop />
          <SideDrawer />
          <Main />
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
  oAuthError: PropTypes.string,
};

const mapStateToProps = state => ({
  loggedIn: true, // state.oauth.loggedIn,
  oAuthError: state.oauth.error,
});

const App = connect(mapStateToProps)(AppComponent);

export default App;

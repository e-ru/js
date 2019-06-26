import React from "react";

import BarToggleButton from "../SideDrawer/BarToggleButton";
import "./Toolbar.css";

const Toolbar = () => (
  <header className="toolbar">
    <BarToggleButton />

    {/* <nav className="toolbar__navigation">
      <div className="toolbar__logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Client Details</a>
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
      </div>
    </nav> */}
  </header>
);

export default Toolbar;

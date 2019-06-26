import React from "react";

import "./SideBar.css";

const SideBar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li className="sidebar__item">
          <a href="/">
            <span className="link-icon">&spades;</span>
            <span className="link-text">Client Details</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/">
            <span className="link-icon">&clubs;</span>
            <span className="link-text">Users</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/">
            <span className="link-icon">&hearts;</span>
            <span className="link-text">Roles</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/">
            <span className="link-icon">&diams;</span>
            <span className="link-text">Permissions</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
);

export default SideBar;

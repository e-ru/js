import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";

const SideBar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li className="sidebar__item">
          <Link to="/">
            <span className="link-icon">&#9728;</span>
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/client-details">
            <span className="link-icon">&spades;</span>
            <span className="link-text">Client Details</span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/users">
            <span className="link-icon">&clubs;</span>
            <span className="link-text">Users</span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/">
            <span className="link-icon">&hearts;</span>
            <span className="link-text">Roles</span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link to="/">
            <span className="link-icon">&diams;</span>
            <span className="link-text">Permissions</span>
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default SideBar;

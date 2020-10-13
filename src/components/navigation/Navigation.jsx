import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { FaBars } from "react-icons/fa";

const Navigation = ({ toggle }) => {
  return (
    <nav className="navigation">
      <div className="brand">
        <span> samira tv shows </span>
      </div>

      <div className="navigation-menu">
        <div className="navigation-icon" onClick={toggle}>
          <FaBars />
        </div>
        <div className="navigation-links">
          <Link className="navigation-link" to="/">
            home
          </Link>
          <Link className="navigation-link" to="/shows">
            shows
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="brand">
        <span> samira tv shows </span>
      </div>
      <div>
        <Link className="navigation-link" to="/">
          home
        </Link>
        <Link className="navigation-link" to="/shows">
          shows
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

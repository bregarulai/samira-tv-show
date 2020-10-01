import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="brand">
        <span>samira tv shows</span>
      </div>
      <div>
        <a className="navigation-link" href="#">
          home
        </a>
        <a className="navigation-link" href="#">
          shows
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

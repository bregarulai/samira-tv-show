import React from "react";
import { Link } from "react-router-dom";
import "./sideDrawer.css";

const SideDrawer = ({ closeMenu, showMenu }) => {
  let classes = "menu";
  if (showMenu) {
    classes = "menu open";
  }

  return (
    <aside className={classes} onClick={closeMenu}>
      <div>
        <Link onClick={closeMenu} className="menu-link" to="/">
          home
        </Link>
      </div>
      <div>
        <Link onClick={closeMenu} className="menu-link" to="/shows">
          shows
        </Link>
      </div>
    </aside>
  );
};

export default SideDrawer;

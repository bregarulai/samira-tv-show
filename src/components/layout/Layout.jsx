import React, { useState } from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import SideDrawer from "../sideDrawer/SideDrawer";

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  let classes = "masking";
  if (showMenu) {
    classes = "masking open";
  }

  const toggle = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <div className={classes} onClick={closeMenu}></div>
      <SideDrawer showMenu={showMenu} closeMenu={closeMenu} />
      <Navigation toggle={toggle} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

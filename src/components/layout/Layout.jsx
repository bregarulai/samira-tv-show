import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

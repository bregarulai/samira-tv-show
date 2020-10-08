import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <p>&copy; {new Date().getFullYear()} - BregaCode</p>
      </footer>
    </div>
  );
};

export default Footer;

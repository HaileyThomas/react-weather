import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <Icon icon="akar-icons:heart" className="heart-icon" />
      <p>-Hailey Thomas (&copy; {currentYear})</p>
      <a
        href="https://github.com/HaileyThomas/react-weather"
        target="blank"
        rel="noopener norferrer"
        className="footer-link"
      >
        view source code
      </a>
    </div>
  );
};

export default Footer;

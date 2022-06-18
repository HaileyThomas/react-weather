import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <Icon icon="line-md:menu" className="menu-icon icon" />
        <h1 className="main-header">Weather Dashboard</h1>
      </div>
      <div className="header-right">
        <Icon icon="charm:sun" className="light-icon icon" />
        <Icon icon="charm:moon" className="dark-icon icon" />
        <Icon icon="dashicons:info-outline" className="about-icon icon" />
      </div>
    </div>
  );
};

export default Header;

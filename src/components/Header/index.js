import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <h1 className="main-header">Weather Dashboard</h1>
        <Icon icon="line-md:menu" className="menu-icon" />
      </div>
      <div className="header-right">
        <Icon icon="charm:sun" className="light-icon" />
        <Icon icon="charm:moon" className="dark-icon" />
        <Icon icon="dashicons:info-outline" className="about-icon col-1" />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="header-component">
      <div className="header-right">
        <h1 className="main-header">Weather Dashboard</h1>
        <Icon icon="line-md:menu" className="menu-icon" />
      </div>
      <div className="header-left">
        <Icon icon="charm:sun" className="light-icon" />
        <Icon icon="charm:moon" className="dark-icon" />
        <Icon icon="dashicons:info-outline" className="about-icon" />
      </div>
    </div>
  );
};

export default Header;

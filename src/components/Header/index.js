import React, { useState } from "react";
import { Icon } from "@iconify/react";

import Info from "../Info";

const Header = ({ theme, setTheme }) => {
  const [showInfo, setShowInfo] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <Icon icon="line-md:menu" className="menu-icon icon" />
        <h1 className="main-header">Weather Dashboard</h1>
      </div>
      <div className="header-right">
        <button onClick={switchTheme} className="theme-btn">
          {theme === "light" ? (
            <Icon icon="charm:moon" className="dark-icon icon" />
          ) : (
            <Icon icon="charm:sun" className="light-icon icon" />
          )}
        </button>
        <Icon
          icon="dashicons:info-outline"
          className="about-icon icon"
          onClick={() => setShowInfo(true)}
        />
      </div>
      <Info onClose={() => setShowInfo(false)} showInfo={showInfo} />
    </div>
  );
};

export default Header;

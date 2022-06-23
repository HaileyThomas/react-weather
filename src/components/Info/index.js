import React from "react";
import { Icon } from "@iconify/react";

const Info = (props) => {
  if (!props.showInfo) {
    return null;
  }

  return (
    <div className="info-modal-container" onClick={props.onClose}>
      <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="info-modal-header">
          <h2 className="info-header">Information</h2>
          <Icon
            icon="ep:close-bold"
            className="close-icon"
            onClick={props.onClose}
          />
        </div>
        <div className="info-modal-body">
          <Icon icon="line-md:menu" className="menu-icon icon" />
          <p>Menu icon appears on mobile. Takes you to your saved locations.</p>
          <hr />
          <Icon icon="charm:moon" className="dark-icon icon" />{" "}
          <Icon icon="charm:sun" className="light-icon icon" />
          <p>Toggle between dark and light themes.</p>
          <hr />
          <Icon icon="dashicons:info-outline" className="about-icon icon" />
          <p>Click to get app information.</p>
          <hr />
          <Icon icon="akar-icons:star" className="icon default-icon" />
          <p>Change default city that will load on start up.</p>
          <hr />
          <Icon icon="bi:bookmark-heart" className="icon save-icon" />
          <p>Save current city to Saved Locations.</p>
          <hr />
          <Icon icon="ep:close-bold" className="close-icon" />
          <p>Close information or delete Saved Location from list.</p>
          <hr />
          <br />
          <p>
            <b>Created using React.js and OpenWeatherMap API.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;

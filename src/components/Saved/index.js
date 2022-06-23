import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Saved = ({ setCity }) => {
  var savedCities = JSON.parse(localStorage.getItem("saved-cities")) || [];

  return (
    <div className="saved-container">
      <h3>Saved Locations</h3>
      {savedCities.map((savedData, index) => {
        var savedDivStyle = {
          backgroundImage: "url(" + savedData.image + ")",
        };

        return (
          <div style={savedDivStyle} className="saved-container" key={index}>
            <div className="saved-header-container">
              <Icon icon="ep:close-bold" className="close-icon" />
            </div>
            <div className="saved-name-container">
              <h4>{savedData.name}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Saved;

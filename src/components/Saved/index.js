import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Saved = ({ setCity }) => {
  var savedCities = JSON.parse(localStorage.getItem("saved-cities")) || [];

  return (
    <div className="saved-container">
      <h3>Saved Locations</h3>
      {savedCities.map((savedData, index) => {
        const handleSaveClick = () => {
          setCity(savedData.name);
        };

        const handleSaveClose = () => {
          console.log("un save will go here");
        };

        return (
          <div
            className="saved-container"
            key={index}
            onClick={handleSaveClick}
          >
            <div className="saved-header-container">
              <Icon
                icon="ep:close-bold"
                className="close-icon"
                onClick={handleSaveClose}
              />
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

import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Saved = ({ setCity }) => {
  var savedCities = JSON.parse(localStorage.getItem("saved-cities")) || [];

  return (
    <div className="saved-container">
      <h3>Saved Locations</h3>
      {savedCities.map((savedData, index) => {
        const reloadComponent = () => {
          window.location.reload(false);
        };

        const handleSaveClick = () => {
          setCity(savedData.name);
        };

        const handleSaveClose = () => {
          savedCities.splice(index, 1);
          localStorage.setItem("saved-cities", JSON.stringify(savedCities));
          reloadComponent();
        };

        return (
          <div className="saved-content-container" key={index}>
            <div className="saved-header-container">
              <Icon
                icon="ep:close-bold"
                className="close-icon"
                onClick={handleSaveClose}
              />
            </div>
            <div className="saved-name-container">
              <h3 className="saved-name" onClick={handleSaveClick}>
                {savedData.name}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Saved;

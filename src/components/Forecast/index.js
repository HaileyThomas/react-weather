import React from "react";
import moment from "moment";

const Forecast = (dailyData) => {
  return (
    <div className="forecast-container">
      <h4>{moment(dailyData.dt * 1000).format("MM/DD")}</h4>
      <img
        src={require("../../assets/icons/" +
          dailyData.weather[0].icon +
          ".png")}
        className="forecast-icon"
      />
      <h3>{dailyData.temp.day}°F</h3>
    </div>
  );
};

export default Forecast;

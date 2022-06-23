import React from "react";
import moment from "moment";

const Hourly = (hourlyData) => {
  return (
    <div>
      <div className="hourly-container">
        <div className="hourly-left-container">
          <h3>{moment(hourlyData.dt * 1000).format("hh:mm a")}</h3>
          <img
            src={require("../../assets/icons/" +
              hourlyData.weather[0].icon +
              ".png")}
            className="hourly-icon"
            alt="hourly icon"
          />
          <h2>{hourlyData.temp}°F</h2>
        </div>
        <div className="hourly-right-container">
          <h4>{moment(hourlyData.dt * 1000).format("ddd, MM/DD")}</h4>
          <p>Feels Like: {hourlyData.feels_like} °F</p>
          <p>Humidity: {hourlyData.humidity} %</p>
          <p>Clouds: {hourlyData.clouds} %</p>
          <p>Dew Point: {hourlyData.dew_point} °F</p>
          <p>Wind Speed: {hourlyData.wind_speed} MPH</p>
          <p>UVI: {hourlyData.uvi} of 10</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Hourly;

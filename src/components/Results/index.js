import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Results = ({ weatherData }) => {
  return (
    <div className="results-container">
      <div className="main-results-container">
        <div className="main-header-container">
          <div className="main-header-left">
            <h2>name here</h2>
          </div>
          <div className="main-header-right">
            <Icon icon="akar-icons:star" className="icon default-icon" />
            <Icon icon="bi:bookmark-heart" className="icon save-icon" />
          </div>
        </div>
        <div className="main-content-container">
          <div className="main-content-left">
            <img
              src={require("../../assets/icons/" +
                weatherData.current.weather[0].icon +
                ".png")}
            />
            <h1>{weatherData.current.temp} °F</h1>
            <p>{weatherData.current.weather[0].description}</p>
          </div>
          <div className="main-content-right">
            <p>Feels Like: {weatherData.current.feels_like} °F</p>
            <p>Humidity: {weatherData.current.humidity} %</p>
            <p>Clouds: {weatherData.current.clouds}</p>
            <p>Dew Point: {weatherData.current.dew_point}</p>
            <p>Wind Speed: {weatherData.current.wind_speed} MPH</p>
            <p>UVI: {weatherData.current.uvi}</p>
          </div>
        </div>
      </div>
      <div className="forecast-results-container">
        forecast results will go here
      </div>
      <div className="details-results-container">details will go here</div>
    </div>
  );
};

export default Results;

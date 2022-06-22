import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import moment from "moment";

import Forecast from "../Forecast";
import Hourly from "../Hourly";

const Results = ({ weatherData, city }) => {
  const [image, setImage] = useState("");

  var cityName = city
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  var str = city;
  str = str.replace(/\s+/g, "-").toLowerCase();

  const cityImageUrl =
    "https://api.teleport.org/api/urban_areas/slug:" + str + "/images/";

  var mainDivStyle = {
    backgroundImage: "url(" + image + ")",
  };

  useEffect(() => {
    const fetchImage = async () => {
      await fetch(cityImageUrl)
        .then((res) => res.json())
        .then((result) => {
          setImage(result.photos[0].image.web);
          console.log(image);
        });
    };
    fetchImage();
  }, [image]);

  return (
    <div className="results-container">
      <div style={mainDivStyle} className="main-results-container">
        <div className="main-header-container">
          <div className="main-header-left">
            <h2>{cityName}</h2>
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
            <p>
              <b>{moment().format("ddd, MM/DD/YYYY")}</b>
            </p>
            <p>Feels Like: {weatherData.current.feels_like} °F</p>
            <p>Humidity: {weatherData.current.humidity} %</p>
            <p>Clouds: {weatherData.current.clouds} %</p>
            <p>Dew Point: {weatherData.current.dew_point} °F</p>
            <p>Wind Speed: {weatherData.current.wind_speed} MPH</p>
            <p>UVI: {weatherData.current.uvi} of 10</p>
            <p>
              Sunrise:{" "}
              {new Date(weatherData.current.sunrise * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </p>
            <p>
              Sunset:{" "}
              {new Date(weatherData.current.sunset * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="forecast-results-container">
        {weatherData.daily.map((dailyData, index) => {
          return <Forecast key={index} {...dailyData} />;
        })}
      </div>
      <div className="hourly-results-container">
        <h2>Hourly Forecast</h2>
        {weatherData.hourly.map((hourlyData, index) => {
          return <Hourly key={index} {...hourlyData} />;
        })}
      </div>
    </div>
  );
};

export default Results;

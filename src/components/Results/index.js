import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import moment from "moment";

import Forecast from "../Forecast";
import Hourly from "../Hourly";

import thunderstormImg from "../../assets/images/thunderstorm.png";
import drizzleImg from "../../assets/images/drizzle.png";
import rainImg from "../../assets/images/rain.png";
import snowImg from "../../assets/images/snow.png";
import clearImg from "../../assets/images/clear.png";
import cloudsImg from "../../assets/images/clouds.png";
import mistImg from "../../assets/images/mist.png";
import smokeImg from "../../assets/images/smoke.png";
import hazeImg from "../../assets/images/haze.png";
import dustImg from "../../assets/images/dust.png";
import fogImg from "../../assets/images/fog.png";
import sandImg from "../../assets/images/sand.png";
import ashImg from "../../assets/images/ash.png";
import squallImg from "../../assets/images/squall.png";
import tornadoImg from "../../assets/images/tornado.png";

const Results = ({ weatherData, city }) => {
  const [image, setImage] = useState("");

  var cityName = city
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  var mainDivStyle = {
    backgroundImage: "url(" + image + ")",
  };

  const handleDefault = () => {
    localStorage.setItem("default-city", JSON.stringify(city));
  };

  const handleSaved = () => {
    var existingSaved = JSON.parse(localStorage.getItem("saved-cities")) || [];
    var newSave = {
      name: city,
    };
    existingSaved.push(newSave);
    localStorage.setItem("saved-cities", JSON.stringify(existingSaved));
    reloadComponent();
  };

  const reloadComponent = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    const getImage = () => {
      if (weatherData.current.weather[0].main === "Thunderstorm") {
        setImage(thunderstormImg);
      } else if (weatherData.current.weather[0].main === "Drizzle") {
        setImage(drizzleImg);
      } else if (weatherData.current.weather[0].main === "Rain") {
        setImage(rainImg);
      } else if (weatherData.current.weather[0].main === "Snow") {
        setImage(snowImg);
      } else if (weatherData.current.weather[0].main === "Clear") {
        setImage(clearImg);
      } else if (weatherData.current.weather[0].main === "Clouds") {
        setImage(cloudsImg);
      } else if (weatherData.current.weather[0].main === "Mist") {
        setImage(mistImg);
      } else if (weatherData.current.weather[0].main === "Smoke") {
        setImage(smokeImg);
      } else if (weatherData.current.weather[0].main === "Haze") {
        setImage(hazeImg);
      } else if (weatherData.current.weather[0].main === "Dust") {
        setImage(dustImg);
      } else if (weatherData.current.weather[0].main === "Fog") {
        setImage(fogImg);
      } else if (weatherData.current.weather[0].main === "Sand") {
        setImage(sandImg);
      } else if (weatherData.current.weather[0].main === "Ash") {
        setImage(ashImg);
      } else if (weatherData.current.weather[0].main === "Squall") {
        setImage(squallImg);
      } else if (weatherData.current.weather[0].main === "Tornado") {
        setImage(tornadoImg);
      }
    };
    getImage();
  }, [city, weatherData, image]);

  return (
    <div className="results-container">
      <div style={mainDivStyle} className="main-results-container">
        <div className="main-header-container">
          <div className="main-header-left">
            <h2>{cityName}</h2>
          </div>
          <div className="main-header-right">
            <Icon
              icon="akar-icons:star"
              className="icon default-icon"
              onClick={handleDefault}
            />
            <Icon
              icon="bi:bookmark-heart"
              className="icon save-icon"
              onClick={handleSaved}
            />
          </div>
        </div>
        <div className="main-content-container">
          <div className="main-content-left">
            <img
              src={require("../../assets/icons/" +
                weatherData.current.weather[0].icon +
                ".png")}
              alt="current icon"
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

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Results = ({ city, cityImgWide, setCityImgWide }) => {
  const [newData, setNewData] = useState({});
  var weatherData;
  var cityImage;

  var str = city;
  str = str.replace(/\s+/g, "-").toLowerCase();

  var cityName = city
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  const cityLocationUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=" +
    "6ff484b66ed5b4a802761c069566a64c";

  const cityImageUrl =
    "https://api.teleport.org/api/urban_areas/slug:" + str + "/images/";

  const getCityLocation = () => {
    return fetch(cityLocationUrl).then((response) => response.json());
  };

  const getCityImage = () => {
    return fetch(cityImageUrl).then((response) => response.json());
  };

  const getWeather = (weatherApiUrl) => {
    await fetch(weatherApiUrl).then((response) => response.json());
  };

  useEffect(() => {
    getCityLocation().then((data) => {
      const latitude = data[0].lat;
      const longitude = data[0].lon;
      const weatherApiUrl =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&exclude=" +
        "minutely" +
        "&units=" +
        "imperial" +
        "&appid=" +
        "d50140606331b5f0875df8b66c236b78";
      getWeather(weatherApiUrl).then((data) => {
        weatherData = data;
        console.log(weatherData);
        setNewData(data);
      });
    });
    getCityImage().then((data) => {
      setCityImgWide(data.photos[0].image.web);
      cityImage = data.photos[0].image.mobile;
    });
  }, []);

  return (
    <div className="results-container">
      <div className="main-results-container">
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
            <img src={require("../../assets/icons/" + newData.current.weather[0].icon + ".png")} />
            <h1>{newData.current.temp} °F</h1>
            <p>{newData.current.weather[0].description}</p>
          </div>
          <div className="main-content-right">
            <p>Feels Like: {newData.current.feels_like} °F</p>
            <p>Humidity: {newData.current.humidity}</p>
            <p>Clouds: {newData.current.clouds}</p>
            <p>Dew Point: {newData.current.dew_point}</p>
            <p>Wind Speed: {newData.current.wind_speed}</p>
            <p>UVI: {newData.current.uvi}</p>
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

import React, { useEffect } from "react";

import Main from "../Main";
import Forecast from "../Forecast";
import Details from "../Details";

const Results = ({ city, cityImgWide, setCityImgWide }) => {
  var weatherData;
  var cityImage;

  var str = city;
  str = str.replace(/\s+/g, "-").toLowerCase();

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
    return fetch(weatherApiUrl).then((response) => response.json());
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
      });
    });
    getCityImage().then((data) => {
      setCityImgWide(data.photos[0].image.web);
      cityImage = data.photos[0].image.mobile;
    });
  }, []);

  return (
    <div className="results-container">
      <Main weatherData={weatherData} cityImage={cityImage} />
      <Forecast weatherData={weatherData} />
      <Details weatherData={weatherData} />
    </div>
  );
};

export default Results;

import React, { useState, useEffect } from "react";

import Main from "../Main";
import Forecast from "../Forecast";
import Details from "../Details";

const Results = ({ city, setCity }) => {
  const [cityData, setCityData] = useState([]);
  var weatherData;

  const cityLocationUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=" +
    "6ff484b66ed5b4a802761c069566a64c";

  const getCityLocation = () => {
    return fetch(cityLocationUrl).then((response) => response.json());
  };

  const getWeather = (weatherApiUrl) => {
    return fetch(weatherApiUrl).then((response) => response.json());
  };

  useEffect(() => {
    getCityLocation().then((data) => {
      const latitude = data[0].lat;
      const longitude = data[0].lon;
      const weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=" + "hourly,minutely" + "&units=" + "imperial" + "&appid=" + "d50140606331b5f0875df8b66c236b78";
      getWeather(weatherApiUrl).then((data) => {
        weatherData = data;
        console.log(weatherData);
      })
    });
  }, []);

  return (
    <div className="results-container">
      <Main />
      <Forecast />
      <Details />
    </div>
  );
};

export default Results;

import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Saved from "./components/Saved";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [city, setCity] = useState("New York");
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const cityApiUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=" +
    "6ff484b66ed5b4a802761c069566a64c";

  const getCityLocation = async () => {
    const response = await fetch(cityApiUrl);
    return await response.json();
  };
  const weatherApiUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    long +
    "&exclude=" +
    "minutely" +
    "&units=" +
    "imperial" +
    "&appid=" +
    "d50140606331b5f0875df8b66c236b78";

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    const fetchData = async () => {
      getCityLocation().then((cityData) => {
        setLat(cityData[0].lat);
        setLong(cityData[0].lon);
      });
      await fetch(weatherApiUrl)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [city, lat, long]);

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="app-container">
        <div className="side-container">
          <Saved />
        </div>
        <div className="main-container">
          <Search city={city} setCity={setCity} />
          {typeof data.current != "undefined" ? (
            <Results weatherData={data} city={city} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

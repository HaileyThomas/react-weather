import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Saved from "./components/Saved";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
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
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(weatherApiUrl)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="app-container">
        <div className="side-container">
          <Saved />
        </div>
        <div className="main-container">
          <Search />
          {typeof data.current != "undefined" ? (
            <Results weatherData={data} />
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

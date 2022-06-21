import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Saved from "./components/Saved";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [city, setCity] = useState("New York");
  const [cityImgWide, setCityImgWide] = useState("");
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="app-container">
        <div className="side-container">
          <Saved city={city} setCity={setCity} cityImgWide={cityImgWide} />
        </div>
        <div className="main-container">
          <Search city={city} setCity={setCity} />
          <Results
            city={city}
            cityImgWide={cityImgWide}
            setCityImgWide={setCityImgWide}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Saved from "./components/Saved";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <div className="side-container">
          <Saved city={city} setCity={setCity} />
        </div>
        <div className="main-container">
          <Search city={city} setCity={setCity} />
          <Results city={city} setCity={setCity} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

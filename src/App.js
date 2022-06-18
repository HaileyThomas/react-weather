import { React, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Saved from "./components/Saved";
import Search from "./components/Search";
import Welcome from "./components/Welcome";
import Results from "./components/Results";

function App() {
  const [search, setSearch] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <div className="side-container">
          <Saved />
        </div>
        <div className="main-container">
          <Search setSearch={setSearch} />
          {search ? <Welcome /> : <Results />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

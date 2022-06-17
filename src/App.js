import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Saved from "./components/Saved";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <div className="side-container">
          <Saved />
        </div>
        <div className="main-container"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

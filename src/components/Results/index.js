import React, { useState, useEffect } from "react";

import Main from "../Main";
import Forecast from "../Forecast";
import Details from "../Details";

const Results = ({ city, setCity }) => {
  return (
    <div className="results-container">
      <Main />
      <Forecast />
      <Details />
    </div>
  );
};

export default Results;

import React, { useState } from "react";

const Search = (props) => {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // props.setCity(set city will go here);
  };

  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          id="search-input"
          name="search-input"
          placeholder="Search a City Location..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="submit"
          id="search-submit"
          value="Search"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Search;

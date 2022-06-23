import React, { useState } from "react";

const Search = ({ city, setCity }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(input);
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

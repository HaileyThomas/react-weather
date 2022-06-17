import React from "react";

const Search = () => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          id="search-input"
          name="search-input"
          value="Search a City Location..."
        />
        <input type="submit" id="search-submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;

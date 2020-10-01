import React from "react";
import "./searchBox.css";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="search-box">
      <input
        onChange={onSearchChange}
        type="search"
        placeholder="search for tv shows"
      />
    </div>
  );
};

export default SearchBox;

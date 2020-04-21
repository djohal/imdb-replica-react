import React from "react";

const SearchDropdown = ({ searchInput }) => (
  <div className={`${searchInput ? "search-dropdown" : null} `}>
    <div className="search-items">{searchInput}</div>
  </div>
);

export default SearchDropdown;

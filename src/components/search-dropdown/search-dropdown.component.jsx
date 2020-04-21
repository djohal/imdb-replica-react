import React from "react";

const SearchDropdown = ({ collections }) => (
  <div className={`${collections ? "search-dropdown" : null} `}>
    <div className="search-items">
      {collections.map((collection) => (
        <>
        <span>{collection.title}</span>
        <br/>
        </>
      ))}
    </div>
  </div>
);

export default SearchDropdown;

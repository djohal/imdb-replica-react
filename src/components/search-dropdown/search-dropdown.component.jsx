import React from "react";

const SearchDropdown = ({ collections, searchEntry }) => (
  <div className={`${searchEntry ? "search-dropdown" : null} `}>
    <div className="search-items">
      {collections &&
        collections.map((collection) => (
          <>
            <span>{collection.title}</span>
            <br />
          </>
        ))}
    </div>
  </div>
);

export default SearchDropdown;

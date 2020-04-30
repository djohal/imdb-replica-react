import React from "react";

import { isCollectionsEmpty } from "../../redux/movies/movies.utils";
import SearchDropdownItem from "./search-dropdown-item.component";

const SearchDropdown = ({ collections, searchEntry }) => {
  return (
    <div className={`${searchEntry ? "search-dropdown" : null} `}>
      <div
        className={`${
          isCollectionsEmpty(collections) ? "no-results" : "search-items"
        }`}
      >
        {collections
          ? collections.map((collection) => (
              <SearchDropdownItem collection={collection} />
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchDropdown;

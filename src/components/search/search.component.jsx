import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import FormControl from "react-bootstrap/FormControl";

import {
  searchInput,
  clearSearchEntry,
  clearSearchCollections,
  fetchSearchMovieStart,
  expandSearchInput,
} from "../../redux/search/search.actions";

import {
  SearchButtonSvg,
  DropDownIconSvg,
} from "../layout/header/header-svgs.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Search = ({
  expandSearchInput,
  searchEntry,
  isSearchExpanded,
  fetchSearchMovieStart,
  searchInput,
  clearSearchEntry,
  clearSearchCollections,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const clearSearchData = useCallback(() => {
    clearSearchEntry();
    clearSearchCollections();
  }, [clearSearchEntry, clearSearchCollections]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      searchInput(searchQuery);
      fetchSearchMovieStart();
    } else {
      clearSearchData();
      expandSearchInput(false);
    }
  }, [
    searchQuery,
    searchInput,
    fetchSearchMovieStart,
    expandSearchInput,
    clearSearchData,
  ]);

  return (
    <>
      <div className="search-category-selector">
        <span>All</span>
        <DropDownIconSvg />
      </div>
      <div className="search-input-container">
        <FormControl
          type="text"
          placeholder="Search IMDb"
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`${isSearchExpanded ? "search-sm" : null}`}
        />
        <FontAwesomeIcon
          icon={faTimes}
          color="white"
          size="1x"
          className={`${
            isSearchExpanded
              ? "cancel-search-expanded cancel-search"
              : "cancel-search"
          }`}
          onClick={() => {
            clearSearchData();
            expandSearchInput(false);
          }}
        />
      </div>

      <div className="search-btn-container">
        <button
          type="button"
          className={`${
            isSearchExpanded ? "display-none search-button" : "search-button"
          }`}
          onClick={() => expandSearchInput(true)}
        >
          <SearchButtonSvg />
        </button>
      </div>
      <div
        className={`${searchEntry && !isSearchExpanded ? "overlay" : null}`}
        onClick={() => clearSearchData()}
      ></div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchInput: (input) => dispatch(searchInput(input)),
  fetchSearchMovieStart: () => dispatch(fetchSearchMovieStart()),
  clearSearchEntry: () => dispatch(clearSearchEntry()),
  clearSearchCollections: () => dispatch(clearSearchCollections()),
  expandSearchInput: (payload) => dispatch(expandSearchInput(payload)),
});

export default connect(null, mapDispatchToProps)(Search);

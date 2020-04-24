import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import SearchDropdown from "../search-dropdown/search-dropdown.component";
import {
  searchInput,
  clearSearchEntry,
  clearSearchCollections,
  fetchSearchMovieStart,
  expandSearchInput,
} from "../../redux/search/search.actions";
import {
  selectMoviesCollection,
  selectSearchInput,
  selectIsSearchExpanded,
} from "../../redux/search/search.selectors";

import {
  SearchButtonSvg,
  DropDownIconSvg,
} from "../layout/header/header-svgs.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Search = ({
  collections,
  searchEntry,
  expandSearchInput,
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
    <Form inline>
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
      <SearchDropdown collections={collections} searchEntry={searchEntry} />
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchInput: (input) => dispatch(searchInput(input)),
  fetchSearchMovieStart: () => dispatch(fetchSearchMovieStart()),
  clearSearchEntry: () => dispatch(clearSearchEntry()),
  clearSearchCollections: () => dispatch(clearSearchCollections()),
  expandSearchInput: (payload) => dispatch(expandSearchInput(payload)),
});

const mapStateToProps = createStructuredSelector({
  collections: selectMoviesCollection,
  searchEntry: selectSearchInput,
  isSearchExpanded: selectIsSearchExpanded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

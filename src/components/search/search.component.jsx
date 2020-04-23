import React from "react";
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

class Search extends React.Component {
  componentDidMount() {
    const {
      clearSearchEntry,
      clearSearchCollections,
      expandSearchInput,
    } = this.props;
    clearSearchEntry();
    clearSearchCollections();
    expandSearchInput(false);
  }

  handleChange = (event) => {
    const {
      searchInput,
      fetchSearchMovieStart,
      clearSearchEntry,
      clearSearchCollections,
    } = this.props;
    if (event.target.value.trim() !== "") {
      searchInput(event.target.value);
      fetchSearchMovieStart();
    } else {
      /*
       * setTimeout required to handle fetchSearchMovieSuccess call
       * that calls after the collection is cleared
       */
      setTimeout(() => {
        clearSearchEntry();
        clearSearchCollections();
      }, 200);
    }
  };

  clearSearchData = () => {
    const { clearSearchEntry, clearSearchCollections } = this.props;
    clearSearchEntry();
    clearSearchCollections();
  };
  render() {
    const {
      collections,
      searchEntry,
      expandSearchInput,
      isSearchExpanded,
    } = this.props;
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
            onChange={(e) => this.handleChange(e)}
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
              this.clearSearchData();
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
          onClick={() => this.clearSearchData()}
        ></div>
        <SearchDropdown collections={collections} searchEntry={searchEntry} />
      </Form>
    );
  }
}

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

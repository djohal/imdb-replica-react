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
} from "../../redux/movies/movies.actions";
import {
  selectMoviesCollection,
  selectSearchInput,
} from "../../redux/movies/selectors/search.selectors";

import {
  SearchButtonSvg,
  DropDownIconSvg,
} from "../layout/header/header-svgs.component";

class Search extends React.Component {
  state = {
    searchClicked: false,
  };

  componentDidMount() {
    const { clearSearchEntry, clearSearchCollections } = this.props;
    clearSearchEntry();
    clearSearchCollections();
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
      clearSearchEntry();
      clearSearchCollections();
    }
  };

  removeOverlay = () => {
    const { clearSearchEntry, clearSearchCollections } = this.props;
    clearSearchEntry();
    clearSearchCollections();
  };
  render() {
    const { collections, searchEntry } = this.props;
    const { searchClicked } = this.state;
    return (
      <Form inline>
        <div className="search-category-selector">
          <span>All</span>
          <DropDownIconSvg />
        </div>
        <FormControl
          type="text"
          placeholder="Search IMDb"
          onChange={(e) => this.handleChange(e)}
          className={`${searchClicked ? "search-sm" : null}`}
        />
        <div className="search-btn-container">
          <button
            type="button"
            className="search-button"
            onClick={() => this.setState({ searchClicked: true })}
          >
            <SearchButtonSvg />
          </button>
        </div>
        <div
          className={`${searchEntry ? "overlay" : null}`}
          onClick={() => this.removeOverlay()}
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
});

const mapStateToProps = createStructuredSelector({
  collections: selectMoviesCollection,
  searchEntry: selectSearchInput,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

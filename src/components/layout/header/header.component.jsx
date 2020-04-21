import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Logo from "../../../static/assets/logo.png";
import {
  HamburgerMenuSvg,
  SearchButtonSvg,
  DropDownIconSvg,
  ImdbProSvg,
  WatchlistSvg,
} from "./header-svgs.component";
import SideNavContainer from "../../sidenav/sidenav.component";
import SearchDropdown from "../../search-dropdown/search-dropdown.component";
import {
  searchInput,
  clearSearchEntry,
  clearSearchCollections,
} from "../../../redux/movies/movies.actions";
import { fetchSearchMovieStart } from "../../../redux/movies/movies.actions";

import {
  selectMoviesCollection,
  selectSearchInput,
} from "../../../redux/movies/selectors/search.selectors";

const Header = ({
  collections,
  fetchSearchMovieStart,
  searchInput,
  searchEntry,
  clearSearchEntry,
  clearSearchCollections,
}) => {
  const handleChange = (event) => {
    if (event.target.value.trim() !== "") {
      searchInput(event.target.value);
      fetchSearchMovieStart();
    } else {
      clearSearchEntry();
      clearSearchCollections();
    }
  };

  const removeOverlay = () => {
    clearSearchEntry();
    clearSearchCollections();
  };

  return (
    <div className="header">
      <Navbar className="navbar-custom" variant="dark" expand="lg">
        <Container>
          <SideNavContainer />
          <Navbar.Brand>
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link>
                <HamburgerMenuSvg />
                <span>Menu</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <div className="search-category-selector">
              <span>All</span>
              <DropDownIconSvg />
            </div>
            <FormControl
              type="text"
              placeholder="Search IMDb"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" className="search-button">
              <SearchButtonSvg />
            </button>
            <div
              className={`${searchEntry ? "overlay" : null}`}
              onClick={() => removeOverlay()}
            ></div>
            <SearchDropdown
              collections={collections}
              searchEntry={searchEntry}
            />
          </Form>
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>
                <ImdbProSvg />
              </Nav.Link>
              <div className="verticle-line"></div>
              <Nav.Link className="watchlist ">
                <WatchlistSvg />
                <span>Watchlist</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link>
            <span>Sign In</span>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

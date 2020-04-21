import React, { useState } from "react";
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

const Header = () => {
  const [searchInput, setSearchInput] = useState();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const removeOverlay = () => {
    setSearchInput(null);
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
              className={`${searchInput ? "overlay" : null}`}
              onClick={() => removeOverlay()}
            ></div>
            <SearchDropdown searchInput={searchInput} />
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

export default Header;

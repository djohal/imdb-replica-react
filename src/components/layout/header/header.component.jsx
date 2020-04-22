import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Logo from "../../../static/assets/logo.png";
import {
  HamburgerMenuSvg,
  ImdbProSvg,
  WatchlistSvg,
} from "./header-svgs.component";
import SideNavContainer from "../../sidenav/sidenav.component";
import Search from "../../search/search.component";
import { selectIsSearchExpanded } from "../../../redux/search/search.selectors";

const Header = ({ isSearchExpanded }) => {
  return (
    <div className="header">
      <Navbar
        className={`${
          isSearchExpanded ? "navbar-search-sm navbar-custom" : "navbar-custom"
        }`}
        variant="dark"
      >
        <Container>
          <SideNavContainer isSearchExpanded={isSearchExpanded} />
          <Navbar.Brand>
            <img
              className={`${isSearchExpanded ? "display-none logo" : "logo"}`}
              src={Logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="hide-responsive">
              <HamburgerMenuSvg />
              <span>Menu</span>
            </Nav.Link>
            <Search />
            <Nav.Link className="hide-responsive">
              <ImdbProSvg />
            </Nav.Link>
            <div className="verticle-line hide-responsive"></div>
            <Nav.Link className="watchlist hide-responsive">
              <WatchlistSvg />
              <span>Watchlist</span>
            </Nav.Link>
            <Nav.Link className={`${isSearchExpanded ? "display-none" : null}`}>
              <span>Sign In</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSearchExpanded: selectIsSearchExpanded,
});

export default connect(mapStateToProps)(Header);

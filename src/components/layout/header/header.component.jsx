import React from "react";

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

const Header = () => {
  return (
    <div className="header">
      <Navbar className="navbar-custom" variant="dark">
        <Container>
          <SideNavContainer />
          <Navbar.Brand>
            <img className="logo" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <HamburgerMenuSvg />
              <span>Menu</span>
            </Nav.Link>
            <Search />
            <Nav.Link>
              <ImdbProSvg />
            </Nav.Link>
            <div className="verticle-line"></div>
            <Nav.Link className="watchlist ">
              <WatchlistSvg />
              <span>Watchlist</span>
            </Nav.Link>
            <Nav.Link>
              <span>Sign In</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
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
import SearchForm from "../../search-form/search-form.component";

import { selectIsSearchExpanded } from "../../../redux/search/search.selectors";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { signOutStart } from "../../../redux/user/user.actions";

const Header = ({ isSearchExpanded, history, currentUser, signOutStart }) => {
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
              onClick={() => history.push("/")}
            />
          </Navbar.Brand>
          <Nav>
            <Link to="" className="hide-responsive">
              <HamburgerMenuSvg />
              <span>Menu</span>
            </Link>
            <SearchForm />
            <Link to="" className="hide-responsive">
              <ImdbProSvg />
            </Link>
            <div className="verticle-line hide-responsive"></div>
            <Link to="" className="watchlist hide-responsive">
              <WatchlistSvg />
              <span>Watchlist</span>
            </Link>
            {currentUser ? (
              <div
                className={`${isSearchExpanded ? "display-none" : "sign-out"}`}
                onClick={() => signOutStart()}
              >
                <span>Sign Out</span>
              </div>
            ) : (
              <Link
                to="/register/sign-in"
                className={`${isSearchExpanded ? "display-none" : null}`}
              >
                <span>Sign In</span>
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSearchExpanded: selectIsSearchExpanded,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

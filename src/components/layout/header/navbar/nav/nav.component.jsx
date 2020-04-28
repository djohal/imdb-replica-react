import React from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import {
  HamburgerMenuSvg,
  ImdbProSvg,
  WatchlistSvg,
} from "../../header-svgs.component";

import SearchForm from "../../../../search-form/search-form.component";

const NavLinks = ({ currentUser, signOutStart, isSearchExpanded }) => (
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
    <Link to="/watchlist" className="watchlist hide-responsive">
      <WatchlistSvg />
      <span>Watchlist</span>
      <span className="watchlist-cart">100</span>
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
);

export default NavLinks;

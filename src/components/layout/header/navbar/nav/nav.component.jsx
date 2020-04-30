import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import {
  HamburgerMenuSvg,
  ImdbProSvg,
  WatchlistSvg,
} from "../../header-svgs.component";

import SearchForm from "../../../../search-form/search-form.component";
import { selectWatchlistItems } from "../../../../../redux/watchlist/watchlist.selectors";

const NavLinks = ({ currentUser, signOutStart, isSearchExpanded }) => {
  const watchlistItems = useSelector(selectWatchlistItems);

  return (
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
        <span
          className={`${
            !!watchlistItems && watchlistItems.length
              ? "watchlist-cart"
              : "hide-display"
          }`}
        >
          {watchlistItems.length}
        </span>
      </Link>
      {currentUser ? (
        <div
          className={`${isSearchExpanded ? "display-none" : "sign-out"}`}
          onClick={() => signOutStart()}
        >
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          <span>John</span>
          <FontAwesomeIcon icon={faCaretDown} size="sm" />
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
};

export default NavLinks;

import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectWatchlistItems } from "../../redux/watchlist/watchlist.selectors";

import {
  addItemToWatchlist,
  removeItemFromWatchlist,
} from "../../redux/watchlist/watchlist.actions";

import { WatchlistRibbonSvg } from "./fan-favorites-svgs.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

import { getSingleDecimalValue } from "../../redux/movies/movies.utils";

const FFCollectionItem = ({ collectionItem }) => {
  const { poster_path, title, name, vote_average, id } = collectionItem;
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);
  const watchlistItems = useSelector(selectWatchlistItems);
  const dispatch = useDispatch();
  const item = watchlistItems.filter((item) => item.id === id);
  const selected = !!item & item.length ? item[0].selected : null;

  const redirectToWatchlistPage = (item) => {
    if (currentUser) {
      if (selected) {
        dispatch(removeItemFromWatchlist(item));
      } else {
        dispatch(addItemToWatchlist(item));
      }
    } else {
      history.push("/register/sign-in");
    }
  };

  return (
    <React.Fragment key={id}>
      <div className="carousel-images">
        <img
          className="d-block carousel-img"
          src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
          alt={title}
        />
      </div>
      <div
        className="watchlist-ribbon"
        aria-label="add to watchlist"
        role="button"
        tabIndex="0"
      >
        <WatchlistRibbonSvg selectedToggle={selected} />
        <div className="watchlist-ribbon__icon" role="presentation">
          {selected ? (
            <FontAwesomeIcon icon={faCheck} size="sm" color="black" />
          ) : (
            <FontAwesomeIcon icon={faPlus} size="sm" />
          )}
        </div>
      </div>
      <div className="featured-details">
        <div className="rating">
          <FontAwesomeIcon icon={faStar} size="sm" />
          <span>{getSingleDecimalValue(vote_average)}</span>
        </div>
        <span>{title || name}</span>
        <button
          className="watchlist-btn"
          type="button"
          onClick={() => redirectToWatchlistPage(collectionItem)}
        >
          {selected ? (
            <FontAwesomeIcon icon={faCheck} size="sm" />
          ) : (
            <FontAwesomeIcon icon={faPlus} size="sm" />
          )}
          <div className="button-text">Watchlist</div>
        </button>
      </div>
    </React.Fragment>
  );
};

export default FFCollectionItem;

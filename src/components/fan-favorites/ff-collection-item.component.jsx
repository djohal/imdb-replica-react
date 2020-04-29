import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { addItemToWatchlist } from "../../redux/watchlist/watchlist.actions";

import { WatchlistRibbonSvg } from "./fan-favorites-svgs.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

import { getSingleDecimalValue } from "../../redux/movies/movies.utils";

const FFCollectionItem = ({ collectionItem }) => {
  const { poster_path, title, name, vote_average, id } = collectionItem;
  const [selectedToggle, setSelectedToggle] = useState(false);
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const redirectToWatchlistPage = (item) => {
    return currentUser
      ? (dispatch(addItemToWatchlist(item)), setSelectedToggle(!selectedToggle))
      : history.push("/register/sign-in");
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
        <WatchlistRibbonSvg selectedToggle={selectedToggle} />
        <div className="watchlist-ribbon__icon" role="presentation">
          {selectedToggle ? (
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
          {selectedToggle ? (
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

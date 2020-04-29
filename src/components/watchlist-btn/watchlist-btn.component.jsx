import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  addItemToWatchlist,
  removeItemFromWatchlist,
} from "../../redux/watchlist/watchlist.actions";

const WatchlistBtn = ({ collectionItem, selected }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const updateWatchListItems = (item) => {
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
    <button
      className="watchlist-btn"
      type="button"
      onClick={() => updateWatchListItems(collectionItem)}
    >
      {selected ? (
        <FontAwesomeIcon icon={faCheck} size="sm" />
      ) : (
        <FontAwesomeIcon icon={faPlus} size="sm" />
      )}
      <div className="button-text">Watchlist</div>
    </button>
  );
};

export default WatchlistBtn;

import React from "react";
import { useSelector } from "react-redux";
import { selectWatchlistItems } from "redux/watchlist/watchlist.selectors";

import { WatchlistRibbonSvg } from "components/watchlist-item/watchlist-svgs.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

import { getSingleDecimalValue } from "redux/movies/movies.utils";
import WatchlistBtn from "components/watchlist-btn/watchlist-btn.component";

const FFCollectionItem = ({ collectionItem }) => {
  const { poster_path, title, name, vote_average, id } = collectionItem;

  const watchlistItems = useSelector(selectWatchlistItems);
  const item = watchlistItems.filter((item) =>
    !!item ? item.id === id : null
  );
  const selected = !!item & item.length ? item[0].selected : null;

  return (
    <React.Fragment key={id}>
      <div className="carousel-images">
        <img
          className="d-block carousel-img"
          src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
          alt={title}
        />
      </div>
      <WatchlistBtn
        collectionItem={collectionItem}
        selected={selected}
        svgIcon
      />
      <div className="featured-details">
        <div className="rating">
          <FontAwesomeIcon icon={faStar} size="sm" />
          <span>{getSingleDecimalValue(vote_average)}</span>
        </div>
        <span>{title || name}</span>
        <WatchlistBtn collectionItem={collectionItem} selected={selected} />
      </div>
    </React.Fragment>
  );
};

export default FFCollectionItem;

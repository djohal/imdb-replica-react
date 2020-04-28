import React from "react";
import {
  WatchlistRibbonSvg,
  WatchlistRibbonIconSvg,
  RatingSvg,
} from "./fan-favorites-svgs.component";

import { getSingleDecimalValue } from "../../redux/movies/movies.utils";

const FFCollectionItem = ({ collectionItem, redirectToWatchlistPage }) => {
  const { poster_path, title, name, vote_average, id } = collectionItem;
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
        <WatchlistRibbonSvg />
        <div className="watchlist-ribbon__icon" role="presentation">
          <WatchlistRibbonIconSvg />
        </div>
      </div>
      <div className="featured-details">
        <div className="rating">
          <RatingSvg />
          <span>{getSingleDecimalValue(vote_average)}</span>
        </div>
        <span>{title || name}</span>
        <button
          className="watchlist-btn"
          type="button"
          onClick={() => redirectToWatchlistPage(collectionItem)}
        >
          <WatchlistRibbonIconSvg />
          <div className="button-text">Watchlist</div>
        </button>
      </div>
    </React.Fragment>
  );
};

export default FFCollectionItem;

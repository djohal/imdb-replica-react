import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { getSingleDecimalValue } from "../../redux/movies/movies.utils";

const WatchlistItem = ({
  item: { poster_path, title, name, vote_average, release_date },
}) => (
  <div className="watchlist-item">
      <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt={title} />
    <div className="featured-details">
      <span>{title || name}</span>
      <div className="info">
        <div className="rating">
          <span>{getSingleDecimalValue(vote_average)}</span>
          <FontAwesomeIcon icon={faStar} size="sm" />
        </div>
        <span>{release_date.slice(0, 4)}</span>
      </div>
    </div>
  </div>
);

export default WatchlistItem;

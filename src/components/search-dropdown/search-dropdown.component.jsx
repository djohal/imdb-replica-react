import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFilm } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../static/assets/logo.png";

const getSingleDecimal = (num) => {
  return (Math.round(num * 10) / 10).toFixed(1);
};

const SearchDropdown = ({ collections, searchEntry }) => (
  <div className={`${searchEntry ? "search-dropdown" : null} `}>
    <div className="search-items">
      {collections &&
        collections.map(
          ({ title, poster_path, release_date, vote_average, id }) => (
            <div className="search-item" key={id}>
              <img
                src={`${
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : Logo
                }`}
                alt={title}
              />
              <div className="details">
                <span className="title">{title}</span>
                <span className={"sub-title"}>{release_date.slice(0, 4)}</span>
                <span className={"rating"}>
                  {getSingleDecimal(vote_average)}
                  <FontAwesomeIcon icon={faStar} size="sm" />
                </span>
              </div>
            </div>
          )
        )}
    </div>
  </div>
);

export default SearchDropdown;

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../static/assets/logo.png";
import { getSingleDecimalValue } from "../../redux/movies/movies.utils";

const isCollectionsEmpty = (data) => {
  return Array.isArray(data) && data.length === 0;
};

const SearchDropdown = ({ collections, searchEntry }) => (
  <div className={`${searchEntry ? "search-dropdown" : null} `}>
    <div
      className={`${
        isCollectionsEmpty(collections) ? "no-results" : "search-items"
      }`}
    >
      {collections
        ? collections.map(
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
                  <span className={"sub-title"}>
                    {release_date && release_date.slice(0, 4)}
                  </span>
                  <span className={"rating"}>
                    {getSingleDecimalValue(vote_average)}
                    <FontAwesomeIcon icon={faStar} size="sm" />
                  </span>
                </div>
              </div>
            )
          )
        : null}
    </div>
  </div>
);

export default SearchDropdown;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";

import { fetchFanFavoritesStart } from "../../redux/movies/movies.actions";
import { selectMoviesCollection } from "../../redux/movies/selectors/fan-favorites.selectors";
import {
  WatchlistRibbonSvg,
  WatchlistRibbonIconSvg,
  RatingSvg,
} from "./fan-favorites-svgs.component";
import CarouselContainer from "../carousel/carousel.component";

const getSingleDecimal = (num) => {
  return (Math.round(num * 10) / 10).toFixed(1);
};

const FanFavourites = ({ fetchFanFavoritesStart, collections }) => {
  useEffect(() => {
    fetchFanFavoritesStart();
  }, [fetchFanFavoritesStart]);

  return (
    <div className="fan-favorites-container">
      <Container>
        <h3 className="title">What to watch</h3>
        <h3 className="sub-title">Fan Favorites</h3>
        <span className="sub-title__desc">
          This week's most popular fan movies
        </span>
        <CarouselContainer desktop={6} slidesToSlide={6}>
          {collections.map(({ poster_path, title, name, vote_average, id }) => (
            <React.Fragment key={id}>
              <div className="carousel-images">
                <img
                  className="d-block carousel-img"
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
                  <span>{getSingleDecimal(vote_average)}</span>
                </div>
                <span>{title || name}</span>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    class="ipc-icon ipc-icon--add ipc-button__icon ipc-button__icon--pre"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                  </svg>
                  <div class="button-text">Watchlist</div>
                </button>
              </div>
            </React.Fragment>
          ))}
        </CarouselContainer>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectMoviesCollection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFanFavoritesStart: () => dispatch(fetchFanFavoritesStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FanFavourites);

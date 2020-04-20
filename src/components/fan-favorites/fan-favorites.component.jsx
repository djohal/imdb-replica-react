import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";

import { fetchFanFavoritesStart } from "../../redux/movies/movies.actions";
import { selectMoviesCollection } from "../../redux/movies/selectors/fan-favorites.selectors";
import {
  WatchlistRibbonSvg,
  WatchlistRibbonIconSvg,
} from "./fan-favorites-svgs.component";
import CarouselContainer from "../carousel/carousel.component";

const FanFavourites = ({ fetchFanFavoritesStart, collections }) => {
  useEffect(() => {
    fetchFanFavoritesStart();
  }, [fetchFanFavoritesStart]);
  console.log(collections);

  return (
    <div className="fan-favorites-container">
      <Container>
        <h3 className="title">What to watch</h3>
        <h3 className="sub-title">Fan Favorites</h3>
        <span className="sub-title__desc">
          This week's most popular fan movies
        </span>
        <CarouselContainer desktop={6} slidesToSlide={6}>
          {collections.map(
            ({
              poster_path,
              title,
              name,
              release_date,
              first_air_date,
              id,
            }) => (
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
                  <span>{title || name}</span>
                  <span>{release_date || first_air_date}</span>
                </div>
              </React.Fragment>
            )
          )}
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

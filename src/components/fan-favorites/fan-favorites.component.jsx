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
import {
  getSingleDecimalValue,
  useWindowSize,
} from "../../redux/movies/movies.utils";

const numberOfSlidesToSlide = (width) => {
  if (width < 600) {
    return 2;
  } else if (width > 600 && width < 780) {
    return 4;
  } else {
    return 6;
  }
};

const FanFavourites = ({ fetchFanFavoritesStart, collections }) => {
  const [windowWidth] = useWindowSize();

  useEffect(() => {
    fetchFanFavoritesStart();
  }, [fetchFanFavoritesStart]);

  return (
    <div className="fan-favorites-container">
      <Container>
        <h3 className="title">What to watch</h3>
      </Container>
      <div className="main-container">
        <Container>
          <h3 className="sub-title">Fan Favorites</h3>
          <span className="sub-title__desc">
            This week's most popular fan movies
          </span>
          <CarouselContainer
            desktop={6}
            slidesToSlide={numberOfSlidesToSlide(windowWidth)}
            tablet={4}
            laptop={5}
            mobile={2}
          >
            {collections.map(
              ({ poster_path, title, name, vote_average, id }) => (
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
                      <span>{getSingleDecimalValue(vote_average)}</span>
                    </div>
                    <span>{title || name}</span>
                    <button>
                      <WatchlistRibbonIconSvg />
                      <div className="button-text">Watchlist</div>
                    </button>
                  </div>
                </React.Fragment>
              )
            )}
          </CarouselContainer>
        </Container>
      </div>
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

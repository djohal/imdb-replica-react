import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { fetchFanFavoritesStart } from "../../redux/movies/movies.actions";
import { selectMoviesCollection } from "../../redux/movies/selectors/fan-favorites.selectors";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 6,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

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
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={2000}
          centerMode={false}
          draggable
          focusOnSelect={false}
          infinite={false}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          slidesToSlide={6}
          swipeable
        >
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
                  className="watchlist-ribbon focusable watchlist-ribbon--m watchlist-ribbon--baseAlt watchlist-ribbon--onImage poster__watchlist-ribbon"
                  aria-label="add to watchlist"
                  role="button"
                  tabindex="0"
                >
                  <svg
                    className="watchlist-ribbon__bg"
                    width="24px"
                    height="34px"
                    viewBox="0 0 24 34"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                  >
                    <polygon
                      className="watchlist-ribbon__bg-ribbon"
                      fill="#000000"
                      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                    ></polygon>
                    <polygon
                      className="watchlist-ribbon__bg-hover"
                      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                    ></polygon>
                    <polygon
                      className="watchlist-ribbon__bg-shadow"
                      points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                    ></polygon>
                  </svg>
                  <div className="watchlist-ribbon__icon" role="presentation">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="icon icon--add icon--inline"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                    </svg>
                  </div>
                </div>
                <div className="featured-details">
                  <span>{title || name}</span>
                  <span>{release_date || first_air_date}</span>
                </div>
              </React.Fragment>
            )
          )}
        </Carousel>
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

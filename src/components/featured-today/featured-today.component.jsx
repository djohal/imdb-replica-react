import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { fetchFeaturedTodayStart } from "../../redux/movies/movies.actions";
import { selectMoviesCollection } from "../../redux/movies/selectors/featured-today.selectors";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 2,
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

const FeaturedToday = ({ fetchFeaturedTodayStart, collections }) => {
  useEffect(() => {
    fetchFeaturedTodayStart();
  }, [fetchFeaturedTodayStart]);

  return (
    <div className="featured-today-container">
      <Container>
        <h3 className="title">Featured today</h3>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={2000}
          centerMode={false}
          className=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {collections.map(
            ({ backdrop_path, title, vote_average, poster_path, id }) => (
              <div className="carousel-images">
                <img
                  className="d-block carousel-img"
                  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                  alt={title}
                />
              </div>
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
  fetchFeaturedTodayStart: () => dispatch(fetchFeaturedTodayStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedToday);

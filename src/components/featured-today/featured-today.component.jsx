import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import { fetchFeaturedTodayStart } from "../../redux/movies/movies.actions";
import { selectMoviesCollection } from "../../redux/movies/selectors/featured-today.selectors";

const FeaturedToday = ({ fetchFeaturedTodayStart, collections }) => {
  useEffect(() => {
    fetchFeaturedTodayStart();
  }, [fetchFeaturedTodayStart]);

  return (
    <div className="featured-today-container">
      <Container>
        <h3 className="title">Featured today</h3>
        <Carousel interval={null}>
          {collections.map((collection) => (
            <Carousel.Item>
              <div className="carousel-images">
                <img
                  className="d-block carousel-img"
                  src={`https://image.tmdb.org/t/p/w500/${collection[0].backdrop_path}`}
                  alt={collection[0].title}
                  key={collection[0].id}
                />
                <img
                  className="d-block carousel-img"
                  src={`https://image.tmdb.org/t/p/w500/${collection[1].backdrop_path}`}
                  alt={collection[1].title}
                  key={collection[1].id}
                />
              </div>
            </Carousel.Item>
          ))}
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

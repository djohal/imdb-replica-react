import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";

import { fetchFeaturedTodayStart } from "../../redux/movies/movies.actions";
import { selectMoviesCollection } from "../../redux/movies/selectors/featured-today.selectors";
import CarouselContainer from "../carousel/carousel.component";

const FeaturedToday = ({ fetchFeaturedTodayStart, collections }) => {
  useEffect(() => {
    fetchFeaturedTodayStart();
  }, [fetchFeaturedTodayStart]);

  return (
    <div className="featured-today-container">
      <Container>
        <h3 className="title">Featured today</h3>
        <CarouselContainer desktop={2} slidesToSlide={2}>
          {collections.map(
            ({
              backdrop_path,
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
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt={title}
                  />
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
  fetchFeaturedTodayStart: () => dispatch(fetchFeaturedTodayStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedToday);

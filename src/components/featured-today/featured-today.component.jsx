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
        <Carousel indicators="false">
          {collections
            ? collections.map(
                ({ backdrop_path, title, name, vote_average, poster_path, id }) => (
                  <Carousel.Item key={id}>{title || name}</Carousel.Item>
                )
              )
            : null}
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

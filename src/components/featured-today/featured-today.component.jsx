import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Container from "react-bootstrap/Container";

import { fetchDataStart } from "../../redux/movies/movies.actions";
import { selectFeaturedTodayCollections } from "../../redux/movies/movies.selectors";
import CarouselContainer from "../carousel/carousel.component";

import { useWindowSize } from "../../redux/movies/movies.utils";

const FeaturedToday = ({ collections, fetchDataStart }) => {
  const [windowWidth] = useWindowSize();

  useEffect(() => {
    fetchDataStart(`/trending/all/day`);
  }, [fetchDataStart]);

  return (
    <div className="featured-today-container">
      <Container>
        <h3 className="title">Featured today</h3>
        <CarouselContainer
          desktop={2}
          laptop={2}
          slidesToSlide={windowWidth > 600 ? 2 : 1}
        >
          {!!collections &&
            collections.map(({ backdrop_path, title, name, id, overview }) => (
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
                  <p>{overview}</p>
                </div>
              </React.Fragment>
            ))}
        </CarouselContainer>
      </Container>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectFeaturedTodayCollections,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataStart: (url) => dispatch(fetchDataStart(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedToday);

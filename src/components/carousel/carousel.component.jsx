import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import { fetchNowPlayingStart } from "../../redux/movies/movies.actions";
import { selectMoviesCollection } from "../../redux/movies/movies.selectors";

const MoviesCarousel = ({ fetchNowPlayingStart, collections }) => {
  useEffect(() => {
    fetchNowPlayingStart();
  }, [fetchNowPlayingStart]);

  return (
    <div className="carousel-container">
      <Container>
        <Carousel indicators="false">
          {collections
            ? collections.map(
                ({ backdrop_path, title, vote_average, poster_path }) => (
                  <Carousel.Item>
                    <div className="carousel-images">
                      <img
                        className="d-block carousel-img"
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                      />
                      <div className="backdrop-img">
                        <img
                          className="d-block w-100 carousel-img"
                          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                          alt={title}
                        />
                        <div className="backdrop-caption">
                          <h1>{title}</h1>
                          <p>IMDB Rating: {vote_average}</p>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
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
  fetchNowPlayingStart: () => dispatch(fetchNowPlayingStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesCarousel);

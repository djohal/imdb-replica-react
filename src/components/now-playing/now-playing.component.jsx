import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import { fetchDataStart } from "../../redux/movies/movies.actions";
import { selectNowPlayingCollections } from "../../redux/movies/movies.selectors";
import {
  getSingleDecimalValue,
  useWindowSize,
} from "../../redux/movies/movies.utils";

const NowPlaying = ({ collections, fetchDataStart }) => {
  const [width] = useWindowSize();

  useEffect(() => {
    fetchDataStart(`/movie/now_playing`);
  }, [fetchDataStart]);

  return (
    <div className="now-playing-container">
      <Container>
        <Carousel interval={width < 600 ? null : 5000}>
          {collections
            ? collections.map(
                ({ backdrop_path, title, vote_average, poster_path, id }) => (
                  <Carousel.Item key={id}>
                    <div className="carousel-images">
                      <div className="poster-img-container">
                        <img
                          className="d-block w-100 carousel-img poster-img"
                          src={`https://image.tmdb.org/t/p/${
                            width > 500 ? "w342" : "w154"
                          }${poster_path}`}
                          alt={title}
                        />
                      </div>

                      <div className="backdrop-img-container">
                        <div className="backdrop-img">
                          <img
                            className="d-block w-100 carousel-img"
                            src={`https://image.tmdb.org/t/p/${
                              width > 500 ? "w780" : "w500"
                            }${backdrop_path}`}
                            alt={title}
                          />
                        </div>
                        <div className="backdrop-caption">
                          <h1>{title}</h1>
                          <div className="rating">
                            <span>{getSingleDecimalValue(vote_average)}</span>
                            <FontAwesomeIcon icon={faStar} size="sm" />
                          </div>
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
  collections: selectNowPlayingCollections,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDataStart: (url) => dispatch(fetchDataStart(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Carousel from "react-bootstrap/Carousel";

import { fetchNowPlayingStart } from "../../redux/movies/movies.actions";
import { selectMoviesCollection } from "../../redux/movies/movies.selectors";

const MoviesCarousel = ({ fetchNowPlayingStart, collections }) => {
  useEffect(() => {
    fetchNowPlayingStart();
  }, [fetchNowPlayingStart]);
  console.log(collections);

  let movieImageUrl =
    "https://image.tmdb.org/t/p/w500/" + collections[0].backdrop_path;
  let movieImageUrl2 =
    "https://image.tmdb.org/t/p/w500/" + collections[1].backdrop_path;
  let movieImageUrl3 =
    "https://image.tmdb.org/t/p/w500/" + collections[2].backdrop_path;

  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movieImageUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movieImageUrl2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movieImageUrl3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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

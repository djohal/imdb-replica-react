import { call, all, put, select, debounce } from "redux-saga/effects";

import { selectSearchInput } from "./search.selectors";

import axios from "../../axios-movies";

import {
  fetchSearchMovieSuccess,
  fetchSearchMovieFailure,
} from "./search.actions";

import MoviesActionType from "./search.types";

const API_KEY = process.env.REACT_APP_API_KEY;

export function* fetchSearchMovieAsync() {
  try {
    const searchInput = yield select(selectSearchInput);
    if (searchInput.trim() !== "") {
      const request = yield axios.get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput}`
      );
      const results = request.data.results;

      yield put(fetchSearchMovieSuccess(results));
    }
  } catch (error) {
    put(fetchSearchMovieFailure(error));
  }
}

export function* fetchSearchMovieStart() {
  yield debounce(
    100,
    MoviesActionType.FETCH_SEARCH_MOVIE_START,
    fetchSearchMovieAsync
  );
}

export function* searchSagas() {
  yield all([call(fetchSearchMovieStart)]);
}

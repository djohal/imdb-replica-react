import {
  call,
  all,
  put,
  select,
  fork,
  take,
  debounce,
  cancel,
} from "redux-saga/effects";

import { selectSearchInput } from "./search.selectors";

import axios from "../../axios-movies";

import {
  fetchSearchMovieSuccess,
  fetchSearchMovieFailure,
} from "./search.actions";

import MoviesActionType from "./search.types";

const API_KEY = process.env.REACT_APP_API_KEY;

function* searchMovies(input) {
  try {
    const request = yield axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${input}`
    );
    const results = request.data.results;
    yield put(fetchSearchMovieSuccess(results));
  } catch (error) {
    put(fetchSearchMovieFailure(error));
  }
}

export function* fetchSearchMovieAsync() {
  const searchInput = yield select(selectSearchInput);

  if (searchInput.trim() !== "") {
    const task = yield fork(yield searchMovies, searchInput);

    const action = yield take(["CLEAR_SEARCH_COLLECTIONS"]);

    // cancel the pending search api call when the below action gets triggered
    if (action.type === "CLEAR_SEARCH_COLLECTIONS") {
      yield cancel(task);
    }
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

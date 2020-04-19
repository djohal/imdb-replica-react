import { takeEvery, call, all, put } from "redux-saga/effects";

import axios from "../../axios-movies";

import {
  fetchFeaturedTodayFailure,
  fetchNowPlayingSuccess,
  fetchNowPlayingFailure,
  fetchFeaturedTodaySuccess,
} from "./movies.actions";

import MoviesActionType from "./movies.types";

const API_KEY = process.env.REACT_APP_API_KEY;


export function* fetchNowPlayingAsync() {
  try {
    const request = yield axios.get(
      `/movie/now_playing?api_key=${API_KEY}&language=en-US`
    );

    yield put(fetchNowPlayingSuccess(request.data.results));
  } catch (error) {
    put(fetchNowPlayingFailure(error));
  }
}

export function* fetchFeaturedTodayAsync() {
  try {
    const request = yield axios.get(
      `/trending/all/day?api_key=${API_KEY}&language=en-US`
    );

    yield put(fetchFeaturedTodaySuccess(request.data.results));
  } catch (error) {
    put(fetchFeaturedTodayFailure(error));
  }
}

export function* fetchNowPlayingStart() {
  yield takeEvery(
    MoviesActionType.FETCH_NOW_PLAYING_START,
    fetchNowPlayingAsync
  );
}
export function* fetchFeaturedTodayStart() {
  yield takeEvery(
    MoviesActionType.FETCH_FEATURED_TODAY_START,
    fetchFeaturedTodayAsync
  );
}

export function* moviesSaga() {
  yield all([call(fetchNowPlayingStart), call(fetchFeaturedTodayStart)]);
}

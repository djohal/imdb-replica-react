import { takeEvery, call, all, put } from "redux-saga/effects";

import axios from "../../axios-movies";

import {
  fetchNowPlayingSuccess,
  fetchNowPlayingFailure,
} from "./movies.actions";

import MoviesActionType from "./movies.types";

const API_KEY = process.env.REACT_APP_API_KEY;

export function* fetchNowPlayingAsync() {
  try {
    const nowPlayingCollectionRequest = yield axios.get(
      `/movie/now_playing?api_key=${API_KEY}&language=en-US`
    );

    const nowPlayingCollection = nowPlayingCollectionRequest.data.results;

    yield put(fetchNowPlayingSuccess(nowPlayingCollection));
  } catch (error) {
    put(fetchNowPlayingFailure(error));
  }
}

export function* fetchNowPlayingStart() {
  yield takeEvery(
    MoviesActionType.FETCH_NOW_PLAYING_START,
    fetchNowPlayingAsync
  );
}

export function* moviesSaga() {
  yield all([call(fetchNowPlayingStart)]);
}

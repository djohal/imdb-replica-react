import { takeEvery, call, all, put } from "redux-saga/effects";

import axios from "../../axios-movies";

import { fetchDataFailure, fetchDataSuccess } from "./movies.actions";

import MoviesActionType from "./movies.types";

const API_KEY = process.env.REACT_APP_API_KEY;

export function* fetchDataAsync({ url }) {
  try {
    const request = yield axios.get(`${url}?api_key=${API_KEY}&language=en-US`);

    yield put(fetchDataSuccess(request.data.results, url));
  } catch (error) {
    put(fetchDataFailure(error, url));
  }
}

export function* fetchDataStart() {
  yield takeEvery(MoviesActionType.FETCH_DATA_START, fetchDataAsync);
}

export function* moviesSaga(url) {
  yield all([call(fetchDataStart)]);
}

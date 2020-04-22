import { all, call } from "redux-saga/effects";

import { moviesSaga } from "./movies/movies.sagas";
import { searchSagas } from "./search/search.sagas";

export default function* rootSaga() {
  yield all([call(moviesSaga), call(searchSagas)]);
}

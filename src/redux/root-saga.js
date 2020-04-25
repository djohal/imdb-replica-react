import { all, call } from "redux-saga/effects";

import { moviesSaga } from "./movies/movies.sagas";
import { searchSagas } from "./search/search.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(moviesSaga), call(searchSagas), call(userSagas)]);
}

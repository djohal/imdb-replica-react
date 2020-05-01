import { takeLatest, put, all, call, select } from "redux-saga/effects";
import WatchlistActionTypes from "./watchlist.types";
import { selectCurrentUser } from "../user/user.selectors";
import { getUserWatchlistRef } from "../../firebase/firebase.utils";
import { selectWatchlistItems } from "./watchlist.selectors";
import { UserActionTypes } from "../user/user.types";
import { getUserWatchlistItems } from "./watchlist.actions";

export function* updateWatchlistInFirebase() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const watchlistRef = yield getUserWatchlistRef(currentUser.id);
      const watchlist = yield select(selectWatchlistItems);
      yield watchlistRef.update({ watchlist });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* getWatchlistItemsFromFirebase() {
  try {
    const currentUser = yield select(selectCurrentUser);
    const watchlistRef = yield getUserWatchlistRef(currentUser.id);
    const watchlistSnapshot = yield watchlistRef.get();
    yield put(getUserWatchlistItems(watchlistSnapshot.data().watchlist));
  } catch (error) {
    console.log(error);
  }
}

export function* onSignInGetWatchlistItems() {
  yield takeLatest(
    UserActionTypes.SIGN_IN_SUCCESS,
    getWatchlistItemsFromFirebase
  );
}

export function* onWatchlistUpdate() {
  yield takeLatest(
    [
      WatchlistActionTypes.ADD_ITEM_TO_WATCHLIST,
      WatchlistActionTypes.REMOVE_ITEM_FROM_WATCHLIST,
    ],
    updateWatchlistInFirebase
  );
}

export function* watchlistSagas() {
  yield all([call(onWatchlistUpdate), call(onSignInGetWatchlistItems)]);
}

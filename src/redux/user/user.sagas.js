import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

import {
  auth,
  googleProvider,
  facebookProvider,
  createUserProfileDocument,
  githubProvider,
} from "../../firebase/firebase.utils";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithThirdParty(provider) {
  try {
    const { user } = yield auth.signInWithPopup(provider);

    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START,
    signInWithThirdParty,
    googleProvider
  );
}

export function* onFacebookSignInStart() {
  yield takeLatest(
    UserActionTypes.FACEBOOK_SIGN_IN_START,
    signInWithThirdParty,
    facebookProvider
  );
}

export function* onGithubSignInStart() {
  yield takeLatest(
    UserActionTypes.GITHUB_SIGN_IN_START,
    signInWithThirdParty,
    githubProvider
  );
}

export function* signUp({ payload: { email, password, name } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, addtionalData: { name } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onFacebookSignInStart),
    call(onGithubSignInStart),
    call(onSignUpStart),
  ]);
}

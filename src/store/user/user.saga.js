import { all, call, put, takeLatest } from "@redux-saga/effects";

import { USER_ACTION_TYPE } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";

import { getCurrentUser } from "../../utils/firebase/firebase.utils";


export function* isUserAuthenticated() {
  try {
    const userAuth = call(getCurrentUser);
    if (!userAuth) return;
  }
  catch (error) {
  }

}




export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION,)
}


export function* userSaga() {
  yield all([call()]);
}
import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './auth/watchers';

export default function* startForman() {
  yield fork(watchUserAuthentication);
}
import { takeLatest } from 'redux-saga/effects';
import {weatherSagaData,favSagaData,getfavSagaData,removefavSagaData} from './authenticationSaga';


import * as types from '../../actions';


export default function* watchUserAuthentication() {

  yield takeLatest(types.GET_WEATHER, weatherSagaData);
  yield takeLatest(types.ADD_WEATHER_REQUEST, favSagaData);
  yield takeLatest(types.GET_FAVORITE_WEATHER, getfavSagaData);

  yield takeLatest(types.REMOVE_WEATHER_REQUEST, removefavSagaData);
  

}
import { put, call } from "redux-saga/effects";
import {

  weatherDataService,addFavDataService,getFavDataService,deleteFavDataService

} from "../../services/authenticationService";



import * as types from "../../actions";



export function* weatherSagaData(payload) {
  // console.log("i am indise reqesr ",payload)
  yield put({ type: types.GET_WEATHER_REQUEST });

  try {
    const response = yield call(weatherDataService, payload);


      // console.log("i am indise main response ",response)
      yield put({ type: types.GET_WEATHER_SUCCESS, response });
  
  } catch (error) {
    yield put({ type: types.GET_WEATHER_ERROR, error });
  }
}

export function* favSagaData(payload) {

  try {
    const response = yield call(addFavDataService, payload);

      // console.log("i am indise main response ",response)
      yield put({ type: types.ADD_WEATHER_SUCCESS, response });
  
  } catch (error) {
    yield put({ type: types.ADD_WEATHER_ERROR, error });
  }
}

export function* getfavSagaData(payload) {
  console.log("i am in fav saga get fav ");
  try {
    const response = yield call(getFavDataService, payload);

      // console.log("i am indise main response ",response)
      yield put({ type: types.GET_FAVORITE_WEATHER_SUCCESS, response });
  
  } catch (error) {
    yield put({ type: types.GET_FAVORITE_WEATHER_ERROR, error });
  }
}

export function* removefavSagaData(payload) {
  try {
    const response = yield call(deleteFavDataService, payload);

      // console.log("i am indise main response ",response)
      yield put({ type: types.REMOVE_WEATHER_SUCCESS, response });
  
  } catch (error) {
    yield put({ type: types.REMOVE_WEATHER_ERROR, error });
  }
}




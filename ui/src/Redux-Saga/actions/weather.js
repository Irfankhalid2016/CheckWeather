import * as types from "./index";




export const searchweather = (zipCode) => {
  return {
    type: types.GET_WEATHER,
    zip:zipCode,
  };
};


export const addFavorite = (user) => {
  console.log("add fav ",user);
  return {
    type: types.ADD_WEATHER_REQUEST,
    ...user,
  };
};


export const removeFavorite = (zip,index) => {
  // console.log("type remove ",data);
  return {
    type: types.REMOVE_WEATHER_REQUEST,
    zip:zip,
    index:index
  };
};
export const clearFavorite = () => {
  return {
    type: types.CLEAR_FAVORITE_WEATHER,
  };
};


export const getAllFavorite = (zipcode) => {
  // console.log("type tkaeeeting ",user);
  return {
    type: types.GET_FAVORITE_WEATHER,
    zip:zipcode,
  };
};


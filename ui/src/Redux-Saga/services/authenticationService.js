import {weatherApi,AddFavApi,getFavApi,removeFavApi} from "../api";




export const weatherDataService = (request) => {

  const WEATHER_DATA_API_ENDPOINT = weatherApi+`?zipCode=${request.zip}`;



  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  

  return (
    fetch(WEATHER_DATA_API_ENDPOINT, parameters)
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
  );
};

export const addFavDataService = (request) => {

  const WEATHER_DATA_API_ENDPOINT = AddFavApi;
  

  const parameters = {
    body: JSON.stringify({
      "locationName": request.name,
      "zipCode": request.zip
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  

  return (
    fetch(WEATHER_DATA_API_ENDPOINT, parameters)
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
  );
};


export const getFavDataService = (request) => {

  const WEATHER_DATA_API_ENDPOINT = getFavApi+`?zipCode=${request.zip}`;

  const parameters = {
  
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  

  return (
    fetch(WEATHER_DATA_API_ENDPOINT, parameters)
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
  );
};


export const deleteFavDataService = (request) => {

  const WEATHER_DATA_API_ENDPOINT = removeFavApi+`?zipCode=${request.zip}`;

  const parameters = {
  
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  

  return (
    fetch(WEATHER_DATA_API_ENDPOINT, parameters)
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
  );
};
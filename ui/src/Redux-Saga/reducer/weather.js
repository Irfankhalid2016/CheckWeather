import * as types from "../actions";
import { addFavorite } from "../actions/weather";

const initialState = {
  get_weatcher:{
},
  Favorites_weather: [
    
  ],
  success: "",
  error: "",
  // successDelete:"",
};

export default function (state = initialState, action) {
  const response = action.response;



  switch (action.type) {

    // =========================get weather ===============
    case types.GET_WEATHER_REQUEST:
      return { ...state};
    case types.GET_WEATHER_SUCCESS:
        console.log("i am in success of get wheter ",action)
       return {
        ...state,
        get_weatcher: response,
   };
    case types.GET_WEATHER_ERROR:
      return {
        ...state,
        success: "",
        error: response.message.error,
      };
      
      // ===========clear Favorite =======================

    case types.CLEAR_FAVORITE_WEATHER:
        return { 
          ...state,
          Favorites_weather: [],
        };
      // ===========add addFavorite =======================
      case types.ADD_WEATHER_REQUEST:
        return { ...state};
      case types.ADD_WEATHER_SUCCESS:

    
         return {
          ...state,
          // Favorites_weather: [...state.Favorites_weather,action.user],
   
        };
  
      case types.ADD_WEATHER_ERROR:

        return {
          ...state,
          success: "",
          // error: response.message.error,
        };
      
        // ==========remove Favorite==============================


        case types.REMOVE_WEATHER_REQUEST:
          let favourite = state.Favorites_weather;
          console.log("data in action ",action,favourite
          )
         favourite.splice(action.index, 1);
         console.log("after remove ",favourite)
          return { ...state,
            Favorites_weather: [...favourite] 
          };
          case types.REMOVE_WEATHER_SUCCESS:
          
          // console.log("remove action.user",action.data)
           
           return {
            ...state,
        

       };
        case types.REMOVE_WEATHER_ERROR:
          return {
            ...state,
            success: "",
          };


          // ==============================get all Favorite ===========================




          case types.GET_FAVORITE_WEATHER_REQUEST:
            return { ...state};
          case types.GET_FAVORITE_WEATHER_SUCCESS:
            return {
              ...state,
              Favorites_weather: response,
            };
          case types.GET_FAVORITE_WEATHER_ERROR:
            return {
              ...state,
              success: "",
              error: response.message.error,
            };



    default:
      return state;
  }
}


import React, { useState } from "react";
import { addFavorite } from "../Redux-Saga/actions/weather";
import { connect } from "react-redux";



function AddCity({weather_city,addFavorite,weather_length}) {


  console.log("weather_city",weather_city)
    

const add_fav=()=>{
  
  addFavorite({name:weather_city.locationName,zip:weather_city.zip})

}




    return Object.keys(weather_city).length>0? (
        <>
    <div className="container">
    <footer className="footer">

        <p contentEditable="true" spellcheckker="false">
        </p><div className="card" style={{marginTop: '30px'}}>
          <div className="card" style={{marginTop: '0px'}}>
            <div className="card-body" style={{marginTop: '0px'}}>
              <h4 className="card-title">
                <b>{weather_city.locationName}</b>
              </h4>
              <div className="row" style={{}}>
                <div className="col-sm-4">
                  <h1>
                  {weather_city.weather}°
                  </h1><h6 style={{}}>{weather_city.weatherStatus}</h6>
                </div>
                <div className="col-sm-4 col-5">
                  <h3 />
                </div>
                <div className="col-sm-4">
                  <h5 style={{}}>Precipitation {weather_city.precipitation}%</h5>
                  <h5 style={{}}>Humidity {weather_city.humidity}%</h5>
                  <h5 style={{}}>Wind {weather_city.wind} mph</h5>
                  <div className="row" style={{}}>
                    <div className="col-sm-4" />
                    <div className="col-sm-4 col-5" />
                    <div className="col-sm-4" />
                  </div>
                </div>
              </div>
              <button  className="btn btn-primary" onClick={add_fav}>Add to favorites</button>   
            </div>
          </div>
        </div>
        © Firstly NodeJS 2021<p />
      </footer>
      </div>
        
        </>
        ):null
    }
    
        
  const mapStateToProps = (state) => ({
    weather_city:state.weather.get_weatcher,
  });
  
  const mapDispatchToProps = (dispatch) => ({
  
    addFavorite: (data) => dispatch(addFavorite(data)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(AddCity);

  

import React, { useState } from "react";

import { searchweather,getAllFavorite,clearFavorite } from "../Redux-Saga/actions/weather";
import { connect } from "react-redux";
function Header({searchweather,getFav,clearFav}) {



 const [ postcode,setPostcode]=useState()
    
  const get_city_weatcher=(e)=>{
    searchweather(postcode)


  }
 
    return (
        <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{}}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">     <span className="navbar-toggler-icon" />   </button>         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">             </li>
              <li className="nav-item">              </li>
              <li className="nav-item">              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0" _lpchecked={1}>         */}
                <input value={postcode} className="form-control mr-sm-2" type="text" maxLength={5} placeholder="Zip Code" aria-label="Zip Code" onChange={
                  (e)=>{
                  if(e.target.value.length>0){
                    getFav(e.target.value)
                  }
                  else{
                    clearFav()
                  }
                  
                  setPostcode(e.target.value)}} 
                  /> 
                  <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={get_city_weatcher}>Search</button>  
            {/* </form> */}
          </div>
        </nav>
      </div>
        
        </>
        )}

const mapStateToProps = (state) => ({
  weather:state.weather
});

const mapDispatchToProps = (dispatch) => ({

  searchweather: (data) => dispatch(searchweather(data)),
  getFav:(data)=>dispatch(getAllFavorite(data)),
  clearFav:(data)=>dispatch(clearFavorite(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

  
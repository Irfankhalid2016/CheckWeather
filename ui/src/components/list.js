
import React, { useState } from "react";
import { removeFavorite,searchweather } from "../Redux-Saga/actions/weather";
import { connect } from "react-redux";



function List({Favorites_weather,removeFavorite,searchweather}) {


// const remove_favrit=(i)=>{

//   removeFavorite(i)
//   console.log("remove ",i)


// }


    
    return (
        <>
        <div className="container">
    <footer className="footer">
        <ul className="list-group" style={{}}>

          {
            Favorites_weather.map((item,i)=>{

              return(

              <>
       
              <li style={{cursor:"pointer"}} onClick={()=>{

                  searchweather(item.zipCode)
              }} key={i} className="list-group-item">{item.locationName}<button key={i} type="button" className="btn btn-default" style={{display: 'inline', float: 'right'}} onClick={()=>{removeFavorite(item.zipCode,i)}} >X</button></li>
              </>
              )
            })
          }

        </ul>
      
      </footer>
      </div>
        </>
        )}
        
        const mapStateToProps = (state) => ({
          Favorites_weather:state.weather.Favorites_weather
        });
        
        const mapDispatchToProps = (dispatch) => ({
       
          removeFavorite: (zip,index) => dispatch(removeFavorite(zip,index)),
          searchweather: (data) => dispatch(searchweather(data)),
        });
        export default connect(mapStateToProps, mapDispatchToProps)(List);

  
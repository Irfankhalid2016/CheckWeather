from fastapi import FastAPI
from pydantic import BaseModel
import requests
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models.database import *
from models.fav_model import *
from fastapi import Depends, FastAPI, HTTPException

import uvicorn
class FavZips(BaseModel):
    locationName: str
    zipCode: str
    

app = FastAPI()

Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/") 
async def root():
    return{"message":"Helloween is bad"}

@app.get("/currentweather/")
async def get_current_weather(zipCode : str ):
    url = f"http://api.openweathermap.org/data/2.5/weather?zip={zipCode}&appid=8e6d1977e933d4ef1fad8bbf1394af5a"

    payload = ""
    headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic Og=='
    }

    response = requests.request("GET", url, headers=headers, data=payload)
    weather = response.json()
    data={
        "locationName":weather.get("name","N/A"),
        "precipitation":weather.get("main",{}).get("feels_like","N/A"),
        "humidity":weather.get("main",{}).get("humidity","N/A"),
        "wind":weather.get("wind",{}).get("speed","N/A"),
        "weather":weather.get("main",{}).get("temp","N/A"),
        "weatherStatus":weather.get("weather",[{}])[0].get("main","N/A"),
        "isFav":True,
        "zip":zipCode

    }
    return data
@app.get("/getfav/")
async def get_fav_zip(zipCode : str,db: Session = Depends(get_db)  ):
    Fav_location__ =db.query(Fav_Location).filter(Fav_Location.zipCode.ilike("%"+zipCode+"%")).all()
    print("fav location ",Fav_location__)
    
    return Fav_location__

@app.post("/addtofav/")
async def add_fav(data : FavZips,db: Session = Depends(get_db) ):
    db_item = Fav_Location(locationName=data.locationName,zipCode=data.zipCode,)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return {"locationName":data.locationName,"zipCode":data.zipCode,"status":"Saved Successfully"}


@app.get("/removefromfav/")
async def remove_fav(zipCode : str,db: Session = Depends(get_db) ):
    Fav_location__ =db.query(Fav_Location).filter(Fav_Location.zipCode == zipCode).delete()
  
    db.commit()

    return {"status":"Removed Successfully"}

if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, reload=True)
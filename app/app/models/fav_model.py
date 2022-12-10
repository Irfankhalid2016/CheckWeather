from sqlalchemy import Column, Integer, String
from sqlalchemy.types import Date
from .database import Base


class Fav_Location(Base):
    __tablename__ = "Fav Weathers Location"

    id = Column(Integer, primary_key=True, index=True)

    zipCode = Column(String(5), index=True)
    locationName = Column(String(255))
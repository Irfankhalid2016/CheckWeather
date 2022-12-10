
import os

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker,Session






SQLALCHEMY_DATABASE_URI = "sqlite:///weather.db"  # 1


engine = create_engine(  # 2
    SQLALCHEMY_DATABASE_URI,
    # required for sqlite
    connect_args={"check_same_thread": False},  # 3
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)  # 4
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
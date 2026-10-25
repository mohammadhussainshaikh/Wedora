import os

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase,sessionmaker
from  sqlalchemy.engine import URL
from pathlib import Path

# Load the .env file from the Backend folder
env_path = Path(__file__).resolve().parents[2]/".env"
load_dotenv(env_path)


# Read database settings
DB_USER= os.getenv("DB_USER", "root")
DB_PASSWORD = os.getenv("DB_PASSWORD","")
DB_HOST = os.getenv("DB_HOST","localhost")
DB_PORT = int(os.getenv("DB_PORT","3306"))
DB_NAME = os.getenv("DB_NAME" , "wedora_db")

# Build the database URL safely
DATABASE_URL = URL.create(
    drivername="mysql+pymysql",
    username=DB_USER,
    password=DB_PASSWORD,
    host=DB_HOST,
    port=DB_PORT,
    database=DB_NAME,
)
# Create the SQLAlchemy engine
engine =create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
)

# Create a session factory
sessionlocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)

# Base class for all database models
class Base(DeclarativeBase):
    pass

# Provide a database session to FastAPI endpoints
def get_db():
    db =sessionlocal()
    try:
        yield db
    finally:
        db.close()
        
        
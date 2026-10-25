
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.Authentication.controller import router as authentication_router

app = FastAPI(
    title="Wedora API",
    description="Wedding Services Booking Marketplace API",
    version="1.0.0",
)

# Allow the React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Wedora backend is running"}


app.include_router(authentication_router)

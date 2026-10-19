from fastapi import FastAPI

app = FastAPI(title="Wedora API")


@app.get("/")
def home():
    return {"message": "Wedora backend is running"}

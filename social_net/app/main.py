from fastapi import FastAPI
import routers.auth_router

app = FastAPI()

app.include_router(routers.auth_router.router)

@app.get("/")
def home():
    return {"message": "Hello World!"}




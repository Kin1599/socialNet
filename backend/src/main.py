
import uvicorn
from fastapi import FastAPI
from auth.router import router as auth_router
from database import Base, engine

#* Инициализация базы данных
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="SocialNet API"
)

#* ROUTERS
app.include_router(auth_router, prefix='/auth')

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8081, reload=True)
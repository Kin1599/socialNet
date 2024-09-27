
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from .schemas import UserCreate, Token
from database import get_session
from .utils import create_access_token
from .service import create_user, authenticate_user

router = APIRouter()

@router.post("/login")
def login_user(email: str, password: str, db: Session = Depends(get_session)):

    user = authenticate_user(db, email, password)

    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": user.email})
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/register", response_model=Token)
def register_user(user: UserCreate, db: Session = Depends(get_session)):
    
    new_user = create_user(db, user)

    # Генерируем JWT токен для нового пользователя
    access_token = create_access_token(data={"sub": new_user.email})

    return {"access_token": access_token, "token_type": "bearer"}

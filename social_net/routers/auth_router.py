from fastapi import APIRouter, HTTPException
from app.db_me import create_new_user, user_login
from passlib.hash import pbkdf2_sha256
from app.models import UserDto, UserDtoLogin, UserReg

router = APIRouter(tags=['Auth'])

@router.post("/register")
def register_new_user(user: UserReg) -> UserDto:

    new_user = create_new_user(login=user.login, name=user.name,
                           email=user.email, surname=user.surname,
                            password=user.password)
    return new_user

@router.post("/login")
def login(user: UserDtoLogin) -> UserDto:
    log_user = user_login(login=user.login, password=user.password)
    if log_user.id:
        return log_user
    raise HTTPException(status_code=404, detail="Item Not Found")
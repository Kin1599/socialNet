from pydantic import BaseModel

class UserDto(BaseModel):
    id: int = 0
    login: str = ""
    name: str = ""
    surname: str = ""
    email: str = ""
    pass_hash: str = ""

class UserReg(BaseModel):
    login: str = ""
    name: str = ""
    surname: str = ""
    email: str = ""
    password: str = ""

class UserDtoLogin(BaseModel):
    login: str
    password: str
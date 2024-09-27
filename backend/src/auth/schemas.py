
from pydantic import BaseModel, EmailStr, Field

class UserBase(BaseModel):
    firstname: str
    lastname: str
    email: EmailStr
    age: int
    gender: str = Field(min_length=1, max_length=1)
    
class UserCreate(UserBase):
    hashed_password: str

class User(UserBase):
    id: int

    class Config:
        from_attributes = True # Включает поддержку преобразования данных из SQLAlchemy в Pydantic

class Token(BaseModel):
    access_token: str
    token_type: str

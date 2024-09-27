
from sqlalchemy import Column, Integer, String, CHAR
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column("id", Integer, primary_key=True)
    firstname = Column("firstname", String(50))
    lastname = Column("lastname", String(50))
    email = Column("email", String, unique=True)
    gender = Column("gender", CHAR(1))
    age = Column("age", Integer)
    hashed_password = Column("hashed_password", String(255))
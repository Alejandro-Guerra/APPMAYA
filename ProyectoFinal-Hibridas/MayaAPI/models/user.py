from sqlmodel import SQLModel, Field
from typing import Optional

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    password: str
    username: str
    xp: int = 0
    lives: int = 5
    streak: int = 0
    level: int = 1

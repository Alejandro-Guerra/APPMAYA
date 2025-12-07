from fastapi import APIRouter, HTTPException
from sqlmodel import Session, select
from database import engine
from models.user import User
from models.auth import RegisterData, LoginData
import bcrypt
import jwt
import time

SECRET_KEY = "supersecretkey123"

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register")
def register(data: RegisterData):
    hashed = bcrypt.hashpw(data.password.encode(), bcrypt.gensalt()).decode()

    with Session(engine) as session:
        exists = session.exec(select(User).where(User.email == data.email)).first()
        if exists:
            raise HTTPException(400, "El correo ya está registrado")

        user = User(email=data.email, username=data.username, password=hashed)
        session.add(user)
        session.commit()
        session.refresh(user)

        return {"message": "Usuario registrado", "user_id": user.id}


@router.post("/login")
def login(data: LoginData):
    with Session(engine) as session:
        user = session.exec(select(User).where(User.email == data.email)).first()
        if not user:
            raise HTTPException(400, "Usuario no encontrado")

        if not bcrypt.checkpw(data.password.encode(), user.password.encode()):
            raise HTTPException(400, "Contraseña incorrecta")

        payload = {
            "sub": user.id,
            "exp": time.time() + 60 * 60 * 24,
        }

        token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

        return {
            "message": "Login exitoso",
            "token": token,
            "user": {
                "id": user.id,
                "email": user.email,
                "username": user.username,
                "xp": user.xp,
                "lives": user.lives,
                "streak": user.streak,
                "level": user.level,
            }
        }

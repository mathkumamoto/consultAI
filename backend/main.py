from fastapi import FastAPI,HTTPException
from pydantic import BaseModel,EmailStr

app=FastAPI()

class LoginRequest(BaseModel):
    email:EmailStr
    password:str

    pass
@app.post("/login")
async def login(data:LoginRequest):
    if (
        data.email == "example@gmail.com"
        and data.password == "password123"
    ):
        return {
            "message": "Login Successful"
        }

    raise HTTPException(
        status_code=401,
        detail="メールアドレスもしくはパスワードが間違っています"
    )

from pydantic import BaseModel, EmailStr , Field

class AuthenticationCreate(BaseModel):
    email:EmailStr
    password: str = Field(min_length=8,max_length=128)
    
class CustomerRegistration(BaseModel):
    full_name: str = Field(min_length=2,max_length=100)
    mobile_number: str = Field(min_length=10, max_length=15)
    city : str  | None = Field(default=None,max_length=100)
    email:EmailStr
    password:str= Field(min_length=8 , max_length=128)
    
    
    
class CustomerRegistrationResponse(BaseModel):
    customer_id:int
    full_name:str
    mobile_number:str
    city:str|None=None
    email:EmailStr
    role:str
    message:str
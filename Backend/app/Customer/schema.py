from datetime import datetime

from pydantic import BaseModel,configDict

class CustomerCreate(BaseModel):
    full_name:str
    mobile_number:str
    city: str|None=None
    
class CustomerResponse(BaseModel):
    customer_id: int
    full_name:str
    mobile_number:str
    city:str| None=None
    is_verified:bool
    is_active:bool
    created_at:datetime
    updated_at:datetime
    
    
    model_confiq =configDict(from_attributes=True)
from fastapi import APIRouter ,Depends,HTTPException,status

from sqlalchemy.orm import session

from app.Config.database import get_db
from app.Authentication.schema import (CustomerRegistration,CustomerRegistrationResponse)

from app.Authentication.service import AuthenticationService

router=APIRouter(prefix="/api/auth",tags=["Authentication"])

@router.post("/register",response_model=CustomerRegistrationResponse,status_code=status.HTTP_201_CREATED)

def register_customer(registration_data:CustomerRegistration,db:session=Depends(get_db)):
    service=AuthenticationService(db)
    
    try:
        customer,authentication = service.register_customer(registration_data)
        
        return CustomerRegistrationResponse(
            customer_id=customer.customer_id,
            full_name=customer.full_name,
            mobile_number=customer.mobile_number,
            city=customer.city,
            email=authentication.email,
            role=authentication.role,
            message="Registration Successfull"
        )
        
        
    except ValueError as error:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,detail=str(error))from error   
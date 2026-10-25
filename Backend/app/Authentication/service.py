from sqlalchemy.orm import session

from pwdlib import PasswordHash

from app.Customer.repository import CustomerRespository
from app.Authentication.repository import AuthenticationRepository
from app.Authentication.schema import CustomerRegistration


password_hash= PasswordHash.recommended()

class AuthenticationService:
    def __init__(self,db:session):
        self.db=db
        self.customer_repository = CustomerRespository(db)
        self.authentication_repository = AuthenticationRepository(db)
        
        
        
    def register_customer(self , registration_data:CustomerRegistration):
        try:
            existing_authentication=(
                self.authentication_repository.find_by_email(
                    registration_data.email
                )
            )
            
            if existing_authentication:
                raise ValueError("Email is already registered")
            
            customer_data={
                "full_name":registration_data.full_name,
                "mobile_number":registration_data.mobile_number,
                "city":registration_data.city
            }
            
            customer=self.customer_repository.create(customer_data)
            
            
            hashed_password = password_hash.hash(
                registration_data.password
            )
            
            
            authentication_data={
                "customer_id":  customer.customer_id,
                "email": str(registration_data.email),
                "hashed_password":hashed_password,
                "role":"customer",
                "is_email_verified":False
            }
            
            
            authentication = self.authentication_repository.create(authentication_data)
            
            self.db.commit()
            
            return customer,authentication
        
    
        except Exception:
            self.db.rollback()
            raise
        
from sqlalchemy.orm import session

from app.Customer.repository import CustomerRespository
from app.Customer.schema import CustomerCreate


class CustomerService:
    
    def __init__(self, db:session):
        self.repository =CustomerRespository(db)
        
        
    def create_customer(self, customer_data:CustomerCreate):
        customer_dict= customer_data.model_dump()
        
        return self.repository.create(customer_dict)
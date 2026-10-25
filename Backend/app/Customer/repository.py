from sqlalchemy.orm import session

from app.Customer.model import Customer


class CustomerRespository:
    
    def __init__(self,db:session):
        self.db=db
        
        
    def create(self,customer_data:dict)->Customer:
        customer=Customer(**customer_data)
        
        self.db.add(customer)
        self.db.flush()
        
        return customer
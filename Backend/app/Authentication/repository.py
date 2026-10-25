from sqlalchemy import select

from sqlalchemy.orm import session 

from app.Authentication.model import Authentication


class AuthenticationRepository:
    def __init__(self,db:session):
        self.db = db
        
    def find_by_email(self, email:str)-> Authentication| None:
        statement = select(Authentication).where(
            Authentication.email == email
        )
        return self.db.scalar(statement)
    
    
    def create(self,authentication_data:dict)->Authentication:
        authentication =Authentication(**authentication_data)
        
        self.db.add(authentication)
        self.db.flush()
        
        return authentication
from datetime import datetime

from sqlalchemy import String,Boolean,DateTime,ForeignKey,func
from sqlalchemy.orm import Mapped ,mapped_column,relationship

from app.Config.database import Base

class Authentication(Base):
    __tablename__="authentications"
    
    auth_id: Mapped[int] = mapped_column(primary_key=True,autoincrement=True)
    customer_id:Mapped[int] = mapped_column(ForeignKey("customer.customer_id"),unique=True,nullable=False)
    email: Mapped[str] = mapped_column(String(150),unique=True,index=True,nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(255),nullable=False)
    role: Mapped[str] = mapped_column(String(30),default="customer",nullable=False)
    is_email_verified: Mapped[bool] = mapped_column(Boolean,default=False,nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime,server_default=func.now(),nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime,server_default=func.now(),onupdate=func.now(),nullable=False)
    customer = relationship("Customer",back_populates="authentication")

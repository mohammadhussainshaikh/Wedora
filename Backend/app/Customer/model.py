from datetime import datetime

from sqlalchemy import String,Boolean, DateTime,func
from sqlalchemy.orm import Mapped,mapped_column, relationship

from app.Config.database import Base

class Customer(Base):
    __tablename__="customer"
        
    customer_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    full_name: Mapped[str] = mapped_column(String(100),nullable=False)
    mobile_number: Mapped[str] = mapped_column(String(15),nullable=False)
    city: Mapped[str] = mapped_column(String(100),nullable=True)
    is_verified : Mapped[bool] = mapped_column(Boolean,default=False,nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean , default=True ,nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime,server_default=func.now(),nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime,server_default=func.now(),onupdate=func.now(),nullable=False)
    authentication=relationship("Authentication",back_populates="customer",uselist=False)
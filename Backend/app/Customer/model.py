from datetime import datetime
from typing import Optional

from sqlalchemy import String,Boolean, DateTime,func
from sqlalchemy.orm import Mapped,mapped_column

from app.Config.database import Base

class Customer(Base):
    __tablename__="customer"
    
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    full_name: Mapped[str] = mapped_column(String(100),nullable=False)
    email: Mapped[str] = mapped_column(String(150), unique=True , index=True, nullable=False)
    phone: Mapped[str] = mapped_column(String(15),nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    city: Mapped[str] = mapped_column(String(100),nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean , default=True ,nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime,server_default=func.now())
    Updated_at: Mapped[datetime] = mapped_column(DateTime,server_default=func.now(),onupdate=func.now())
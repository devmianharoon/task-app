from sqlalchemy import Boolean, Column, Integer, String

from .database import Base


class Todo(Base):
    __tablename__ = "todo"
    id = Column(Integer, primary_key=True)
    text = Column(String)
    # is_active = Column(Boolean, default=True)

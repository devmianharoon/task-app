from pydantic import BaseModel


class Todo(BaseModel):
    text: str
    # is_active: bool


class updateTodo(BaseModel):
    id: int
    text: str
    # is_active: bool

class deleteTodo(BaseModel):
    id: int
    
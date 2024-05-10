from sqlalchemy.orm import Session
from . import models
from . import schemas

# Get Singel Todo Fuction
def get_todo(db: Session, id: int):
    return db.query(models.Todo).filter(models.Todo.id == id).first()


# Get ALL Todos Fuction
def get_todos(db: Session):
    return db.query(models.Todo).all()


# Create New Todo Fuction
def create_todo(db: Session, todo: schemas.Todo):
    db_todo = models.Todo(text=todo.text )
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return "Todo added SucessFully"

# Update Todo By Using Id
def update_todo(db: Session, todo: schemas.updateTodo):
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo.id).first()
    if db_todo:
        db_todo.text = todo.text
        # db_todo.is_active = todo.is_active
        db.commit()
        db.refresh(db_todo)
        return "Todo Updated SucessFully" , db_todo
    else:
        return None

# Delete Todo By Using Todo
def delete_todo(db: Session, id: int):
    todo = db.query(models.Todo).filter(models.Todo.id == id).first()
    if todo:
        db.delete(todo)
        db.commit()
        return True
    else:
        return False
        


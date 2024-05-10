from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import uvicorn
from . import models, schemas
from .database import SessionLocal, engine
from .crud import create_todo, get_todos, get_todo, update_todo, delete_todo

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Configure CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # Update this with your frontend URL
#     allow_credentials=True,
#     allow_methods=["GET", "POST", "PUT", "DELETE"],
#     allow_headers=["*"],
# )

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# GET Single Todo By Using ID
@app.get('/api/todo/{id}', response_model=schemas.Todo)
def get_single_todo(id: int, db: Session = Depends(get_db)):
    todo = get_todo(db=db, id=id)
    if todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

# GET All Todos
@app.get('/api/todos')
def get_todos_route(db: Session = Depends(get_db)):
    todos = get_todos(db=db)
    return todos

# POST New Todo 
@app.post("/api/todo")
def create_todo_endpoint(todo: schemas.Todo, db: Session = Depends(get_db)):
    result = create_todo(db=db, todo=todo)
    return result

# DELETE Todo By Using ID
@app.delete("/api/deletetodo/{id}")
def delete_todo_endpoint(id: int, db: Session = Depends(get_db)):
    result = delete_todo(db=db, id=id)
    if result:
        return {"success": True,  "message": "Todo Deleted Successfully"}
    else:
        return {"success": False, "message": "Todo not found"}

# Update Todo By Using ID
@app.put("/api/updatetodo")
def update_todo_endpoint(todo: schemas.updateTodo, db: Session = Depends(get_db)):
    result = update_todo(db=db, todo=todo)
    if result:
        return result
    else:
        return {"error": "Todo item not found"}

# To Start Uvicorn Server
def start():
    uvicorn.run("todo.main:app",
                host="127.0.0.1", port=8080, reload=True)

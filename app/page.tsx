import TodoList from "./(components)/todoList/page";
import { getTask } from "./actions/actions";
import { todoItemProps } from "./types/types";

export default async function Home() {

  const todoList: [] = await getTask();
 

  return (
    <>
      <div className="bg-[#640D6B] h-[630px]  ">
        <h1 className="font-poetsen text-center text-3xl  text-white p-5">Get Things Done!</h1>
        <div className="h-[auto] w-[450px] px-6 py-8 bg-[#8644A2] m-auto ">
          <div>
            <input className="bg-inherit border-2 border-[#C65BCF] w-full sm:w-[313px] h-[50px] p-2" type="text" name="" id="" placeholder="What is the task today? " />
            <button className="h-[50px] p-2 bg-[#C65BCF] text-white  ">Add Task </button>
          </div>
          {todoList && todoList.map((todos: todoItemProps) => (
            <TodoList text={todos.text} key={todos.id} is_active={todos.is_active} id={todos.id} />
          ))}
        </div>
      </div>
    </>
  );
}

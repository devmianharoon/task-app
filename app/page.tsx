import InputTask from "./(components)/inputTask/page";
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
          <InputTask />
          {todoList && todoList.map((todos: todoItemProps,index:number) => (
            <TodoList text={todos.text} key={index}  id={todos.id} />
          ))}
        </div>
      </div>
    </>
  );
}



import TodoList from "@/component/todoList/page";

export default async function Home() {
 

 

  return (
    <>
      <div className="bg-[#640D6B] h-full  ">
        <h1 className="font-poetsen text-center text-3xl  text-white p-5">Get Things Done!</h1>
        <div className="h-[450px] w-[450px] px-6 py-8 bg-[#4793AF] m-auto ">
          <div>
            <input className="bg-inherit border-2 border-[#C65BCF] w-full sm:w-[313px] h-[50px] p-2" type="text" name="" id="" placeholder="What is the task today? " />
            <button className="h-[50px] p-2 bg-[#C65BCF] text-white  ">Add Task </button>
          </div>
          <TodoList />
          
        </div>
      </div>
    </>
  );
}


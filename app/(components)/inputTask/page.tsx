'use client'
import { postTask } from "@/app/actions/actions";
import { useState } from "react"

export default function InputTask() {
    const [input,setInput]=useState();
    // console.log(input);
    


    return (
        <div>
            <input className="bg-inherit border-2 border-[#C65BCF] w-full sm:w-[313px] h-[50px] p-2" 
            type="text" name="" id="" placeholder="What is the task today? "
            value={input}
            onChange={(e:any)=>(setInput(e.target.value))}
            />
            <button className="h-[50px] p-2 bg-[#C65BCF] text-white  "onClick={()=>(postTask({content:input}))}>Add Task </button>
        </div>
    )
}

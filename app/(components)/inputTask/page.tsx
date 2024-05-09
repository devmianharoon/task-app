'use client'
import { postTask } from "@/app/actions/actions";
import { useState } from "react";

export default function InputTask() {
    const [input, setInput] = useState('');
    const [isAdd, setisAdd] = useState<boolean>(false);
    const handleAddTask = async () => {
        if (input.trim() !== '') {
            await postTask({ text: input });
            setInput('');
            setInput(''); 
            setisAdd(true)
        } else {
            console.error('Input cannot be empty');
        }

    };

    return (
        <>
            <div>
                <input
                    className="bg-inherit border-2 border-[#C65BCF] w-full sm:w-[313px] h-[50px] p-2"
                    type="text"
                    placeholder="What is the task today?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="h-[50px] p-2 bg-[#C65BCF] text-white"
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>
            {isAdd &&
                <h1 className='mt-1 text-lg font-poetsen text-center text-slate-800'>Task Added Successfully!</h1>
            }
        </>
    );
}

'use client'
import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UpdateModel from '../updateModel/page';
import { todoItemProps } from '@/app/types/types';
import { deleteTodo } from '@/app/actions/actions';



export default function TodoList(props:todoItemProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onUpdate = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className='bg-[#C65BCF] mt-3 w-full h-[50px] p-2 sm:w-[400px] flex justify-between items-center border-4 border-white rounded-lg'>
            <h1 className='text-white text-base font-medium'>{props.text}</h1>
            <div className='flex gap-3'>
                <button>
                    <FaRegEdit onClick={onUpdate} className='text-white' />
                </button>
                <button onClick={()=>(deleteTodo(props.id))}>
                    <MdDelete className='text-white' />
                </button>
                <input type="checkbox" id="checkbox_id" name="checkbox_name" value="checkbox_value" />
            </div>
            <UpdateModel isOpen={isOpen} onClose={onClose} id={props.id}/>
        </div>
    )
};


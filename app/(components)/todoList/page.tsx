'use client'
import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UpdateModel from '../updateModel/page';
import { todoItemProps } from '@/app/types/types';
import { deleteTodo } from '@/app/actions/actions';



export default function TodoList(props: todoItemProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const onUpdate = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }
    const deleteHandler = () => {
        deleteTodo(props.id)
        setIsDeleted(true);

    }
    return (
        <>
            {isDeleted &&
                <h1 className='text-lg font-poetsen text-center text-red-700'>Task Deleted Successfully!</h1>
            }
            <div className='bg-[#C65BCF] mt-3 w-full h-[50px] p-2 sm:w-[400px] flex justify-between items-center border-4 border-white rounded-lg'>
                <h1 className='text-white text-base font-medium'>{props.text}</h1>
                <div className='flex gap-3'>
                    <button>
                        <FaRegEdit onClick={onUpdate} className='text-white' />
                    </button>
                    <button onClick={deleteHandler}>
                        <MdDelete className='text-white' />
                    </button>

                    <input type="checkbox" id="checkbox_id" name="checkbox_name" value="checkbox_value" />
                </div>
                <UpdateModel isOpen={isOpen} onClose={onClose} id={props.id} />
            </div>
        </>
    )
};


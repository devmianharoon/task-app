'use client'
import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import UpdateModel from '../updateModel/page';



export default function TodoList() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onUpdate = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className='bg-[#C65BCF] w-full h-[50px] p-2 sm:w-[400px] flex justify-between items-center border-4 border-white rounded-lg'>
            <h1 className='text-white text-base font-medium'>Something</h1>
            <div className='flex gap-3'>
                <button>
                    <FaRegEdit onClick={onUpdate} className='text-white' />
                </button>
                <button>
                    <MdDelete className='text-white' />
                </button>
                <input type="checkbox" id="checkbox_id" name="checkbox_name" value="checkbox_value" />
            </div>
            <UpdateModel isOpen={isOpen} onClose={onClose} />
        </div>

    )
};


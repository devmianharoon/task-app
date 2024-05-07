'use client'
import React from 'react'
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
        <div className='bg-[#C65BCF] flex justify-between items-center w-full sm:w-[400px] h-[50px] p-2 border-[5px] rounded-md '>
            <h1 className='text-white text-base font-medium' >Something</h1>
            <div className='flex gap-3'>
                <button><FaRegEdit onClick={onUpdate} className='text-white ' /></button>
                <UpdateModel isOpen={isOpen} onClose={onClose} />
                <button><MdDelete className='text-white' /></button>
                <input type="checkbox" id="checkbox_id" name="checkbox_name" value="checkbox_value" />
            </div>
        </div>
    )
};


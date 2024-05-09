'use client '
import { UpdateTodo, getSingleTask } from '@/app/actions/actions';
import { ModalProps } from '@/app/types/types';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';


export default function UpdateModel({ isOpen, onClose, id }: ModalProps) {
    const [value, setValue] = useState<string>()
    useEffect(() => {
        const fetchData = async () => {
            const result = await getSingleTask(id);
            setValue(result.text || '');
        };
        if (isOpen) {
            fetchData();
        }
    }, [isOpen, id]);
    const handleChange = (e: any) => {
        setValue(e.target.value);
    };
    
    const dataForUpdate={
        id: id,
        text:value
    }  

    const updateHandler = () => {
        UpdateTodo(dataForUpdate)
        onClose()
    }

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
                <div className="modal-container bg-[#A87676] w-96 mx-auto mt-20 p-6 rounded shadow-lg">
                    <div className="mb-4">
                        <div className='flex justify-between'>
                            <h3 className="text-2xl  mb-2 font-poetsen text-white">Update Task</h3>
                            <button onClick={onClose}>
                                <FaTimes className="text-3xl text-red-500 hover:text-gray-700 cursor-pointer" />
                            </button>
                        </div>
                        <label className="block text-white text-sm mb-2" htmlFor="note">
                            Todo
                        </label>
                        <textarea
                            value={value}
                            id="note"
                            className="w-full border p-2 mb-2 bg-[#A87676]"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-[#C65BCF] text-white px-4 py-2 rounded hover:bg-[#B51B75]" onClick={updateHandler}>
                            Update Todo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


'use server'
import axios from "axios";
import { revalidateTag } from "next/cache";

const backendUrl = "http://127.0.0.1:8000/api"; // Get All Task

// Post New Task
export const postTask = async (taskData: { text: string }) => {
  const response = await axios.post(`${backendUrl}/todo/`, taskData);
  revalidateTag('task')
  return response.data;


};
   
// Get ALL Task
;
export const getTask = async () => {
  try {
    const response = await axios.get(`${backendUrl}/todos`, {
      params: {
        tags: ['task']
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; 
  }}



// Delete Task
export const deleteTodo = async (id: number) => {
  const deletetodo = await axios.delete(`${backendUrl}/deletetodo/${id}`);
  revalidateTag('task')
  return deletetodo.statusText;
};
  
// Get Singel Task
export const getSingleTask = async (id: number) => {
  const fetchData = await axios.get(`${backendUrl}/todo/${id}`);
  return fetchData.data;
};


// Update Task
export const UpdateTodo = async (data:  {
  id: number,
  text:string
}) => {
  const update = await axios.put(`${backendUrl}/updatetodo/`, data);
  revalidateTag('task')
  return update.statusText;
};



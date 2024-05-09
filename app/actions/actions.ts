'use server'
import axios from "axios";
import { revalidateTag } from "next/cache";

const backendUrl = "http://127.0.0.1:8080"; // Get All Task

// Post New Task
export const postTask = async (taskData: { text: string }) => {
  const response = await axios.post(`${backendUrl}/todo/`, taskData);
  revalidateTag('task')
  return response.data;


};
    


// Get ALL Task
// const fetchData = await axios.get(`${backendUrl}/todos`);
// return fetchData.data;
export const getTask = async () => {
  try {
    const response = await axios.get(`${backendUrl}/todos`, {
      params: {
        tags: ['task']
      }
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching tasks:", error);
    throw error; // Re-throw the error to be handled by the caller
  }}


// Get Singel Task
export const getSingelTask = async (id: number) => {
  const fetchData = await axios.get(`${backendUrl}/todo${id}`);
  return fetchData.data;
};

  
  


// Update Task
export const UpdateTodo = async (data: any) => {
  const update = await axios.delete(`${backendUrl}/updatetodo/`, data);
  return update.statusText;
};

// Delete Task
export const deleteTodo = async (id: number) => {
  const deletetodo = await axios.delete(`${backendUrl}/deletetodo/${id}`);
  revalidateTag('task')
  return deletetodo.statusText;
};

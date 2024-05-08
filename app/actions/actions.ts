import axios from "axios";

const backendUrl = "http://127.0.0.1:8080"; // Get All Task
// Post New Task
export const postTask = async (data: any) => {
    const userInput = await fetch(`${backendUrl}/todo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return "ok";
  };
  
export const getTask = async () => {
  const fetchData = await axios.get(`${backendUrl}/todos`);
  return fetchData.data;
};

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
  return deletetodo.statusText;
};

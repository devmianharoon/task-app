import axios from 'axios';

const BACKEND_URL:string='http://127.0.0.1:8080'

export const getTask = async () => {
    const fetchData= await axios.get(`${BACKEND_URL}/todos`);
    return fetchData.data;
}

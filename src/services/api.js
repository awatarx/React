import axios from 'axios';
const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT;

const api = {
    getTasks: async () => {
        const response = await axios.get(`http://${apiHost}:${apiPort}/api/tasks/`);
        return response.data.data;
    },

    saveTask: async (formData) => {
        await axios.post(`http://${apiHost}:${apiPort}/api/tasks/`, formData);
    },

    filterTask: async (queryParams) => {
        const response = await axios.get(`http://${apiHost}:${apiPort}/api/tasks/filter`, {
            params: queryParams,
          });
        return response;
    },

    updateCard: async (task) => {
        const response = await axios.patch(`http://${apiHost}:${apiPort}/api/tasks?update=${task._id}`, task);
        return response;
    },

    getTaskFilter: async () => {
        const response = axios.get(`http://${apiHost}:${apiPort}/api/tasks/filter`,{
            params: "",
          });
        return response;
    }
};
 
export default api;

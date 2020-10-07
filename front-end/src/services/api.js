import axios from 'axios';

const api = axios.create({
    mode: 'cors',
    baseURL: 'http://localhost:3001/api'
});

export default api;
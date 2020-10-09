import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.virtualstats.online',
});

export default api;

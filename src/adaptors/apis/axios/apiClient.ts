import axios from 'axios';

const baseURL = process.env.API_URL;

const ApiClient = axios.create({
  baseURL: baseURL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default ApiClient;

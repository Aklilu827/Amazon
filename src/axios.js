import axios from 'axios';

const instance = axios.create({
  baseURL:'http://127.0.0.1:5001/fir-b528c/us-central1/api',
  // THE BACKEND API URL
});

export default instance;
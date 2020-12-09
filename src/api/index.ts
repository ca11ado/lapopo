import axios from 'axios';

const baseURL = `http://${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}`;
console.log(baseURL);

export const apiClient = axios.create({
  baseURL,
});

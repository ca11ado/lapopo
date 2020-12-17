import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = '/';
} else {
  baseURL = `http://${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}`;
}

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

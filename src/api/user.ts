import axios, { AxiosResponse } from 'axios';

export interface User {
  name: string;
}

const handler = (response: AxiosResponse): User => response.data;

/**
 * Get user info from server
 */
export const get = () => axios
  .get('/api/user/')
  .then(handler);

/**
 * Set user name
 */
export const set = (name: string) => axios
  .post('/api/user/', { name })
  .then(handler)
  .catch((): User => ({ name })); // todo mock until LAPOPO-5

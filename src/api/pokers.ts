import axios, { AxiosResponse } from 'axios';

export interface Poker {
  url: string;
}

const handler = (response: AxiosResponse): Array<Poker> => response.data;

/**
 * Get user info from server
 */
export const get = () => axios
  .get('/api/pokers/')
  .then(handler)
  .catch(() => [{ url: '/test1' }, { url: '/test2' }]);

import axios from 'axios';
import { Poker } from '@/api/types';

/**
 * Get user info from server
 */
export const get = () => axios
  .get('/api/pokers/')
  .then(({ data }): Array<Poker> => data)
  .catch(() => [{ url: '/test1' }, { url: '/test2' }]);

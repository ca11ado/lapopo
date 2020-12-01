import { apiClient } from '@/api';
import { User } from '@/api/types';
import { mockedPokersList } from '@/api/poker';

const mockedUser: User = { name: 't0s', pokers: mockedPokersList };

/**
 * Get user info from server
 */
export const get = () => apiClient
  .get('/api/user/')
  // .then(({ data }): User => data);
  .then(({ data }): User => ({ ...mockedUser, ...data }));

/**
 * Set user name
 */
export const set = (name: string) => apiClient
  .post('/api/user/', { name, pokers: [] })
  .then(({ data }): User => data);

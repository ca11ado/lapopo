import { apiClient } from '@/api';
import { User } from '@/api/types';

const mockedPokerData = [
  { name: 'Owner for this 1', hash: 'some-random-string-1', is_owner: true },
  { name: 'Owner for this 2', hash: 'some-random-string-2', is_owner: true },
  { name: 'Participian 1', hash: 'some-random-string-3' },
  { name: 'Participian 2', hash: 'some-random-string-4' },
  { name: 'Participian 3', hash: 'some-random-string-5' },
  { name: 'Participian 4', hash: 'some-random-string-6' },
  { name: 'Participian 5', hash: 'some-random-string-7' },
  { name: 'Participian 6', hash: 'some-random-string-8' },
  { name: 'Participian 7', hash: 'some-random-string-9' },
  { name: 'Participian 8', hash: 'some-random-string-10' },
];
const mockedUser: User = { name: 't0s', pokers: mockedPokerData };

/**
 * Get user info from server
 */
export const get = () => apiClient
  .get('/api/user/')
  .then(({ data }): User => data);

/**
 * Set user name
 */
export const set = (name: string) => apiClient
  .post('/api/user/', { name, pokers: [] })
  .then(({ data }): User => data);

import axios from 'axios';
import { User } from '@/api/types';

const mockedPokerData = [
  // eslint-disable-next-line
  { hash: 'some-random-string-1', is_owner: true },
  // eslint-disable-next-line
  { hash: 'some-random-string-2', is_owner: true },
  { hash: 'some-random-string-3' },
  { hash: 'some-random-string-4' },
  { hash: 'some-random-string-5' },
  { hash: 'some-random-string-6' },
  { hash: 'some-random-string-7' },
  { hash: 'some-random-string-8' },
  { hash: 'some-random-string-9' },
  { hash: 'some-random-string-10' },
];
const mockedUser: User = { name: 't0s', pokers: mockedPokerData };

/**
 * Get user info from server
 */
export const get = () => axios
  .get('/api/user/')
  .then(({ data }): User => data);
  // .catch((): User => mockedUser);

/**
 * Set user name
 */
export const set = (name: string) => axios
  .post('/api/user/', { name, pokers: [] })
  .then(({ data }): User => data)
  .catch((): User => mockedUser); // todo mock until LAPOPO-5

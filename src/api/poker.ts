import axios from 'axios';
import { Poker } from '@/api/types';

const mockedTask1 = {
  title: 'First task name',
  link: 'jira.lamoda.ru/browse/WEB-0000',
  is_active: false,
};

const mockedTask2 = {
  title: 'Second task name',
  link: 'jira.lamoda.ru/browse/WEB-99999',
  is_active: true,
};

const mockedMemberAdmin = {
  name: 'T0s',
  role: 'owner',
};

const mockedMember = {
  name: 'Igoryan',
};

const mockedStoryPoints = [
  { value: '1', id: '#1' },
  { value: '2', id: '#2' },
  { value: '3', id: '#3' },
  { value: '4', id: '#4' },
  { value: '5', id: '#5' },
];

const mockedPoker: Poker = {
  name: 'My first Poker',
  hash: 'some-strange-hash',
  tasks_list: [mockedTask1, mockedTask2],
  story_points: mockedStoryPoints,
  members: [mockedMemberAdmin, mockedMember],
};

/**
 * Get user info from server
 */
export const get = (hash: string) => axios
  .get(`/api/pokers/${hash}`)
  .then(({ data }): Poker => data)
  .catch(() => mockedPoker);

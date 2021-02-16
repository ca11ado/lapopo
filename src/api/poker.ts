import { apiClient } from '@/api';
import flow from 'lodash/fp/flow';
import find from 'lodash/fp/find';
import assign from 'lodash/fp/assign';
import thru from 'lodash/fp/thru';
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

const mockedTask3 = {
  title: 'Third task name',
  link: 'jira.lamoda.ru/browse/WEB-333333',
  is_active: false,
};

const mockedTask4 = {
  title: 'Fourth task name',
  link: 'jira.lamoda.ru/browse/WEB-1111',
  is_active: false,
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
  { value: '3', id: '#3' },
  { value: '5', id: '#5' },
  { value: '8', id: '#8' },
  { value: '13', id: '#13' },
  { value: '&#9749;', id: '#coffee' },
  { value: '?', id: '#???' },
];

const mockedPoker: Poker = {
  name: 'My first Poker',
  hash: 'some-strange-hash-1',
  tasks_list: [mockedTask1, mockedTask2, mockedTask3, mockedTask4],
  story_points: mockedStoryPoints,
  members: [mockedMemberAdmin, mockedMember],
};

export const mockedPokersList = [
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

/**
 * Get user info from server
 */
export const get = (hash: string) => apiClient
  .get(`/api/pokers/${hash}`)
  .then(({ data }): Poker => data)
  .catch(() => flow(
    find(({ hash: mockedHash }) => hash === mockedHash),
    thru((mockedPokerListItem) => {
      if (!mockedPokerListItem) throw Error('Nothing found');
      return mockedPoker;
    }),
  )(mockedPokersList));

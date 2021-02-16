import { User } from '@/api/types';

const user: User = {
  name: '',
  pokers: [],
};

export const state = {
  user,
  poker: {
  },
};

export type State = typeof state;

/*
import { User } from '@/api/user';

export interface State {
  user: User;
}

export const state = {
  user: {
    name: '',
  },
};
*/

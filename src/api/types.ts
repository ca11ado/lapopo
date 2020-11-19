import { AxiosResponse } from 'axios';

export interface Poker {
  hash: string;
  // eslint-disable-next-line
  is_owner?: boolean;
}

export interface User {
  name: string;
  pokers?: Array<Poker>;
}

export const apiUserResonse = (response: AxiosResponse): User => response.data;

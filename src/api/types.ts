/* eslint-disable camelcase */
import { AxiosResponse } from 'axios';

export interface User {
  name: string;
  role?: string;
  pokers?: Array<PokerListItem>;
}

export interface TaskItem {
  title: string;
  link: string;
  is_active: boolean;
}

export interface StoryPoint {
  id: string;
  value: string;
}

export interface PokerListItem {
  hash: string;
  name: string;
  is_owner?: boolean;
}

export interface Poker extends PokerListItem {
  tasks_list: Array<TaskItem>;
  story_points: Array<StoryPoint>;
  members: Array<User>;
}

export const apiUserResonse = (response: AxiosResponse): User => response.data;

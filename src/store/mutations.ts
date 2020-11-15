import {
  MutationTree,
} from 'vuex';
import { State } from '@/store/state';
import { MutationTypes } from '@/store/mutation-types';
import { User } from '@/api/user';

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: User): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER](state, user) {
    state.user = user;
  },
};

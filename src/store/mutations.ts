import {
  MutationTree,
} from 'vuex';
import { State } from '@/store/state';
import { MutationTypes } from '@/store/mutation-types';
import { User, Poker } from '@/api/types';

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: User): void;
  [MutationTypes.SET_POKER](state: S, payload: Poker): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER](state, user) {
    state.user = user;
  },
  [MutationTypes.SET_POKER](state, poker) {
    state.poker = poker;
  },
};

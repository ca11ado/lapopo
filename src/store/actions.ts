import {
  ActionTree,
  ActionContext,
} from 'vuex';
import { State } from '@/store/state';
import { Mutations } from '@/store/mutations';
import { ActionTypes } from '@/store/action-types';
import { MutationTypes } from '@/store/mutation-types';
import { set as setUser, get as getUser } from '@/api/user';
import { get as getPoker } from '@/api/poker';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_USER](
    { commit }: AugmentedActionContext,
  ): void;
  [ActionTypes.GET_POKER](
    { commit }: AugmentedActionContext,
    hash: string,
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_USER]({ commit }) {
    const user = await getUser();
    commit(MutationTypes.SET_USER, user);
  },
  async [ActionTypes.SET_USER]({ commit }, userName) {
    try {
      const user = await setUser(userName);
      commit(MutationTypes.SET_USER, user);
    } catch (e) {
      console.log(`GLOBAL ERROR [${ActionTypes.SET_USER}]: ${e}`);
    }
  },
  async [ActionTypes.GET_POKER]({ commit }, hash) {
    try {
      const poker = await getPoker(hash);
      commit(MutationTypes.SET_POKER, poker);
    } catch (e) {
      console.log(`GLOBAL ERROR [${ActionTypes.GET_POKER}]: ${e}`);
    }
  },
};

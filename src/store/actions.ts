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
  async [ActionTypes.GET_USER]({ commit, state }) {
    if (state.user && state.user.name) return;

    try {
      const user = await getUser();
      console.log('%c custom log', 'color:red;', 'action user', user);
      commit(MutationTypes.SET_USER, user);
    } catch (e) {
      console.log(`GLOBAL ERROR [${ActionTypes.GET_POKER}]: ${e}`);
    }
  },
  async [ActionTypes.SET_USER]({ commit }, userName) {
    try {
      await setUser(userName);
      const user = await getUser(); // todo remove, when backend will return user in "setUser"
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
      throw Error('Page does not exists');
    }
  },
};

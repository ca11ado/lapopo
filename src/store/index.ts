import { createStore } from 'vuex';
import { state } from '@/store/state';
import { mutations } from '@/store/mutations';
import { actions } from '@/store/actions';

/**
  * https://dev.to/3vilarthas/vuex-typescript-m4j
  */
export default createStore({
  state,
  mutations,
  actions,
  modules: {
  },
});

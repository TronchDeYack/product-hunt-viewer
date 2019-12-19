import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = {
  day: 0,
};

export const mutations = {
  setDay(state, newDay) {
    state.day = newDay;
  },
};

export default new Vuex.Store({
  state: initialState,
  mutations,
});

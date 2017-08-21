import * as types from '../types.js';
const state = {
  isLoading: false
};
const actions = {
  [types.UPDATE_LOADING_STATUS] ({commit}, payload) {
    commit("UPDATE_LOADING_STATUS", payload.isLoading)
  }
};
const getters = {
  [types.GET_LOADING_STATUS](state) {
    return state.isLoading;
  },
};
const mutations = {
  [types.UPDATE_LOADING_STATUS] (state, payload) {
    state.isLoading = payload.isLoading
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}

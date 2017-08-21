import * as types from '../types.js';
const state = {
  id: '',
  show: false,
  head_text: ""
};
const actions = {
  [types.SET_MSG]({commit}, id) {
    commit("SET_MSG", id)
  },
  [types.IS_SHOW]({commit}, show) {
    commit("IS_SHOW", show)
  },
  [types.SET_HEAD]({commit}, head_text) {
    commit("SET_HEAD", head_text)
  }
};
const getters = {
  [types.GET_MSG](state) {
    return state.id;
  },
  [types.GET_SHOW](state) {
    return state.show;
  },
  [types.GET_HEAD](state) {
    return state.head_text;
  }
};
const mutations = {
  [types.SET_MSG](state, id) {
    state.id = id
  },
  [types.IS_SHOW](state, show) {
    state.show = show
  },
  [types.SET_HEAD](state, head_text) {
    state.head_text = head_text
  }
};
export default {
  state,
  actions,
  getters,
  mutations
}

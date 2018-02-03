import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
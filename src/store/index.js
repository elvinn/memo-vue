import Vue from 'vue'
import Vuex from 'vuex'
import { STORAGE_KEY } from './const'
import mutations from './mutations'
import actions from './actions'
import { localStoragePlugin } from './plugins'


Vue.use(Vuex)


const store = new Vuex.Store({
  state() {
    let memos = []
    try {
      memos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch (e) {
      console.error('Get memos storage failed', e)
    }

    return { memos }
  },
  actions,
  mutations,
  plugins: [localStoragePlugin]
})

export default store
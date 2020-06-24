import { v4 as uuidv4 } from 'uuid';
import * as CONST from './const'


const actions = {
  addMemo({ commit }, text) {
    commit(CONST.ADD_MEMO, {
      text,
      id: uuidv4(),
      isDone: false,
    })
  },

  deleteMemo({ commit }, data) {
    commit(CONST.DELETE_MEMO, data)
  },

  toggleMemo({ commit }, { id, isDone }) {
    commit(CONST.EDIT_MEMO, {
      id,
      isDone: !isDone,
    })
  },

  editMemo({ commit }, { id, text }) {
    commit(CONST.EDIT_MEMO, {
      id,
      text,
    })
  },

  clearDoneMemo({ commit, state: { memos = [] } }) {
    for (let i = memos.length - 1; i >= 0; i--) {
      const memo = memos[i]

      if (memo.isDone) {
        commit(CONST.DELETE_MEMO, memo)
      }
    }
  },
    
  clearAllMemo({ commit, state: { memos = [] } }) {
    for (let i = memos.length - 1; i >= 0; i--) {
      commit(CONST.DELETE_MEMO, memos[i])
    }
  },
}

export default actions

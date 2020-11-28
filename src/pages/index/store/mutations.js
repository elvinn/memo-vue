import * as CONST from './const'
import * as server from './server'

const findIndex = (memos = [], id) => {
  if (!id) {
    return -1
  }

  const index = memos.findIndex((item) => item.id === id)

  return index
}

const mutations = {
  [CONST.ADD_MEMO] (state, data) {
    const newMemo = {
      ...data,
      ts: Date.now(),
    }

    state.memos.unshift(newMemo)
    server.memoStore(CONST.ADD_MEMO, newMemo)
  },

  [CONST.DELETE_MEMO] (state, { id }) {
    const { memos = [] } = state
    const index = findIndex(memos, id)

    if (index === -1) {
      throw new Error(`Not found ${id}`)
    }

    memos.splice(index, 1)
    server.memoStore(CONST.DELETE_MEMO, { id })
  },

  [CONST.EDIT_MEMO] (state, data) {
    const { memos = [] } = state
    const { id } = data
    const index = findIndex(memos, id)
    if (index === -1) {
      throw new Error(`Not found ${id}`)
    }

    Object.assign(memos[index], data)
    server.memoStore(CONST.EDIT_MEMO, data)
  }
}

export default mutations

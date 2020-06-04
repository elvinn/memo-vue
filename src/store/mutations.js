import * as CONST from './const'

const findIndex = (memos = [], id) => {
  const index = memos.findIndex((item) => item.id === id)

  return index
}

const mutations = {
  [CONST.ADD_MEMO] (state, data) {
    state.memos.unshift({
      ...data,
      ts: Date.now(),
    })
  },

  [CONST.DELETE_MEMO] (state, { id }) {
    const { memos = [] } = state
    const index = findIndex(memos, id)

    if (index === -1) {
      throw new Error(`Not found ${id}`)
    }

    memos.splice(index, 1)
  },

  [CONST.EDIT_MEMO] (state, data) {
    const { memos = [] } = state
    const { id } = data
    const index = findIndex(memos, id)
    if (index === -1) {
      throw new Error(`Not found ${id}`)
    }

    Object.assign(memos[index], data)
  }
}

export default mutations

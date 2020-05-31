import { v4 as uuidv4 } from 'uuid';

const mutations = {
  addMemo (state, content) {
    state.memos.push({
      id: uuidv4(),
      isDone: false,
      isEditable: false,
      content,
      ts: Date.now(),
    })
  },

  removeMemo (state, { id }) {
    const { memos = [] } = state
    const index = memos.findIndex((item) => item.id = id)
    if (index === -1) {
      throw new Error(`Not found ${id}`)
    }

    memos.splice(index, 1)
  },

  editMemo (state, { content, id} )
}

export default mutations
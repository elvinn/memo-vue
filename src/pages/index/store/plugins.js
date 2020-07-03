import { STORAGE_KEY } from './const'
const localStoragePlugin = (store) => {
  store.subscribe((mutation, { memos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memos))
  })
}

export {
  localStoragePlugin
}
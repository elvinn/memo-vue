const MEMO_STORAGE_KEY = 'MEMO_STORAGE_KEY'

function saveMemo(memo) {
  localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(memo))
}

function getMemo() {
  const val = localStorage.getItem(MEMO_STORAGE_KEY)
  if (!val) {
    return
  }

  try {
    return JSON.parse(val)
  } catch(e) {
    return 
  }
}

export default {
  saveMemo,
  getMemo,
}

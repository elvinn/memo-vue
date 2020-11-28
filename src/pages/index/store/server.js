import * as cloudBase from '../../../tools/tcb'
import { isCustomLogin } from '../../../tools/login'

async function memoStore(action, state) {
  if (!await isCustomLogin()) {
    return
  }

  await cloudBase.callFunction({
    name: 'memo-store',
    data: {
      action,
      state,
    }
  })
}

export {
  memoStore,
}
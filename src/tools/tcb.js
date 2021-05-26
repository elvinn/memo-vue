// 腾讯云 TCB 的一些接口封装
import tcb from '@cloudbase/js-sdk';

const app = tcb.init({ env: 'elvinn-1aa07a' })
const auth = app.auth({
  persistence: 'local',
})

signInAnonymously()

async function signInAnonymously() {
  if (!auth.hasLoginState()) {
    auth.anonymousAuthProvider().signIn()
  }
}

async function signOut() {
  return auth.signOut()
}

async function getUserInfo() {
  return auth.currentUser
}

async function updateUserInfo(userInfo) {
  const user = auth.currentUser
  if (!user) {
    throw new Error('未获取当前用户')
  }

  return user.update(userInfo)
}

async function callFunction(options) {
  console.log('callFunction', options)
  try {
    const {
      requestId,
      result = {},
    } = await app.callFunction(options)
    console.log('callFunction result', requestId, result)
    return { requestId, ...result }
  } catch (e) {
    console.error('callFunction error', e)
    return { ret: -999, retMesg: '云函数请求失败' }
  }
}

async function loginByTicket(ticket) {
  if (!ticket) {
    return
  }

  return auth.signInWithTicket(ticket)
}

function onLoginStateChanged(func = (loginState) => console.log('loginState:', loginState)) {
  auth.onLoginStateChanged(func)
}


export {
  signInAnonymously,
  signOut,
  getUserInfo,
  updateUserInfo,
  callFunction,
  loginByTicket,
  onLoginStateChanged,
}

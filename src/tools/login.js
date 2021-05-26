// 对于腾讯云 TCB 登录接口的封装
import * as cloudBase from './tcb'

function jumpGithub() {
  window.open('https://github.com/login/oauth/authorize?client_id=c6ce12053e8fa1513f98')
}

async function getOauthInfo({
  from,
  code,
}) {
  const {
    ret,
    data: {
      ticket,
      nickName,
      avatarUal,
    } = {},
  } = await cloudBase.callFunction({
    name: 'oauth',
    data: {
      type: from,
      code,
    }
  })

  if (ret) {
    return
  }

  return {
    ticket,
    nickName,
    avatarUal,
  }
}

async function signIn({
  from,
  code,
}) {
  const oauthInfo = await this.getOauthInfo({ from, code })
  if (!oauthInfo) {
    throw new Error('登陆失败')
  }

  await cloudBase.loginByTicket(oauthInfo.ticket)

  return oauthInfo
}

async function signOut() {
  return cloudBase.signOut()
}

async function isCustomLogin() {
  const { loginType } = await cloudBase.getUserInfo()
  return loginType === 'CUSTOM'
}

export {
  jumpGithub,
  getOauthInfo,
  signIn,
  signOut,
  isCustomLogin,
};
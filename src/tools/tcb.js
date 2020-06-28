import tcb from 'tcb-js-sdk';

class CloudBase {
  constructor() {
    this.app = tcb.init({ env: 'elvinn-1aa07a' })
    this.auth = this.app.auth({
      persistence: 'local',
    })

    this.signInAnonymously()
  }

  async signOut() {
    return this.auth.signOut()
  }

  async getUserInfo() {
    window.x = this.auth.currentUser
    return this.auth.currentUser
  }

  async updateUserInfo(userInfo) {
    const user = this.auth.currentUser
    if (!user) {
      throw new Error('未获取当前用户')
    }
    
    return user.update(userInfo)
  }

  async signInAnonymously() {
    if (!this.auth.hasLoginState()) {
      this.auth.signInAnonymously()
    }
  }

  async callFunction(options) {
    console.log('callFunction', options)
    try {
      const {
        requestId,
        result = {},
      } = await this.app.callFunction(options)
      console.log('callFunction result', requestId, result)
      return { requestId, ...result}
    } catch (e) {
      console.error('callFunction error', e)
      return { ret: -999, retMesg: '云函数请求失败'}
    }
  }

  async loginByTicket(ticket) {
    if (!ticket) {
      return
    }

    return this.auth.signInWithTicket(ticket)
  }

  onLoginStateChanged(func = (loginState) => console.log('loginState:', loginState)) {
    this.auth.onLoginStateChanged(func)
  }
}

const cloudBase = new CloudBase()

export default cloudBase

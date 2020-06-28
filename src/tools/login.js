import cloudBase from './tcb'

class Login {
  constructor() {
    this.clientId = 'c6ce12053e8fa1513f98'
  }

  jumpGithub() {
    window.open(`https://github.com/login/oauth/authorize?client_id=${this.clientId}`)
  }

  async getOauthInfo({
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

  async login({
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

  async signOut() {
    return cloudBase.signOut()
  }
}

const login = new Login();

export default login;
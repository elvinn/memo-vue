class Login {
  constructor() {
    this.clientId = 'c6ce12053e8fa1513f98'
    this.redirectUri = 'https://elvinn.cn/memo-vue/auoth'
  }

  jumpGithub() {
    window.open(`https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirct_uri=${this.redirectUri}`)
  }
}

const login = new Login();

export default login;
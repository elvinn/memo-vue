class Login {
  constructor() {
    this.clientId = 'c6ce12053e8fa1513f98'
  }

  jumpGithub() {
    window.open(`https://github.com/login/oauth/authorize?client_id=${this.clientId}`)
  }

  login({
    from,
    code,
  }) {
    switch (from) {
      case 'github':
        return this.loginFromGithub(code);
      default:
        return -1;
    }
  } 

  loginFromGithub(code) {
    console.log('code', code);
    return 0;
  }
}

const login = new Login();

export default login;
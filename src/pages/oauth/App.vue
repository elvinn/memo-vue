<template>
  <div id="app">
    <div v-if="loginState === LOGIN_STATE.LOADING">正在登陆中...</div>
    <div v-else-if="loginState === LOGIN_STATE.FAILED">登录失败，请稍后重试</div>
    <div v-else-if="loginState === LOGIN_STATE.SUCCESS">登录成功</div>

    <div v-if="leftSeconds >= 0">{{leftSeconds}} 秒后窗口将自动关闭</div>
  </div>
</template>

<script>
import loginUtil from '../../tools/login'
import cloudBase from '../../tools/tcb'
import { refreshAll } from '../../tools/globalEvent'

const LOGIN_STATE = {
  LOADING: 0,
  FAILED: -1,
  SUCCESS: 1,
}

export default {
  name: 'app',
  data() {
    return {
      loginState: LOGIN_STATE.LOADING,
      leftSeconds: -1,
    }
  },
  created() {
    this.login()
    this.LOGIN_STATE = LOGIN_STATE
  },
  methods: {
    async login() {
      const searchParams = new URLSearchParams(location.search)
      const queryObj = {}
      for (const [key, value] of searchParams) {
        queryObj[key] = value
      }

      try {
        const aouthInfo = await loginUtil.login(queryObj)
        this.loginState = LOGIN_STATE.SUCCESS
        await this.updateUserInfo(aouthInfo)
        refreshAll()
      } catch (e) {
        this.loginState = LOGIN_STATE.FAILED
        console.error('登录失败', e)
      } finally {
        this.countDown()
      }
    },

    async updateUserInfo({nickName, avatarUrl}) {
      const preUserInfo = await cloudBase.getUserInfo()
      if (preUserInfo.nickName) {
        // 已通过第三方登录的用户，无需初始化用户信息
        return
      }

      await cloudBase.updateUserInfo({
        nickName,
        avatarUrl,
      })
    },

    countDown() {
      if (this.leftSeconds < 0) {
        this.leftSeconds = 5
      }

      if (this.leftSeconds > 0) {
        this.leftSeconds -= 1
        setTimeout(this.countDown, 1000)
        return
      }

      if (this.leftSeconds === 0) {
        window.close()
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 30px;
}


</style>

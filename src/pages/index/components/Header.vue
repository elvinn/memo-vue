<template>
  <header>
    <h1>备忘录</h1>
    <div class="operation">
      <el-dropdown class="operation-item">
        <span class="dropdown-link">
          操作菜单
        </span>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click.native="clearDoneMemo">清除已选</el-dropdown-item>
            <el-dropdown-item @click.native="clearAllMemo">清除全部</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="operation-item">
        <span class="dropdown-link">
          {{ hasLogin ? (nickName || '已登录') : '登录' }}
        </span>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-if="hasLogin" @click.native="signOut">退出登录</el-dropdown-item>
            <el-dropdown-item v-else @click.native="handleGithubLogin">Github 登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
import login from '../../../tools/login'
import cloudBase from '../../../tools/tcb'

export default {
  name: 'Header',
  data() {
    return {
      hasLogin: false,
      nickName: '',
    }
  },
  created() {
    cloudBase.onLoginStateChanged(this.onLoginStateChanged)
  },
  methods: {
    ...mapActions([
      'clearDoneMemo',
      'clearAllMemo',
    ]),
    handleGithubLogin() {
      login.jumpGithub()
    },
    async signOut() {
      await login.signOut()
      location.reload()
    },
    async onLoginStateChanged(loginState) {
      if (!loginState || typeof loginState !== 'object') {
        return;
      }

      this.hasLogin = loginState.isCustomAuth

      const userInfo = await cloudBase.getUserInfo()
      this.nickName = userInfo.nickName
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #606266;
  }

  .operation {
    display: flex;
    align-items: center;

    &-item:not(:first-child) {
      margin-left: 20px;
    }
  }

  .dropdown-link {
    cursor: pointer;
    &:hover {
      color: #409EFF;
    }
  }
</style>
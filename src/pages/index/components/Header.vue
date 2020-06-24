<template>
  <header>
    <h1>备忘录</h1>
    <div class="operation">
      <el-dropdown class="operation-item">
        <span class="dropdown-link">
          操作菜单
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="clearDoneMemo">清除已选</el-dropdown-item>
          <el-dropdown-item @click.native="clearAllMemo">清除全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="operation-item">
        <span class="dropdown-link">
          登录
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handleGithubLogin">Github 登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
import login from '../../../tools/login'

export default {
  name: 'Header',
  methods: {
    ...mapActions([
      'clearDoneMemo',
      'clearAllMemo',
    ]),
    handleGithubLogin() {
      login.jumpGithub()
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